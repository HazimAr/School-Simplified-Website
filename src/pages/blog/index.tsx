import { getBlogListing } from "@api/notion";
import {
	Box,
	Center,
	Heading,
	HStack,
	Icon,
	Stack,
	Image,
	SimpleGrid,
	Text,
	useBreakpointValue,
	VStack,
	Divider,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Searchbar from "@components/searchbar";
import { filter } from "fuzzaldrin-plus";
import { cloneElement, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Author, BlogListing } from "types";

const dtFormatter = new Intl.DateTimeFormat("en-US");

function toAuthorAttribution(authors: Author[]): string {
	if (authors?.length) {
		let authorNames: string;
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
		return authorNames;
	}

	return null;
}

export default function Blog({
	listing: listings,
}: {
	listing: BlogListing[];
}): JSX.Element {
	const [searchTerm, setSearchTerm] = useState("");
	const inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });
	const [pageNum, setPageNum] = useState(0);

	listings.sort((a, b) => {
		return (
			new Date(b.created_time).getTime() -
			new Date(a.created_time).getTime()
		);
	});

	const shownListings = searchTerm
		? filter(listings, searchTerm, { key: "title" })
		: listings;
	const perPage = 10,
		totalPages = Math.ceil(shownListings.length / perPage);

	const topBlogAuthors = toAuthorAttribution(listings[0].authors);

	return (
		<>
			<Container>
				<ContainerInside my={10}>
					<Heading as="h1" size="xl" mb={5}>
						Blogs and Articles
					</Heading>
					<Stack
						direction={{ base: "column", md: "row" }}
						spacing={5}
						justifyContent="center"
						alignItems={{ base: "center", md: null }}
						mx={{ base: 30, sm: 61, lg: 100 }}
					>
						<Image
							src="/timmy/blogtimmy.png"
							maxW={{ base: 150, md: 300 }}
						/>
						<Box flex={1} textAlign="left">
							<Box
								bgImage={listings[0].icon}
								bgSize="cover"
								borderRadius="3xl"
								h={200}
								w="100%"
								mb={5}
							/>
							<NextLink href={"/blog/" + listings[0].link}>
								<Heading as="h2" size="lg">
									{listings[0].title}
								</Heading>
							</NextLink>
							<Text as="i">
								{topBlogAuthors
									? listings[0].category +
									  " | " +
									  topBlogAuthors
									: listings[0].category}
							</Text>
						</Box>
					</Stack>
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside my={5}>
					<VStack spacing={5}>
						<Divider orientation="horizontal" />
						<Searchbar
							size={inputGroupSize}
							maxW={{ base: "initial", md: 350, lg: 500 }}
							flexShrink={1}
							callback={setSearchTerm}
						/>
					</VStack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<SimpleGrid
						spacing={5}
						mt={7}
						columns={{ base: 1, sm: 2, md: 3 }}
					>
						{shownListings
							.slice(pageNum * perPage, (pageNum + 1) * perPage)
							.map((listing, idx: Number) =>
								cloneElement(ListingElement(listing), {
									key: "listing_" + idx,
								})
							)}
					</SimpleGrid>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside my={5}>
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
								boxSize={9}
								color={pageNum === 0 ? "gray.500" : "white"}
							/>
						</Center>
						<Center
							onClick={() => {
								if (pageNum < totalPages - 1)
									setPageNum(pageNum + 1);
							}}
							w="fit-content"
							cursor={
								pageNum === totalPages - 1 ? "auto" : "pointer"
							}
						>
							<Icon
								as={FaArrowRight}
								boxSize={9}
								color={
									pageNum === totalPages - 1
										? "gray.500"
										: "white"
								}
							/>
						</Center>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}

function ListingElement(listing: BlogListing) {
	let authorNames: string = toAuthorAttribution(listing.authors);

	return (
		<VStack
			bgColor="brand.darkerBlue"
			alignItems="stretch"
			overflow="hidden"
			borderRadius="3xl"
		>
			<NextLink
				href={"/blog/" + listing.link}
				bgImg={listing.icon ?? "/timmy/blogtimmy.png"}
				bgSize="cover"
				bgPos="center"
				style={{ aspectRatio: "3/2" }}
				// w="100%"
			/>
			<VStack
				alignItems="stretch"
				justify="center"
				textAlign="left"
				py={4}
				px={5}
				flex={1}
				spacing={1}
			>
				<Text as="i" fontSize="xs">
					{dtFormatter.format(new Date(listing.created_time))}
					{listing.category ? " | " + listing.category : null}
				</Text>
				<NextLink href={"/blog/" + listing.link}>
					<Heading as="h2" size="md">
						{listing.title}
					</Heading>
				</NextLink>
				{authorNames?.length ? <Text>{authorNames}</Text> : null}
			</VStack>
		</VStack>
	);
}

export async function getStaticProps() {
	const props = { listing: await getBlogListing() };
	return { props, revalidate: 60 };
}
