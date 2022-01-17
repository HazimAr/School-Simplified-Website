import axios from "axios";
import {
	AllSubjects,
	AnswerPart,
	ArtData,
	Author,
	BlogListing,
	BlogPage,
	Class,
	FileObj,
	GovernanceDocument,
	GovernanceSection,
	JobPosting,
	LinkButtonProps,
	NotesProps,
	QAPair,
	QASection,
	ScholarshipProps,
	SocialMedia,
	Subject,
	Unit,
} from "types";
import { getFile } from "util/parse_notion";

export const notionConfig = {
	headers: {
		Authorization: "Bearer " + process.env.NOTION_API_KEY,
		"Notion-Version": "2021-08-16",
	},
};

export async function getAllSubjects(): Promise<AllSubjects> {
	// fetch from main database
	const { data } = await axios.post(
		"https://api.notion.com/v1/databases/b2009721bf4d47aa8fa99a6528db7843/query",
		{},
		notionConfig
	);

	// map the Notion page objects into subject-returning promises
	const subjectsPromises: Promise<Subject>[] = data.results.map(
		async (page: any): Promise<Subject> => {
			// get all classes from this subject subpage
			const content = await getSubjectData(page.id);
			// get the title (help)
			const title: string =
				page.properties.Name.title?.[0]?.plain_text ?? null;
			return { title, content };
		}
	);

	// convert all promises into an array of subjects, put into object
	return {
		subjects: await Promise.all(subjectsPromises),
	};
}

async function getSubjectData(subjectID: string): Promise<Class[]> {
	// fetch children from given page as a block
	const { data } = await axios.get(
		`https://api.notion.com/v1/blocks/${subjectID}/children`,
		notionConfig
	);

	// maps each child page into a class-returning promise
	const classPromises: Promise<Class>[] = data.results
		.filter((page: any) => {
			// validates that this is a child page
			if (page?.object !== "block" || page?.type !== "child_page") {
				console.warn(
					`There is a ${page?.object} object of type ${page?.type} in the subject ${subjectID}\n(${page.id})`
				);
				return false;
			}

			return true;
		})
		.map(async (page: any): Promise<Class> => getClassData(page.id));

	// return results
	return await Promise.all(classPromises);
}

async function getClassData(classID: string): Promise<Class> {
	// fetch children from given page as a block
	const { data } = await axios.get(
		`https://api.notion.com/v1/blocks/${classID}/children`,
		notionConfig
	);

	// go through page data and construct all units
	const output: Unit[] = [];
	let title: string = null;
	let notes: NotesProps[] = [];
	let note: NotesProps = null;
	for (const block of data.results) {
		// validate that this object is a valid block object
		if (block?.object !== "block" || !block?.type) {
			console.log(
				`Mystery ${
					block?.type || block?.object
				} in ${classID}/${title}\n(${block.id})`
			);
			continue;
		}

		if (block.type.startsWith("heading")) {
			// for headings, end the previous (if any) unit
			if (title) {
				output.push({ title, content: notes });
				notes = [];
			}

			// start the next one
			// read unit name
			const newTitle: string = block[block.type].text?.[0]?.plain_text;
			if (newTitle) {
				title = newTitle;
			} else {
				console.log(
					`No-text header under ${classID}/${title}\n(${block.id})`
				);
			}
		} else if (block.type === "paragraph") {
			// for paragraphs, create a new note
			// get note name from first block
			const name: string = block.paragraph.text?.[0]?.plain_text;
			if (!name) {
				// invalid data, skip to next block
				console.warn(
					`Notes name ${classID}/${title}/${block.id} is malformed!`
				);
				continue;
			}

			// validate there is no previous note
			if (note) {
				notes.push(note);
				console.log(
					`Data for ${classID}/${title}/${name} is incomplete!`
				);
			}
			// create new note
			note = { title: name, file: null };
		} else if (block.type === "file") {
			// for files, get file object
			const file: FileObj = getFile(block.file);

			// make sure note object exists
			if (!note) {
				console.warn(
					`Lone file under ${classID}/${title} was not included\n(${block.id})`
				);
				continue;
			}

			// add file object to note
			note.file = file;

			// add the note in
			notes.push(note);
			note = null;
		} else {
			console.log(
				`Extra ${block.type} in ${classID}/${title}\n(${block.id})`
			);
		}
	}

	// clean up last unit
	output.push({ title, content: notes });

	// get other page data (e.g. title, icon)
	const { data: pageData } = await axios.get(
		`https://api.notion.com/v1/pages/${classID}`,
		notionConfig
	);
	// console.log(pageData);
	const pageTitle = pageData.properties.title.title?.[0]?.plain_text ?? null;

	// convert all promises into an array of classes
	return { content: output, title: pageTitle, icon: pageData.icon };
}

