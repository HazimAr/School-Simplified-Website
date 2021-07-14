import { Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import React from "react";

export default function Here() {
	return (
		<Container bg="brand.transparent" py="50px" mb="25px">
			<ContainerInside>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
					<Card
						title="Free Tutoring"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/tutoring"
					/>
					<Card
						title="Essay Revisions"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/essay"
					/>
					<Card
						title="HS/College Prep"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/prep"
					/>
					<Card
						title="Resources"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/resources"
					/>
				</SimpleGrid>
			</ContainerInside>
		</Container>
	);
}

function Card({
	title,
	description,
	button,
	href,
}: {
	title: string;
	description: string;
	button: string;
	href: string;
}): JSX.Element {
	return (
		<VStack
			rounded={rounded}
			bg="brand.transparent2"
			minH={250}
			h="fit-content"
			justify="center"
			boxShadow="lg"
			p={10}
		>
			<Heading as="h1" color="brand.purple.dark">
				{title}
			</Heading>
			<Text color="brand.purple.light">{description}</Text>
			<Link href={href}>
				<Button>{button}</Button>
			</Link>
		</VStack>
	);
}
