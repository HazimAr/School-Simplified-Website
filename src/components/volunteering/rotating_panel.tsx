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
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React, { ReactNode, MouseEvent } from "react";

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

interface State {
	innerPanels: JSX.Element[];
	index: number;
}

export default class RotatingPanel extends React.Component<any, State> {
	constructor(props: any) {
		super(props);

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
		this.state = { innerPanels: innerPanels, index: 0 };
		this.handleClickUp = this.handleClickUp.bind(this);
		this.handleClickDown = this.handleClickDown.bind(this);
	}

	handleClickUp(_event: MouseEvent<HTMLButtonElement>) {
		const newIdx = (this.state.index + 1) % this.state.innerPanels.length;
		this.setState({ index: newIdx });
	}

	handleClickDown(_event: MouseEvent<HTMLButtonElement>) {
		let newIdx = this.state.index - 1;
		if (newIdx < 0) newIdx += this.state.innerPanels.length;
		this.setState({ index: newIdx });
	}

	render(): ReactNode {
		return (
			<Container bg="brand.transparent2" {...this.props}>
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
							onClick={this.handleClickDown}
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
						{this.state.innerPanels[this.state.index]}
						<Button
							onClick={this.handleClickUp}
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
					{teams.map((_v, index: number) => {
						return (
							<Text
								fontSize={15}
								mx={2}
								color={
									index == this.state.index
										? "white"
										: "brand.purple.dark"
								}
								display="inline"
								key={"text_" + index}
							>
								•
							</Text>
						);
					})}
				</ContainerInside>
			</Container>
		);
	}
}

interface PanelProps {
	children?: any;
	src: string;
	teamname: string;
	teamdesc: string;
	link: string;
	teams?: string[];
}

class Panel extends React.Component<PanelProps, any> {
	// constructor(props: PanelProps) {
	// 	super(props);
	// }

	render(): ReactNode {
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
					src={this.props.src}
					h={{ base: 100, sm: 200, md: 175, lg: 250 }}
					mr={{ base: 0, md: 3 }}
					mb={{ base: 3, md: 0 }}
				/>
				<Box>
					<Heading
						size="lg"
						textAlign={["center", "center", "right"]}
					>
						{this.props.teamname}
					</Heading>
					<Text textAlign={["center", "center", "right"]} my={2}>
						{this.props.teamdesc}
					</Text>
					{this.props.teams ? (
						<Text
							textAlign={["center", "center", "right"]}
							fontStyle="italic"
						>
							Teams include{" "}
							{this.props.teams
								.slice(0, this.props.teams.length - 1)
								.join(", ")}
							, and{" "}
							{this.props.teams[this.props.teams.length - 1]}
						</Text>
					) : null}

					<Flex flexDir={{ base: "column", md: "row-reverse" }}>
						<Link
							isExternal={true}
							href={this.props.link}
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
}
