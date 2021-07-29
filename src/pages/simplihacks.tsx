import {
	Description,
	FAQ,
	Hero,
	Sponsors,
	Staff,
	Winners,
} from "@components/simplihacks/index";
import Head from "next/head";

export default function simpliHacks(): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Simplihacks</title>
			</Head>
			<Hero />
			<Description />
			<Winners />
			<FAQ />
			<Sponsors />
			<Staff />
		</>
	);
}
