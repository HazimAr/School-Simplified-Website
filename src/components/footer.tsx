import {
	Box,
	Flex,
	ListItem,
	Text,
	UnorderedList,
	Link,
	Heading,
} from "@chakra-ui/react";

// import styled from "styled-components";

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
		link: "/ourteam",
	},
	{
		name: "Discord",
		link: "https://discord.gg/school",
	},
	{
		name: "FAQ",
		link: "/faq",
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
		name: "Twitter",
		link: "https://twitter.com/SchoolSimplify",
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
		name: "Youtube",
		link: "https://www.youtube.com/channel/UCYe1MR_EriUg_wNgrNTRU6w",
	},
	{
		name: "Podcast",
		link: "/",
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
export default function footer(): JSX.Element {
	return (
		<Box as="footer">
			<Flex bg="#5a60ae" justify="center" align="center">
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
							color="#fcd270"
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
							color="#fcd270"
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
							color="#fcd270"
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
			</Flex>
			<Flex bg="#454a8a" justify="center" align="center" py="10px">
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
			</Flex>
		</Box>
	);
}
