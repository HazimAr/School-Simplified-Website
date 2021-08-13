import { getBlogListing, getBlogPage } from "@api/notion";
import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";
import { BlogListing, BlogPage } from "types";
import { parsePage } from "util/parse_notion";

type BlogPageProps = { page: BlogPage; listing: BlogListing };
export default function BlogPage_({
	page,
	listing,
}: BlogPageProps): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | {listing.title}</title>
			</Head>
			<Container bg="brand.transparent">
				<ContainerInside my={7}>
					<VStack spacing={5}>
						<Heading as="h1">{listing.title}</Heading>
						{listing.authors?.length ? (
							<Box>
								<Text as="i" fontSize={18}>
									Written by:
								</Text>
								{listing.authors.map(
									(author, index: number) => {
										return (
											<Center key={index}>
												<Image
													src={author.avatar_url}
													boxSize={30}
													borderRadius={15}
													mr={3}
												/>
												<Text>{author.name}</Text>
											</Center>
										);
									}
								)}
							</Box>
						) : null}
					</VStack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside mt={5} mx={{ sm: 0, md: 3 }}>
					<VStack spacing={3} alignItems="stretch">
						{parsePage(page)}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getStaticProps({ params }: any) {
	const blogListings = await getBlogListing();
	let thisListing = null;
	for (const blogListing of blogListings) {
		if (blogListing.id === params.id) {
			thisListing = blogListing;
			break;
		}
	}

	if (!thisListing) {
		return { props: {} };
	}
	const props: BlogPageProps = {
		listing: thisListing,
		page: await getBlogPage(params.id),
	};
	return { props, revalidate: 60 };
}

export async function getStaticPaths() {
	const blogListing = await getBlogListing();
	const paths = blogListing.map((blogListing) => {
		return { params: { id: blogListing.id } };
	});
	return { paths, fallback: true };
}
