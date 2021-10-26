import ContainerBackground from "@components/containerBackground";
import {
	VStack,
	Heading,
	HStack,
	Image,
	Text,
	Box,
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
			<Center>
				<Image zIndex="2" src="/timmy/roles.png" w="300px" display={{ base: "none", md: "block" }} alt="Dino Timmy" />
			<Stack>
			<Heading my={10} fontWeight="extrabold" size="xl"><b>Join Our Clubs!</b></Heading>
			<Text>School SImplified offers virtual clubs for you to connect with others<br/>
			from around the world who share the same passions as you!<br/>
			Explore your passions through the many clubs we offer!</Text>
			</Stack>
			</Center>
			<Container>
				<ContainerInside w="100%">
					<ChangingSlide />
				</ContainerInside>
			</Container>
					<HStack>
						<VStack w="100%">
							<Heading my={10} fontWeight="normal" size="xl">Don't see a club you want?<br/>
							<b>Start Your Own Club!</b></Heading>
							<Text maxWidth={500} fontSize={18}>
							Connect with others who share the same passions as you by
							starting your very own club. Start a club for whatever you
							want, however you want, and become a club president today!
							</Text>
							<Button>Apply</Button>
						</VStack>
						<Image zIndex="2" src="/timmy/timmy_sports.png" w="600px" display={{ base: "none", md: "block" }} alt="Timmy with sports balls" />
					</HStack>
		</>
	);
}
