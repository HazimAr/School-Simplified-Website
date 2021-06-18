import { Flex, Image } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Flex bg="#5a60ad" py="30px">
			<Flex
				maxW="1200px"
				w="200%"
				mx="500px"
				as="header"
				justify="space-between"
			>
				<Image src="/logo.png" h="46px" w="200px" />
				<Flex>
					<a>About Us &nbsp; </a>
					<a>Join Us &nbsp; </a>
					<a>Contact </a>
				</Flex>
			</Flex>
		</Flex>
	);
}
