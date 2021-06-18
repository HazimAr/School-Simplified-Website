import { Flex, Image, Link } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Flex bg="#5a60ae" justify="center" align="center">
			<Flex
				justify="space-between"
				maxW="1200px"
				w="100%"
				mx="50px"
				py="10px"
				textAlign="left"
				align="center"
				flexWrap="wrap"
			>
				<Image src="/logo.png" w="200px" />
				<Flex>
					<Link href="/about">About Us </Link>
					<Link href="/join" mx="15px">
						Join Us
					</Link>
					<Link href="/contact">Contact</Link>
				</Flex>
			</Flex>
		</Flex>
	);
}
