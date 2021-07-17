import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Flex justify="center" align="center" mt={50} mb={50}>
					<Box maxW="60ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your educational success.</Heading>
						<Text my="10px">
							School Simplified is a digital nonprofit whose
							mission is to spread educational equality by
							providing free academic services, products, and
							opportunities for teenagers.
						</Text>
						{/* <Link href="/">
							<Button>Get Free Help</Button>
						</Link> */}
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
