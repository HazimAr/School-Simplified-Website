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
		<Box as="footer" fontSize="sm">
			{/* <Flex justify="center" align="center">
				<Wave
					className="wave"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#0099ff"
						fillOpacity="1"
						d="M0,256L120,256C240,256,480,256,720,261.3C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
					/>
				</Wave>
			</Flex> */}
			<Flex bg="brand.400" justify="center" align="center">
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
							color="text.300"
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
						<Heading size="md">Information</Heading>
						<UnorderedList
							styleType="none"
							m="0"
							p="0"
							color="text.300"
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
						<Heading size="md">Information</Heading>
						<UnorderedList
							styleType="none"
							m="0"
							p="0"
							color="text.300"
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
			<Flex bg="brand.500" justify="center" align="center" py="10px">
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
