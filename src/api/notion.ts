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
	await Promise.all(promises).then((axiosClassPromises) => {
		subjects = data.results.map((page: any, index: number) => {
			const currentSubject = axiosClassPromises[index].data.results;
			const content = currentSubject.map(
				async (currentClass, index: number) => {
					const promises2 = currentSubject.map((page: any) => {
						return axios.get(
							`https://api.notion.com/v1/blocks/${currentClass.id}/children`,
							config
						);
					});
					const allPromises = await Promise.all(promises2);
					const blocks = allPromises[index].data.results;
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
					console.log(
						"THIS IS THE CONTENT BITCH " + JSON.stringify(content)
					);
					return {
						title: currentClass?.child_page?.title,
						content: content,
					};
				}
			);
			return {
				title: page.properties.Name.title[0].plain_text,
				id: page.id,
				content: content,
			};
		});
	});
	return subjects;
}

export { getSubjects };
