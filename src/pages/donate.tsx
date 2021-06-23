import { Text, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Donate(): JSX.Element {
	return (
		<>
			<Container bg="brand.purple.dark">
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						maxW="1200px"
						w="100%"
						textAlign="left"
						flexWrap="wrap"
						py="10px"
					>
						<Box maxW="400px">
							<Heading size="md" py="15px">
								Support Us
							</Heading>
							<Text>
								Your donation helps us as a small teen run ...
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</Text>
						</Box>
						<Box bg="red" boxSize="300px" borderRadius="25px" />
					</Flex>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside py="25px">
					<Heading size="lg">Why support us?</Heading>
					<Flex
						justify="space-between"
						maxW="1200px"
						w="100%"
						textAlign="left"
						py="10px"
					>
						<Box
							p="20px"
							bg="red.500"
							mr="20px"
							borderRadius="25px"
						>
							<Heading size="md" py="15px">
								Services
							</Heading>
							<Text>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</Text>
						</Box>
						<Spacer />
						<Box
							p="20px"
							bg="green.500"
							mr="20px"
							borderRadius="25px"
						>
							<Heading size="md" py="15px">
								Community
							</Heading>
							<Text>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</Text>
						</Box>
						<Spacer />
						<Box p="20px" bg="red.500" borderRadius="25px">
							<Heading size="md" py="15px">
								Team
							</Heading>
							<Text>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</Text>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
