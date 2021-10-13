import { getBlogListing } from "@api/notion";
import {
	Box,
	Center,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	Stack,
	StackDivider,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Searchbar from "@components/searchbar";
import { filter } from "fuzzaldrin-plus";
import Head from "next/head";
import React, { cloneElement, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BlogListing } from "types";

const dtFormatter = new Intl.DateTimeFormat("en-US");

export default function Blog({
	listing: listings,
}: {
	listing: BlogListing[];
}): JSX.Element {
	const [searchTerm, setSearchTerm] = useState("");
	const inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });
	const [pageNum, setPageNum] = useState(0);

	const shownListings = searchTerm.length
		? filter(listings, searchTerm, { key: "title" })
		: listings;
	const perPage = 10,
		totalPages = Math.ceil(shownListings.length / perPage);

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
			<Container bg="brand.transparent">
				<ContainerInside my={5}>
					<Stack
						direction={{ base: "column", lg: "row" }}
						justifyContent="space-between"
						spacing={3}
					>
						<HStack spacing={2} justifyContent="center">
							<Center
								onClick={() => {
									if (pageNum > 0) setPageNum(pageNum - 1);
								}}
								w="fit-content"
								cursor={pageNum === 0 ? "auto" : "pointer"}
							>
								<Icon
									as={FaArrowLeft}
									boxSize={5}
									color={pageNum === 0 ? "gray.500" : "white"}
								/>
							</Center>
							<Box as="span">
								Page {pageNum + 1} / {totalPages}
							</Box>
							<Center
								onClick={() => {
									if (pageNum < totalPages - 1)
										setPageNum(pageNum + 1);
								}}
								w="fit-content"
								cursor={
									pageNum === totalPages - 1
										? "auto"
										: "pointer"
								}
							>
								<Icon
									as={FaArrowRight}
									boxSize={5}
									color={
										pageNum === totalPages - 1
											? "gray.500"
											: "white"
									}
								/>
							</Center>
						</HStack>
						<Searchbar
							size={inputGroupSize}
							maxW={{ base: "initial", md: 350, lg: 500 }}
							flexShrink={1}
							callback={setSearchTerm}
						/>
					</Stack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<VStack
						spacing={5}
						mt={7}
						alignItems="stretch"
						divider={<StackDivider borderColor="whiteAlpha.500" />}
					>
						{shownListings
							.slice(pageNum * perPage, (pageNum + 1) * perPage)
							.map((listing, idx: Number) =>
								cloneElement(ListingElement(listing), {
									key: "listing_" + idx,
								})
							)}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

function ListingElement(listing: BlogListing) {
	const authors = listing.authors;
	let authorNames;
	if (authors?.length) {
		authorNames = "Written by ";
		switch (authors.length) {
			case 1:
				authorNames += authors[0].name;
				break;
			case 2:
				authorNames += authors[0].name + " and " + authors[1].name;
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
		>
			<Box>
				<NextLink href={"/blog/" + listing.link}>
					<Heading as="h2" size="md">
						{listing.title}
					</Heading>
				</NextLink>
				{listing.category ? (
					<Text as="i">{listing.category}</Text>
				) : null}
				<Text>
					Published:{" "}
					{dtFormatter.format(new Date(listing.created_time))}
				</Text>
				<Text>
					Last Edited:{" "}
					{dtFormatter.format(new Date(listing.last_edited_time))}
				</Text>
				{authorNames?.length ? <Text>{authorNames}</Text> : null}
			</Box>
			{listing.icon ? (
				<NextLink href={"/blog/" + listing.link}>
					<Image
						src={listing.icon}
						maxH={{ base: 100, sm: 150, md: 200 }}
						maxW={{ base: 100, sm: 150, md: 200 }}
						borderRadius="2xl"
						ml={3}
					/>
				</NextLink>
			) : null}
		</Flex>
	);
}

export async function getStaticProps() {
	const props = { listing: await getBlogListing() };
	return { props, revalidate: 60 };
}
