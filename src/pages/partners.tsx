import {
	Box,
	Center,
	Divider,
	Heading,
	Image,
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	Wrap,
	WrapItem,
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
							<Box maxW="60ch" textAlign="left" mt={`20px`}>
								<Heading mb={10}>
									A network for you to become a part of the
									journey
								</Heading>
								<Text my="10px">
									Connect with us, take advantage of our
									resources, and together we can build a
									brighter future.
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
								color="#8287BE"
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
										color="#8287BE"
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
										color="#8287BE"
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
										color="#8287BE"
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
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									minChildWidth="320px"
									spacing="40px"
								>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
									/>
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									minChildWidth="320px"
									spacing="40px"
								>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
									<Cell
										alt="Slingshot"
										src="/partners/slingshot.png"
									/>
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
	alt: string;
};

function Cell({ src, alt }: ImageCell): JSX.Element {
	return (
		<Popover>
			<PopoverTrigger>
				<Center my={10} height="80px">
					<Image src={src} alt={alt} />{" "}
				</Center>
			</PopoverTrigger>
			<PopoverContent bg="#fff" color="#8287BE">
				<PopoverCloseButton />
				<PopoverHeader>{alt}</PopoverHeader>{" "}
				<PopoverBody>Description of partner here</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}
