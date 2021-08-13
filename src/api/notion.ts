import axios from "axios";
import {
	AnswerPart,
	ArtData,
	Author,
	BlogListing,
	BlogPage,
	Class,
	GovernanceDocument,
	GovernanceSection,
	NotesProps,
	QAPair,
	QASection,
	ScholarshipProps,
	SocialMedia,
	Subject,
	Unit,
} from "types";

const notionConfig = {
	headers: {
		Authorization: "Bearer " + process.env.NOTION_API_KEY,
		"Notion-Version": "2021-05-13",
	},
};

export async function getSubjects(): Promise<Subject[]> {
	const { data: dictData } = await axios.post(
		`https://api.notion.com/v1/databases/b2009721bf4d47aa8fa99a6528db7843/query`,
		{},
		notionConfig
	);
	const subjectPromises = dictData.results.map((page: any) => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${page.id}/children`,
			notionConfig
		);
	});

	let subjects: Subject[] = await Promise.all(subjectPromises)
		.then((subjectData) => {
			return dictData.results.map(
				async (currentSubject: any, currentSubjectIndex: number) => {
					let content = await getClasses(
						subjectData,
						currentSubjectIndex
					);
					return {
						title: currentSubject.properties.Name.title[0]
							.plain_text,
						content: content,
					};
				}
			);
		})
		.then((newPromises) => Promise.all(newPromises));

	subjects = subjects.sort((a: any, b: any) => {
		return a.title.localeCompare(b.title);
	});

	return subjects;
}

async function getClasses(
	subjectData: any,
	subjectIndex: number
): Promise<Class[]> {
	const currentSubject = subjectData[subjectIndex].data.results;
	return Promise.all(
		currentSubject
			.filter((currentClass: any) => currentClass?.child_page?.title)
			.map(async (currentClass: any, classIndex: number) => {
				const content = await getUnits(
					currentSubject,
					currentClass,
					classIndex
				);
				return {
					title: currentClass.child_page.title,
					content: content,
				};
			})
	);
}

async function getUnits(
	currentSubject: any,
	currentClass: any,
	classIndex: number
): Promise<Unit[]> {
	// const { data: classPageData } = await axios.get(
	// 	`https://api.notion.com/v1/pages/${currentClass.id}`,
	// 	config
	// );
	// const pageURL = classPageData.url;

	const promises2 = currentSubject.map(() => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${currentClass.id}/children`,
			notionConfig
		);
	});
	return Promise.all(promises2)
		.then((allPromises) => {
			// @ts-expect-error
			return allPromises[classIndex].data.results;
		})
		.then((blocks) => {
			let title: string = "";
			let units: Unit[] = [];
			let notes: NotesProps[] = [];

			// go through every block in the page
			blocks.forEach((block: any) => {
				if (block.type.startsWith("heading")) {
					const blockType = block.type;
					if (block[blockType].text.length) {
						// title exists
						const titleText =
							block[blockType].text[0]?.plain_text?.trim();
						if (titleText) {
							// valid title
							// push previous section
							if (title.length) {
								units.push({ title: title, content: notes });
							}

							title = titleText;
							notes = [];
						} else {
							console.warn(
								`Title ${block.id} in class "${currentClass?.child_page?.title}" is malformed!`
							);
						}
					}
				} else if (block.type === "paragraph") {
					// treat as a notes object until implemented
					let href: string = "",
						notesTitle: string = "";
					for (const text of block.paragraph.text) {
						if (text.href) {
							if (text.href.length) {
								href = text.href;
								if (notesTitle.length) break;
							}
						} else if (text.plain_text) {
							const temp = text.plain_text.trim();
							if (temp.length) {
								notesTitle = temp;
								if (href.length) break;
							}
						}
					}

					// const blockID = block.id;
					if (href.length && notesTitle.length) {
						const note: NotesProps = block.last_edited_time
							? {
									title: notesTitle,
									href: href,
							  }
							: {
									title: notesTitle,
									href: href,
							  };
						// console.log(title);
						// console.log(href);
						// console.log(note.lastEdited);
						notes.push(note);
					} else if (title.length) {
						console.warn(
							`ID ${block.id} in section "${title}" in class "${currentClass?.child_page?.title}" is malformed!`
						);
					}
				}
			});

			// push last section
			if (title.length) {
				units.push({ title: title, content: notes });
			}

			return units;
		});
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
								console.log(`token: ${token}`);

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
	// console.log(qaPairs);
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
				let output: any[] = [];
				for (
					let i = 0;
					i < entry.properties[property].multi_select.length;
					i++
				)
					output.push(
						entry.properties[property].multi_select[i].name
					);
				return output;
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
	return await axios
		.post(
			"https://api.notion.com/v1/databases/79d546abf96847c6ab3cd8cffe002c39/query",
			{},
			notionConfig
		)
		.then((output) => {
			const results = output.data.results;
			return results.map((result: any): BlogListing => {
				const authorObjects: any[] = result.properties.Author?.people,
					title =
						result.properties.Name?.title[0]?.plain_text ??
						"MALFORMED";
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
						title,
						id: result.id,
						authors,
					};
				} else {
					return {
						created_time: result.created_time,
						title,
						id: result.id,
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
	return pageData.results;
}
