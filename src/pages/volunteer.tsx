import { getJobPostings } from "@api/notion";
import {
	Box,
	Center,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	VStack,
	HStack,
	Select,
	// Image,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import { JobPosting } from "types";
import { useState, useEffect } from "react";
import NextChakraLink from "@components/nextChakra";

/**
 * The Volunteering page!
 *
 * Mention that people can give people community service hours (!)
 * Needs information about the different positions (e.g. tutoring, technical, marketing, HR, etc.) (images from Mossa, alsdkfjadlskfj, aisdfhalj) [in one box, same layout for each]
 * Needs a clear button that lets users sign up, which takes them to the Discord to reinforce call to action
 * Needs a couple Undraw images
 * @returns the Volunteering page
 */

export default function Volunteering({ postings }: { postings: JobPosting[] }) {
	console.log(postings);
	const rankOptions = [],
		areaOptions = [],
		programOptions = [];

	for (const posting of postings) {
		if (!rankOptions.includes(posting.rank)) rankOptions.push(posting.rank);
		if (!areaOptions.includes(posting.area)) areaOptions.push(posting.area);
		if (!programOptions.includes(posting.program))
			programOptions.push(posting.program);
	}

	const [postingsToDisplay, setPostingsToDisplay] = useState(
		postings.filter((posting) => posting.program == programOptions[1])
	);
	const [filter, setFilter] = useState({
		rank: null,
		area: null,
		program: null,
	});

	useEffect(() => {
		setPostingsToDisplay(
			postings.filter((posting) => {
				if (filter.rank && posting.rank != filter.rank) return false;
				if (filter.area && posting.area != filter.area) return false;
				if (filter.program && posting.program != filter.program)
					return false;
				return true;
			})
		);
	}, [filter]);
	return (
		<>
			<ContainerBackground src="/timmy/raining_timmy.png" py={100}>
				<Center>
					<ContainerInside
						py={10}
						pr={{ base: 2, sm: 2 }}
						justifyContent="center"
					>
						<Stack
							textAlign="left"
							direction={{ base: "column", md: "row-reverse" }}
							width={{ xl: "700px", lg: "300px", sm: "100x" }}
							spacing={{ base: 5, md: 10 }}
							justifyContent={{ base: "left", md: "center" }}
						>
							<VStack flex={5} align="flex-start">
								<Heading
									size="xl"
									width={{
										xl: "300px",
										lg: "600px",
										sm: "600x",
									}}
								>
									Join Our Team
								</Heading>

								<Text fontSize="lg" textAlign="justify" as="b">
									As the largest student run nonprofit in
									North America, School Simplified provides
									you with a variety of opportunities. Become
									a part of our team today and together we can
									build a better future! To get started,
									filter using our options below!
								</Text>
							</VStack>
						</Stack>
					</ContainerInside>
				</Center>
			</ContainerBackground>
			<Container mt={20}>
				<ContainerInside>
					<HStack justify="space-around" spacing={5}>
						<VStack w="100%">
							<Heading>Rank</Heading>
							<Select
								placeholder="All"
								onChange={(e) => {
									const tempFilter: any = { ...filter };
									tempFilter.rank = e.target.value;
									setFilter(tempFilter);
								}}
							>
								{rankOptions.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</Select>
						</VStack>
						<VStack w="100%">
							<Heading>Area of Work</Heading>
							<Select
								placeholder="All"
								onChange={(e) => {
									const tempFilter: any = { ...filter };
									tempFilter.area = e.target.value;
									setFilter(tempFilter);
								}}
							>
								{areaOptions.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</Select>
						</VStack>
						<VStack w="100%">
							<Heading>Program</Heading>
							<Select
								placeholder="All"
								onChange={(e) => {
									const tempFilter: any = { ...filter };
									tempFilter.program = e.target.value;
									setFilter(tempFilter);
								}}
							>
								{programOptions.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</Select>
						</VStack>
					</HStack>
					<SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
						{postingsToDisplay.map((posting: JobPosting) => (
							<NextChakraLink
								key={
									posting.name +
									posting.area +
									posting.program
								}
								isExternal
								href={posting.form ?? ""}
							>
								{false && (
									<FlipBox
										src={posting.image.url}
										description={posting.description}
									/>
								)}
								<Stack
									spacing={0}
									textAlign="left"
									transition="all 0.1s ease-in"
									_hover={{
										transform: "scale(1.05)",
										cursor: "pointer",
									}}
								>
									{/* {posting.image?.url ? (
									<FlipBox
										src={posting.image?.url}
										description={posting.description}
									/>
								) : ( */}
									<Box
										minH="200px"
										bg="brand.blue"
										px={4}
										py={2}
										borderTopRadius="lg"
									>
										<Text>{posting.description}</Text>
									</Box>
									{/* )} */}
									<Stack
										bg="brand.darkerBlue"
										spacing={0}
										px={4}
										py={2}
										borderBottomRadius="lg"
									>
										<Text fontSize="sm">
											{posting.area}
										</Text>
										<Heading fontSize="lg">
											{posting.name}
										</Heading>
										<Text fontSize="sm">
											{posting.program}
										</Text>
									</Stack>
								</Stack>
							</NextChakraLink>
						))}
					</SimpleGrid>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const props = {
		postings: (await getJobPostings()).sort((a, b) =>
			a.name.localeCompare(b.name)
		),
	};
	return {
		props,
		// revalidate: 60
	};
}

function FlipBox({ src, description }) {
	return (
		<Box w="100%" h="200px" style={{ perspective: "1000px" }}>
			<Box
				pos="relative"
				w="100%"
				h="100%"
				textAlign="center"
				transition="linear transform 0.8s"
				style={{ transformStyle: "preserve-3d" }}
				_hover={{ transform: "rotateY(180deg)" }}
			>
				<Box
					pos="absolute"
					w="100%"
					h="100%"
					style={{ backfaceVisibility: "hidden" }}
					bgImage={src}
					bgSize="cover"
					bgRepeat="no-repeat"
					bgPos="center"
				>
					{/* <Image src={src} alt="logo" w="400px" h="200px" /> */}
				</Box>
				<Box
					pos="absolute"
					w="100%"
					h="100%"
					style={{ backfaceVisibility: "hidden" }}
					transform="rotateY(180deg)"
					bg="brand.blue"
				>
					<Text>{description}</Text>
				</Box>
			</Box>
		</Box>
	);
}