export async function getArtInfo(): Promise<ArtData> {
	const { data: artPageData } = await axios.get(
		`https://api.notion.com/v1/blocks/fcfaa8ea3a2041cf91ec958db799026e/children`,
		notionConfig
	);

	let image =
			"https://www.thewrap.com/wp-content/uploads/2016/08/Rick-Astley-618x400.jpg", // default image
		description = "It's Rick Astley", // default description
		monthlyPrompt = "Legend of Internet History", // default monthly prompt
		name = "Rick Astley", // default name
		socialMedia: SocialMedia[] = [];
	//@ts-ignore
	for (const block of artPageData.results) {
		if (block.type == "paragraph" && block.paragraph.text.length) {
			const firstText: string = block.paragraph.text[0].plain_text;
			if (firstText?.length) {
				const tokens = firstText.split("\n");
				switch (tokens[0].toLowerCase()) {
					case "image":
						if (tokens[1]?.length) {
							image = tokens[1];
							break;
						} else if (block.paragraph.text[1]?.href) {
							image = block.paragraph.text[1]?.href;
							break;
						}
						console.warn(
							`${block.id} [Image] in the art info page is malformed!`
						);
						break;

					case "description":
						if (tokens[1]?.length) {
							description = tokens[1];
						} else
							console.warn(
								`${block.id} [Description] in the art info page is malformed!`
							);
						break;

					case "name":
						if (tokens[1]?.length) {
							name = tokens[1];
						} else
							console.warn(
								`${block.id} [Name] in the art info page is malformed!`
							);
						break;

					case "monthly prompt":
						if (tokens[1]?.length) {
							monthlyPrompt = tokens[1];
						} else
							console.warn(
								`${block.id} [Monthly Prompt] in the art info page is malformed!`
							);
						break;

					case "social media":
						let malformed = false,
							paragraphIdx = 0;
						if (!firstText.includes("\n")) {
							console.warn("Malformed I");
							malformed = true;
						} else {
							for (
								let token = firstText.substring(
									firstText.indexOf("\n") + 1
								);
								!malformed && token;

							) {
								// console.log(`token: ${token}`);

								if (!token?.length) {
									console.warn(
										`Malformed II -${token}- ${paragraphIdx}`
									);
									malformed = true;
									break;
								}

								if (token.includes("\n")) {
									// this entry is done
									const miniToken = token.substring(
											0,
											token.indexOf("\n")
										),
										splitIdx = miniToken.indexOf(": ");
									if (splitIdx === -1) {
										console.warn(
											`Malformed III - "${token}" - ${miniToken} - ${paragraphIdx}`
										);
										malformed = true;
										break;
									}
									socialMedia.push({
										media: miniToken.substring(0, splitIdx),
										tag: miniToken
											.substring(splitIdx + 2)
											.trim(),
									});

									// there's another entry on the same line
									token = token.substring(
										token.indexOf("\n") + 1
									);
								} else {
									// no more entries on this line, but check for link first
									// block exists, cool
									const possibleHref =
										block.paragraph.text[++paragraphIdx]
											?.href;
									if (possibleHref) {
										// link does exist, add it in
										const splitIdx = token.indexOf(": ");
										if (splitIdx === -1) {
											console.warn("Malformed IV");
											malformed = true;
											break;
										}
										socialMedia.push({
											media: token.substring(0, splitIdx),
											tag: token
												.substring(splitIdx + 2)
												.trim(),
											link: block.paragraph.text[
												paragraphIdx
											].href.trim(),
										});

										// token is now the next paragraph
										token =
											block.paragraph.text[++paragraphIdx]
												?.plain_text;
										if (token?.startsWith("\n"))
											token = token.substring(1);
									} else {
										// link does not exist, jump ship
										// console.log(token);
										const splitIdx = token.indexOf(": ");
										if (splitIdx === -1) {
											console.warn("Malformed V");
											malformed = true;
											break;
										}
										socialMedia.push({
											media: token.substring(0, splitIdx),
											tag: token
												.substring(splitIdx + 2)
												.trim(),
										});

										token =
											block.paragraph.text[paragraphIdx]
												?.plain_text;
										if (token?.startsWith("\n"))
											token = token.substring(1);
									}
								}
							}
						}

						if (malformed) {
							console.warn(
								`${block.id} [Social Media] in the art info page is malformed!`
							);
						}
						break;
				}
			} else {
				console.warn(`${block.id} in the art info page is malformed!`);
			}
		} // else probably trolling
	}

	return {
		image,
		description,
		monthlyPrompt,
		name,
		socialMedia,
	};
}

