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
import { BlogListing } from "types";
import { motion } from "framer-motion";

export default function Home({ listing }: { listing: BlogListing[] }) {
	const fadeInVariant = {
		initial: {
			opacity: 0,
		},
		onView: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.3,
			},
		},
	};

	return (
		<>
			<motion.div
				initial="initial"
				whileInView="onView"
				variants={fadeInVariant}
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
