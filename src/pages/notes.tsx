import { getSubjects } from "@api/notion";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import NotesSection from "@components/resources/notes_section";
import { AllSubjects } from "types";

export default function Resources({ subjects=null }: AllSubjects): JSX.Element {
	return (
		<>
			<ContainerBackground src="/timmy/lofi_timmy.png">
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
			</ContainerBackground>

			<NotesSection subjects={subjects} />
		</>
	);
}

export async function getStaticProps() {
	const subjects = await getSubjects();
	return { props: { subjects }, revalidate: 60 };
}
