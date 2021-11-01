import {
	// Code,
	Here,
	Intro,
	Testimonial,
	Blog,
	Clubs,
} from "@components/home/index";
import { getBlogListing } from "@api/notion";
import { BlogListing } from "types";

export default function Home({ listing }: { listing: BlogListing[] }) {
	return (
		<>
			<Intro />
			<Here />
			<Testimonial />
			<Blog listing={listing} />
			{/* <Code /> */}
			<Clubs />
		</>
	);
}

export async function getStaticProps() {
	const props = { listing: await getBlogListing() };
	return { props, revalidate: 60 };
}