export async function getFaqInfo(): Promise<QASection[]> {
	const { data } = await axios.get(
		`https://api.notion.com/v1/blocks/bc5b51a1b7674a1da9fd09b559844881/children`,
		notionConfig
	);

	let output: QASection[] = [],
		title: string = "",
		list: QAPair[] = [];
	// console.log(data);
	//@ts-ignore
	for (const block of data.results) {
		if (block.type.startsWith("heading")) {
			const headingText = block[block.type].text;
			if (headingText?.length && headingText[0].plain_text.length) {
				// offload previous data
				if (title.length) {
					output.push({ title, list });
				}

				title = headingText[0].plain_text;
				list = [];
			} else console.warn(`ID ${block.id} [Q&A] is malformed!`);
		} else if (block.type === "paragraph") {
			let question: string = "";
			let answers: AnswerPart[] = [];
			const textBlocks = block.paragraph.text;
			if (!textBlocks?.length) {
				console.warn(`ID ${block.id} [Q&A] is malformed!`);
				continue;
			}

			const questionText = textBlocks[0];
			if (questionText.plain_text && questionText.annotations?.bold) {
				question = questionText.plain_text;
			} else {
				console.warn(`ID ${block.id} [Q&A] is malformed!`);
				continue;
			}

			if (textBlocks.length < 1) {
				console.warn(`ID ${block.id} [Q&A] is malformed!`);
				continue;
			} else {
				for (let i = 1; i < textBlocks.length; i++) {
					if (textBlocks[i].plain_text?.length) {
						if (textBlocks[i].href) {
							answers.push({
								text: textBlocks[i].plain_text,
								link: textBlocks[i].href,
							});
						} else {
							// @ts-expect-error no link
							answers.push({ text: textBlocks[i].plain_text });
						}
					}
				}
			}

			if (question.length && answers.length) {
				list.push({
					question,
					answer: answers,
				});
			} else console.warn(`ID ${block.id} [Q&A] is malformed!`);
		}
	}

	if (title.length) {
		output.push({ title, list });
	}
	return output;
}

export async function getGovernanceData(): Promise<GovernanceSection[]> {
	const { data } = await axios.get(
		`https://api.notion.com/v1/blocks/ecc51a4ba7bd451781ec423c231ff53e/children`,
		notionConfig
	);

	let output: GovernanceSection[] = [],
		sectionTitle: string = "",
		documents: GovernanceDocument[] = [];
	//@ts-ignore
	for (const block of data.results) {
		if (block.type.startsWith("heading")) {
			const headingText = block[block.type].text;
			if (headingText?.length && headingText[0].plain_text.length) {
				// offload previous data
				if (sectionTitle.length) {
					output.push({ title: sectionTitle, docs: documents });
				}

				sectionTitle = headingText[0].plain_text;
				documents = [];
			} else
				console.warn(`ID ${block.id} [Governance Data] is malformed!`);
		} else if (block.type === "paragraph") {
			let title: string = "",
				href: string = "";
			for (const text of block.paragraph.text) {
				if (text.href) {
					href = text.href;
					if (title.length) break;
				} else {
					title = text.plain_text;
					if (href.length) break;
				}
			}
			if (title.length && href.length) {
				documents.push({ title, href });
			} else
				console.warn(`ID ${block.id} [Governance Data] is malformed!`);
		} // else wtf are you doing here bro (reading this owo)
	}

	// push last one
	if (sectionTitle.length) {
		output.push({ title: sectionTitle, docs: documents });
	}

	return output;
}

// If we end up using multiple databases this method should work with every single one
function parseAppropriateData(
	entry: any,
	property: string,
	datatype: string
): any {
	if (entry.properties[property]) {
		switch (datatype) {
			case "title":
				if (entry.properties[property].title.length > 0)
					return entry.properties[property].title[0].plain_text;
				return "";
			case "url":
				return entry.properties[property].url;
			case "rich_text":
				if (entry.properties[property].rich_text.length > 0)
					return entry.properties[property].rich_text[0].plain_text;
				return "";
			case "multi_select":
				return entry.properties[property].multi_select.map(
					(prop) => prop.name
				);
			default:
				console.warn(
					`ID ${entry.id} [${datatype}] is an invalid datatype!`
				);
				return "";
		}
	} else {
		console.warn(`ID ${entry.id} [${property}] is malformed!`);
		if (datatype === "multi_select") return [];
		return "";
	}
}

