import { getBlogListing } from "@api/notion";
import {
	Box,
	Divider,
	Flex,
	Heading,
	Image,
	StackDivider,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Head from "next/head";
import React from "react";
import { BlogListing } from "types";

export default function Blog({
	listing: listings,
}: {
	listing: BlogListing[];
}): JSX.Element {
	const dtFormatter = new Intl.DateTimeFormat("en-US");
	const maxIconW = useBreakpointValue({ base: 100, sm: 150, md: 200 });
	return (
		<>
			<Head>
				<title>School Simplified | Blogs</title>
			</Head>
			<Container>
				<ContainerInside my={10}>
					<Heading as="h1" size="xl">
						Blogs
					</Heading>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<Divider orientation="horizontal" bg="white" />
					<VStack
						spacing={5}
						mt={7}
						alignItems="stretch"
						divider={<StackDivider borderColor="whiteAlpha.500" />}
					>
						{listings.map((listing, idx: Number) => {
							const authors = listing.authors;
							let authorNames;
							if (authors?.length) {
								authorNames = "Written by ";
								switch (authors.length) {
									case 1:
										authorNames += authors[0].name;
										break;
									case 2:
										authorNames +=
											authors[0].name +
											" and " +
											authors[1].name;
										break;
									default:
										authorNames +=
											authors
												.slice(0, authors.length - 1)
												.map((author) => author.name)
												.join(", ") +
											", and " +
											authors[authors.length - 1].name;
								}
							} else authorNames = null;
							return (
								<Flex
									textAlign="left"
									justifyContent="space-between"
									alignItems="center"
									key={"listing_" + idx}
								>
									<Box>
										<NextLink
											href={"/blog/" + listing.link}
										>
											<Heading as="h2" size="md">
												{listing.title}
											</Heading>
										</NextLink>
										{listing.category ? (
											<Text as="i">
												{listing.category}
											</Text>
										) : null}
										<Text>
											Published:{" "}
											{dtFormatter.format(
												new Date(listing.created_time)
											)}
										</Text>
										{authorNames?.length ? (
											<Text>{authorNames}</Text>
										) : null}
									</Box>
									{listing.icon ? (
										<NextLink
											href={"/blog/" + listing.link}
										>
											<Image
												src={listing.icon}
												maxH={maxIconW}
												maxW={maxIconW}
												borderRadius="2xl"
												ml={3}
											/>
										</NextLink>
									) : null}
								</Flex>
							);
						})}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const props = { listing: await getBlogListing() };
	return { props, revalidate: 60 };
}
