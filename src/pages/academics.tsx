import { Box, Heading, Link, Text, Flex } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import {rounded} from "@styles/theme";

const sections = [
	{
		title: "Chat-Helping & Essay Help",
		description:
			"Essay Help: Revising and reviewing essays, providing writing tips to students. Chat-Helping: Monitoring tickets and designated subject channels, answering text questions",
		link: "https://forms.gle/7Qceft4HgrtLPMmP6",
	},
	{
		title: "Notes & Prep",
		description:
			"Notes: Creating notes, finding notes, scanning notes, etc. for school subjects. Prep: Creating resources and holding events regarding high school and college preparation",
		link: "https://forms.gle/HuwTM42uKQsVAvPTA",
	},
	{
		title: "Tutoring",
		description:
			"Provide high-quality, free educational help to high school students across the world",
		link: "https://forms.gle/AfxmXmGf6fYsW4fKA",
	},
];

export default function Academics(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Flex justify="center" flexDir="column" align="center">
					{sections.map((section) => {
						return (
							<Box key={section.title} my="30px" maxW="55ch" bg="brand.transparent" rounded={rounded} p="20px">
								<Heading>{section.title}</Heading>
								<Text my="10px">{section.description}</Text>
								<Link href={section.link} isExternal>
									<Button>Join Now!</Button>
								</Link>
							</Box>
						);
					})}
				</Flex>
			</ContainerInside>
		</Container>
	);
}
