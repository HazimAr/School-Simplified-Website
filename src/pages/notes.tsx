import { getAllSubjects } from "@api/notion";
import {
	Box,
	Center,
	Heading,
	HStack,
	Image,
	Spacer,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NotesViewer from "@components/resources/notesViewer";
// import NotesSection from "@components/resources/notes_section";
import { AllSubjects } from "types";

export default function Notes({ subjects }: AllSubjects): JSX.Element {
	const showTimmy = useBreakpointValue({ base: false, md: true });
	return (
		<>
			<Container
				py={10}
				bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(131, 145, 255, 0.71) 100%)"
			>
				<ContainerInside mb={8}>
					<Center mb={8}>
						<HStack my={25}>
							{showTimmy && (
								<>
									<Image
										src="/timmy/blogtimmy.png"
										alt="Timmy holding a book"
										w={{ sm: 80, md: 120, lg: 180 }}
										display={{ base: "none", md: "block" }}
									/>
									<Spacer maxW={{ md: 5, lg: 20 }} />
								</>
							)}
							<Box textAlign="left">
								<Heading size="lg">Notes</Heading>
								<Text mt={1.5}>
									All the top-notch notes you'll ever want for
									your academic needs!
								</Text>
								<Text mt={1.5}>
									To get started, select a subject from the
									buttons below!
								</Text>
							</Box>
						</HStack>
					</Center>
					<NotesViewer subjects={subjects} />
				</ContainerInside>
			</Container>

			{/* <NotesSection subjects={subjects} /> */}
		</>
	);
}

export async function getStaticProps() {
	const props = await getAllSubjects();
	// for caching results of costly computations
	const valueCache = {};
	props.subjects.sort((a, b) => {
		// find number of notes in each subject
		const aNotes: number =
			valueCache[a.title] || // fetch cached value
			(valueCache[a.title] = a.content // or generate new value and store it
				.flatMap((value) => value.content)
				.flatMap((value) => value.content).length);
		const bNotes: number =
			valueCache[b.title] || // same as with aNotes
			(valueCache[b.title] = b.content
				.flatMap((value) => value.content)
				.flatMap((value) => value.content).length);

		// simple comparison for descending sort
		return bNotes - aNotes;
	});
	return { props, revalidate: 60 };
}
