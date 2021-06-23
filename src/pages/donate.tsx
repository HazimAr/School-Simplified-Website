import { Text, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import Container from "@components/container";

export default function Donate(): JSX.Element {
	return (
		<Box>
			<Container bg="brand.purple.dark">
				<Flex
					justify="space-between"
					align="center"
					maxW="1200px"
					w="100%"
					mx="50px"
					textAlign="left"
					flexWrap="wrap"
					py="10px"
				>
					<Box>
						<Heading size="md" py="15px">
							Support Us
						</Heading>
						<Text>
							Your donation helps us as a small teen run ... Lorem
							ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat.
						</Text>
					</Box>
				</Flex>
			</Container>

			<Container py="10px">
				<Flex
					justify="space-between"
					maxW="1200px"
					w="100%"
					mx="50px"
					textAlign="left"
					py="10px"
				>
					<Box p="20px" bg="red.500" mr="20px" borderRadius="25px">
						<Heading size="md" py="15px">
							Services
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</Text>
					</Box>
					<Spacer />
					<Box p="20px" bg="green.500" mr="20px" borderRadius="25px">
						<Heading size="md" py="15px">
							Community
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</Text>
					</Box>
					<Spacer />
					<Box p="20px" bg="red.500" borderRadius="25px">
						<Heading size="md" py="15px">
							Team
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.
						</Text>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}
