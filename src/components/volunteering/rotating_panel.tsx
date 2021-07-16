import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Circle,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
	ScaleFade,
	Text,
	useControllableState,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import useInterval from "@hooks/useInterval";
import React from "react";
import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";

const teams: PanelProps[] = [
	{
		teamName: "Academics",
		teamDesc:
			"Help other students in the School Simplified community with our Academics Team. Responsibilities include educational help, sharing resources, and tutoring.",
		src: "/logos/aca_logo.png",
		link: "https://example.com/",
		teams: [
			"Notes",
			"Prep",
			"Tutoring",
			"Chat-Helping",
			"Essay Proofreading",
		],
	},
	{
		teamName: "Tech",
		teamDesc:
			"The Tech Team is a good fit for volunteers that are handy with technology. Skills such as programming, quality management, development, and familiarity with Discord are all essential to maintain our website and Discord server; we encourage you to volunteer if you are knowledgeable in any of these areas.",
		src: "/logos/tech_logo.png",
		link: "https://example.com/",
		teams: ["Website", "Developer", "Quality Assurance", "Discord"],
	},
	{
		teamName: "Marketing",
		teamDesc:
			"Joining the Marketing Team is a great opportunity for volunteers with experience in social media, design, and marketing. If you are interested in working closely with different aspects of the School Simplified community, such as events, social media, and blog posts, volunteer with the Marketing Team!",
		src: "/logos/mkt_logo.png",
		link: "https://example.com/",
		teams: [
			"Instagram",
			"TikTok",
			"Blog",
			"Marketing Analytics",
			"Events",
			"PR",
			"Design",
		],
	},
	{
		teamName: "Human Resources",
		teamDesc:
			"Joining the Marketing Team is a great opportunity for volunteers with experience in social media, design, and marketing. If you are interested in working closely with different aspects of the School Simplified community, such as events, social media, and blog posts, volunteer with the Marketing Team!",
		src: "/logos/hr_logo.png",
		link: "https://example.com/",
	},
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
		onChange: (newIndex: number) => {
			if (newIndex < 0) setIndex(innerPanels.length - 1);
			else if (newIndex >= innerPanels.length) setIndex(0);
			else {
				console.log(index + " vs " + newIndex);
			}
		},
	});

	useInterval(() => {
		setIndex(index + 1);
	}, 10000);

	return (
		<Container>
			<ContainerInside py={8}>
				<Heading size="lg" mb={3}>
					What can I volunteer for?
				</Heading>
				<Box mb={3}>{innerPanels[index]}</Box>
				<Center>
					<Button
						onClick={() => setIndex(index - 1)}
						w="fit-content"
						mx={2}
						p={0}
						type="no-bg"
					>
						<Center>
							<Icon as={FaArrowLeft} boxSize={5} />
						</Center>
					</Button>
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
					<Button
						onClick={() => setIndex(index + 1)}
						w="fit-content"
						mx={2}
						p={0}
						type="no-bg"
					>
						<Center>
							<Icon as={FaArrowRight} boxSize={5} />
						</Center>
					</Button>
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
			<ScaleFade in={true}>
				<Flex
					justifyContent="space-between"
					flexDir="row"
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
								Teams include{" "}
								{teams.slice(0, teams.length - 1).join(", ")},
								and {teams[teams.length - 1]}
							</Text>
						) : null}

						<Flex flexDir="row">
							<Link
								isExternal
								href={link}
								_hover={{ textDecoration: "none" }}
							>
								<Button bg="brand.transparent" mt={5}>
									Join <ExternalLinkIcon ml={2} />
								</Button>
							</Link>
						</Flex>
					</Box>
				</Flex>
			</ScaleFade>
		</Box>
	);
}
