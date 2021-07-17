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
							School Simplified is a virtually run nonprofit that
							spreads educational equality by providing free
							educational services, products, and opportunities
							for teenagers. Along with the free resources below,
							we offer a community where teenagers can form
							life-lasting connections.
						</Text>
						{/* <Link href="/resources">
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
