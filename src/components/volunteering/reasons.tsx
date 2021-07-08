import { Divider, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const reasons = [
	{
		title: "Earn Volunteer Hours",
		text: "All volunteers can earn community service hours and build up their volunteering experience. Our active community provides a friendly tutoring environment for all students.",
	},
	{
		title: "Learn New Skills",
		text: "Tutoring allows volunteers to discover many different skills and experiences outside of the classroom, including leadership and critical thinking.",
	},
	{
		title: "Tutor Other Students",
		text: "Help other students with various subjects and classes, at many different grade levels.",
	},
	{
		title: "Join the Community",
		text: "Join an interactive community of enthusiastic students that are committed to learning",
	},
	{
		title: "Share Resources",
		text: "Contribute to our resources that are shared by other students for mutual learning.",
	},
	{
		title: "Remote Tutoring",
		text: "Our Discord server allows volunteers to tutor wherever and whenever, with the capacity to choose their own hours",
	},
];

export default function Reasons(): JSX.Element {
	return (
		<Container bg="brand.transparent">
			<ContainerInside py={8}>
				<Heading size="lg" mb={3}>
					Why volunteer for us?
				</Heading>
				<Grid
					templateColumns={{
						base: "1fr",
						md: "1fr auto 1fr",
						lg: "1fr auto 1fr auto 1fr",
					}}
				>
					<GridItem my={4}>
						<Heading fontStyle="italic" size="md" mb={2}>
							{reasons[0].title}
						</Heading>
						<Text>{reasons[0].text}</Text>
					</GridItem>
					<GridItem mx={5}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading fontStyle="italic" size="md" mb={2}>
							{reasons[1].title}
						</Heading>
						<Text>{reasons[1].text}</Text>
					</GridItem>
					<GridItem
						mx={5}
						display={{ base: "block", md: "none", lg: "block" }}
					>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading fontStyle="italic" size="md" mb={2}>
							{reasons[2].title}
						</Heading>
						<Text>{reasons[2].text}</Text>
					</GridItem>
					<GridItem mx={5} display={{ base: "block", lg: "none" }}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading fontStyle="italic" size="md" mb={2}>
							{reasons[3].title}
						</Heading>
						<Text>{reasons[3].text}</Text>
					</GridItem>
					<GridItem
						mx={5}
						display={{ base: "block", md: "none", lg: "block" }}
					>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading fontStyle="italic" size="md" mb={2}>
							{reasons[4].title}
						</Heading>
						<Text>{reasons[4].text}</Text>
					</GridItem>
					<GridItem mx={5}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading fontStyle="italic" size="md" mb={2}>
							{reasons[5].title}
						</Heading>
						<Text>{reasons[5].text}</Text>
					</GridItem>
				</Grid>
			</ContainerInside>
		</Container>
	);
}