// https://marbled-caper-ac7.notion.site/29d7d0141ee84c4d973035b24ac82a7c?v=d3d383a52e9b43448ccad99eb06f4b38
export async function getScholarshipData(): Promise<ScholarshipProps[]> {
	const { data } = await axios.post(
		`https://api.notion.com/v1/databases/29d7d0141ee84c4d973035b24ac82a7c/query`,
		{},
		notionConfig
	);

	let output: ScholarshipProps[] = [];

	// for each database entry
	//@ts-ignore
	for (const entry of data.results) {
		// for each category in the entry
		output.push({
			title: parseAppropriateData(entry, "Name", "title"),
			link: parseAppropriateData(entry, "Link", "url"),
			value: parseAppropriateData(entry, "Value", "rich_text"),
			international_or_domestic: parseAppropriateData(
				entry,
				"International or Domestic",
				"multi_select"
			),
			state: parseAppropriateData(entry, "State", "multi_select"),
			eligible_grades: parseAppropriateData(
				entry,
				"Eligible Grades",
				"multi_select"
			),
			open_date: parseAppropriateData(entry, "Open Date", "rich_text"),
			closing_date: parseAppropriateData(
				entry,
				"Closing Date",
				"rich_text"
			),
			notes: parseAppropriateData(
				entry,
				"Additional Things to Note",
				"rich_text"
			),
		});
	}

	return output;
}

export async function getBlogListing(): Promise<BlogListing[]> {
	return axios
		.post(
			"https://api.notion.com/v1/databases/79d546abf96847c6ab3cd8cffe002c39/query",
			{},
			notionConfig
		)
		.then(({ data }: any) => {
			// console.log("Inside 'then'");
			const results = data.results;
			return results.map((result: any): BlogListing => {
				const authorObjects: any[] = result.properties.Author?.people,
					titleText = result.properties.Name?.title,
					linkText = result.properties.Link?.rich_text,
					category = result.properties.Category?.select.name ?? null,
					icon = result.properties.Icon?.url ?? null;

				let title: string;
				if (titleText?.length) {
					title = "";
					for (const titleSegment of titleText) {
						title += titleSegment.plain_text;
					}
				} else {
					title = "MALFORMED";
				}

				let link: string;
				if (linkText?.length) {
					link = "";
					for (const linkSegment of linkText) {
						link += linkSegment.plain_text;
					}
				} else {
					link = result.id;
				}

				if (authorObjects?.length) {
					const authors: Author[] = authorObjects.map(
						(authorObject): Author => {
							return {
								name: authorObject.name,
								avatar_url: authorObject.avatar_url,
							};
						}
					);
					return {
						created_time: result.created_time,
						last_edited_time: result.last_edited_time,
						title,
						id: result.id,
						link,
						category,
						icon,
						authors,
					};
				} else {
					return {
						created_time: result.created_time,
						last_edited_time: result.last_edited_time,
						title,
						id: result.id,
						link,
						icon,
						category,
					};
				}
			});
		});
}

export async function getBlogPage(id: string): Promise<BlogPage> {
	const { data: pageData } = await axios.get(
		`https://api.notion.com/v1/blocks/${id}/children`,
		notionConfig
	);
	//@ts-ignore
	return { blocks: pageData.results };
}

export async function getLinkButtons(): Promise<LinkButtonProps[]> {
	const { data } = await axios.get(
		"https://api.notion.com/v1/blocks/441c68cd9dbd49a498da4ff5ff6c3dcf/children",
		notionConfig
	);
	const output: LinkButtonProps[] = [];

	let current: LinkButtonProps = { href: "", text: "" };
	//@ts-ignore
	for (const block of data.results) {
		if (block.type.startsWith("heading")) {
			// put old LinkButtonProps into list
			if (current.text) output.push(current);

			// start new LinkButtonProp
			const textObjects: any[] = block[block.type].text;
			const text: string = textObjects
				.map((obj) => obj.plain_text)
				.join("");
			current = { href: "", text };
		} else if (block.type === "paragraph") {
			const textObjects: any[] = block.paragraph.text;
			const text: string = textObjects
				.map((obj) => obj.plain_text)
				.join("");
			if (text.startsWith("Icon: ")) {
				current.iconName = text.substring(6);
			} else if (text.startsWith("Link: ")) {
				current.href = text.substring(6);
			}
		}
	}
	if (current.text) output.push(current);

	return output;
}

export async function getJobPostings(): Promise<JobPosting[]> {
	const { data } = await axios.post(
		"https://api.notion.com/v1/databases/221eb8e2d21b4094976a1038e8e03506/query",
		{},
		notionConfig
	);

	return data.results.map((page: any): JobPosting => {
		const file0 = page.properties.Image.files[0];
		const programs = page.properties.Program.multi_select.map(
			({ name }) => name
		);
		return {
			description:
				page.properties.Description.rich_text?.[0]?.plain_text ?? null,
			rank: page.properties.Rank.select?.name ?? null,
			form: page.properties.Form.url ?? null,
			programs,
			image: file0 ? getFile(file0) : null,
			area: page.properties.Area.select?.name ?? null,
			name: page.properties.Name.title?.[0]?.plain_text ?? null,
		};
	});
}
