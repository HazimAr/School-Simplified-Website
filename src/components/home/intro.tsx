import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Flex justify="center" align="center" mt={50} mb={50}>
					<Box maxW="50ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your educational success</Heading>
						<Text my="10px">
							School simplified is a student run non-profit
							organization that aims to help students blah blah
							blah blah blah blah blah blah blah blah blah blah
							blah blah blah blah blah blah
						</Text>
						<Button>Learn More</Button>
					</Box>

					<Box textAlign="left" my={`${spacing}px`}>
						<Image
							h="300px"
							src="/undraw/education.svg"
							display={{ base: "none", md: "block" }}
						/>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
