import { HStack, Container, Image, Box, Heading, Flex } from "@chakra-ui/react";

export default function Donate() {
	return (
		<Container py={19}>
				<HStack>
					<Box my="20px">
						<Heading as="h1" size="4xl" mb={8}>
							Donate
						</Heading>
						<Heading as = "h2" size = "md" color="white">
							text goes here on why people should consider donating to school simplified
						</Heading>
						<Heading as="h2" size="md" color="white">
						<iframe
							src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
							height="700"
							width="600"
							frameBorder="0"
							allowTransparency

						>
				
						{" "}
						</iframe>
						</Heading>
						
					</Box>
					<Flex justify="center">
						<Box py={10} align="center"></Box>
						<Flex
							flexDirection={{
								base: "column-reverse",
								xl: "row",
							}}
							justify="space-between"
							align="center"
							pb={10}
						>
							<Box w="100%">
							</Box>
							<Box w="100%" justify="center">
								<Image
									src="/timmy/7.png"
									alt="Donate Timmy"
									h={{ base: "550px", "300px": "300px" }}
									minW="400px" 
									maxH="666px"
									my={{ base: -5, sm: 5, lg: 0 }}
								/>
							</Box>
						</Flex>
					</Flex>
					
				</HStack>
				
		</Container>

	);
}
