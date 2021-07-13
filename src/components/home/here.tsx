import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import React from "react";

export default function Here() {
	return (
		<Container bg="brand.transparent" py="50px" mb="25px">
			<ContainerInside>
				<VStack spacing={10}>
					<HStack spacing={10}>
						<Card
							title="Free Tutoring"
							description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
							button="Get Free Help"
						/>
						<Card
							title="Essay Revisions"
							description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
							button="Get Free Help"
						/>
					</HStack>
					<HStack spacing={10}>
						<Card
							title="College Prep"
							description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
							button="Get Free Help"
						/>
						<Card
							title="SAT Prep"
							description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
							button="Get Free Help"
						/>
					</HStack>
				</VStack>
			</ContainerInside>
		</Container>
	);
}

function Card({
	title,
	description,
	button,
}: {
	title: string;
	description: string;
	button: string;
}): JSX.Element {
	return (
		<VStack
			rounded={rounded}
			bg="brand.transparent2"
			h={250}
			justify="center"
			boxShadow="lg"
		>
			<Heading as="h1" color="brand.purple.dark">
				{title}
			</Heading>
			<Text color="brand.purple.light">{description}</Text>
			<Button>{button}</Button>
		</VStack>
	);
}
