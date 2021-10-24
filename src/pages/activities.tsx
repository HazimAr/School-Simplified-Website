import ContainerBackground from "@components/containerBackground";
import {
	VStack,
	Heading,
	HStack,
	Image,
	Text,
	Flex,
	Box,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import ChangingSlide from "@components/activities/changing_slide";

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
			<ContainerBackground src="/timmy/watermelon.png" py="150px">
				<VStack>
					<Heading my={10} fontWeight="extrabold" size="3xl">Virtual Clubs</Heading>
					<Button>Club President</Button>
				</VStack>
			</ContainerBackground>
			<Container bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(108, 125, 254, 0.71) 100%)" py={50}>
				<ContainerInside>
					<HStack>
						<VStack w="100%">
							<Heading my={10} fontWeight="extrabold" size="xl">Student Activities</Heading>
							<Text maxWidth={500} fontSize={18}>
								Student Activities focuseses on clubs and student opportunities
								to advance learning outside of school. To start your own club, 
								apply to become a club president! 
							</Text>
							<Button>Club President</Button>
						</VStack>
						<Box zIndex="1" borderRadius="50%" bg="rgba(255, 156, 156, 0.5)" w="300px" h="250px" pos="absolute" left="63%" top="36%" display={{ base: "none", md: "block" }}/>
						<Box zIndex="1" borderRadius="50%" bg="rgba(255, 156, 156, 0.5)" w="300px" h="250px" pos="absolute" left="56.5%" top="35%" display={{ base: "none", md: "block" }}/>
						<Box zIndex="1" borderRadius="50%" bg="rgba(196, 140, 193, 0.5)" w="300px" h="250px" pos="absolute" left="60%" top="29%" display={{ base: "none", md: "block" }}/>
						<Image zIndex="2" src="/timmy/timmy_sports.png" w="600px" display={{ base: "none", md: "block" }} alt="Timmy with sports balls" />
					</HStack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside w="100%">
					<ChangingSlide />
				</ContainerInside>
			</Container>
		</>
	);
}
