import {
	Center,
	Flex,
	Heading,
	Image,
	ScaleFade,
	Text,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import RotatingPanel from "@components/rotatingPanel";
import { VolunteerPanelProps } from "types";

const teams: VolunteerPanelProps[] = [
	{
		teamName: "Marketing Department",
		teamDesc:
			"Joining the Marketing Team is a great opportunity for volunteers with experience in social media, design, and marketing. If you are interested in spreading School Simplified's mission, volunteer with the Marketing Team!",
		src: "timmy/marketingdept.png",
		link: "/volunteer/marketing",
		key: "Marketing Department",
	},
	{
		teamName: "Projects Division",
		teamDesc:
			"By joining our Projects Team, you can earn community service hours while proposing projects for School Simplified, create and share notes on various subjects through our official website, create resources for students, or help us hold events regarding either high school or college preparation.",
		src: "timmy/projectsdept.png",
		link: "/volunteer/projects",
		key: "Projects Division",

		// link: "https://forms.gle/tqXm5aLwhWGQ4cGA6",
	},
	{
		teamName: "Academic Department",
		teamDesc:
			"As a part of our Academics Teams, you can provide educational help to other students in the School Simplified community. If you excel in school and enjoy sharing your knowledge, join the Academics Department!",
		src: "timmy/academicsdept.png",
		link: "/volunteer/acad",
		key: "Academic Department",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
	},
	{
		teamName: "Information-Technology Department",
		teamDesc:
			"Joining our Technology Team will allow you to develop skills such as programming, web development, and quality management. Apply if you are knowledgeable in any of these areas!",
		src: "timmy/itdept.png",
		link: "https://timmy.schoolsimplified.org/tech-application",
		key: "Information-Technology Department",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
	},
	{
		teamName: "Community Division",
		teamDesc:
			"By being apart of the Community Department, you can moderate our Discord server, become an Adivsor, or help us organize our future events. Apply today!",
		src: "timmy/communitydept.png",
		link: "/volunteer/community",
		key: "Community Division",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
	},
	{
		teamName: "Human Resources Department",
		teamDesc:
			"Our Human Resources Department primarily works on onboarding new members and overseeing the specific teams they are in the charge of. They also closely work with the managers to hire new staff for School Simplified.",
		src: "timmy/hrdept.png",
		link: "https://forms.gle/HnraGUWyPR59S35f9",
		key: "Human Resources Department",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
	},
];

export default function VolunteerRotatingPanel(): JSX.Element {
	return (
		<Container>
			<ContainerInside py={8}>
				<RotatingPanel Element={Panel} innerPanelProps={teams} />
			</ContainerInside>
		</Container>
	);
}

function Panel(props: VolunteerPanelProps): JSX.Element {
	return (
		<ScaleFade in={true} unmountOnExit={false}>
			<Center>
				<Flex
					justifyContent="flex-start"
					flexDir={{ base: "column", lg: "row" }}
					alignItems="center"
					overflow="auto"
					py={5}
				>
					<VStack
						alignItems="flex-start"
						textAlign="left"
						width={{
							base: "250px",
							xl: "600px",
							lg: "650px",
							md: "700px",
							sm: "480px",
						}}
						spacing={{ base: 5, md: 8 }}
						justifyContent={{ base: "center", md: "center" }}
					>
						<Heading
							size="lg"
							textAlign={{ base: "left", md: "center" }}
						>
							{props.teamName}
						</Heading>
						<Text textAlign="justify" my={2}>
							{props.teamDesc}
						</Text>

						{/* {functions ? (
						<Text textAlign="left" fontStyle="italic">
						Functions include {functions.join(", ")}, and
						more.
						</Text>
					) : null} */}

						<NextLink
							isExternal
							href={props.link}
							_hover={{ textDecoration: "none" }}
						>
							<Button>Applications</Button>
						</NextLink>
					</VStack>
					<Image
						src={props.src}
						h={{ base: 150, sm: 200, md: 250, lg: 250 }}
						ml={{
							base: "0",
							md: "30px",
							lg: "50px",
							xl: "100px",
						}}
						mt={{ base: 5, md: 0 }}
						alt={props.teamName + " team logo"}
						rounded="full"
					/>
				</Flex>
			</Center>
		</ScaleFade>
	);
}
