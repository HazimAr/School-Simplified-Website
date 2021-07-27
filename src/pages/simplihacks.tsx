import { Hero, Description, Winners, FAQ, Sponsors, Staff } from "@components/simplihacks/index";
import Head from "next/head";

export default function Simplihacks(): JSX.Element {
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