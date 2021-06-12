/* eslint-disable sonarjs/no-identical-functions */
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";

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

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<Box as="footer">
			<Flex bg="red" justify="center" align="center">
				<Flex
					justify="space-between"
					align="center"
					maxW="1200px"
					w="100%"
					mx="50px"
					textAlign="left"
					flexWrap="wrap"
				>
					<UnorderedList styleType="none" m="0" p="0">
						{infos.map((info) => {
							return (
								<ListItem key={info.name}>
									<Link href={info.link}>
										<a>{info.name}</a>
									</Link>
								</ListItem>
							);
						})}
					</UnorderedList>
					<UnorderedList styleType="none" m="0" p="0">
						{services.map((service) => {
							return (
								<ListItem key={service.name}>
									<Link href={service.link}>
										<a>{service.name}</a>
									</Link>
								</ListItem>
							);
						})}
					</UnorderedList>
					<UnorderedList styleType="none" m="0" p="0">
						{socials.map((social) => {
							return (
								<ListItem key={social.name}>
									<Link href={social.link}>
										<a>{social.name}</a>
									</Link>
								</ListItem>
							);
						})}
					</UnorderedList>
				</Flex>
			</Flex>
			<Flex bg="purple" justify="center" align="center">
				<Flex
					justify="space-between"
					align="center"
					maxW="1200px"
					w="100%"
					mx="50px"
				>
					<Text>School Simplified © 2021 All Rights Reserved</Text>
					<Text>
						<Link href="/terms">
							<a>Terms of Service</a>
						</Link>{" "}
						|{" "}
						<Link href="/privacy">
							<a>Privacy Policy</a>
						</Link>
					</Text>
				</Flex>
			</Flex>
		</Box>
	);
}
