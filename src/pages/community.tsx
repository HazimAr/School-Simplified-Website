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
    Image,

} from "@chakra-ui/react";

export default function Home(): JSX.Element {
	return (
		<Box>
            <Container bg="brand.purple.dark" maxW='xlg'>
                <Text fontSize='6xl'>X</Text>
            </Container>
			{/* art box */}
			<Flex textAlign="left">
				<Wrap spacing="40px" justify="left" margin="20px">
					<VStack spacing={4}>
						<Heading size="md">Our Community</Heading>
                        <Container maxW='container.sm'>
                            <Text>
                                {" "}
                                Our organization features a global community of over
                                60,000 teenagers! Diverse, open-minded, and
                                inclusive, our students enjoy conversing in an
                                equitable environment where every new acquaintance
                                becomes a longtime friend!
                            </Text>
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
						backgroundColor="#d8b2fb"
						padding="15px"
						rounded="50px"
					>

						{/* photo goes here */}
                        <Image
                            boxSize="25vh"
                            objectFit="cover"
                            src=""
                            alt="Discord"
                        />

						<Text fontSize='3vh'>
							{" "}
							Join our Discord. Come for the academic help, stay
							for the events, live music, and friends!{" "}
						</Text>
					</Box>
				</Wrap>

				<Spacer />
				<Wrap spacing="30px" margin="20px">
					{/* members box */}
					<Box>
						<Heading mb="8vh"> Our Members </Heading>
						<Text>
							Our community consists of members ranging from
							teenagers to teachers alike.{" "}
						</Text>
					</Box>
				</Wrap>
			</Flex>

			<Divider orientation="horizontal" borderColor="white" />
					{/* staff box */}
			        <Grid templateColumns="repeat(5, 1fr)" gap={5} margin='15px'>
                        <GridItem colSpan={1} h="10" mb='8vh'>
                            <Heading mb="3vh"> Our Staff </Heading>

                            <Text>School Simplified staff </Text>
                        </GridItem>

                        <GridItem colStart={4} colEnd={6} h="10">
                            <Heading as='h1' size='4xl'> X </Heading>
                        </GridItem>
                    </Grid>

            <Divider orientation="horizontal" borderColor="white" />
            <Flex textAlign="left">
				<Wrap spacing="40px" justify="left" margin="20px">
                    <VStack spacing={4}>
                        <Heading size="md">Our Socials</Heading>
                            <Container maxW='container.sm'>
                                <Text fontSize='lg'>
                                    {" "}
                                    Our organization features a global community of over
                                    60,000 teenagers! Diverse, open-minded, and
                                    inclusive, our students enjoy conversing in an
                                    equitable environment where every new acquaintance
                                    becomes a longtime friend!
                                </Text>
                            </Container>
                    </VStack>
                </Wrap>
            </Flex>

		</Box>
	);
}
