import { getBlogListing } from "@api/notion";
import {
	AcademicServices,
	Blog,
	Chapters,
	Clubs,
	GettingStarted,
	Intro,
	ProgrammingSimplified,
	Projects,
	Testimonial,
} from "@components/home/index";
import { fadeIn } from "@styles/animations";
import { motion } from "framer-motion";
import Head from "next/head";
import { BlogListing } from "types";

export default function Home({ listing }: { listing: BlogListing[] }) {
	return (
		<>
			<Head>
				<title>School Simplified | Home Page</title>
			</Head>
			{/* <PopUp /> */}
			<motion.div
				initial="initial"
				whileInView="onView"
				variants={fadeIn()}
			>
				<Intro />
			</motion.div>
			<GettingStarted />
			<Blog listing={listing} />
			<AcademicServices />
			<Projects />
			<Chapters />
			<ProgrammingSimplified />
			<Clubs />
			<Testimonial />
		</>
	);
}

export async function getStaticProps() {
	const listing: BlogListing[] = (await getBlogListing())
		.sort(
			(a, b) =>
				new Date(b.created_time).getTime() -
				new Date(a.created_time).getTime()
		)
		.slice(0, 3);
	return { props: { listing }, revalidate: 60 };
}
