import { Box, Image, Container, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home(): JSX.Element {
	return (
		<Box>
			<Flex  padding="90px">
				<Container w="1200px" maxW="1000px">
					<Flex
						w="100%"
						h="400px"
						bg="rgba(255,255,255,0.5)"
						justify="space-between"
					>
						<Box>
							<Heading
								size="lg"
								pl="-10px"
								pt="10px"
								color="#F5F5F5"
								fontWeight="extrabold"
								textShadow="1px 1px #000000"
							>
								The key to your
								<br />
								success.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</Heading>
							<Text
								fontSize="lg"
								pl="20px"
								pt="150px"
								color="#F5F5F5"
							>
								A non-profit here to help you with all your
								academic and extracurricular needs. Everything
								you need is simply one click away.
							</Text>
						</Box>
						<Image src="./key.png" w="550px" h="500px" pb="40px" />
					</Flex>
				</Container>
			</Flex>
		</Box>
	);
}
