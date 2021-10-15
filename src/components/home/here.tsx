import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import NextLink from "@components/nextChakra";
import React from "react";

export default function Here() {
	return (
		<Container bg="brand.transparent" py="50px" mb="25px">
			<ContainerInside>
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
					<Card
						title="Free Tutoring"
						description="	We offer private, personalized tutoring for every
							subject and AP!"
						button="Sign Up"
						href="/tutoring"
						mt={{ base: "25px", lg: 0 }}
					/>
					<Card
						title="Free Essay Revision"
						description="We offer comprehensive proofreading for all types of writing!"
						button="Submit Essay"
						href="/essay"
						mt={{ base: "25px", lg: 0 }}
					/>
					<Card
						title="Free Essay Revision"
						description="We offer comprehensive proofreading for all types of writing!"
						button="Submit Essay"
						href="/essay"
						mt={{ base: "25px", lg: 0 }}
					/>
				</Flex>
			</ContainerInside>
		</Container>
	);
}

function Card(props) {
	const { title, description, button, href, ...rest } = props;
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
			{...rest}
		>
			<Heading as="h1" color="brand.purple.dark">
				{title}
			</Heading>
			<Text textAlign="center" color="brand.purple.light">
				{description}
			</Text>
			<NextLink href={href}>
				<Button>{button}</Button>
			</NextLink>
		</VStack>
	);
}
