import { notionConfig } from "@api/notion";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		axios.patch(
			"https://api.notion.com/v1/blocks/c70d591ffbec4a4bb624960eaf77ad17/children",
			{
				children: [
					{
						type: "to_do",
						to_do: {
							text: [
								{
									type: "text",
									text: {
										content: `${req.body.firstName} ${req.body.lastName} <${req.body.email}>\nSubject: ${req.body.subject}\n\n${req.body.message}`,
									},
									annotations: {
										bold: false,
										italic: false,
										strikethrough: false,
										underline: false,
										code: false,
										color: "default",
									},
									plain_text: "eggo",
								},
							],
						},
					},
				],
			},
			notionConfig
		);
		res.status(200).json({ response: "Success!" });
	} else {
		res.status(500);
	}
}
