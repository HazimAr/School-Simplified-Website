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
						<Box backgroundColor="#D8D6EC">
							<TabList
								justify="center"
								align="center"
								color="#8287BE"
							>
								<Tab
									_selected={{
										borderBottom: "5px solid #8287BE",
									}}
									pt={3}
								>
									<Heading
										fontSize={{
											base: 13,
											md: 20,
											lg: 30,
										}}
										color="#8287BE"
									>
										Academic Partners
									</Heading>
								</Tab>
								<Tab
									_selected={{
										borderBottom: "5px solid #8287BE",
									}}
									pt={3}
								>
									<Heading
										fontSize={{
											base: 13,
											md: 20,
											lg: 30,
										}}
										color="#8287BE"
									>
										Community Partners
									</Heading>
								</Tab>
								<Tab
									_selected={{
										borderBottom: "5px solid #8287BE",
									}}
									pt={3}
								>
									<Heading
										fontSize={{
											base: 13,
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
									columns={[2, null, 3]}
									spacing="20px"
									minChildWidth={{
										base: 170,
										sm: 140,
										md: 250,
										lg: 200,
									}}
									spacingY={0}
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
										alt="Deloitte"
										src="/partners/deloitte.png"
									/>
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									columns={[2, null, 3]}
									spacing="20px"
									minChildWidth={{
										base: 170,
										sm: 170,
										md: 250,
										lg: 300,
									}}
									spacingY={0}
								></SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									columns={[2, null, 3]}
									spacing="40px"
									minChildWidth={{
										base: 170,
										sm: 170,
										md: 250,
										lg: 300,
									}}
									spacingY={0}
								></SimpleGrid>
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
				<Center bg="#D8D6EC" rounded="lg" mt={10}>
					<Image src={src} alt={alt} />
				</Center>
			</PopoverTrigger>
			<PopoverContent bg="#D8D6EC" color="#8287BE">
				<PopoverCloseButton />
				<PopoverHeader fontWeight={700}>{alt}</PopoverHeader>
				<PopoverBody>Description of partner here</PopoverBody>
			</PopoverContent>
		</Popover>
	);
}
