import axios from "axios";
import {
	AnswerPart,
	ArtData,
	Class,
	NotesProps,
	QAPair,
	SocialMedia,
	Subject,
	Unit,
} from "types";

const notesConfig = {
	headers: {
		Authorization: "Bearer " + process.env.NOTION_API_KEY,
		"Notion-Version": "2021-05-13",
	},
};

async function getSubjects(): Promise<Subject[]> {
	const { data: dictData } = await axios.post(
		`https://api.notion.com/v1/databases/b2009721bf4d47aa8fa99a6528db7843/query`,
		{},
		notesConfig
	);
	const subjectPromises = dictData.results.map((page: any) => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${page.id}/children`,
			notesConfig
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
			notesConfig
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
									lastEdited: block.last_edited_time,
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

export { getSubjects };
export { getArtInfo };
export { getFaqInfo };

async function getArtInfo(): Promise<ArtData> {
	const { data: artPageData } = await axios.get(
		`https://api.notion.com/v1/blocks/fcfaa8ea3a2041cf91ec958db799026e/children`,
		notesConfig
	);

	let image =
			"https://www.thewrap.com/wp-content/uploads/2016/08/Rick-Astley-618x400.jpg", // default image
		description = "Rick Astley", // default description
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

async function getFaqInfo() {
	const { data } = await axios.get(
		`https://api.notion.com/v1/blocks/bc5b51a1b7674a1da9fd09b559844881/children`,
		notesConfig
	);
	// console.log(data);
	const qaPairs: QAPair[] = data.results
		.filter(
			(block: any) =>
				block.type === "paragraph" && block.paragraph?.text.length
		)
		.map((block: any) => {
			let question: string = "";
			let answers: AnswerPart[] = [];
			const textBlocks = block.paragraph.text;

			const questionText = textBlocks[0];
			if (questionText.plain_text && questionText.annotations?.bold) {
				question = questionText.plain_text;
			} else {
				console.warn(`ID ${block.id} [Q&A] is malformed!`);
				return;
			}

			if (textBlocks.length < 1) {
				console.warn(`ID ${block.id} [Q&A] is malformed!`);
				return;
			} else {
				for (let i = 1; i < textBlocks.length; i++) {
					if (textBlocks[i].plain_text?.length) {
						if (textBlocks[i].href) {
							answers.push({
								text: textBlocks[i].plain_text,
								link: textBlocks[i].href,
							});
						} else {
							answers.push({ text: textBlocks[i].plain_text });
						}
					}
				}

				console.log(`Answers for "${question}":`);
				console.log(answers);
			}

			return {
				question,
				answer: answers,
			};
		})
		.filter((qa: QAPair) => qa && qa.question.length && qa.answer.length);
	// console.log(qaPairs);

	return qaPairs;
}
