import { Box, Image, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React, { ReactNode } from "react";

const teams: PanelProps[] = [
	{
		src: "https://picsum.photos/300/300",
		teamName: "Example Team",
		teamDesc: "alskjdfalkdsfj",
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
					teamName={v.teamName}
					teamDesc={v.teamDesc}
					key={"item_" + idx}
				/>
			);
		});
		this.state = { innerPanels: innerPanels, index: 0 };
	}

	render(): ReactNode {
		return (
			<Container bg="brand.transparent2" {...this.props}>
				<ContainerInside py={8}>
					{this.state.innerPanels[this.state.index]}
				</ContainerInside>
			</Container>
		);
	}
}

interface PanelProps {
	children?: any;
	src: string;
	teamName: string;
	teamDesc: string;
}

class Panel extends React.Component<PanelProps, any> {
	// constructor(props: PanelProps) {
	// 	super(props);
	// }

	render(): ReactNode {
		return (
			<Box {...this.props}>
				<Image src={this.props.src} />
				<Heading size="lg">{this.props.teamName}</Heading>
				<Text>{this.props.teamDesc}</Text>
			</Box>
		);
	}
}
