import { getJobPostings } from "@api/notion";
import {
	Center,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	VStack,
	Image,
	Box,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
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
	console.log("postings recieved!", postings);

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

								<Text fontSize="lg" textAlign="justify">
									<b>
										As the largest student run nonprofit in
										North America, School Simplified
										provides you with a variety of
										opportunities. Become a part of our team
										today and together we can build a better
										future! To get started, filter using our
										options below!
									</b>
								</Text>
							</VStack>
						</Stack>
					</ContainerInside>
				</Center>
			</ContainerBackground>
			<Container mt={20}>
				<ContainerInside>
					<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
						{postings.map((posting) => (
							<Stack
								key={posting.description}
								spacing={0}
								textAlign="left"
							>
								<FlipBox src={posting.image?.url} />
								<Stack
									bg="brand.blue"
									spacing={0}
									px={4}
									py={2}
									borderBottomRadius="lg"
								>
									<Text fontSize="sm">{posting.area}</Text>
									<Heading fontSize="lg">
										{posting.name}
									</Heading>
									<Text fontSize="sm">{posting.program}</Text>
								</Stack>
							</Stack>
						))}
					</SimpleGrid>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const props = { postings: await getJobPostings() };
	return { props, revalidate: 60 };
}

function FlipBox({ src }) {
	return (
		<Box
			bg="transparent"
			w="400px"
			h="200px"
			style={{ perspective: "1000px" }}
		>
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
				>
					<Image src={src} alt="logo" w="400px" h="200px" />
				</Box>
				<Box
					pos="absolute"
					w="100%"
					h="100%"
					style={{ backfaceVisibility: "hidden" }}
					transform="rotateY(180deg)"
					bg="blue"
				>
					<Text>Back</Text>
				</Box>
			</Box>
		</Box>
	);
}
