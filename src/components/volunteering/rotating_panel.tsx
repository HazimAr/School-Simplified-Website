import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	Link,
	ScaleFade,
	Text,
	useControllableState,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";

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

	return (
		<Container>
			<ContainerInside py={8}>
				<Heading size="lg" mb={3}>
					What can I volunteer for?
				</Heading>
				<Box mb={3} position="relative">
					<Button
						onClick={() => setIndex(index - 1)}
						position="absolute"
						height="100%"
						left={0}
						top={0}
						bg="brand.transparent"
						w={{ base: 3, sm: 5, md: 10 }}
						minW="unset"
						zIndex={2}
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
						zIndex={2}
					>
						&gt;
					</Button>
				</Box>
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

type PanelProps = {
	children?: any;
	src: string;
	teamName: string;
	teamDesc: string;
	link: string;
	teams?: string[];
};

function Panel(props: PanelProps): JSX.Element {
	return (
		<Box mx={{ base: 10, sm: 12, md: 16 }} py={5}>
			<ScaleFade in={true}>
				<Flex
					justifyContent="space-between"
					flexDir={{ base: "column", md: "row" }}
					alignItems="center"
					overflow="auto"
				>
					<Image
						src={props.src}
						h={{ base: 100, sm: 200, md: 150, lg: 250 }}
						mr={{ base: 0, md: 3 }}
						mb={{ base: 3, md: 0 }}
						alt={props.teamName + " team logo"}
					/>
					<Box>
						<Heading
							size="lg"
							textAlign={{ base: "center", md: "right" }}
						>
							{props.teamName}
						</Heading>
						<Text
							textAlign={{ base: "center", md: "right" }}
							my={2}
						>
							{props.teamDesc}
						</Text>
						{props.teams ? (
							<Text
								textAlign={{ base: "center", md: "right" }}
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
								isExternal
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
			</ScaleFade>
		</Box>
	);
}
