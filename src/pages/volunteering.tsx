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

const reasons = [
	{
		title: "Earn Volunteer Hours",
		text: "All volunteers can earn community service hours and build up their volunteering experience. Our active community provides a friendly tutoring environment for all students.",
	},
	{
		title: "Learn New Skills",
		text: "Tutoring allows volunteers to discover many different skills and experiences outside of the classroom, including leadership and critical thinking.",
	},
	{
		title: "Tutor Other Students",
		text: "Help other students with various subjects and classes, at many different grade levels.",
	},
	{
		title: "Join the Community",
		text: "Join an interactive community of enthusiastic students that are committed to learning",
	},
	{
		title: "Share Resources",
		text: "Contribute to our resources that are shared by other students for mutual learning.",
	},
	{
		title: "Remote Tutoring",
		text: "Our Discord server allows volunteers to tutor wherever and whenever, with the capacity to choose their own hours",
	},
];

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
						<Box flexGrow={1}>
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
							flexGrow={{ base: 1, sm: 0 }}
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
						<Box flexGrow={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								{reasons[0].title}
							</Heading>
							<Text>{reasons[0].text}</Text>
						</Box>
						<Box flexGrow={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flexGrow={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								{reasons[1].title}
							</Heading>
							<Text>{reasons[1].text}</Text>
						</Box>
						<Box flexGrow={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flexGrow={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								{reasons[2].title}
							</Heading>
							<Text>{reasons[2].text}</Text>
						</Box>
					</Flex>
					<Flex
						alignItems="stretch"
						justifyContent="space-between"
						flexDir={{ base: "column", lg: "row" }}
					>
						<Box flexGrow={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								{reasons[3].title}
							</Heading>
							<Text>{reasons[3].text}</Text>
						</Box>
						<Box flexGrow={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flexGrow={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								{reasons[4].title}
							</Heading>
							<Text>{reasons[4].text}</Text>
						</Box>
						<Box flexGrow={0} mx={5}>
							<Divider orientation="vertical" bg="white" />
						</Box>
						<Box flexGrow={1} my={4}>
							<Heading fontStyle="italic" size="md" mb={2}>
								{reasons[5].title}
							</Heading>
							<Text>{reasons[5].text}</Text>
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
							Sign Up <ExternalLinkIcon ml={2} />
						</Button>
					</Link>
				</ContainerInside>
			</Container>
		</>
	);
}
