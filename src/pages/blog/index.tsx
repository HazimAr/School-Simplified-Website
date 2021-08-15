import { getBlogListing } from "@api/notion";
import {
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Spinner,
	StackDivider,
	Text,
	useBoolean,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Head from "next/head";
import React, { cloneElement, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BlogListing } from "types";

const dtFormatter = new Intl.DateTimeFormat("en-US");

export default function Blog({
	listing: listings,
}: {
	listing: BlogListing[];
}): JSX.Element {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchWait, setSearchWait] = useState<ReturnType<
		typeof setTimeout
	> | null>(null);
	const [loading, _setLoading] = useBoolean(false);

	const inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });

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
					<Flex>
						<InputGroup
							size={inputGroupSize}
							maxW={{ base: "initial", md: 350, lg: 500 }}
							flexShrink={1}
						>
							<InputLeftElement
								pointerEvents="none"
								children={<Icon as={FaSearch} boxSize={5} />}
							/>
							<Input
								placeholder="Search All"
								bg="brand.transparent"
								onChange={(e) => {
									if (searchWait) clearTimeout(searchWait);
									_setLoading.on();
									setSearchWait(
										setTimeout(() => {
											// console.log("Invoked with " + e.target.value);
											setSearchWait(null);
											_setLoading.off();
											setSearchTerm(
												e.target.value.trim()
											);
										}, 500)
									);
								}}
							/>
							<InputRightElement
								pointerEvents="none"
								children={
									<Center h="100%">
										<Spinner size={inputGroupSize} />
									</Center>
								}
								display={loading ? "block" : "none"}
							/>
						</InputGroup>
					</Flex>
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
						{listings.map((listing, idx: Number) =>
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
	const maxIconW = useBreakpointValue({ base: 100, sm: 150, md: 200 });
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
				{authorNames?.length ? <Text>{authorNames}</Text> : null}
			</Box>
			{listing.icon ? (
				<NextLink href={"/blog/" + listing.link}>
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
}

export async function getStaticProps() {
	const props = { listing: await getBlogListing() };
	return { props, revalidate: 60 };
}
