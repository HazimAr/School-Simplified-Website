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
	Promise.all(promises).then((classes) => {
		const subjects = data.results.map((page: any, index: number) => {
			return {
				title: page.properties.Name.title[0].plain_text,
				id: page.id,
				content: [
					{
						title: classes[index].data.results[0]?.child_page
							?.title,
						content: [
							{
								title: "Quadratics",
								content: [
									{
										title: "Interesting thing #1",
										href: "/s",
									},
									{
										title: "Interesting thing #2",
										href: "/a",
									},
									{
										title: "Interesting thing #3",
										href: "/a",
									},
									{
										title: "Interesting thing #4",
										href: "/f",
									},
									{
										title: "Interesting thing #5",
										href: "/e",
									},
									{
										title: "Interesting thing #6",
										href: "/v",
									},
									{
										title: "Interesting thing #7",
										href: "/w",
									},
								],
							},
						],
					},
				],
			};
		});
		console.log(subjects[0]);
		return subjects;
	});
	return 1;
}

export { getSubjects };
