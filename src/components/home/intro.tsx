import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Flex justify="center" align="center" mt={50} >
					<Box maxW="60ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your educational success.</Heading>
						<Text my="10px">
							School Simplified is a digital nonprofit whose
							mission is to spread educational equality by
							providing free academic services, products, and
							opportunities for teenagers.
						</Text>
						{/* <NextLink href="/notes">
							<Button>Get Free Help</Button>
						</NextLink> */}
					</Box>

					<Box textAlign="left" my={`${spacing}px`}>
						<Image
							maxW="400px"
							src="/timmy/32.png"
							alt="Timmy with graduation cap"
							display={{ base: "none", md: "block" }}
						/>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
