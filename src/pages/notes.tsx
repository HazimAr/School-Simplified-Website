import { getSubjects } from "@api/notion";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NotesSection from "@components/resources/notes_section";
import Head from "next/head";
import { AllSubjects } from "types";

/**
 * Notes and stuff
 *
 * @returns the Resources page
 */
export default function Resources({ subjects }: AllSubjects): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Resources</title>
			</Head>
			<Container bg="brand.transparent">
				<ContainerInside my={5}>
					<Flex
						flexDir={{ base: "column", sm: "row" }}
						alignItems="center"
					>
						<Box textAlign={{ base: "center", sm: "left" }}>
							<Heading as="h1" mb={3}>
								Notes
							</Heading>
							<Text fontSize={20}>
								All the top-notch notes you'll ever want for
								your academic needs!
							</Text>
						</Box>
						<Image
							src="/timmy/17.png"
							alt="Timmy with book"
							w={{ base: 150, md: 250, lg: 350 }}
							mt={{ base: 5, sm: 0 }}
							ml={{ base: 5, sm: 50, md: 70 }}
						/>
					</Flex>
				</ContainerInside>
			</Container>

			<NotesSection subjects={subjects} />

			{/* <Container bg="brand.transparent">
				<ContainerInside my={5}>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						flexDir={{ base: "column", sm: "row" }}
					>
						<Image
							src="/undraw/notes.svg"
							w={{ base: 200, md: 300, lg: 400 }}
							mb={{ base: 5, sm: 0 }}
						/>
						<Box textAlign={{ base: "center", md: "right" }}>
							<Heading mb={3}>
								Want community service hours?
							</Heading>
							<Text>
								Earn official volunteer hours by submitting
								notes to help our community!
							</Text>
						</Box>
					</Flex>
				</ContainerInside>
			</Container> */}
		</>
	);
}

export async function getStaticProps() {
	const subjects = await getSubjects();
	return { props: { subjects }, revalidate: 60 };
}
