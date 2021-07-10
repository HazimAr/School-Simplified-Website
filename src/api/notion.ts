import axios from "axios";
import { Class, Subject, Unit } from "types";

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
			return blocks
				.filter(
					(block: any) =>
						block.type === "heading_3" &&
						block.heading_3.text.length > 0
				)
				.map((block: any) => {
					// console.log(block);
					return {
						title:
							block.heading_3.text[0]?.plain_text ??
							"I was broken :(",
						content: [
							{
								title: "Interesting thing #1",
								href: "/s",
							},
						],
					};
				});
		});
}

export { getSubjects };
