import {
	Box,
	Center,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	Icon,
	Link,
	Spacer,
	Text,
	VStack,
	Wrap,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaDiscord } from "react-icons/fa";
import {
	RiFacebookBoxLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
	RiSpotifyLine,
	RiTwitterLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

export default function Home(): JSX.Element {
	return (
		<>
			<Container bg="brand.purple.dark" maxW="xlg">
				<ContainerInside>
					<Text fontSize="6xl">X</Text>
				</ContainerInside>
			</Container>

			{/* art box */}
			<Container>
				<ContainerInside>
					<Flex textAlign="left">
						<Wrap spacing="40px" mt="20px">
							<VStack spacing={4} textAlign="left">
								<Heading size="md">Our Community</Heading>

								<Container maxW="container.sm">
									<Heading size="sm">
										Our organization features a global
										community of over 60,000 teenagers!
										Diverse, open-minded, and inclusive, our
										students enjoy conversing in an
										equitable environment where every new
										acquaintance becomes a longtime friend!
									</Heading>
								</Container>
								<Flex
									flexDir="column"
									justify="center"
									align="center"
								>
									<Box
										boxSize="500px"
										backgroundColor="brand.transparent2"
										padding="5px"
										rounded="65px"
									>
										{/* community art goes here */}
									</Box>

									<Text fontSize="sm">
										Artwork from our event winners.
									</Text>
								</Flex>
							</VStack>
						</Wrap>

						<Spacer />

						<Wrap margin="30px" spacing="40px">
							<VStack spacing={6}>
								{/* info boxes */}
								<Flex
									boxSize="300px"
									backgroundColor="brand.transparent"
									padding="20px"
									rounded="40px"
									alignContent="left"
								>
									<Heading>Events</Heading>
								</Flex>

								<Flex
									boxSize="300px"
									backgroundColor="brand.transparent"
									padding="20px"
									rounded="40px"
									alignContent="left"
								>
									<Heading>Music</Heading>
								</Flex>

								<Flex
									boxSize="300px"
									backgroundColor="brand.transparent"
									padding="20px"
									rounded="40px"
									alignContent="left"
								>
									<Heading> Friends </Heading>
								</Flex>
							</VStack>
						</Wrap>
					</Flex>
				</ContainerInside>
			</Container>

			<Divider orientation="horizontal" borderColor="white" />
			<Container>
				<ContainerInside>
					<Flex textAlign="left">
						<Wrap spacing="40px" justify="left" margin="25px">
							{/* disc box */}
							<Box
								boxSize="500px"
								bg="brand.transparent"
								padding="13px"
								rounded="60px"
							>
								<Center>
									<Link
										href="https://discord.com/invite/school"
										isExternal
									>
										<Icon
											as={FaDiscord}
											boxSize="320px"
											color="brand.transparent2"
										/>
									</Link>
								</Center>

								<Text fontSize="27px" color="#5A60AD">
									Join our Discord. Come for the academic
									help, stay for the events, live music, and
									friends!
								</Text>
							</Box>
						</Wrap>

						<Spacer />
						<Wrap spacing="30px" margin="20px">
							{/* members box */}
							<Box>
								<Heading mb="36px"> Our Members </Heading>
								<Heading size="sm">
									Our community consists of members ranging
									from teenagers to teachers alike.
								</Heading>
							</Box>
						</Wrap>
					</Flex>
				</ContainerInside>
			</Container>

			<Divider orientation="horizontal" borderColor="white" />

			<Container>
				<ContainerInside>
					{/* staff box */}
					<Grid
						templateColumns="repeat(5, 1fr)"
						gap={5}
						margin="10px"
					>
						<GridItem colSpan={1} h="10" mb="58px">
							<Heading mb="22px"> Our Staff </Heading>

							<Heading fontSize="18px">
								School Simplified staff{" "}
							</Heading>
						</GridItem>

						<GridItem colStart={4} colEnd={6} h="10">
							<Heading as="h1" size="4xl">
								X
							</Heading>
						</GridItem>
					</Grid>
				</ContainerInside>
			</Container>

			<Divider orientation="horizontal" borderColor="white" />

			<Container>
				<ContainerInside>
					<Flex textAlign="left">
						<Wrap spacing="40px" margin="20px">
							<VStack spacing={8}>
								<Heading>Our Socials</Heading>
								<Container maxW="container.sm">
									<Heading fontSize="18px">
										Our organization features a global
										community of over 60,000 teenagers!
										Diverse, open-minded, and inclusive, our
										students enjoy conversing in an
										equitable environment where every new
										acquaintance becomes a longtime friend!
									</Heading>
								</Container>
							</VStack>
						</Wrap>

						<Spacer />

						<Wrap margin="30px" spacing="40px">
							<VStack spacing={3}>
								<Link href="" isExternal>
									<Icon
										as={RiSpotifyLine}
										boxSize="90px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.instagram.com/school.simplified/"
									isExternal
								>
									<Icon
										as={RiInstagramLine}
										boxSize="90px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.facebook.com/SchoolSimple/"
									isExternal
								>
									<Icon
										as={RiFacebookBoxLine}
										boxSize="100px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.tiktok.com/@schoolsimplified"
									isExternal
								>
									<Icon
										as={SiTiktok}
										boxSize="80px"
										color="white"
									/>
								</Link>

								<Link
									href="https://twitter.com/schoolsimplify"
									isExternal
								>
									<Icon
										as={RiTwitterLine}
										boxSize="100px"
										color="white"
									/>
								</Link>

								<Link
									href="https://www.linkedin.com/company/school-simplified"
									isExternal
								>
									<Icon
										as={RiLinkedinBoxLine}
										boxSize="100px"
										color="white"
									/>
								</Link>
							</VStack>
						</Wrap>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
