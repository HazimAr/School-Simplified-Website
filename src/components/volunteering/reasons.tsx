import { Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const reasons = [
	{
		title: "Earn Volunteer Hours",
		text: "As a non-profit organization, School Simplified is able to offer you community service hours and opportunities to build up your volunteering experience. With these hours, you can build up your college resume or even utilize them for NHS or anything you need it for!",
	},
	{
		title: "Learn New Skills",
		text: "We offer hands on experience in a professional work setting! Alongside this, we offer learning opportunities such as workshops, training programs, and other methods of learning for those who become a part of our staff.",
	},
	{
		title: "Leadership Opportunities",
		text: "School Simplified also offers plenty of leadership positions such as management and executive positions from a real company that you can put on your resume! Many of these are only accessible by our volunteers, so there will be many more opportunities that open up once you become a part of the team!",
	},
	{
		title: "Networking and Friends",
		text: "With a collective community of over 300 volunteers worldwide, we offer an opportunity for you to network with teenagers from different backgrounds, get help from others, as well as make worldwide friends! In addition to this, we offer opportunities for you to network and handle connections on company wide level!",
	},
	{
		title: "Free Premium Resources",
		text: "As members of our staff, all volunteers get access to the perks such as premium resources paid by School Simplified! These tools will be for you to use and learn, not only to contribute to the community but it will be for you to explore and learn!",
	},
	{
		title: "Easy Online Access",
		text: "School Simplified is completely virtual meaning you can volunteer whenever you want and where ever you want as long as you're connected to the internet, meaning unlimited access to opportunities worldwide!",
	},
];

export default function Reasons(): JSX.Element {
	return (
		<Container>
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
						<Heading
							fontStyle="italic"
							size="md"
							mb={2}
							color="#ffe19a"
						>
							{reasons[0].title}
						</Heading>
						<Text fontSize={15}>{reasons[0].text}</Text>
					</GridItem>
					<GridItem mx={5}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading
							fontStyle="italic"
							size="md"
							mb={2}
							color="#ffe19a"
						>
							{reasons[1].title}
						</Heading>
						<Text fontSize={15}>{reasons[1].text}</Text>
					</GridItem>
					<GridItem
						mx={5}
						display={{ base: "block", md: "none", lg: "block" }}
					>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading
							fontStyle="italic"
							size="md"
							mb={2}
							color="#ffe19a"
						>
							{reasons[2].title}
						</Heading>
						<Text fontSize={15}>{reasons[2].text}</Text>
					</GridItem>
					<GridItem mx={5} display={{ base: "block", lg: "none" }}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading
							fontStyle="italic"
							size="md"
							mb={2}
							color="#ffe19a"
						>
							{reasons[3].title}
						</Heading>
						<Text fontSize={15}>{reasons[3].text}</Text>
					</GridItem>
					<GridItem
						mx={5}
						display={{ base: "block", md: "none", lg: "block" }}
					>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading
							fontStyle="italic"
							size="md"
							mb={2}
							color="#ffe19a"
						>
							{reasons[4].title}
						</Heading>
						<Text fontSize={15}>{reasons[4].text}</Text>
					</GridItem>
					<GridItem mx={5}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem my={4}>
						<Heading
							fontStyle="italic"
							size="md"
							mb={2}
							color="#ffe19a"
						>
							{reasons[5].title}
						</Heading>
						<Text fontSize={15}>{reasons[5].text}</Text>
					</GridItem>
				</Grid>
			</ContainerInside>
		</Container>
	);
}
