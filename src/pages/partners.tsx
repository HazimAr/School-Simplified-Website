import {
	Box,
	Center,
	Divider,
	Heading,
	Image,
	Popover,
	PopoverBody,
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
	useDisclosure,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import React, { ReactElement } from "react";

export default function partners(): ReactElement {
	return (
		<>
			<Container>
				<ContainerInside align="center">
					<Wrap justify="center" align="center" mt={50}>
						<WrapItem>
							<Box maxW="60ch" textAlign="left" mt={10}>
								<Heading mb={10}>
									A network for you to become a part of the
									journey
								</Heading>
								<Text my={5}>
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
									maxH={400}
									src="/timmy/23.png"
									alt="Timmy with graduation cap"
									display={{ base: "none", md: "block" }}
								/>
							</Box>
						</WrapItem>
					</Wrap>
					<NextLink href="https://docs.google.com/forms/d/e/1FAIpQLScxSrndCBz1VUA-fv5TvfmEpdowUKws1euU4nuxMcSE51JiZA/viewform?usp=sf_link">
						<StyledButton
							display="block"
							width={{ base: "50", md: "50", sm: "40" }}
						>
							Apply Now
						</StyledButton>
					</NextLink>

					<Divider bg="white" my={10} />
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
										Donors &amp; Sponsors
									</Heading>
								</Tab>
							</TabList>
						</Box>

						<TabPanels mt={10}>
							<TabPanel>
								<SimpleGrid
									columns={{ sm: 2, md: 3 }}
									spacing={6}
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
										desc="Slingshot is a organization that places teenage prodigies at startups out of Techstars, YC, Carnegie Mellon, Stanford, MIT, and more, offering students access to the real world of technology."
									/>
									<Cell
										alt="Versatile"
										src="/partners/versatile.png"
										desc="Versatile Node is an organization geared towards providing cheap, fast and reliable hosting for all your needs! Versatile offers resources range from minecraft hosting, VPS hosting, to web hosting."
									/>
									<Cell
										alt="Deloitte"
										src="/partners/deloitte.png"
										desc="Deloitte US is the largest professional services organization in the United States. With more than 100,000 professionals, Deloitte provides audit and assurance, tax, consulting, and risk and financial advisory services to a broad cross-section of the largest corporations and governmental agencies."
									/>
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid
									columns={{ sm: 2, md: 3 }}
									spacing={6}
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
									columns={{ sm: 2, md: 3 }}
									spacing={6}
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
	desc: string;
};

function Cell({ src, alt, desc }: ImageCell): JSX.Element {
	const graceTime: number = 250;

	const { isOpen, onOpen, onClose } = useDisclosure();
	let timeout: NodeJS.Timeout;
	return (
		<Popover isOpen={isOpen}>
			<PopoverTrigger>
				<Center
					bg="#D8D6EC"
					rounded="lg"
					mt={10}
					onMouseEnter={() => {
						if (timeout) clearTimeout(timeout);
						onOpen();
					}}
					onMouseLeave={() =>
						(timeout = setTimeout(onClose, graceTime))
					}
				>
					<Image src={src} alt={alt} />
				</Center>
			</PopoverTrigger>
			<PopoverContent bg="#D8D6EC" color="#8287BE">
				<Box
					onMouseEnter={() => {
						if (timeout) clearTimeout(timeout);
						onOpen();
					}}
					onMouseLeave={() =>
						(timeout = setTimeout(onClose, graceTime))
					}
				>
					<PopoverHeader fontWeight={700}>{alt}</PopoverHeader>
					<PopoverBody>{desc}</PopoverBody>
				</Box>
			</PopoverContent>
		</Popover>
	);
}
