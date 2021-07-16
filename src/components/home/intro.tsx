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
					<Box maxW="60ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your educational success</Heading>
						<Text my="10px">
							School Simplified is a virtually ran nonprofit that
							aims to spread educational equality by providing
							free educational services, products, and
							opportunities for teenagers. We provide free
							tutoring, free essay revisions, free notes, free
							college preparation, and a community where
							like-minded teenagers can meet and form life-lasting
							connections. As the largest nonprofit run by high
							schoolers in America, School Simplified also
							provides a rare opportunity for teenagers: our staff
							have the opportunities to run a fully independent
							business, negotiate and build relations across
							organizations, learn marketing and business skills,
							and build code for real-world applications.
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
