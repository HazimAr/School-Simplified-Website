import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const Reviews = [
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.",
		name: "Adam Hall",
		title: "Senior",
	},
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.",
		name: "Adam Hall",
		title: "Freshman",
	},
	{
		review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut error vel omnis adipisci. Ad nam officiis sapiente dicta incidunt harum.",
		name: "Adam Hall",
		title: "Freshman",
	},
];

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Heading as="h1">Success Stories</Heading>
				<Flex justify="center" textAlign="left">
					<Box>
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

					<Center height={100} mx={20}>
						<Divider orientation="vertical" bg="white" />
					</Center>
					<Box>
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
					<Center height={100} mx={20}>
						<Divider orientation="vertical" bg="white" />
					</Center>
					<Box>
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
			</ContainerInside>
		</Container>
	);
}
