import axios from "axios";

const config = {
	headers: {
		Authorization: "Bearer " + process.env.NOTION_API_KEY ?? "",
		"Notion-Version": "2021-05-13",
	},
};

async function getSubjects() {
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

	await Promise.all(promises).then(async (axiosClassPromises) => {
		let subjectsInside;
		await Promise.all(
			(subjects = data.results.map(
				async (page: any, pageIndex: number) => {
					const currentSubject =
						axiosClassPromises[pageIndex].data.results;
					let content;
					await Promise.all(
						currentSubject.map(
							async (currentClass, classIndex: number) => {
								const promises2 = currentSubject.map(
									() => {
										return axios.get(
											`https://api.notion.com/v1/blocks/${currentClass.id}/children`,
											config
										);
									}
								);
								const allPromises = await Promise.all(
									promises2
								);
								const blocks =
									allPromises[classIndex].data.results;
								const content = blocks
									.filter(
										(block) =>
											block.type === "heading_3" &&
											block.heading_3.text.length > 0
									)
									.map((block) => {
										// console.log(block);
										return {
											title:
												block.heading_3.text[0]
													?.plain_text ??
												"I was broken :(",
											content: [
												{
													title: "Interesting thing #1",
													href: "/s",
												},
											],
										};
									});
								if (pageIndex === 0 && classIndex === 0) {
									console.log(
										"THIS IS THE CONTENT BITCH " +
											JSON.stringify(content) +
											"\n"
									);
								}
								return {
									title: currentClass?.child_page?.title,
									content: content,
								};
							}
						)
					).then((content) => (content = content));
					return {
						title: page.properties.Name.title[0].plain_text,
						id: page.id,
						content: content,
					};
				}
			))
		).then((subject) => {
			subjectsInside = subject;
		});
	});
	return subjects;
}

export { getSubjects };
