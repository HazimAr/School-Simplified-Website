import {
	Box,
	Text,
	Heading,
	Wrap,
	VStack,
	Flex,
	Spacer,
	Divider,
	Container,
	Grid,
	GridItem,
	Center,
	Icon,
	Link,
} from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

export default function Home(): JSX.Element {
	return (
		<Box>
			<Container bg="brand.purple.dark" maxW="xlg">
				<Text fontSize="6xl">X</Text>
			</Container>
			{/* art box */}
			<Flex textAlign="left">
				<Wrap spacing="40px" justify="left" margin="20px">
					<VStack spacing={4}>
						<Heading size="md">Our Community</Heading>
						<Container maxW="container.sm">
							<Heading size="sm">
								{" "}
								Our organization features a global community of
								over 60,000 teenagers! Diverse, open-minded, and
								inclusive, our students enjoy conversing in an
								equitable environment where every new
								acquaintance becomes a longtime friend!
							</Heading>
						</Container>

						<Box
							w="43vh"
							h="48vh"
							backgroundColor="#e0d5ff"
							padding="5px"
							rounded="50px"
						>
							{/* community art goes here */}
						</Box>

						<Text fontSize="sm">
							{" "}
							Artwork from our event winners.{" "}
						</Text>
					</VStack>
				</Wrap>

				<Spacer />

				<Wrap margin="30px" spacing="40px">
					<VStack spacing={6}>
						{/* info boxes */}
						<Box
							w="32vh"
							h="32vh"
							backgroundColor="#e0d5ff"
							padding="7px"
							pl="3vh"
							rounded="40px"
							d="flex"
							alignContent="left"
						>
							<Text fontSize="3xl">Events</Text>
						</Box>

						<Box
							w="32vh"
							h="32vh"
							backgroundColor="#e0d5ff"
							padding="7px"
							pl="3vh"
							rounded="40px"
							d="flex"
							alignContent="left"
						>
							<Text fontSize="3xl">Music</Text>
						</Box>

						<Box
							w="32vh"
							h="32vh"
							backgroundColor="#e0d5ff"
							padding="7px"
							pl="3vh"
							rounded="40px"
							d="flex"
							alignContent="left"
						>
							<Text fontSize="3xl"> Friends </Text>
						</Box>
					</VStack>
				</Wrap>
			</Flex>

			<Divider orientation="horizontal" borderColor="white" />

			<Flex textAlign="left">
				<Wrap spacing="40px" justify="left" margin="25px">
					{/* disc box */}
					<Box
						w="43vh"
						h="48vh"
						bg="brand.transparent"
						padding="13px"
						rounded="50px"
					>
						<Center>
							<Link
								href="https://discord.com/invite/ghUAx6AQU4"
								isExternal
							>
								<Icon as={FaDiscord} boxSize="200px" />
							</Link>
						</Center>

						<Text fontSize="2.9vh" color="#5A60AD">
							Join our Discord. Come for the academic help, stay
							for the events, live music, and friends!
						</Text>
					</Box>
				</Wrap>

				<Spacer />
				<Wrap spacing="30px" margin="20px">
					{/* members box */}
					<Box>
						<Heading mb="5vh"> Our Members </Heading>
						<Heading size="sm">
							Our community consists of members ranging from
							teenagers to teachers alike.
						</Heading>
					</Box>
				</Wrap>
			</Flex>

			<Divider orientation="horizontal" borderColor="white" />
			{/* staff box */}
			<Grid templateColumns="repeat(5, 1fr)" gap={5} margin="15px">
				<GridItem colSpan={1} h="10" mb="8vh">
					<Heading mb="3vh"> Our Staff </Heading>

					<Heading size="sm">School Simplified staff </Heading>
				</GridItem>

				<GridItem colStart={4} colEnd={6} h="10">
					<Heading as="h1" size="4xl">
						X
					</Heading>
				</GridItem>
			</Grid>

			<Divider orientation="horizontal" borderColor="white" />
			<Flex textAlign="left">
				<Wrap spacing="40px" justify="left" margin="20px">
					<VStack spacing={4}>
						<Heading>Our Socials</Heading>
						<Container maxW="container.sm">
							<Heading size="sm">
								Our organization features a global community of
								over 60,000 teenagers! Diverse, open-minded, and
								inclusive, our students enjoy conversing in an
								equitable environment where every new
								acquaintance becomes a longtime friend!
							</Heading>
						</Container>
					</VStack>
				</Wrap>
			</Flex>
		</Box>
	);
}
