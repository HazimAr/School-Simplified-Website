import {
	Box,
	Flex,
	Heading,
	Image,
	Link,
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
					mt="50px"
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
						<Text my="10px">
							Benefits of joining are as follows
						</Text>
						<Flex justify={{ base: "center", md: "flex-start" }}>
							<UnorderedList>
								<ListItem>Lorem Ipsum</ListItem>
								<ListItem>Lorem Ipsum</ListItem>
								<ListItem>Lorem Ipsum</ListItem>
							</UnorderedList>
						</Flex>
						<Link href="/community">
							<Button mt={5}>Join Our Community</Button>
						</Link>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
