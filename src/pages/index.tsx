import { getBlogListing } from "@api/notion";
import { Here, Intro, Testimonial, Clubs, Blog } from "@components/home/index";
import { BlogListing } from "types";

export default function Home({ listing }: { listing: BlogListing[] }) {
	return (
		<>
			<Intro />
			<Here />
			<Blog listing={listing} />
			<Testimonial />
			<Clubs />
		</>
	);
}

export async function getStaticProps() {
	const listing: BlogListing[] = (await getBlogListing())
		.sort(
			(a, b) =>
				new Date(a.created_time).getTime() -
				new Date(b.created_time).getTime()
		)
		.slice(0, 3);
	return { props: { listing }, revalidate: 60 };
}
