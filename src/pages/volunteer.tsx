import { getJobPostings } from "@api/notion";
import {
	Box,
	Center,
	Heading,
	HStack,
	Image,
	Select,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { useEffect, useState } from "react";
import { JobPosting } from "types";

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
	const rankOptions: string[] = [],
		areaOptions: string[] = [],
		programOptions: string[] = [];

	for (const posting of postings) {
		if (posting.rank && !rankOptions.includes(posting.rank))
			rankOptions.push(posting.rank);
		if (posting.area && !areaOptions.includes(posting.area))
			areaOptions.push(posting.area);
		if (posting.program && !programOptions.includes(posting.program))
			programOptions.push(posting.program);
	}
	// rankOptions.sort();
	// areaOptions.sort();
	// programOptions.sort();

	const [postingsToDisplay, setPostingsToDisplay] = useState(postings);

	const [filter, setFilter] = useState({
		rank: null,
		area: null,
		program: null,
	});

	const [enabledOptions, setEnabledOptions] = useState({
		rank: rankOptions,
		area: areaOptions,
		program: programOptions,
	});

	useEffect(() => {
		setPostingsToDisplay(
			postings.filter(
				(posting) =>
					(!filter.rank || posting.rank == filter.rank) &&
					(!filter.area || posting.area == filter.area) &&
					(!filter.program || posting.program == filter.program)
			)
		);

		const tempOptions = {
			rank: rankOptions,
			area: areaOptions,
			program: programOptions,
		};
		// finding valid ranks
		if (filter.area || filter.program) {
			tempOptions.rank = [];
			postings
				.filter(
					(posting) =>
						(!filter.area || filter.area == posting.area) &&
						(!filter.program || filter.program == posting.program)
				)
				.forEach((posting) => {
					if (!tempOptions.rank.includes(posting.rank)) {
						tempOptions.rank.push(posting.rank);
					}
				});
		}
		// finding valid areas
		if (filter.program || filter.rank) {
			tempOptions.area = [];
			postings
				.filter(
					(posting) =>
						(!filter.program ||
							filter.program == posting.program) &&
						(!filter.rank || filter.rank == posting.rank)
				)
				.forEach((posting) => {
					if (!tempOptions.area.includes(posting.area)) {
						tempOptions.area.push(posting.area);
					}
				});
		}
		// finding valid programs
		if (filter.area || filter.rank) {
			tempOptions.program = [];
			postings
				.filter(
					(posting) =>
						(!filter.area || filter.area == posting.area) &&
						(!filter.rank || filter.rank == posting.rank)
				)
				.forEach((posting) => {
					if (!tempOptions.program.includes(posting.program)) {
						tempOptions.program.push(posting.program);
					}
				});
		}

		setEnabledOptions(tempOptions);
	}, [filter]);

	return (
		<>
			<ContainerBackground
				src="/timmy/raining_timmy.png"
				bg="#5866D3CC"
				// py={{ base: 5, md: 10 }}
				pt={{ base: 12, md: 24 }}
				pb={{ base: 5, md: 10 }}
				px={{ base: 5, md: 10 }}
			>
				<ContainerInside>
					<Center>
						<Stack
							textAlign="left"
							direction={{ base: "column-reverse", md: "row" }}
							spacing={{ base: 5, md: 10 }}
							justifyContent={{ base: "left", md: "center" }}
							align="center"
						>
							<VStack flex={5} align="flex-start">
								<Heading size="xl">Join Our Team</Heading>
								<Text fontSize="lg">
									Given that we are one of the largest
									student-run nonprofits in the world and are
									completely independent from other people,
									organizations, and institutions, you will
									have unprecedented freedom to create, learn,
									and contribute. Join our team today and
									empower our generation to revolutionize the
									future.
								</Text>
							</VStack>
							<Image
								src="/timmy/marketingdept.png"
								alt="Timmy with a milk tea and a phone"
							/>
						</Stack>
					</Center>
				</ContainerInside>
			</ContainerBackground>
			<Container
				pt={20}
				bg="linear-gradient(180deg, #7683E7 0%, #A8B2FF 100%)"
			>
				<ContainerInside>
					<HStack spacing={5} mb={10}>
						<VStack flex={1}>
							<Heading size="sm">Rank</Heading>
							<Select
								placeholder="All"
								bg="#5a60adcc"
								border="none"
								onChange={(e) => {
									const tempFilter: any = { ...filter };
									tempFilter.rank = e.target.value;
									setFilter(tempFilter);
								}}
							>
								{rankOptions.map((option) => (
									<option
										key={option}
										value={option}
										disabled={
											!enabledOptions.rank.includes(
												option
											)
										}
									>
										{option}
									</option>
								))}
							</Select>
						</VStack>
						<VStack flex={1}>
							<Heading size="sm">Area of Work</Heading>
							<Select
								placeholder="All"
								bg="#5a60adcc"
								border="none"
								onChange={(e) => {
									const tempFilter: any = { ...filter };
									tempFilter.area = e.target.value;
									setFilter(tempFilter);
								}}
							>
								{areaOptions.map((option) => (
									<option
										key={option}
										value={option}
										disabled={
											!enabledOptions.area.includes(
												option
											)
										}
									>
										{option}
									</option>
								))}
							</Select>
						</VStack>
						<VStack flex={1}>
							<Heading size="sm">Program</Heading>
							<Select
								placeholder="All"
								bg="#5a60adcc"
								border="none"
								onChange={(e) => {
									const tempFilter: any = { ...filter };
									tempFilter.program = e.target.value;
									setFilter(tempFilter);
								}}
							>
								{programOptions.map((option) => (
									<option
										key={option}
										value={option}
										disabled={
											!enabledOptions.program.includes(
												option
											)
										}
									>
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
									transition="all 0.15s ease-in"
									_hover={{
										transform: "scale(1.05)",
										// cursor: "pointer",
									}}
									h="100%"
									borderRadius="lg"
									overflow="hidden"
								>
									{/* {posting.image?.url ? (
									<FlipBox
										src={posting.image?.url}
										description={posting.description}
									/>
								) : ( */}
									<Box
										h={160}
										bg="#5A60ADCC"
										p={4}
										overflowY="hidden"
									>
										<Text>{posting.description}</Text>
									</Box>
									{/* )} */}
									<Stack
										bg="brand.darkerBlue"
										spacing={0}
										px={4}
										py={2}
										justify="center"
										flex={1}
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
			<Box
				h={100}
				bg="linear-gradient(180deg, #A8B2FF 20%, transparent 100%)"
			/>
		</>
	);
}

export async function getServerSideProps() {
	const props = {
		postings: (await getJobPostings()).sort((a, b) =>
			a.name.localeCompare(b.name, "en")
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
