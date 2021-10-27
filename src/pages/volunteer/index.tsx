import {
	//Box,
	// Divider,
	//Flex,
	Heading,
	//Image,
	Text,
	//HStack,
	VStack,
	Center,
	Stack,
} from "@chakra-ui/react";
//import Container from "@components/container";
//import Button from "@components/button";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
// import Reasons from "@components/volunteering/reasons";
import RotatingPanel from "@components/volunteering/rotating_panel";

/**
 * The Volunteering page!
 *
 * Mention that people can give people community service hours (!)
 * Needs information about the different positions (e.g. tutoring, technical, marketing, HR, etc.) (images from Mossa, alsdkfjadlskfj, aisdfhalj) [in one box, same layout for each]
 * Needs a clear button that lets users sign up, which takes them to the Discord to reinforce call to action
 * Needs a couple Undraw images
 * @returns the Volunteering page
 */
export default function Volunteering(): JSX.Element {
	return (
		<>
			<ContainerBackground src="/timmy/raining_timmy.png" py={100}>
				<Center>
					<ContainerInside  py={10} justifyContent="center">
					<Stack
							textAlign="left"
							direction={{ base: "column", md: "row-reverse" }}
							width="700px"
							spacing={{ base: 5, md: 10}}
							justifyContent="left"
						>
							<VStack flex={5} justifyContent="center">
								<Heading size="xl" width="700px">Join Our Team</Heading>

								<Text fontSize="lg">
									<b>
										As the largest student run nonprofit in North America, School
										Simplified provides you with a variety of opportunities.
										Become a part of our team today and together we can build
										a better future!
									</b>
									
								</Text>
							</VStack>
						</Stack>
					</ContainerInside>
				</Center>
			</ContainerBackground>
						{/* <Divider bg="white" mt={5} /> */}

			<RotatingPanel></RotatingPanel>


			{/* <Container>
				<ContainerInside py={10}>
					<Flex alignItems="center">
						<Box flex={1} textAlign="center">
							<Heading size="xl" my={3}>
								School Simplified Digital
							</Heading>
							<Text py={3}>
								XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
								XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
								XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
							</Text>
							<Button>Services</Button>
							<Button>Products</Button>
							<Button>Technology</Button>
							<Center>
								<HStack>
									<VStack>
										<Button>Chat Helping</Button>
										<Button>Tutoring</Button>
										<Button>Essay Reviser</Button>
									</VStack>
									<VStack>
										<Button>Notes</Button>
										<Button>College Prep</Button>
										<Button>Projects</Button>
									</VStack>
									<VStack>
										<Button>Developer</Button>
										<Button>Database</Button>
										<Button>Website</Button>
									</VStack>
								</HStack>
							</Center>
						</Box>
						<Image
							flex={{ base: 1, sm: 0 }}
							src="/timmy/30.png"
							h={{ base: 0, md: 175, lg: 350 }}
							float="right"
							display={["none", "block"]}
							mx={15}
							alt="Timmy with a lanyard"
						/>
					</Flex>
				</ContainerInside>
			</Container>

			<Container bg="brand.transparent">
				<ContainerInside py={10}>
					<Flex alignItems="center">
						<Image
							flex={{ base: 1, sm: 0 }}
							src="/timmy/2.png"
							h={{ base: 0, md: 175, lg: 350 }}
							float="right"
							display={["none", "block"]}
							mx={15}
							alt="Timmy drinking boba"
						/>
						<Box flex={1} textAlign="center">
							<Heading size="xl" my={3}>
								Global Marketing
							</Heading>
							<Text>
								Joining the Marketing Team is a great
								opportunity for volunteers with experience in
								social media, design, and marketing.
							</Text>
							<Button>Content Creator</Button>
							<Button>Design</Button>
							<Button>Public Relations</Button>
							<Button>Discord</Button>
						</Box>
					</Flex>
				</ContainerInside>
			</Container> */}
		</>
	);
}
