import { Link, Flex, Image, Box } from "@chakra-ui/react";
import Container from "./container";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Container as="header" justify="space-between">
			<Box>
				<Image src="/logo.png" h="75" />
				<Flex>
					<a>About Us &nbsp; </a>
					<a>Join Us &nbsp; </a>
					<a>Contact </a>
				</Flex>
			</Box>
		</Container>
	);
}
