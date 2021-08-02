import {
	Box,
	Heading,
	Image,
	Center,
	Wrap,
	SimpleGrid,
	Text,
	Divider,
	WrapItem,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Head from "next/head";
import React, { ReactElement } from "react";

export default function partners(): ReactElement {
	return (
		<>
			<Head>
				<title>School Simplified | Partners</title>
			</Head>
			<Container>
				<ContainerInside align="center">
					<Wrap justify="center" align="center" mt={50}>
						<WrapItem>
							{" "}
							<Box maxW="60ch" textAlign="left" mt={`20px`}>
								<Heading mb={10}>
									A network for you to become a part of the
									journey
								</Heading>
								<Text my="10px">
									School Simplified is a digital nonprofit
									whose mission is to spread educational
									equality by providing free academic
									services, products, and opportunities for
									teenagers.
								</Text>
								{/* <NextLink href="/notes">
							<Button>Get Free Help</Button>
						</NextLink> */}
							</Box>
						</WrapItem>

						<WrapItem>
							<Box textAlign="left">
								<Image
									maxH="300px"
									src="/timmy/32.png"
									alt="Timmy with graduation cap"
									display={{ base: "none", md: "block" }}
								/>
							</Box>
						</WrapItem>
					</Wrap>
					<NextLink href="/contact">
						<StyledButton
							display="block"
							width={{ base: "50", md: "50", sm: "40" }}
						>
							Apply Now
						</StyledButton>
					</NextLink>

					<Divider h={1} bg="#fff" my={10} />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside>
					<Heading mb={10}>Our Partners</Heading>
					<Tabs variant="line" colorScheme="purple" align="center">
						<Box py={2} backgroundColor="#D8D6EC">
							<TabList
								justify="center"
								align="center"
								color="#8287be"
							>
								<Tab
									_selected={{ textDecoration: "underline" }}
									fontWeight={100}
									py={3}
								>
									<Heading
										fontSize={{
											base: 20,
											sm: 20,
											md: 20,
											lg: 30,
										}}
										color="#8287be"
									>
										Academic Partners
									</Heading>
								</Tab>
								<Tab
									_selected={{ textDecoration: "underline" }}
								>
									<Heading
										fontSize={{
											base: 20,
											sm: 20,
											md: 20,
											lg: 30,
										}}
										color="#8287be"
									>
										Community Partners
									</Heading>
								</Tab>
								<Tab
									_selected={{ textDecoration: "underline" }}
								>
									<Heading
										fontSize={{
											base: 20,
											sm: 20,
											md: 20,
											lg: 30,
										}}
										color="#8287be"
									>
										Donors & Sponsors
									</Heading>
								</Tab>
							</TabList>
						</Box>

						<TabPanels mt={10}>
							<TabPanel>
								<SimpleGrid
									minChildWidth="320px"
									spacing="40px"
								>
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/versatile.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/versatile.png" />
									<Cell src="/partners/slingshot.png" />
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									minChildWidth="320px"
									spacing="40px"
								>
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/versatile.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/versatile.png" />
									<Cell src="/partners/versatile.png" />
									<Cell src="/partners/versatile.png" />
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									minChildWidth="320px"
									spacing="40px"
								>
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
									<Cell src="/partners/slingshot.png" />
								</SimpleGrid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ContainerInside>
			</Container>
		</>
	);
}

type ImageCell = {
	src: string;
};

function Cell({ src }: ImageCell): JSX.Element {
	return (
		<Center my={10} height="80px">
			<Image src={src} />{" "}
		</Center>
	);
}
