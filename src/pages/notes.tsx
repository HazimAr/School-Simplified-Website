import { getSubjects } from "@api/notion";
import { Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import NotesSection from "@components/resources/notes_section";
import { AllSubjects } from "types";

export default function Resources({ subjects }: AllSubjects): JSX.Element {
	return (
		<>
			<ContainerBackground src="/timmy/lofi_timmy.png">
				<ContainerInside py={24} my={5}>
					<HStack spacing={8}>
						<Image
							src="/timmy/blogtimmy.png"
							alt="Timmy holding a book"
							h="33vw"
						/>
						<Stack textAlign="left" flex={1} spacing={4}>
							<Heading as="h1" mb={3} size="3xl">
								Notes
							</Heading>
							<Text fontSize={24}>
								All the top-notch notes you'll ever want for
								your academic needs!
							</Text>
							<Text fontSize={24}>
								To get started, select a subject from the
								buttons below!
							</Text>
						</Stack>
					</HStack>
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
