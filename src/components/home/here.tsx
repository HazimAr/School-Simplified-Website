import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
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
					<Card
						title="Free Tutoring"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/tutoring"
					/>

					<HStack justify="center" spacing={10}>
						<Card
							title="Essay Revisions"
							description="Our team consists of exceptional writers, all that go through a rigorous process to establish themselves as verified proofreaders. Simply fill out the form with basic details involving your essay and a proofreader will make the necessary edits"
							button="Get Free Help"
							href="/essay"
						/>
						<Card
							title="Resources"
							description="School Simplified has hundreds of high-quality notes ranging across many different school subjects. Our library of notes will consistently be updating to cover as many subjects as possible"
							button="Get Free Help"
							href="/resources"
						/>
						{/* <Card
						title="HS/College Prep"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/prep"
					/> */}
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
			minH={300}
			w="100%"
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
