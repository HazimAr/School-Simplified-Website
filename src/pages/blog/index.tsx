import { getBlogListing } from "@api/notion";
import { Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";
import { BlogListing } from "types";

export default function Blog({
	listing: listings,
}: {
	listing: BlogListing[];
}): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Blogs</title>
			</Head>
			<Container>
				<ContainerInside>
					<Heading>Blogs</Heading>
					{listings.map((listing, idx: Number) => {
						return (
							<Text key={"listing_" + idx}>{listing.title}</Text>
						);
					})}
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const props = { listing: await getBlogListing() };
	return { props, revalidate: 60 };
}
