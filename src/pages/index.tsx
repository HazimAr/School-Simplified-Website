import { getBlogListing } from "@api/notion";
import {
	AcademicServices,
	Blog,
	Chapters,
	Clubs,
	GettingStarted,
	Intro,
	Projects,
	Testimonial,
} from "@components/home/index";
import { BlogListing } from "types";

export default function Home({ listing }: { listing: BlogListing[] }) {
	return (
		<>
			<Intro />
			<GettingStarted />
			<Blog listing={listing} />
			<AcademicServices />
			<Projects />
			<Chapters />
			<Testimonial />
			<Clubs />
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
