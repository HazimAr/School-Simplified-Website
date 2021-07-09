import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import React from "react";
const size = "16px";
const textSize = "12px";

export default function Here() {
	return (
		<Container bg="brand.transparent" py="50px" mb="25px">
			<ContainerInside>
				{/* <Flex
					justify="center"
					textAlign="left"
					flexDir={{ base: "column-reverse", md: "row" }}
				>
					<Flex mx="25px" align="center" justify="center">
						<Image h="300px" src="/undraw/exams.svg" />
					</Flex>

					<Flex mx="25px" justify="center">
						<Box
							maxW="400px"
							textAlign={{ base: "center", md: "left" }}
						>
							<Box>
								<Heading size="md">Here's What You Get</Heading>
								<Text fontSize="14px">
									Lorem ipsum dolor sit amet consectetur Lorem
									ipsum dolor sit amet consectetur adipisicing
									elit. Assumenda minima deleniti Lorem ipsum
								</Text>
							</Box>
							<Flex my="10px">
								<Box maxW="50%" mr={5}>
									<Heading size={size}>Free Tutoring</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
								<Box maxW="50%">
									<Heading size={size}>
										Essay Revisions
									</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
							</Flex>
							<Flex my="10px">
								<Box maxW="50%" mr={5}>
									<Heading size={size}>College Prep</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
								<Box maxW="50%">
									<Heading size={size}>SAT Prep</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Flex> */}
				<VStack>
					<HStack>
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
					<HStack>
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
		>
			<Heading as="h1" color="brand.purple.dark">
				{title}
			</Heading>
			<Text color="brand.purple.light">{description}</Text>
			<Button>{button}</Button>
		</VStack>
	);
}
