import { Flex, Image, Link } from "@chakra-ui/react";
import Container from "@components/container";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	return (
		<Container bg="brand.purple.light" as="header">
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
				<Link href="/">
					<Image src="/longLogo.png" w="200px" />
				</Link>
				<Flex>
					<Link href="/about" mr="7px">
						About Us
					</Link>
					<Link href="/join" mr="7px">
						Join Us
					</Link>
					<Link href="/contact">Contact</Link>
				</Flex>
			</Flex>
		</Container>
	);
}
