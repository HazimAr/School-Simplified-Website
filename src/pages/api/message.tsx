import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		res.status(200).json({ response: "Success!" });
	} else {
		res.status(500);
	}
}
