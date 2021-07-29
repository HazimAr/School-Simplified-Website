import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Image from "next/image";
import { ReactElement } from "react";
import Head from "next/head";
import StyledButton from "@components/button";
import NextLink from "next/link"

export default function partners(): ReactElement {
	return (
		<>
			<Head>
				<title>School Simplified | Partners</title>
			</Head>
			<Container>
				<ContainerInside py="30px">
					<Box py="25px" align="center">
						<Heading as="h1">Our Partners</Heading>
						<Text py="20px" maxW="800px">
							School Simplified is proudly partnered by the
							companies below. Each logo is clickable and links
							through to the sponsor's own website - please
							support these companies in any way you can, as a
							thank you for their incredible support of School
							Simplified.
						</Text>
						<NextLink href="/contact">
							<StyledButton>
								Apply Now
							</StyledButton>
						</NextLink>
					</Box>
					<HStack
						justify="center"
						align="center"
						flexDir={{ base: "column", md: "row" }}
						mt={5}
					>
						<Link href="https://slingshotahead.com" isExternal>
							<Image
								width="300px"
								height="118px"
								src="/partners/slingshot.png"
							/>
						</Link>
						<Link href="https://versatilenode.com" isExternal>
							<Image
								width="300px"
								height="63px"
								src="/partners/versatile.png"
							/>
						</Link>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
