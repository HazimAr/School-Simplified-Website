import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const Reviews = [
	{
		review: "I was in a panic, attempting to write a final paper 9 hours before it’s due date, and I was in a need for help. I didn’t think I could do it, yet I somehow got it completed thanks to their help and I’m forever grateful!",
		name: "Luna",
		title: "Sophomore",
	},
	{
		review: "They helped me over the course of 3 days redo over 9 assignments to pass the year. I want everyone to know that they are so kind and always ready to help, they are always courteous and understanding. I want to say from the bottom of my heart, Thank you!",
		name: "Dak",
		title: "sophomore",
	},
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum",
		name: "Adam Hall",
		title: "Freshman",
	},
];

export default function Intro() {
	return (
		<Container py={20} bg="brand.transparent">
			<ContainerInside>
				<Heading as="h1" mb={5}>
					Success Stories
				</Heading>

				<Flex justify="center">
					<Flex
						justify="center"
						textAlign={{ base: "center", lg: "left" }}
						flexDir={{ base: "column", lg: "row" }}
						maxW={{ base: 300, sm: 450, md: 600, lg: 1200 }}
					>
						<Box w="100%">
							<Text>"{Reviews[0].review}"</Text>
							<Box>
								<Heading as="h1" size="md">
									{Reviews[0].name}
								</Heading>
								<Heading as="h2" size="xs">
									{Reviews[0].title}
								</Heading>
							</Box>
						</Box>

						<Center
							height={100}
							mx={20}
							display={["none", "none", "none", "block"]}
						>
							<Divider orientation="vertical" bg="white" />
						</Center>

						<Box w="100%" my={{ base: 10, lg: 0 }}>
							<Text>"{Reviews[1].review}"</Text>
							<Box>
								<Heading as="h2" size="md">
									{Reviews[1].name}
								</Heading>
								<Heading as="h3" size="xs">
									{Reviews[1].title}
								</Heading>
							</Box>
						</Box>
						<Center
							height={100}
							mx={20}
							display={{ base: "none", lg: "block" }}
						>
							<Divider orientation="vertical" bg="white" />
						</Center>
						<Box w="100%">
							<Text>"{Reviews[2].review}"</Text>
							<Box>
								<Heading as="h2" size="md">
									{Reviews[2].name}
								</Heading>
								<Heading as="h3" size="xs">
									{Reviews[2].title}
								</Heading>
							</Box>
						</Box>
					</Flex>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
