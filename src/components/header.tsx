import { Flex, Image } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Flex bg="#5a60ad" py="20px" justify="center" align="center">
			<Flex
				maxW="1200px"
				w="200%"
				as="header"
				justify="space-between"
				align="center"
				mx="50px"
			>
				<Image src="/logo.png" w="200px" />
				<Flex>
					<a>About Us &nbsp; </a>
					<a>Join Us &nbsp; </a>
					<a>Contact </a>
				</Flex>
			</Flex>
		</Flex>
	);
}
