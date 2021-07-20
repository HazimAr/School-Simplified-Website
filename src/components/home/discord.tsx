import {
	Box,
	Flex,
	Heading,
	Image,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Flex
					justify="center"
					align="center"
					my="50px"
					flexDir={{ base: "column-reverse", md: "row" }}
				>
					<Box textAlign="left" my="" mx="25px">
						<Image
							h="325px"
							src="/undraw/team.svg"
							// display={{ sm: "none", md: "block" }}
						/>
					</Box>

					<Box
						maxW="40ch"
						textAlign={{ base: "center", md: "left" }}
						my=""
						mx="25px"
					>
						<Heading as="h1">
							Join our student-based community
						</Heading>
						<Text my="10px">You'll gain exclusive access to:</Text>
						<Flex justify={{ base: "center", md: "flex-start" }}>
							<UnorderedList>
								<ListItem>
									Fun events, including movie nights, game
									nights, and competitions
								</ListItem>
								<ListItem my={2}>
									Networks to make friends from all over the
									world
								</ListItem>
								<ListItem>
									Live homework help with verified staff
									through text-based messages
								</ListItem>
							</UnorderedList>
						</Flex>
						<NextLink href="/community">
							<Button mt={5}>Join the Community</Button>
						</NextLink>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
