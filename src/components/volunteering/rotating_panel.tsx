import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Circle,
	Flex,
	Heading,
	Icon,
	Image,
	ScaleFade,
	Text,
	useControllableState,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import useInterval from "@hooks/useInterval";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

const teams: PanelProps[] = [
	{
		teamName: "Academics",
		teamDesc:
			"As part of our Academics Team, you can provide educational help to other students in the School Simplified community. If you excel in school and enjoy sharing your knowledge, join the Academics Team!",
		src: "/logos/aca_logo.png",
		link: "/academics",
		teams: [
			"tutoring",
			"chat-helping",
			"essay revision",
			"creating notes",
			"providing college advice",
		],
	},
	{
		teamName: "Tech",
		teamDesc:
			"Joining our Technology Team will allow you to develop skills such as programming, web development, and quality management. If you are knowledgeable in any of these areas, we encourage you to apply!",
		src: "/logos/tech_logo.png",
		link: "https://forms.gle/tqXm5aLwhWGQ4cGA6",
		teams: [
			"web development",
			"bot development",
			"VPS administration",
			"quality assurance",
			"server management",
		],
	},
	{
		teamName: "Marketing",
		teamDesc:
			"Joining the Marketing Team is a great opportunity for volunteers with experience in social media, design, and marketing. If you are interested in spreading School Simplified's mission, volunteer with the Marketing Team!",
		src: "/logos/mkt_logo.png",
		link: "https://forms.gle/xrZma1KjtZ6nzRxS8",
		teams: [
			"content creation",
			"design",
			"data analysis",
			"outreaching",
			"community engagement",
		],
	},
	// {
	// 	teamName: "Human Resources",
	// 	teamDesc:
	// 		"Joining the Marketing Team is a great opportunity for volunteers with experience in social media, design, and marketing. If you are interested in working closely with different aspects of the School Simplified community, such as events, social media, and blog posts, volunteer with the Marketing Team!",
	// 	src: "/logos/hr_logo.png",
	// 	link: "https://example.com/",
	// },
];

export default function RotatingPanel(): JSX.Element {
	const innerPanels = teams.map((v, index: number) => {
		return (
			<Panel
				teamName={v.teamName}
				teamDesc={v.teamDesc}
				link={v.link}
				src={v.src}
				teams={v.teams}
				key={"key_" + index}
			/>
		);
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

	return (
		<Container>
			{teams.map((team) => {
				return (
					<Image display="none" src={team.src} key={team.teamName} />
				);
			})}
			<ContainerInside py={8}>
				<Heading size="lg" mb={3}>
					What can I volunteer for?
				</Heading>
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
						_hover={{ cursor: "pointer" }}
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
						_hover={{ cursor: "pointer" }}
					>
						<Icon as={FaArrowRight} boxSize={5} />
					</Center>
				</Center>
			</ContainerInside>
		</Container>
	);
}

type PanelProps = {
	children?: any;
	src: string;
	teamName: string;
	teamDesc: string;
	link: string;
	teams?: string[];
};

function Panel({
	src,
	teamName,
	teamDesc,
	link,
	teams,
}: PanelProps): JSX.Element {
	return (
		<Box py={5}>
			<ScaleFade in={true} unmountOnExit={false}>
				<Flex
					justifyContent="space-between"
					flexDir={{ base: "column", md: "row" }}
					alignItems="center"
					overflow="auto"
				>
					<Circle
						p={{ base: 1, md: 2, lg: 3 }}
						bg="brand.transparent"
						mr={5}
					>
						<Image
							src={src}
							h={{ base: 100, sm: 200, md: 150, lg: 250 }}
							alt={teamName + " team logo"}
						/>
					</Circle>
					<Box>
						<Heading size="lg" textAlign="left">
							{teamName}
						</Heading>
						<Text textAlign="left" my={2}>
							{teamDesc}
						</Text>
						{teams ? (
							<Text textAlign="left" fontStyle="italic">
								Functions include {teams.join(", ")}, and more.
							</Text>
						) : null}

						<Flex flexDir="row">
							<NextLink
								isExternal
								href={link}
								_hover={{ textDecoration: "none" }}
							>
								<Button bg="brand.transparent" mt={5}>
									Join <ExternalLinkIcon ml={2} />
								</Button>
							</NextLink>
						</Flex>
					</Box>
				</Flex>
			</ScaleFade>
		</Box>
	);
}
