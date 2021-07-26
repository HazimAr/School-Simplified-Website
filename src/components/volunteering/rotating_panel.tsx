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
			"more.",
		],
		display: true,
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
			"more.",
		],
		display: false,
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
			"more.",
		],
		display: false,
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


	let [activ, setActiv] = useControllableState({
		defaultValue: [true, false, false],
	});





	const [index, setIndex] = useControllableState({
		defaultValue: 0,
		onChange: (newIndex: number) => {
			if (newIndex < 0) setIndex(teams.length - 1);
			else if (newIndex >= teams.length) setIndex(0);
			// else {
				console.log(index + " vs " + newIndex);
			// }

			switch (index) {
				case 0:
					setActiv([false, true, false]);
					break;
				case 1:
					setActiv([false, false, true]);
					break;
				case 2:
					setActiv([true, false, false]);
					break;
			}


		},
	});







	useInterval(() => {
		setIndex(index + 1);
	}, 20000);

	return (
		<Container>
			<ContainerInside py={8}>
				<Heading size="lg" mb={3}>
					What can I volunteer for?
				</Heading>
				<Box mb={3}>
					<Panel
						teamName={teams[0].teamName}
						teamDesc={teams[0].teamDesc}
						link={teams[0].link}
						src={teams[0].src}
						teams={teams[0].teams}
						key={"key_0"}
						display={activ[0]}
					/>
					<Panel
						teamName={teams[1].teamName}
						teamDesc={teams[1].teamDesc}
						link={teams[1].link}
						src={teams[1].src}
						teams={teams[1].teams}
						key={"key_1"}
						display={activ[1]}
					/>
					<Panel
						teamName={teams[2].teamName}
						teamDesc={teams[2].teamDesc}
						link={teams[2].link}
						src={teams[2].src}
						teams={teams[2].teams}
						key={"key_2"}
						display={activ[2]}
					/>
				</Box>

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

//Interface structure for each team panel

type PanelProps = {
	children?: any;
	src: string;
	teamName: string;
	teamDesc: string;
	link: string;
	teams?: string[];
	display: boolean;
};

function Panel({
	src,
	teamName,
	teamDesc,
	link,
	teams,
	display,
}: PanelProps): JSX.Element {
	return (
		<Box py={5} display={display ? "default" : "none"}>
			<ScaleFade in={true}>
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
								Functions include{" "}
								{teams.slice(0, teams.length - 1).join(", ")},
								and {teams[teams.length - 1]}
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
