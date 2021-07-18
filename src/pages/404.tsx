import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Four(): JSX.Element {
	return (
		<Container>
			<ContainerInside py={5}>
				<Flex
					flexDir={{ base: "column", lg: "row" }}
					alignItems="center"
					justifyContent="space-between"
				>
					<Box>
						<Heading
							size="2xl"
							textAlign={{ base: "center", lg: "left" }}
						>
							Oh No!
						</Heading>
						<Text
							fontSize="xl"
							my={3}
							textAlign={{ base: "center", lg: "left" }}
						>
							It looks like a dog has eaten the page you're
							looking for. Click below to return to run away
							before it eats another page...
						</Text>
						<Text textAlign={{ base: "center", lg: "left" }}>
							If a page is supposed to be here, please{" "}
							<Link href="/contact" color="brand.purple.dark">
								let us know
							</Link>
							.
						</Text>
					</Box>
					<Image
						src="/timmy/dog.png"
						w={{ base: 200, sm: 300, md: 525 }}
						mt={{ base: 5, lg: 0 }}
					/>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
