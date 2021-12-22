import {
	Box,
	Center,
	Divider,
	Heading,
	HStack,
	Image,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
	Text,
	useDisclosure,
	Wrap,
	WrapItem,
	SimpleGrid,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { useState } from "react";

export default function PartnersPage() {
	const [partner, setPartner] = useState(0);

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
					<NextLink
						href="mailto:partners@schoolsimplified.org"
						w="fit-content"
					>
						<StyledButton
							display="block"
							width={{ base: "50", md: "50", sm: "40" }}
						>
							Contact
						</StyledButton>
					</NextLink>

					<Divider bg="white" my={10} />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside>
					<Heading mb={10}>Our Partners</Heading>
					<HStack
						bg="brand.transparent"
						borderRadius="25px"
						spacing={0}
					>
						{partners.map((partnerMap, index) => {
							return (
								<PartnerButton
									onClick={() => {
										setPartner(index);
									}}
									bg={
										partner == index && "brand.transparent2"
									}
									key={partnerMap.name}
								>
									{partnerMap.name}
								</PartnerButton>
							);
						})}
					</HStack>
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
						{partners[partner].data.map((partnerData) => {
							const cell = (
								<Cell
									h="200px"
									key={partnerData.name}
									alt={partnerData.name}
									src={partnerData.src}
									desc={partnerData.description}
								/>
							);
							return partnerData.link ? (
								<NextLink
									href={partnerData.link}
									target="_blank"
								>
									{cell}
								</NextLink>
							) : (
								cell
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

const partners: PartnerGroup[] = [
	{
		name: "Organization Partners",
		data: [
			{
				name: "Versatile Node",
				description:
					"Versatile Node is an organization geared towards providing cheap, fast and reliable hosting for all your needs! Versatile offers resources range from minecraft hosting, VPS hosting, to web hosting.",
				src: "/partners/versatile.png",
				link: "https://versatilenode.com/",
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
				description: "",
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
		],
	},
	{
		name: "Event Partners",
		data: [
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
		],
	},
	{
		name: "Donors & Sponsors",
		data: [],
	},
];

function PartnerButton({ onClick, children, bg }) {
	return (
		<Box
			as="button"
			onClick={onClick}
			w="100%"
			py={3}
			_hover={{ background: "brand.transparent2" }}
			transition="background 0.2s ease-in"
			bg={bg}
			borderRadius="25px"
		>
			{children}
		</Box>
	);
}

function Cell({ h, src, alt, desc }): JSX.Element {
	const graceTime: number = 250;

	const { isOpen, onOpen, onClose } = useDisclosure();
	let timeout: NodeJS.Timeout;
	return (
		<Popover isOpen={isOpen} placement="bottom">
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
					overflow="hidden"
					p={3}
					height={h}
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
					{desc ? <PopoverBody>{desc}</PopoverBody> : null}
				</Box>
			</PopoverContent>
		</Popover>
	);
}
