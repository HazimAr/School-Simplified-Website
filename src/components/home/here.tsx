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
				<VStack spacing={-5}>
					<HStack
						justify="center"
						spacing={{ base: 0, lg: 10 }}
						flexDir={{ base: "column", lg: "row" }}
						
					>
						<Card
							title="Free Essay Revisions"
							description="We offer in-depth proofreading and writing tips/tricks!"
							button="Submit Essay"
							href="/essay"
						/>
						<VStack
							rounded={rounded}
							bg="brand.transparent2"
							my={5}
							minH={300}
							w="100%"
							justify="center"
							boxShadow="2xl"
							p={10}
						>
							<Heading as="h1" color="brand.purple.dark">
								Free Tutoring
							</Heading>
							<Text textAlign="center" color="brand.purple.light">
								We offer private tutoring in all regular classes
								and APs!
							</Text>
							<Link href="/tutoring">
								<Button>Sign Up</Button>
							</Link>
						</VStack>

						<Card
							title="Free Notes"
							description="We offer hundreds of high-quality, regularly updated notes in many regular subjects and APs!"
							button="Get Notes"
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
			my={5}
			minH={300}
			w="100%"
			justify="center"
			
			boxShadow="lg"
			p={10}
		>
			<Heading as="h1" color="brand.purple.dark">
				{title}
			</Heading>
			<Text textAlign="center" color="brand.purple.light">
				{description}
			</Text>
			<Link href={href}>
				<Button>{button}</Button>
			</Link>
		</VStack>
	);
}
