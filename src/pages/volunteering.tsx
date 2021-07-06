import { Heading, Text, Image, Flex, Box } from "@chakra-ui/react";
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
 * @returns
 */
export default function Volunteering(): JSX.Element {
	return (
		<>
			<Container bg="brand.transparent">
				<ContainerInside py={8}>
					<Flex alignItems="center">
						<Box>
							<Heading textAlign="left" size="lg" mb={3}>
								Volunteering Opportunities
							</Heading>
							<Text textAlign="left">
								htrcyg88u09j8hvhbm ngkhu8jj0vh gknhu9pgk vcgv
								gvubh9byvug fghbuh gvh bvh hbi kjvhbn vh
								gbhuiovj nbv
							</Text>
						</Box>
						<Image
							src="/undraw/community.svg"
							h={[0, 100, 200]}
							float="right"
							display={["none", "block", "block"]}
							ml={7}
						/>
					</Flex>
				</ContainerInside>
			</Container>
			<RotatingPanel />
		</>
	);
}
