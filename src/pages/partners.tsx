import {
	Box,
	BoxProps,
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
	Text,
	useBreakpointValue,
	useDisclosure,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function PartnersPage() {
	const [groupIdx, setGroupIdx] = useState(0);
	const isVertical = useBreakpointValue({ base: true, md: false });

	return (
		<>
			<Container>
				<ContainerInside>
					<Wrap justify="center" align="center" mt={50}>
						<WrapItem>
							<Box maxW="60ch" textAlign="left" mt={10}>
								<Heading mb={10}>
									A Network for You to Become a Part of the
									Journey
								</Heading>
								<Text my={5}>
									Connect with us, take advantage of our
									resources, and together we can build a
									brighter future.
								</Text>
								{/* <NextLink href="/notes">
							<Button>Get Free Help</Button>
						</NextLink> */}
								<Center>
									<NextLink
										href="mailto:partners@schoolsimplified.org"
										w="fit-content"
									>
										<StyledButton
											display="block"
											width={{
												base: "50",
												md: "50",
												sm: "40",
											}}
										>
											<Image
												src="/timmy/23.png"
												w="30px"
												h="30px"
												mr="10px"
											/>
											Contact
										</StyledButton>
									</NextLink>
								</Center>
							</Box>
						</WrapItem>

						<WrapItem>
							<Box textAlign="left">
								<Image
									maxH={400}
									src="/timmy/timmy_business.png"
									alt="Timmy with graduation cap"
									display={{ base: "none", md: "block" }}
								/>
							</Box>
						</WrapItem>
					</Wrap>

					<Divider bg="white" my={10} />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside pb={10}>
					<Heading mb={10}>Our Partners</Heading>

					<Center my={5}>
						<SimpleGrid
							columns={{ base: 1, md: partnerGroups.length }}
							rounded={24}
							background="#FFFC"
							boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
							zIndex={0}
							position="relative"
						>
							{partnerGroups.map((personGroup, idx) => (
								<PartnerButton
									onClick={() => setGroupIdx(idx)}
									key={personGroup.name}
									gridRow={isVertical ? idx + 1 : 1}
									gridColumn={isVertical ? 1 : idx + 1}
								>
									<AnimatePresence>
										<Heading
											color="inherit"
											size="md"
											as="h3"
										>
											{personGroup.name}
										</Heading>
									</AnimatePresence>
								</PartnerButton>
							))}
							<motion.div
								style={{
									gridRow: isVertical ? groupIdx + 1 : 1,
									gridColumn: isVertical ? 1 : groupIdx + 1,
								}}
								transition={{ duration: 0.7 }}
								layout
							>
								<Box
									background="white"
									rounded={24}
									px={12}
									py={3.5}
								>
									<AnimatePresence exitBeforeEnter>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											key={partnerGroups[groupIdx].name}
											transition={{ duration: 0.3 }}
										>
											<Heading as="h3">
												{partnerGroups[groupIdx].name}
											</Heading>
										</motion.div>
									</AnimatePresence>
								</Box>
							</motion.div>
						</SimpleGrid>
					</Center>

					<SimpleGrid
						columns={{ sm: 2, md: 3 }}
						spacing={6}
						minChildWidth={{
							base: 200,
							sm: 170,
							md: 280,
							lg: 230,
						}}
						spacingY={0}
					>
						{partnerGroups[groupIdx].data.map((partnerData) => {
							return partnerData.link ? (
								<NextLink
									href={partnerData.link}
									isExternal
									key={partnerData.name}
								>
									<Cell
										h="180px"
										alt={partnerData.name}
										src={partnerData.src}
										desc={partnerData.description}
									/>
								</NextLink>
							) : (
								<Cell
									h="180px"
									key={partnerData.name}
									alt={partnerData.name}
									src={partnerData.src}
									desc={partnerData.description}
								/>
							);
						})}
					</SimpleGrid>
				</ContainerInside>
			</Container>
		</>
	);
}

type PartnerGroup = { name: string; data: Partner[] };
type Partner = {
	name: string;
	description?: string;
	src: string;
	link?: string;
};

const productPartners: Partner[] = [
	{
		name: "Versatile Node",
		description:
			"Versatile Node is an organization geared towards providing cheap, fast and reliable hosting for all your needs! Versatile offers resources range from minecraft hosting, VPS hosting, to web hosting.",
		src: "/partners/versatile.png",
		link: "https://versatilenode.com/",
	},
	{
		name: "Tech Soup",
		src: "https://www.techsoup.org/_layouts/15/TechSoupRWD/ui/images/tslogo.svg",
	},
	{
		name: "Grammarly",
		src: "https://www.grammarly.com/press/media-resources/docs/logo-grammarly.png",
	},
	{
		name: "Deloitte",
		description:
			"Deloitte US is the largest professional services organization in the United States. With more than 100,000 professionals, Deloitte provides audit and assurance, tax, consulting, and risk and financial advisory services to a broad cross-section of the largest corporations and governmental agencies.",
		src: "/partners/deloitte.png",
		link: "https://www.deloitte.com/us/en/",
	},
	{
		name: "Hidaku",
		// description: "",
		src: "/partners/Hidaku2.png",
		link: "https://hidaku.com/",
	},
	{
		name: ".NGO",
		description:
			"Dot NGO is the easiest and fastest way to start and sustain a nonprofit online. Quickly incorporate and accept tax-deductible donations with a 501c3 and store your funds in a bank account with this platform. Dot NGO provides banking services for School Simplified in partnership with Mercury Bank. We highly recommend Dot NGO!",
		src: "/partners/ngo.png",
		link: "https://dot.ngo/join-beta",
	},
];

const sponsorsAndDonors: Partner[] = [
	{
		name: "Inspirit AI",
		src: "/simplihacks/sponsors/inspiritai.png",
	},
	{
		name: "Slingshot",
		description:
			"Slingshot is a non-profit organization that provides technical assistance to students in the field of computer science.",
		src: "/partners/slingshot.png",
	},
	{
		name: "echoAR",
		src: "/simplihacks/sponsors/echoar.png",
	},
	{
		name: "replit",
		src: "/simplihacks/sponsors/replitdark.svg",
	},
	{
		name: "AoPS",
		src: "/simplihacks/sponsors/AoPSLogo.png",
	},
	{
		name: "DigitalOcean",
		src: "/simplihacks/sponsors/digitalocean.png",
	},
	{
		name: "1Password",
		src: "/simplihacks/sponsors/1password.png",
	},
	{
		name: "taskade",
		src: "/simplihacks/sponsors/taskade.png",
	},
	{
		name: "Wolfram",
		src: "/simplihacks/sponsors/wolframsponsor.png",
	},
	{
		name: "Gather",
		src: "/simplihacks/sponsors/gather.png",
	},
	{
		name: "Magoosh",
		src: "/simplihacks/sponsors/magoosh.png",
	},
	{
		name: "Interview Cake",
		src: "/simplihacks/sponsors/interviewcake.png",
	},
	{
		name: "HyperX",
		src: "/simplihacks/sponsors/hyperx.png",
	},
	{
		name: "Product Hunt",
		src: "/simplihacks/sponsors/producthunt.png",
	},
];

const partnerGroups: PartnerGroup[] = [
	{ name: "Product Partners", data: productPartners },
	{ name: "Sponsors and Donors", data: sponsorsAndDonors },
];

function PartnerButton({ children, ...props }: BoxProps) {
	return (
		<Box
			as="button"
			px={12}
			py={3.5}
			transition="all 0.2s ease"
			fontSize="14px"
			fontWeight="semibold"
			background="transparent"
			color="#5A60ADCC"
			minW={205}
			{...props}
		>
			{children}
		</Box>
	);
}

function Cell({ h, src, alt, desc }): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Popover isOpen={isOpen} placement="bottom">
			<PopoverTrigger>
				<Center
					bg="#D8D6EC"
					//rounded="lg"
					rounded={40}
					mt={10}
					onMouseEnter={onOpen}
					onMouseLeave={onClose}
					overflow="hidden"
					p={3}
					height={h}
				>
					<Image src={src} alt={alt} />
				</Center>
			</PopoverTrigger>
			<PopoverContent bg="#D8D6EC" color="#8287BE">
				<PopoverHeader fontWeight={700}>{alt}</PopoverHeader>
				{desc ? <PopoverBody>{desc}</PopoverBody> : null}
			</PopoverContent>
		</Popover>
	);
}
