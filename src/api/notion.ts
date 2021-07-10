import axios from "axios";
import { Class, Note, Subject, Unit } from "types";

const config = {
	headers: {
		Authorization:
			"Bearer " + process.env.NOTION_API_KEY ??
			"secret_73W0zW4QYwCNgUoHFXL4XgoHfq9BuoO6qa1ZmeejLZi",
		"Notion-Version": "2021-05-13",
	},
};

async function getSubjects(): Promise<Subject[]> {
	const { data } = await axios.post(
		`https://api.notion.com/v1/databases/283ca488c1624a4fbef37f1d8bd8da90/query`,
		{},
		config
	);
	const promises = data.results.map((page: any) => {
		return axios.get(
			`https://api.notion.com/v1/blocks/${page.id}/children`,
			config
		);
	});

	let subjects;
	await Promise.all(promises).then(async (subjectData) => {
		subjects = await Promise.all(
			(subjects = data.results.map(
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
			))
		);
	});
	// @ts-expect-error
	return subjects;
}

async function getClasses(
	subjectData: any,
	subjectIndex: number
): Promise<Class[]> {
	const currentSubject = subjectData[subjectIndex].data.results;
	let content;
	await Promise.all(
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
	).then((promiseContent) => {
		content = promiseContent;
	});

	// @ts-expect-error
	return content;
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
	const allPromises = await Promise.all(promises2);
	// @ts-expect-error
	const blocks = allPromises[classIndex].data.results;
	const content = blocks
		.filter(
			(block: any) =>
				block.type === "heading_3" && block.heading_3.text.length > 0
		)
		.map(async (currentBlock: any) => {
			// console.log(block);
			const content = getNotes();
			return {
				title:
					currentBlock.heading_3.text[0]?.plain_text ??
					"I was broken :(",
				content: content,
			};
		});
	return content;
}

function getNotes(): Note[] {
	let content = [
		{
			title: "Interesting thing #1",
			href: "/s",
		},
	];

	return content;
}

export { getSubjects };
