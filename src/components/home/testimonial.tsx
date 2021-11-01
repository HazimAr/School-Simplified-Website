import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const Reviews = [
	{
		review: "They helped me over the course of 3 days redo over 9 assignments to pass the year. I want everyone to know that they are so kind and always ready to help, they are always courteous and understanding. I want to say from the bottom of my heart, thank you!",
		name: "Dak",
		title: "Freshman",
	},
	{
		review: "I've had multiple tutoring sessions with [my tutor] and he's helped me revise an essay that got me into a program at Stanford, as well as get a 100% on my final with the help of some practice questions he made for me. Overall, he's an amazing tutor and I've noticed a significant improvement in my scores and understanding of the material.",
		name: "Adam",
		title: "Senior",
	},
];

export default function Intro() {
	return (
		<Container
			py={20}
			bg="linear-gradient(180deg, rgba(161, 167, 237, 0.6) 0%, rgba(108, 125, 254, 0.6) 100%);"
		>
			<ContainerInside>
				<Heading as="h1">Your Success is Our Success!</Heading>
				<Text fontSize="xl" color="white">
					School Simplified believes that quality education should be
					accessible to everyone with equal opportunity. As an
					organization run by students from around the world we know
					exactly what you need to succeed! Take advantage of that and
					help us help you!
				</Text>
				<Divider bg="white" my="40px" />
				<Heading as="h1">Don't Believe Us?</Heading>
				<Text fontSize="lg" color="white">
					Ask some of our students and hear what they have to say
				</Text>
				<Flex justify="center">
					<Flex
						justify="center"
						textAlign={{ base: "center", lg: "left" }}
						flexDir={{ base: "column", lg: "row" }}
						maxW={{ base: 300, sm: 450, md: 600, lg: 1200 }}
						alignItems="stretch"
					>
						<Box w="100%" my={{ base: 0, lg: 5 }}>
							<Text>"{Reviews[0].review}"</Text>
							<Box mt={4}>
								<Heading as="h1" size="md">
									{Reviews[0].name}
								</Heading>
								<Heading as="h2" size="xs" color="white">
									{Reviews[0].title}
								</Heading>
							</Box>
						</Box>

						<Center
							height="100%"
							mx={20}
							display={["none", "none", "none", "block"]}
						>
							<Divider orientation="vertical" bg="white" />
						</Center>

						<Box w="100%" my={{ base: 10, lg: 5 }}>
							<Text>"{Reviews[1].review}"</Text>
							<Box mt={4}>
								<Heading as="h2" size="md">
									{Reviews[1].name}
								</Heading>
								<Heading as="h3" size="xs" color="white">
									{Reviews[1].title}
								</Heading>
							</Box>
						</Box>
					</Flex>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
