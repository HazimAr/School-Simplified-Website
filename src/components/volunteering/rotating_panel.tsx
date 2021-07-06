import { Box, Image } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React, { ReactNode } from "react";

export default class RotatingPanel extends React.Component {
	// constructor(props: any) {
	// 	super(props);
	// }

	render(): ReactNode {
		return (
			<Container bg="brand.transparent2">
				<ContainerInside py={8}>
					<Panel src="aslkjalsdkfj" />
				</ContainerInside>
			</Container>
		);
	}
}

interface PanelProps {
	children?: any;
	src: string;
}

class Panel extends React.Component<PanelProps, any> {
	// constructor(props: PanelProps) {
	// 	super(props);
	// }

	render(): ReactNode {
		return (
			<Box>
				<Image src={this.props.src} />
			</Box>
		);
	}
}
