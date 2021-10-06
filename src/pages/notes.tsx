import { getSubjects } from "@api/notion";
import { Box, Flex, Heading, Image, Text, Center } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NotesSection from "@components/resources/notes_section";
import { AllSubjects } from "types";

export default function Resources({ subjects }: AllSubjects): JSX.Element {
	return (
		<>
			{/* <Container
				backgroundImage="/timmy/lofi_timmy.png"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				filter="brightness(0.8)"
			>
				<ContainerInside py="15vh" my={5}>
					<Box textAlign="center">
						<Heading as="h1" mb={3} fontSize={100}>
							Notes
						</Heading>
						<Center>
							<Text fontSize={30} maxW="30ch">
								All the top-notch notes you'll ever want for
								your academic needs!
							</Text>
						</Center>
					</Box>
				</ContainerInside>
			</Container> */}
			<Container h="15vh">
			
					<Image
						src="/timmy/lofi_timmy.png"
						objectFit="cover"
						objectPosition="center"
						w="100%"
						h="100%"
						opacity={0.25}
						position="absolute"
					/>
			

				<ContainerInside my={5}>
					<Box textAlign="center">
						<Heading as="h1" mb={3} fontSize={100}>
							Notes
						</Heading>
						<Center>
							<Text fontSize={30} maxW="30ch">
								All the top-notch notes you'll ever want for
								your academic needs!
							</Text>
						</Center>
					</Box>
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
