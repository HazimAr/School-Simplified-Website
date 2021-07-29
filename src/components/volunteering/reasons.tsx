import { Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const reasons = [
	{
		title: "Earn Volunteer Hours",
		text: "As a registered nonprofit organization, School Simplified can offer you community service hours. By increasing your volunteering experience, you can build up your college application, apply for NHS, or enhance your resume!",
	},
	{
		title: "Learn New Skills",
		text: "We offer hands-on experience in a professional work setting! In addition, our staff are given learning opportunities, such as workshops, training programs, and early access to other bonus educational resources.",
	},
	{
		title: "Leadership Opportunities",
		text: "School Simplified offers plenty of leadership opportunities for your resume, including management and executive positions. Since many of these are only accessible to our current staff, more opportunities open up after you become a volunteer!",
	},
	{
		title: "Networking and Friends",
		text: "With a collective community of over 300 volunteers worldwide, we offer you opportunities to network with teenagers from all different backgrounds. You'll make useful connections on a company wide level, and even better, form dozens of new friendships!",
	},
	{
		title: "Free Premium Resources",
		text: "As members of our staff, all volunteers get access to perks such as Canva Pro and server hosting, which are paid for by the company. These tools are available for you to use, not only to contribute to our community, but also for you to explore as a learning material!",
	},
	{
		title: "Easy Online Access",
		text: "School Simplified is completely virtual, meaning you can volunteer whenever you want, wherever you want. As long as you have an Internet connection, you have unlimited access to our flexible opportunities worldwide!",
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
					<GridItem py={4}>
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
					<GridItem px={5}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem py={4}>
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
						px={5}
						display={{ base: "block", md: "none", lg: "block" }}
					>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem py={4}>
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
					<GridItem px={5} display={{ base: "block", lg: "none" }}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem py={4}>
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
						px={5}
						display={{ base: "block", md: "none", lg: "block" }}
					>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem py={4}>
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
					<GridItem px={5}>
						<Divider orientation="vertical" bg="white" />
					</GridItem>
					<GridItem py={4}>
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
