import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Image,
	Heading,
	Text,
	Flex,
	Button,
	Link,
} from "@chakra-ui/react";
import { useControllableState } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";

const teams: PanelProps[] = [
	{
		teamname: "Academics",
		teamdesc:
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
		teamname: "Tech",
		teamdesc:
			"The Tech Team is a good fit for volunteers that are handy with technology. Skills such as programming, quality management, development, and familiarity with Discord are all essential to maintain our website and Discord server; we encourage you to volunteer if you are knowledgable in any of these areas.",
		src: "/logos/tech_logo.png",
		link: "https://example.com/",
		teams: ["Website", "Developer", "Quality Assurance", "Discord"],
	},
	{
		teamname: "Marketing",
		teamdesc:
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
		teamname: "Human Resources",
		teamdesc: "dfsdgtxcfhujk",
		src: "/logos/hr_logo.png",
		link: "https://example.com/",
	},
];

export default function RotatingPanel(): JSX.Element {
	const innerPanels = teams.map((v, idx: number) => {
		return (
			<Panel
				src={v.src}
				teamname={v.teamname}
				teamdesc={v.teamdesc}
				link={v.link}
				teams={v.teams}
				key={"item_" + idx}
			/>
		);
	});
	const [index, setIndex] = useControllableState({
		defaultValue: 0,
		onChange: (newIndex: number) => {
			if (newIndex < 0) setIndex(innerPanels.length - 1);
			if (newIndex >= innerPanels.length) setIndex(0);
		},
	});

	return (
		<Container>
			<ContainerInside py={8}>
				<Heading size="lg" mb={3}>
					What can I volunteer for?
				</Heading>
				<Flex
					alignItems="center"
					justifyContent="space-between"
					mb={3}
					position="relative"
				>
					<Button
						onClick={() => setIndex(index - 1)}
						position="absolute"
						height="100%"
						left={0}
						top={0}
						bg="brand.transparent"
						w={{ base: 3, sm: 5, md: 10 }}
						minW="unset"
					>
						&lt;
					</Button>
					{innerPanels[index]}
					<Button
						onClick={() => setIndex(index + 1)}
						position="absolute"
						height="100%"
						right={0}
						top={0}
						bg="brand.transparent"
						w={{ base: 3, sm: 5, md: 10 }}
						minW="unset"
					>
						&gt;
					</Button>
				</Flex>
				{teams.map((_v, idx: number) => {
					return (
						<Text
							fontSize={15}
							mx={2}
							color={idx == index ? "white" : "brand.purple.dark"}
							display="inline"
							key={"text_" + idx}
						>
							•
						</Text>
					);
				})}
			</ContainerInside>
		</Container>
	);
}

interface PanelProps {
	children?: any;
	src: string;
	teamname: string;
	teamdesc: string;
	link: string;
	teams?: string[];
}

function Panel(props: PanelProps): JSX.Element {
	return (
		<Flex
			justifyContent="space-between"
			flexDir={{ base: "column", md: "row" }}
			alignItems="center"
			overflow="auto"
			flexGrow={1}
			mx={{ base: 10, sm: 12, md: 16 }}
			py={5}
		>
			<Image
				src={props.src}
				h={{ base: 100, sm: 200, md: 150, lg: 250 }}
				mr={{ base: 0, md: 3 }}
				mb={{ base: 3, md: 0 }}
				alt={props.teamname + " team logo"}
			/>
			<Box>
				<Heading size="lg" textAlign={["center", "center", "right"]}>
					{props.teamname}
				</Heading>
				<Text textAlign={["center", "center", "right"]} my={2}>
					{props.teamdesc}
				</Text>
				{props.teams ? (
					<Text
						textAlign={["center", "center", "right"]}
						fontStyle="italic"
					>
						Teams include{" "}
						{props.teams
							.slice(0, props.teams.length - 1)
							.join(", ")}
						, and {props.teams[props.teams.length - 1]}
					</Text>
				) : null}

				<Flex flexDir={{ base: "column", md: "row-reverse" }}>
					<Link
						isExternal={true}
						href={props.link}
						_hover={{ textDecoration: "none" }}
					>
						<Button bg="brand.transparent" mt={5}>
							Join <ExternalLinkIcon ml={2} />
						</Button>
					</Link>
				</Flex>
			</Box>
		</Flex>
	);
}
