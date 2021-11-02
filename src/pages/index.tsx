import {
	// Code,
	Here,
	Intro,
	Testimonial,
	// Blog,
	Clubs,
} from "@components/home/index";
import { getBlogListing } from "@api/notion";
import { BlogListing } from "types";

export default function Home({ listing }: { listing: BlogListing[] }) {
	console.log(listing);
	return (
		<>
			<Intro />
			{/* <Here /> */}
			<Testimonial />
			{/* <Blog listing={listing} /> */}
			{/* <Code /> */}
			<Clubs />
		</>
	);
}

export async function getStaticProps() {
	return { props: { listing: await getBlogListing() }, revalidate: 60 };
}
