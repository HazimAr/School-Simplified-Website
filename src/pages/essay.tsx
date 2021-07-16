import { Image, Heading, Flex, Text, Box, Link } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Essay(): JSX.Element {
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
							Uh Oh!
						</Heading>
						<Text
							fontSize="xl"
							my={3}
							textAlign={{ base: "center", lg: "left" }}
						>
							Looks like you found a page that doesn't exist!
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
						src="/undraw/404.svg"
						w={{ base: 200, sm: 300, md: 525 }}
						mt={{ base: 5, lg: 0 }}
					/>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
