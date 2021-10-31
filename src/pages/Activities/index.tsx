import {
	VStack,
	Heading,
	HStack,
	Image,
	Text,
	Center,
	Stack
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
			<Container my={50}>
				<ContainerInside>
					<Center>
						<Image mr={5} src="/timmy/timmy_dino.png" w="300px" display={{ base: "none", md: "block" }} alt="Timmy with baseball bat" />
					<Stack>
						<Heading textAlign="left" my={5} fontWeight="extrabold" size="xl"><b>Join Our Clubs!</b></Heading>
						<Text textAlign="left">School Simplified offers virtual clubs for you to connect with others<br/>
						from around the world who share the same passions as you!<br/>
						Explore your passions through the many clubs we offer!</Text>
					</Stack>
					</Center>
				</ContainerInside>
			</Container>
			<Container bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(108, 125, 254, 0.71) 100%);">
				<ContainerInside w="100%" mb={21}>
					<Heading py={21} >Our Clubs</Heading>
					<ChangingSlide />
				</ContainerInside>
			</Container>
			<Container my={50}>
				<ContainerInside> 
					<Center>
						<HStack spacing={50}>
							<VStack align="start">
								<h2 style={{ fontSize:"40px", margin:"-20px 0px" }} >Don't see a club you want?</h2>
								<h2 style={{ fontWeight:"bolder", fontSize:"50px" }}>Start Your Own!</h2>
								<Text textAlign="left" maxWidth={500} fontSize={18}>
									Connect with others who share the same passions as you by
									starting your very own club. Start a club for whatever you
									want, however you want, and become a club president today!
								</Text>
								<Button>Apply</Button>
							</VStack>
							<Image src="/timmy/timmy_sports.png" w="300px" display={{ base: "none", md: "block" }} alt="Timmy with sports balls" />
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}
