import { Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
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
					<Flex
						justify="center"
						spacing={{ base: 0, lg: 10 }}
						flexDir={{ base: "column", lg: "row" }}
					>
						<Card
							title="Free Notes"
							description="We offer extensive, regularly updated notes for a variety of classes!"
							button="Get Notes"
							href="/notes"
						/>
						<VStack
							rounded={rounded}
							bg="brand.transparent2"
							minH={300}
							my={{ base: 10, lg: 0 }}
							mx={{ base: 0, lg: 10 }}
							w="100%"
							justify="center"
							boxShadow="lg"
							p={10}
							backdropFilter="blur(5px)"
						>
							<Heading as="h1" color="brand.purple.dark">
								Free Tutoring
							</Heading>
							<Text textAlign="center" color="brand.purple.light">
								We offer private, personalized tutoring for
								every subject and AP!
							</Text>
							<Link href="/tutoring">
								<Button>Sign Up</Button>
							</Link>
						</VStack>
						<Card
							title="Free Essay Revision"
							description="We offer comprehensive proofreading for all types of writing!"
							button="Submit Essay"
							href="/essay"
						/>

						{/* <Card
						title="HS/College Prep"
						description="Lorem ipsum dolor sit amet consectetur elit. Assumenda minima deleniti Lorem ipsum"
						button="Get Free Help"
						href="/prep"
					/> */}
					</Flex>
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
			backdropFilter="blur(5px)"
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
