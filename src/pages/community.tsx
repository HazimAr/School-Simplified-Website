import {
	Box,
	Button,
	Center,
	Divider,
	Heading,
	HStack,
	Icon,
	Image,
	Link,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	UnorderedList,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import React from "react";
// import { FaDiscord } from "react-icons/fa";
import {
	RiDiscordLine,
	RiFacebookBoxLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
	RiSpotifyLine,
	RiTwitterLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

export default function Community(): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const {
		isOpen: isOpenSpotify,
		onOpen: onOpenSpotify,
		onClose: onCloseSpotify,
	} = useDisclosure();
	return (
		<>
			<Container py={10}>
				<ContainerInside>
					<VStack textAlign="left">
						<HStack
							textAlign="left"
							flexDir={{ base: "column", md: "row" }}
						>
							<VStack boxSize="80%" w="55%" mb={25}>
								<Stack
									backgroundColor="brand.transparent2"
									rounded={rounded}
									boxShadow="lg"
								>
									<Image
										src="june.jpg"
										boxSize="500px"
										rounded={rounded}
										objectFit="cover"
										boxShadow="lg"
										transition="all 0.2s ease"
										_hover={{
											cursor: "pointer",
											transform: "scale(0.95)",
										}}
										onClick={onOpen}
									/>

									<Modal
										isOpen={isOpen}
										onClose={onClose}
										isCentered
										motionPreset="slideInRight"
									>
										<ModalOverlay />
										<ModalContent bg="brand.purple.dark">
											<ModalHeader>
												June Art Contest Winner
											</ModalHeader>
											<ModalCloseButton />
											<ModalBody>
												This months art contest prompt
												was: Embracement of Love and
												Identity. Our winner for June
												was{" "}
												<Heading size="sm">
													aishi! (aishi🦋#1613)
												</Heading>
												<Heading size="sm">
													Artist Description:
												</Heading>
												"I thought it to be a pride
												month painting as you can see
												two female faces intertwined
												with each other... Like they are
												deeply connected mentally and
												physically I just wanted to do
												an abstract painting actually,
												representing this form of love
												and the closed eyes explain the
												satisfaction , sensuality and
												happiness she feels in love ...
												And the half opened eyes
												represent shyness ... I used
												blue coz 1: it's my fav colour
												and 2: to give it a hallucinated
												look ... Like both of them are
												so much in love that they feel
												like they are hallucinated ...
												They cannot think about anything
												else ... They're madly in love "
												<Heading size="xsm">
													Follow aishi on instagram:
													@aeishthetic
												</Heading>
											</ModalBody>

											<ModalFooter>
												<Button
													colorScheme="purple"
													mr={3}
													onClick={onClose}
												>
													Close
												</Button>
											</ModalFooter>
										</ModalContent>
									</Modal>
								</Stack>

								<Text>Artwork from our event winners!</Text>
							</VStack>

							<Stack w="40%">
								<Heading size="lg">Our Community</Heading>

								<Text fontSize="lg">
									Our organization features a global community
									of over 60,000 teenagers! Diverse,
									open-minded, and inclusive, our students
									enjoy conversing in an equitable environment
									where every new acquaintance becomes a
									longtime friend!
								</Text>
							</Stack>
						</HStack>

						<HStack
							flexDir={{ base: "column", md: "row" }}
							flexWrap="wrap"
							justify="center"
							spacing={10}
						>
							<VStack
								boxSize="350px"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
							>
								<Heading>Events</Heading>
								<Heading size="sm">
									Our Events team works hard to organize
									events for our community, sometimes even
									with prizes! We offer things such as:
								</Heading>
								<UnorderedList>
									<ListItem>Competitions</ListItem>
									<ListItem>Hackathons</ListItem>
									<ListItem>Talent Show</ListItem>
									<ListItem>Movie Nights</ListItem>
									<ListItem>Game Nights</ListItem>
								</UnorderedList>
								{/* <Heading size="sm">
									Join our discord server to participate in
									these events!
								</Heading> */}
							</VStack>

							<VStack
								boxSize="350px"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
							>
								<Heading>Music</Heading>
								<Heading size="sm">
									Our team has put together playlists of music
									for you to enjoy!
								</Heading>
								<UnorderedList>
									<Link
										href="https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1"
										isExternal
									>
										<ListItem>Study Lofi</ListItem>
									</Link>

									<Link
										href="https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065"
										isExternal
									>
										<ListItem>Jazz Lofi</ListItem>
									</Link>

									<Link
										href="https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2"
										isExternal
									>
										<ListItem>90s Pop</ListItem>
									</Link>

									<Link
										href="https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87"
										isExternal
									>
										<ListItem>2010-2015 Pop</ListItem>
									</Link>
								</UnorderedList>
								{/* 
								<Heading size="5px">
									Check out our Spotify for the complete list!
								</Heading> */}
							</VStack>

							<VStack
								boxSize="350px"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
							>
								<Heading>Friends</Heading>
								<Heading size="xsm">
									Start making new friends from all around the
									world by joining our server. You can chat,
									voice call, play games, or even enter events
									with others to form new and exciting
									friendships!
								</Heading>
							</VStack>
						</HStack>
					</VStack>
					<Divider borderColor="white" mt="50px" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside>
					<Box maxW="1000px">
						<HStack
							spacing={10}
							flexDir={{ base: "column", md: "row" }}
						>
							{/* disc box */}
							<VStack
								boxSize="450px"
								bg="brand.transparent"
								p="15px"
								rounded={rounded}
								boxShadow="lg"
								justify="center"
								w="70%"
								spacing={5}
							>
								<Link
									href="https://discord.com/invite/school"
									isExternal
								>
									<Image
										src="\undraw\duck_group_shot.png"
										h="300px"
										objectFit="cover"
									/>
								</Link>

								<Heading size="md">
									Join our Discord. Come for the academic
									help, stay for the events, friends, and
									become a part of the family!
								</Heading>
							</VStack>

							<Stack w="70%" flexDir="column" ml="25px">
								<Heading
									justify="left"
									textAlign={{ base: "center", md: "left" }}
								>
									Our Members
								</Heading>

								<Text
									fontSize="2xl"
									textAlign={{ base: "center", md: "left" }}
								>
									Our members work together to aid students
									all around the globe in academics and
									extracurricular activities. We offer student
									opportunities, daily motivation, school
									help, entertainment, and much more!
								</Text>
							</Stack>
						</HStack>
					</Box>
					<Divider borderColor="white" my="50px" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside>
					<VStack>
						<VStack spacing={4}>
							<Heading>Our Socials</Heading>
							<Container>
								<Heading fontSize="18px" mb="35px">
									Check out our socials for tips,
									entertainment, music, podcasts, and
									opportunities and more!
								</Heading>
							</Container>
						</VStack>

						<HStack
							flexWrap="wrap"
							// flexDir={{ sm: "column", md: "row" }}
							justify="center"
							align="center"
						>
							<Icon
								as={RiSpotifyLine}
								boxSize={100}
								color="white"
								onClick={onOpenSpotify}
								_hover={{
									cursor: "pointer",
								}}
							/>

							<Modal
								isOpen={isOpenSpotify}
								onClose={onCloseSpotify}
							>
								<ModalOverlay />
								<ModalContent bg="brand.purple.dark">
									<ModalHeader>Spotify</ModalHeader>
									<ModalCloseButton />
									<ModalBody>
										<Button variant="outline">
											<Link
												href="https://open.spotify.com/user/5lkgh8ryszqens1ywo58m5lv8?si=e3b58782d2e94498"
												isExternal
											>
												<Heading size="md">
													Our Spotify
												</Heading>
											</Link>
										</Button>

										<Text>
											{" "}
											Here are links to all of our
											playlists:{" "}
										</Text>

										<Center>
											<Divider
												borderColor="white"
												width="250px"
												mb="15px"
											/>
										</Center>

										<Heading size="md">
											Lofi Playlists:
										</Heading>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1"
												isExternal
											>
												Study Lofi,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065"
												isExternal
											>
												Jazz Lofi,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/42VuHYE30tU6olqgYCUGj9?si=4cdc91ce894b4d8c"
												isExternal
											>
												Rainy Day Lofi,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/6WGCRBoHJ5NZRg6D3VM7DK?si=4b658781fd54463b"
												isExternal
											>
												Anime Lofi,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/3DGBkdcT236zwEQqsaeiHc?si=c56fda3f5c994ddd"
												isExternal
											>
												Sleeping Lofi,
											</Link>
										</Text>

										<Divider
											borderColor="white"
											mt="10px"
											mb="10px"
										/>

										<Heading size="md">
											Pop Playlists:
										</Heading>

										<Text>
											<Link href="https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2">
												90s Pop,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/2l050Xz8rnNfYqkyx47WTu?si=040ec727a26844bd"
												isExternal
											>
												2000-2009 Pop,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87"
												isExternal
											>
												2010-2015 Pop,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/02oYO9n5qfmULA2deeQ4pR?si=1be766a9b13e4ccf"
												isExternal
											>
												2016-2017 Pop,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/3zXZy9Xh93IY13jpqYf6AU?si=f58dac68060a46a6"
												isExternal
											>
												2018-2019 Pop,
											</Link>
										</Text>

										<Text>
											<Link
												href="https://open.spotify.com/playlist/1qyZMhC4rC1tc04FdfQr00?si=221b54418a0f4077"
												isExternal
											>
												2020-2021 Pop,
											</Link>
										</Text>
									</ModalBody>
									<ModalFooter>
										<Button
											colorScheme="purple"
											mr={3}
											onClick={onCloseSpotify}
										>
											Close
										</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>

							<Link
								href="https://www.instagram.com/school.simplified/"
								isExternal
							>
								<Icon
									as={RiInstagramLine}
									boxSize={100}
									color="white"
								/>
							</Link>

							<Link
								href="https://www.facebook.com/SchoolSimple/"
								isExternal
							>
								<Icon
									as={RiFacebookBoxLine}
									boxSize={100}
									color="white"
								/>
							</Link>

							<Link
								href="https://discord.com/invite/school"
								isExternal
							>
								<Icon
									as={RiDiscordLine}
									boxSize={150}
									color="white"
								/>
							</Link>

							<Link
								href="https://www.tiktok.com/@schoolsimplified"
								isExternal
							>
								<Icon
									as={SiTiktok}
									boxSize={90}
									color="white"
								/>
							</Link>

							<Link
								href="https://twitter.com/schoolsimplify"
								isExternal
							>
								<Icon
									as={RiTwitterLine}
									boxSize={100}
									color="white"
								/>
							</Link>

							<Link
								href="https://www.linkedin.com/company/school-simplified"
								isExternal
							>
								<Icon
									as={RiLinkedinBoxLine}
									boxSize={100}
									color="white"
								/>
							</Link>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

// export async function getServerSideProps() {
// 	const artInfo = await getArtInfo();
// 	console.log(artInfo);
// 	return { props: { artInfo } };
// }
