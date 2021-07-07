import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
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
			<Container bg="brand.transparent">
				<ContainerInside py={8}>
					<Flex alignItems="center">
						<Box flex={1}>
							<Heading textAlign="left" size="xl" mb={3}>
								Volunteering Opportunities
							</Heading>
							<Text textAlign="left" fontSize={21}>
								We have a wide variety of positions available
								that can fit any of a wide range of skills or
								interests!
							</Text>
						</Box>
						<Image
							flex={{ base: 1, sm: 0 }}
							src="/undraw/community.svg"
							h={{ base: 0, md: 175, lg: 275 }}
							float="right"
							display={["none", "block"]}
							ml={7}
						/>
					</Flex>
					<Divider bg="white" my={5} />
					<Heading size="lg" mb={3}>
						Why volunteer for us?
					</Heading>
					<Flex
						alignItems="stretch"
						justifyContent="space-between"
						flexDir={{ base: "column", lg: "row" }}
					>
						<Box flex={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								Earn Volunteer Hours
							</Heading>
							<Text>
								All volunteers can earn community service hours
								and build up their volunteering experience. Our
								active community provides a friendly tutoring
								environment for all students.
							</Text>
						</Box>
						<Box flex={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flex={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								Learn New Skills
							</Heading>
							<Text>
								Tutoring allows volunteers to discover many
								different skills and experiences outside of the
								classroom, including leadership and critical
								thinking.
							</Text>
						</Box>
						<Box flex={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flex={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								Tutor Other Students
							</Heading>
							<Text>
								Help other students with various subjects and
								classes, at many different grade levels.
							</Text>
						</Box>
					</Flex>
					<Flex
						alignItems="stretch"
						justifyContent="space-between"
						flexDir={{ base: "column", lg: "row" }}
					>
						<Box flex={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								Join the Community
							</Heading>
							<Text>
								Join an interactive community of enthusiastic
								students that are committed to learning
							</Text>
						</Box>
						<Box flex={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flex={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								Share Resources
							</Heading>
							<Text>
								Contribute to our resources that are shared by
								other students for mutual learning.
							</Text>
						</Box>
						<Box flex={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flex={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								Remote Tutoring
							</Heading>
							<Text>
								Our Discord server allows volunteers to tutor
								wherever and wherever, with the capacity to
								choose their own hours
							</Text>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>

			<RotatingPanel />

			<Container bg="brand.transparent">
				<ContainerInside py={8}>
					<Heading size="xl">Join Us Today!</Heading>
					<Text my={3}>
						Sign up to start helping fellow students for service
						hours today!
					</Text>
					<Link
						isExternal={true}
						href="https://discord.gg/school"
						_hover={{ textDecoration: "none" }}
					>
						<Button bg="brand.transparent">
							Sign Up <ExternalLinkIcon mx={2} />
						</Button>
					</Link>
				</ContainerInside>
			</Container>
		</>
	);
}
