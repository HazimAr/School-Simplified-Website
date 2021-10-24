import {
	Box,
	// Divider,
	Flex,
	Heading,
	Image,
	Text,
	Button,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
// import Reasons from "@components/volunteering/reasons";
// import RotatingPanel from "@components/volunteering/rotating_panel";

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
			<Container bg="brand.transparent">
				<ContainerInside py={10}>
					<Flex alignItems="center">
						<Box flex={1} textAlign="center">
							<Heading size="xl" my={3}>
								Volunteering Opportunities
							</Heading>
							<Text>
								As the largest nonprofit run by high schoolers
								in North America, School Simplified provides
								valuable opportunities for teenagers. You can
								help build code for real-life applications,
								market and negotiate with people
								internationally, and develop products and
								services. There are also leadership
								opportunities available. Everything you do
								counts for community service hours!
							</Text>
						</Box>
					</Flex>
					{/* <Divider bg="white" mt={5} /> */}
				</ContainerInside>
			</Container>

			<Container>
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
							<Button>Button</Button>
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
						</Box>
					</Flex>
				</ContainerInside>
			</Container>

			{/* 
			<Container bg="brand.transparent">
				<ContainerInside py={8}>
					<Heading size="xl">Join Us Today!</Heading>
					<Text my={3}>
						Sign up to start helping fellow students for service
						hours today!
					</Text>
					<NextLink
						isExternal
						href="https://discord.gg/school"
						_hover={{ textDecoration: "none" }}
					>
						<Button bg="brand.transparent" height="unset">
							<Heading size="lg">
								Sign Up! <ExternalLinkIcon ml={2} />
							</Heading>
						</Button>
					</NextLink>
				</ContainerInside>
			</Container> */}

			{/* <RotatingPanel /> */}

			{/* <Container>
				<ContainerInside py={3}>
					<Divider bg="white" />
				</ContainerInside>
			</Container>

			<Reasons /> */}
		</>
	);
}
