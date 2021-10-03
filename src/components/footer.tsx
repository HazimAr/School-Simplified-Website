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
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Wave from "react-wavify";
import Button from "./button";

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
						<Text>
							<NextLink href="https://github.com/HazimAr/School-Simplified">
								Made with ❤️ by passionate developers
							</NextLink>
						</Text>
					</Flex>
				</ContainerInside>
			</Container>
		</Box>
	);
}
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
		name: "Community",
		link: "/community",
	},
	{
		name: "Partners",
		link: "/partners",
	},
	{
		name: "Terms of User",
		link: "/terms",
	},

	{
		name: "Privacy Policy",
		link: "/privacy",
	},
];

const resources = [
	{
		name: "Programs",
		link: "/programs",
	},
	{
		name: "Volunteering",
		link: "/volunteering",
	},
	{
		name: "Internships",
		link: "/internships",
	},
	{
		name: "Tutoring",
		link: "/tutoring",
	},
	{
		name: "Blog",
		link: "/blog",
	},
	{
		name: "Events",
		link: "/events",
	},
	{
		name: "Homework Help",
		link: "/homework",
	},
	{
		name: "Notes & Resources",
		link: "/notes",
	},
	{
		name: "Essay Revisions",
		link: "/essay",
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
