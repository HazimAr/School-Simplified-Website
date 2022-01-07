import { getAllSubjects } from "@api/notion";
import {
	Center,
	Container,
	Flex,
	Heading,
	HStack,
	Image,
	Spacer,
	Stack,
	Text,
} from "@chakra-ui/react";
import ContainerInside from "@components/containerInside";
import NotesViewer from "@components/resources/notesViewer";
// import NotesSection from "@components/resources/notes_section";
import { AllSubjects } from "types";

export default function Resources({ subjects }: AllSubjects): JSX.Element {
	return (
		<>
			<Container
				maxW="%100"
				py={10}
				bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(131, 145, 255, 0.71) 100%)"
			>
				<ContainerInside mb={8} maxW="%80">
					<Center>
						<HStack>
							<Image
								src="/timmy/blogtimmy.png"
								alt="Timmy holding a book"
								w={{ sm: 80, md: 120, lg: 180 }}
								display={{ base: "none", md: "block" }}
							/>
							<Spacer maxW={{ md: 5, lg: 20 }} />
							<Flex align="stretch">
								<Stack align="start" textAlign="left">
									<Heading size="lg">Notes</Heading>
									<Text mt={6}>
										All the top-notch notes you'll ever want
										for your academic needs!
									</Text>
									<Text mt={6}>
										To get started, select a subject from
										the buttons below!
									</Text>
								</Stack>
							</Flex>
						</HStack>
					</Center>
				</ContainerInside>
				<NotesViewer subjects={subjects} />
			</Container>

			{/* <NotesSection subjects={subjects} /> */}
		</>
	);
}

export async function getStaticProps() {
	const props = await getAllSubjects();
	return { props, revalidate: 60 };
}
