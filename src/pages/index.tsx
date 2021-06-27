import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Home(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Flex padding="90px">
					<Container w="1200px" maxW="1000px">
						<Flex
							w="100%"
							h="400px"
							bg="brand.transparent"
							justify="space-between"
							align="center"
						>
							<Box>
								<Heading size="lg">
									The key to your
									<br />
									success.
								</Heading>
								<Text fontSize="lg" mt="auto">
									A non-profit here to help you with all your
									academic and extracurricular needs.
									Everything you need is simply one click
									away.
								</Text>
							</Box>
							<Image src="./key.png" />
						</Flex>
					</Container>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
