import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import NextLink from "@components/nextChakra";
import React from "react";

export default function Here() {
	return (
		<Container
			bg="linear-gradient(180deg, rgba(167, 178, 255, 0.5) 0%, rgba(90, 96, 173, 0.25) 100%);"
			py="50px"
		>
			<ContainerInside>
				<Flex
					justify="center"
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
						ml={{ base: 0, lg: "25px" }}
					/>
					<Card
						title="Free Essay Revision"
						description="We offer comprehensive proofreading for all types of writing!"
						button="Submit Essay"
						href="/essay"
						mt={{ base: "25px", lg: 0 }}
						ml={{ base: 0, lg: "25px" }}
					/>
					<Card
						title="Free Homework Help"
						description="We offer comprehensive proofreading for all types of writing!"
						button="Submit Essay"
						href="/essay"
						mt={{ base: "25px", lg: 0 }}
						ml={{ base: 0, lg: "25px" }}
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
			bg="brand.transparent"
			w="100%"
			justify="center"
			boxShadow="lg"
			p={5}
			{...rest}
		>
			<Heading as="h1" color="brand.purple.dark" size="lg">
				{title}
			</Heading>
			<Text>{description}</Text>
			<NextLink href={href}>
				<Button>{button}</Button>
			</NextLink>
		</VStack>
	);
}
