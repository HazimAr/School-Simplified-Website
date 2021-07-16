import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Reasons from "@components/volunteering/reasons";
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
				<ContainerInside pt={8}>
					<Flex alignItems="center">
						<Box flex={1} textAlign="left">
							<Heading size="xl" mb={3}>
								Volunteering Opportunities
							</Heading>
							<Text fontSize={21}>
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
							alt="Image of a community"
						/>
					</Flex>
					{/* <Divider bg="white" mt={5} /> */}
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
					<Link
						isExternal
						href="https://discord.gg/school"
						_hover={{ textDecoration: "none" }}
					>
						<Button bg="brand.transparent" height="unset">
							<Heading size="lg">
								Sign Up! <ExternalLinkIcon ml={2} />
							</Heading>
						</Button>
					</Link>
				</ContainerInside>
			</Container> */}

			<RotatingPanel />
			<Container>
				<ContainerInside py={3}>
					<Divider bg="white" />
				</ContainerInside>
			</Container>
			<Reasons />
		</>
	);
}
