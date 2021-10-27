import {
	//Box,
	Divider,
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

			<RotatingPanel></RotatingPanel>
			<Divider bg="white" />
		</>
	);
}
