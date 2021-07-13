import axios from "axios";
import { ArtData, Class, NotesProps, Subject, Unit } from "types";

const notesConfig = {
	headers: {
		Authorization: "Bearer " + process.env.NOTION_API_KEY,
		"Notion-Version": "2021-05-13",
	},
};

async function getSubjects(): Promise<Subject[]> {
	const { data: dictData } = await axios.post(
		`https://api.notion.com/v1/databases/283ca488c1624a4fbef37f1d8bd8da90/query`,
		{},
		notesConfig
	);
	const subjectPromises = dictData.results.map((page: any) => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${page.id}/children`,
			notesConfig
		);
	});

	return Promise.all(subjectPromises)
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

// const artConfig = {
// 	headers: {
// 		Authorization: "Bearer " + process.env.NOTION_API_KEY_2,
// 		"Notion-Version": "2021-05-13",
// 	},
// };

function getArtInfo(): ArtData | null {
	return null;
}
