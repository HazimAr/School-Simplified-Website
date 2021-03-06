import {
	Center,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import ActivitiesRotatingPanel from "@components/activities/rotatingPanel";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

/**
 * The Activities page!
 *
 * Describes what Student Activities are
 * Displays all SS Clubs and provides information on joining them
 * @returns the Activities page
 */
export default function Activities() {
	return (
		<>
			<Container py={50} bg="#5E65B7">
				<ContainerInside>
					<Center>
						<Image
							ml={{ base: 160, md: 20, lg: 160 }}
							mr={10}
							src="/timmy/sports_timmy_flip.png"
							w="300px"
							display={{ base: "none", md: "block" }}
							alt="Timmy with baseball bat"
						/>
						<Stack>
							<Heading
								textAlign="left"
								fontWeight="extrabold"
								size="xl"
							>
								<b>Join Our Clubs</b>
							</Heading>
							<Text textAlign="left" mb={5} textColor="#ffd470">
								Student Activities Program
							</Text>
							<Text textAlign="left" width="80%">
								School Simplified offers virtual clubs for you
								to connect with others from around the world who
								share the same passions as you! Explore your
								passions through the many clubs we offer!
							</Text>
						</Stack>
					</Center>
				</ContainerInside>
			</Container>
			<Container bg="#8D95F9">
				<ContainerInside w="100%" mb={30} mt={10}>
					<ActivitiesRotatingPanel />
				</ContainerInside>
			</Container>
			<Container py={90}>
				<ContainerInside>
					<Center>
						<HStack spacing={30}>
							<VStack align="start">
								<h2
									style={{
										fontSize: "30px",
										margin: "-20px 0px",
									}}
								>
									Don't see a club you want?
								</h2>
								<h2
									style={{
										fontWeight: "bolder",
										fontSize: "40px",
									}}
								>
									Start Your Own Club!
								</h2>
								<Text
									textAlign="left"
									maxWidth={500}
									fontSize={18}
								>
									Connect with others who share the same
									passions as you by starting your very own
									club. Start a club for whatever you want,
									however you want, and become a club
									president today!
								</Text>
								<NextLink
									isExternal
									href="https://forms.gle/EbmL1kKaib3DKA1U7"
									_hover={{ textDecoration: "none" }}
									p={15}
								>
									<Button timmysrc="/timmy/10.png">
										{" "}
										Apply Now{" "}
									</Button>
								</NextLink>
							</VStack>
							<Image
								src="/timmy/timmy_baseball_bg.png"
								mx={{ md: "20px" }}
								w={{ base: "300px", md: "300px", lg: "300px" }}
								display={{ base: "none", md: "block" }}
								alt="Timmy with sports balls"
							/>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}
