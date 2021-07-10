import axios from "axios";
import { Class, NotesProps, Subject, Unit } from "types";

const config = {
	headers: {
		Authorization: "Bearer " + process.env.NOTION_API_KEY,
		"Notion-Version": "2021-05-13",
	},
};

async function getSubjects(): Promise<Subject[]> {
	const { data: dictData } = await axios.post(
		`https://api.notion.com/v1/databases/283ca488c1624a4fbef37f1d8bd8da90/query`,
		{},
		config
	);
	const subjectPromises = dictData.results.map((page: any) => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${page.id}/children`,
			config
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
		currentSubject.map(async (currentClass: any, classIndex: number) => {
			const content = await getUnits(
				currentSubject,
				currentClass,
				classIndex
			);
			return {
				title: currentClass?.child_page?.title,
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
	const { data: classPageData } = await axios.get(
		`https://api.notion.com/v1/pages/${currentClass.id}`,
		config
	);
	const pageURL = classPageData.url;

	const promises2 = currentSubject.map(() => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${currentClass.id}/children`,
			config
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
			let idx: number = 1;
			let re = /\-/gi;

			blocks.forEach((block: any) => {
				if (block.type === "heading_3") {
					if (block.heading_3.text.length) {
						// valid title
						if (title.length) {
							units.push({ title: title, content: notes });
						}

						title =
							block.heading_3.text[0]?.plain_text ??
							"I was broken :(";
						notes = [];
						idx = 1;
						// } else {
						// 	// empty title
						// 	console.log(`Empty header detected in ${pageURL}!`);
					}
				} else {
					// treat as a notes object until implemented
					const blockID = block.id.replace(re, "");
					// const blockID = block.id;
					const note = {
						title: `${title} Notes #${idx++}`,
						href: `${pageURL}#${blockID}`,
					};
					console.log(note.title);
					console.log(note.href);
					// console.log(typeof block.id);
					notes.push(note);
				}
			});

			return units;
			// return blocks
			// 	.filter(
			// 		(block: any) =>
			// 			block.type === "heading_3" &&
			// 			block.heading_3.text.length
			// 	)
			// 	.map((block: any) => {
			// 		// console.log(block);

			// 		// One unit
			// 		return {
			// 			title:
			// 				block.heading_3.text[0]?.plain_text ??
			// 				"I was broken :(",
			// 			content: [
			// 				{
			// 					title: "Interesting thing #1",
			// 					href: "/s",
			// 				},
			// 			],
			// 		};
			// 	});
		});
}

export { getSubjects };
