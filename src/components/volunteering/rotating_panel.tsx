import {
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Image,
	ScaleFade,
	Text,
	useControllableState,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import useInterval from "@hooks/useInterval";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import { VolunteerPanelProps } from "types";

const teams: VolunteerPanelProps[] = [
	{
		teamName: "Marketing Department",
		teamDesc:
			"Joining the Marketing Team is a great opportunity for volunteers with experience in social media, design, and marketing. If you are interested in spreading School Simplified's mission, volunteer with the Marketing Team!",
		src: "timmy/marketingdept.png",
		link: "/volunteer/marketing",
		functions: [
			"tutoring",
			"chat-helping",
			"essay revision",
			"creating notes",
			"providing college advice",
		],
	},
	{
		teamName: "Projects Division",
		teamDesc:
			"text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
		src: "timmy/projectsdept.png",
		link: "/volunteer/projects",

		// link: "https://forms.gle/tqXm5aLwhWGQ4cGA6",
		functions: [
			"web development",
			"bot development",
			"VPS administration",
			"quality assurance",
			"server management",
		],
	},
	{
		teamName: "Academic Department",
		teamDesc:
			"As a part of our Academics Teams, you can provide educational help to other students in the School Simplified community. If you excel in school and enjoy sharing your knowledge, join the Academics Department!",
		src: "timmy/academicsdept.png",
		link: "/volunteer/acad",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
		functions: [
			"content creation",
			"design",
			"data analysis",
			"outreaching",
			"community engagement",
		],
	},
	{
		teamName: "Information-Technology Department",
		teamDesc:
			"Joining our Technology Team will allow you to develop skills such as programming, web development, and quality management. Apply if you are knowledgeable in any of these areas!",
		src: "timmy/itdept.png",
		link: "/volunteer/tech",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
		functions: [
			"content creation",
			"design",
			"data analysis",
			"outreaching",
			"community engagement",
		],
	},
	{
		teamName: "Community Division",
		teamDesc:
			"text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
		src: "timmy/communitydept.png",
		link: "/volunteer/community",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
		functions: [
			"content creation",
			"design",
			"data analysis",
			"outreaching",
			"community engagement",
		],
	},
	{
		teamName: "Human Resources Department",
		teamDesc:
			"text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
		src: "timmy/hrdept.png",
		link: "/volunteer/hr",

		//link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
		functions: [
			"content creation",
			"design",
			"data analysis",
			"outreaching",
			"community engagement",
		],
	},
];

export default function RotatingPanel(): JSX.Element {
	const innerPanels = teams.map((v, index: number) => {
		return <Panel {...v} key={"key_" + index} />;
	});
	const [index, setIndex] = useControllableState({
		defaultValue: 0,
		onChange: (_newIndex: number) => {
			// 	console.log(index + " vs " + newIndex);
		},
	});

	useInterval(() => {
		setIndex(index === innerPanels.length - 1 ? 0 : index + 1);
	}, 20000);

	//src= "\timmy\timmy_background"

	return (
		<Container >
			{teams.map((team) => {
				return (
					<Image
						display="none"
						src={team.src}
						key={team.teamName}
						alt={team.teamName + " team icon"}
					/>
				);
			})}
			<ContainerInside py={8}>
				<Box mb={3}>{innerPanels[index]}</Box>
				<Center>
					<Center
						onClick={() =>
							setIndex(
								index === 0 ? innerPanels.length - 1 : index - 1
							)
						}
						w="fit-content"
						mx={2}
						cursor="pointer"
					>
						<Icon as={FaArrowLeft} boxSize={5} />
					</Center>
					{teams.map((_v, idx: number) => {
						return (
							<Center key={"text_" + idx}>
								<Icon
									as={FaCircle}
									boxSize={3}
									color={
										idx == index
											? "white"
											: "brand.purple.dark"
									}
									mx={2}
									onClick={() => setIndex(idx)}
									cursor="pointer"
									opacity={0.7}
								/>
							</Center>
						);
					})}
					<Center
						onClick={() =>
							setIndex(
								index === innerPanels.length - 1 ? 0 : index + 1
							)
						}
						w="fit-content"
						mx={2}
						cursor="pointer"
					>
						<Icon as={FaArrowRight} boxSize={5} />
					</Center>
				</Center>
			</ContainerInside>
		</Container>
	);
}

function Panel({
	src,
	teamName,
	teamDesc,
	link,
}: // functions,
VolunteerPanelProps): JSX.Element {
	return (
		<Box py={5}>
			<ScaleFade in={true} unmountOnExit={false}>
				<Center>
					<Flex
						justifyContent="flex-start"
						flexDir={{ base: "column", md: "column", lg: "row" }}
						alignItems="center"
						overflow="auto"
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
								{teamName}
							</Heading>
							<Text
								textAlign="left"
								my={2}
								width={{
									lg: "720px",
									base: "250px",
									md: "700px",
									sm: "470px",
								}}
							>
								{teamDesc}
							</Text>

							{/* {functions ? (
								<Text textAlign="left" fontStyle="italic">
									Functions include {functions.join(", ")}, and
									more.
								</Text>
							) : null} */}

							<NextLink
								isExternal
								href={link}
								_hover={{ textDecoration: "none" }}
							>
								<Button
									bg="linear-gradient(90deg, #FFA270 0%, #e6c068 100%)"
									//mt={{ base: 5, md: 0 }}
								>
									Applications
								</Button>
							</NextLink>
						</VStack>
						<Image
							src={src}
							h={{ base: 150, sm: 200, md: 250, lg: 250 }}
							ml={{
								base: "30px",
								sm: "30px",
								md: "30px",
								lg: "50px",
								xl: "100px",
							}}
							mt={{ base: 5, md: 0 }}
							alt={teamName + " team logo"}
							rounded="full"
						/>
					</Flex>
				</Center>
			</ScaleFade>
		</Box>
	);
}
