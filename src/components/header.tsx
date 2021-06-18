import { Flex, Image, Link } from "@chakra-ui/react";

// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<Flex bg="#5a60ad" py="20px" justify="center" align="center">
			<Flex
				maxW="1200px"
				w="100%"
				as="header"
				justify="space-between"
				align="center"
				mx="50px"
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
