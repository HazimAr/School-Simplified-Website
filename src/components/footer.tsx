import {
	Box,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	useToken,
	HStack,
	Stack,
	Input,
	Spacer,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Wave from "react-wavify";
import Button from "./button";
import {
	FaDiscord,
	FaGithub,
	FaTwitter,
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	// @ts-ignore
	FaTiktok,
} from "react-icons/fa";

// eslint-disable-next-line import/no-default-export
export default function Footer(): JSX.Element {
	const purple = useToken("colors", "brand.purple.light");
	return (
		<Box as="footer">
			<Box zIndex={-1}>
				<Wave
					fill={purple}
					// paused
					options={{
						height: 120,
						amplitude: 9,
						speed: 0.5,
						points: 3,
					}}
				/>
			</Box>
			<Container bg="brand.purple.light" mt="-8px">
				<ContainerInside pb={5}>
					<Flex
						justify="space-between"
						flexDir={{ base: "column", sm: "row" }}
						textAlign={{ base: "center", md: "left" }}
					>
						<Stack>
							<Heading as="h3" size="md">
								About
							</Heading>
							<UnorderedList styleType="none">
								{about.map((item) => (
									<ListItem key={item.name}>
										<NextLink href={item.link}>
											<Text fontSize="sm">
												{item.name}
											</Text>
										</NextLink>
									</ListItem>
								))}
							</UnorderedList>
						</Stack>
						<Stack>
							<Heading as="h3" size="md">
								Services
							</Heading>
							<UnorderedList styleType="none">
								{services.map((item) => (
									<ListItem key={item.name}>
										<NextLink href={item.link}>
											<Text fontSize="sm">
												{item.name}
											</Text>
										</NextLink>
									</ListItem>
								))}
							</UnorderedList>
						</Stack>
						<Stack>
							<Heading as="h3" size="md">
								Resources
							</Heading>
							<UnorderedList styleType="none">
								{resources.map((item) => (
									<ListItem key={item.name}>
										<NextLink href={item.link}>
											<Text fontSize="sm">
												{item.name}
											</Text>
										</NextLink>
									</ListItem>
								))}
							</UnorderedList>
						</Stack>
						<Stack>
							<Stack>
								<Heading as="h3" size="md">
									Support
								</Heading>
								<UnorderedList styleType="none">
									{support.map((item) => (
										<ListItem key={item.name}>
											<NextLink href={item.link}>
												<Text fontSize="sm">
													{item.name}
												</Text>
											</NextLink>
										</ListItem>
									))}
								</UnorderedList>
							</Stack>
							<Stack>
								<Heading as="h3" size="md">
									Advertise
								</Heading>
								<UnorderedList styleType="none">
									{advertise.map((item) => (
										<ListItem key={item.name}>
											<NextLink href={item.link}>
												<Text fontSize="sm">
													{item.name}
												</Text>
											</NextLink>
										</ListItem>
									))}
								</UnorderedList>
							</Stack>
						</Stack>
						<Stack>
							<Heading as="h3" size="md">
								Newsletter
							</Heading>
							<Text fontSize="sm" maxW="40ch">
								Join over 000,000 people who recieve weekly news
								to stay updated!
							</Text>
							<HStack>
								<Input placeholder="Your Email Here" />

								<Button rounded="10px" w="35%">
									Subscribe
								</Button>
							</HStack>
							<Spacer />
							<Flex justify="center">
								<HStack>
									{socials.map((item) => {
										return (
											<NextLink
												key={item.link}
												href={item.link}
											>
												<item.icon size={size} />
											</NextLink>
										);
									})}
								</HStack>
							</Flex>
						</Stack>
					</Flex>
				</ContainerInside>
			</Container>
			<Container bg="brand.purple.dark" py="10px">
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						color="text.200"
					>
						<Text>
							School Simplified © 2021 All Rights Reserved
						</Text>
						<VStack>
							<Text>
								School Simplified Inc. | 8 The Green, Dover, DE
								19901
							</Text>
							<NextLink href="https://github.com/HazimAr/School-Simplified">
								Made by passionate developers
							</NextLink>
						</VStack>
					</Flex>
				</ContainerInside>
			</Container>
		</Box>
	);
}

const socials = [
	{
		name: "Instagram",
		link: "https://www.instagram.com/schoolsimplified/",
		icon: (props) => <FaInstagram {...props} />,
	},
	{
		name: "Discord",
		link: "https://discord.gg/school",
		icon: (props) => <FaDiscord {...props} />,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/company/school-simplified",
		icon: (props) => <FaLinkedinIn {...props} />,
	},
	{
		name: "Twitter",
		link: "https://twitter.com/SchoolSimplified",
		icon: (props) => <FaTwitter {...props} />,
	},
	{
		name: "Facebook",
		link: "https://www.facebook.com/SchoolSimplified",
		icon: (props) => <FaFacebook {...props} />,
	},
	{
		name: "Github",
		link: "https://github.com/HazimAr/School-Simplified",
		icon: (props) => <FaGithub {...props} />,
	},
	{
		name: "TikTok",
		link: "https://www.tiktok.com/@schoolsimplified",
		icon: (props) => <FaTiktok {...props} />,
	},
];

const size = "40px";

const about = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Leadership",
		link: "/leadership",
	},
	{
		name: "Our Organizations",
		link: "/organizations",
	},
	{
		name: "Community",
		link: "/community",
	},
	{
		name: "Partners",
		link: "/partners",
	},
];

const services = [
	{
		name: "Tutoring",
		link: "/tutoring",
	},
	{
		name: "Essay Revisions",
		link: "/essay",
	},
	{
		name: "Homework Help",
		link: "/homework",
	},
	{
		name: "Notes and Resources",
		link: "/notes",
	},
];

const resources = [
	{
		name: "Volunteering",
		link: "/volunteering",
	},
	{
		name: "Leadership Opportunities",
		link: "/leadership/join",
	},
	{
		name: "Programs",
		link: "/programs",
	},

	{
		name: "Internships",
		link: "/internships",
	},
	{
		name: "Blog",
		link: "/blog",
	},
	{
		name: "Events",
		link: "/events",
	},
];

const support = [
	{
		name: "Contact Us",
		link: "/contact",
	},
	{
		name: "Support Us",
		link: "/support",
	},
	{
		name: "FAQ",
		link: "/faq",
	},
];

const advertise = [
	{
		name: "Media Kit",
		link: "/media",
	},
	{
		name: "Links",
		link: "/links",
	},
];
