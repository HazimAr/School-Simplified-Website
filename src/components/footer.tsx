import {
	Box,
	Flex,
	Heading,
	Link,
	ListItem,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import Container from "@components/container";

const infos = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Contact Us",
		link: "/contact",
	},
	{
		name: "About Us",
		link: "/about",
	},
	{
		name: "Our Team",
		link: "/team",
	},
	{
		name: "Discord",
		link: "https://discord.gg/school",
	},
	{
		name: "FAQ",
		link: "/contact",
	},
];

const services = [
	{
		name: "Resources",
		link: "/resources",
	},

	{
		name: "Volunteering",
		link: "/volunteering",
	},

	{
		name: "Free Tutoring",
		link: "/tutoring",
	},

	{
		name: "Essay Revisions",
		link: "/essay",
	},

	{
		name: "College Prep",
		link: "/cprep",
	},

	{
		name: "SAT Prep",
		link: "/satprep",
	},
];

const socials = [
	{
		name: "Instagram",
		link: "https://www.instagram.com/school.simplified/",
	},

	{
		name: "Tiktok",
		link: "https://www.tiktok.com/@schoolsimplified",
	},

	{
		name: "Facebook",
		link: "https://www.facebook.com/SchoolSimple/",
	},

	{
		name: "Blog",
		link: "/",
	},
];

// const Wave = styled.svg`
// 	z-index: 10;
// `;

// eslint-disable-next-line import/no-default-export
export default function Footer(): JSX.Element {
	return (
		<Box as="footer">
			<Container bg="brand.purple.light">
				<Flex
					justify="space-between"
					maxW="1200px"
					w="100%"
					mx="50px"
					textAlign="left"
					flexWrap="wrap"
					py="10px"
				>
					<Box>
						<Heading size="md">Information</Heading>
						<UnorderedList
							styleType="none"
							m="0"
							p="0"
							color="brand.gold"
						>
							{infos.map((info) => {
								return (
									<ListItem key={info.name}>
										<Link href={info.link}>
											{info.name}
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
					<Box>
						<Heading size="md">Services</Heading>
						<UnorderedList
							styleType="none"
							m="0"
							p="0"
							color="brand.gold"
						>
							{services.map((service) => {
								return (
									<ListItem key={service.name}>
										<Link href={service.link}>
											{service.name}
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
					<Box>
						<Heading size="md">Join Us</Heading>
						<UnorderedList
							styleType="none"
							m="0"
							p="0"
							color="brand.gold"
						>
							{socials.map((social) => {
								return (
									<ListItem key={social.name}>
										<Link href={social.link} isExternal>
											{social.name}
										</Link>
									</ListItem>
								);
							})}
						</UnorderedList>
					</Box>
				</Flex>
			</Container>
			<Container bg="brand.purple.dark" py="10px">
				<Flex
					justify="space-between"
					align="center"
					maxW="1200px"
					w="100%"
					mx="50px"
					color="text.200"
				>
					<Text>School Simplified © 2021 All Rights Reserved</Text>
					<Text>
						<Link href="/terms">Terms of Service</Link> |{" "}
						<Link href="/privacy">Privacy Policy</Link>
					</Text>
				</Flex>
			</Container>
		</Box>
	);
}
