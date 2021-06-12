import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, Box, Flex } from "@chakra-ui/react";
import Container from "./container";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Container as="header" justify="space-between" my="10px">
			<h2>NextJS Boilerplate</h2>
			<Flex>
				<Link href="https://github.com/HazimAr/" aria-label="Github">
					<FaGithub size="30px" />
				</Link>
				<Link
					href="https://www.linkedin.com/in/hazim-arafa-a439aa205/"
					aria-label="LinkedIn"
				>
					<FaLinkedin size="30px" />
				</Link>
			</Flex>
		</Container>
	);
}
