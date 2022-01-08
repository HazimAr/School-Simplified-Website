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
	PopUp,
} from "@components/home/index";
import { BlogListing } from "types";
import { motion } from "framer-motion";
import { fadeIn } from "@styles/animations";

export default function Home({ listing }: { listing: BlogListing[] }) {
	return (
		<>
			<PopUp />
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
