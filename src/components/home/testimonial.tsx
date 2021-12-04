import { Box, Divider, Flex, Heading, ScaleFade, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import RotatingPanel from "@components/rotatingPanel";

type Review = {
	review: string;
	name: string;
	title: string;
	key: string;
};

const reviews: Review[] = [
	{
		review: "They helped me over the course of 3 days redo over 9 assignments to pass the year. I want everyone to know that they are so kind and always ready to help, they are always courteous and understanding. I want to say from the bottom of my heart, thank you!",
		name: "Dak",
		title: "Freshman",
		key: "F",
	},
	{
		review: "I've had multiple tutoring sessions with [my tutor] and he's helped me revise an essay that got me into a program at Stanford, as well as get a 100% on my final with the help of some practice questions he made for me. Overall, he's an amazing tutor and I've noticed a significant improvement in my scores and understanding of the material.",
		name: "Adam",
		title: "Senior",
		key: "S",
	},
];

export default function Intro() {
	return (
		<Container
			py={12}
			bg="linear-gradient(180deg, rgba(161, 167, 237, 0.6) 0%, rgba(108, 125, 254, 0.6) 100%);"
		>
			<ContainerInside textAlign="left">
				<Heading as="h1" mb={3}>
					Your Success is Our Success!
				</Heading>
				<Text fontSize="xl" color="white" textAlign="justify">
					School Simplified believes that quality education should be
					accessible to everyone with equal opportunity. As an
					organization run by students from around the world we know
					exactly what you need to succeed! Take advantage of that and
					help us help you!
				</Text>
				<Divider bg="white" my="40px" />
				<Heading as="h1" mb={3}>
					Don't Believe Us?
				</Heading>
				<Text fontSize="lg" color="white" mb={5}>
					Ask some of our students and hear what they have to say!
				</Text>

				<RotatingPanel Element={Testimony} innerPanelProps={reviews} />
			</ContainerInside>
		</Container>
	);
}

function Testimony(props: Review): JSX.Element {
	return (
		<ScaleFade in={true} unmountOnExit={false}>
			<Flex
				flexDir="column"
				px={9}
				py={5}
				rounded={20}
				bgColor="#FFFFFFC0"
			>
				<Text color="#5A60AD">"{props.review}"</Text>
				<Box alignSelf="flex-end" textAlign="right">
					<Heading as="h1" size="md" mt={4} color="#5A60AD">
						{props.name}
					</Heading>
					<Text color="#5A60AD">{props.title}</Text>
				</Box>
			</Flex>
		</ScaleFade>
	);
}
