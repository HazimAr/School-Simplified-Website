import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Head from "next/head";

export default function Four(): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | 500 Error</title>
			</Head>
			<Container>
				<ContainerInside py={5}>
					<Flex
						flexDir={{ base: "column", md: "row" }}
						alignItems="center"
						justifyContent="space-between"
					>
						<Box>
							<Heading
								size="2xl"
								textAlign={{ base: "center", md: "left" }}
							>
								Oh No!
							</Heading>
							<Text
								fontSize="xl"
								my={3}
								textAlign={{ base: "center", md: "left" }}
							>
								It looks like a dog has eaten the page you're
								looking for. Click below to return to run away
								before it eats another page...
							</Text>
							<Text textAlign={{ base: "center", md: "left" }}>
								If a page is supposed to be here, please{" "}
								<NextLink href="/contact" color="brand.purple.dark">
									let us know
								</NextLink>
								.
							</Text>
							<NextLink href="/" _hover={{ cursor: "auto" }}>
								<Button _hover={{ cursor: "pointer" }} mt={3}>
									Return to Home
								</Button>
							</NextLink>
						</Box>
						<Image
							src="/timmy/dog.png"
							alt="timmy dog"
							w={{ base: 200, sm: 250, md: 300 }}
							mt={{ base: 5, lg: 0 }}
						/>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
