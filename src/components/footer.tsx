import {
	Box,
	Flex,
	Heading,
	ListItem,
	Text,
	UnorderedList,
	useToken,
	Stack,
	VStack,
	HStack,
	Input,
	Button,
	Spacer,
	Grid,
	Center,
	VisuallyHidden,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Wave from "react-wavify";

import { socials } from "config";

export default function Footer() {
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
											<Text fontSize="xs">
												{item.name}
											</Text>
										</NextLink>
									</ListItem>
								))}
							</UnorderedList>
						</Stack>
						{/* <Stack>
							<Heading as="h3" size="md">
								Services
							</Heading>
							<UnorderedList styleType="none">
								{services.map((item) => (
									<ListItem key={item.name}>
										<NextLink href={item.link}>
											<Text fontSize="xs">
												{item.name}
											</Text>
										</NextLink>
									</ListItem>
								))}
							</UnorderedList>
						</Stack> */}
						<Stack>
							<Heading as="h3" size="md">
								Resources
							</Heading>
							<UnorderedList styleType="none">
								{resources.map((item) => (
									<ListItem key={item.name}>
										<NextLink href={item.link}>
											<Text fontSize="xs">
												{item.name}
											</Text>
										</NextLink>
									</ListItem>
								))}
							</UnorderedList>
						</Stack>
						<Stack>
							<Heading as="h3" size="md">
								Programs
							</Heading>
							<UnorderedList styleType="none">
								{programs.map((item) => (
									<ListItem key={item.name}>
										<NextLink href={item.link}>
											<Text fontSize="xs">
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
												<Text fontSize="xs">
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
												<Text fontSize="xs">
													{item.name}
												</Text>
											</NextLink>
										</ListItem>
									))}
								</UnorderedList>
							</Stack>
						</Stack>
						{/* <Stack>
							<Heading as="h3" size="md">
								Newsletter
							</Heading>
							<Text fontSize="xs">
								Join our newsletter to receive weekly news to
								stay updated!
							</Text>
						</Stack> */}
						<Stack>
							<Heading as="h3" size="md">
								Newsletter
							</Heading>
							<Text fontSize="sm" maxW="40ch">
								Join our newsletter to receive weekly news to
								stay updated!
							</Text>
							<HStack>
								<Input placeholder="Your email..." />

								<Button rounded="10px" w="35%">
									Sign Up
								</Button>
							</HStack>
							<Spacer />

							<HStack
								templateColumns="repeat(3, 1fr)"
								gap={2}
								py={10}
							>
								{socials.map((item) => {
									return (
										<Center key={item.link}>
											<NextLink href={item.link}>
												<item.icon size={size} />
												<VisuallyHidden>
													Our {item.name}
												</VisuallyHidden>
											</NextLink>
										</Center>
									);
								})}
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
						margin="20px"
					>
						<Text fontSize="xs">
							School Simplified © 2021 All Rights Reserved
						</Text>

						<Text fontSize="xs">
							School Simplified Inc. | 8 The Green, Dover, DE
							19901
						</Text>
						<Text fontSize="xs">
							Made with love by passionate{" "}
							<NextLink href="https://github.com/HazimAr/School-Simplified">
								{" "}
								developers
							</NextLink>{" "}
							and designers
						</Text>
					</Flex>
				</ContainerInside>
			</Container>
		</Box>
	);
}

const size = "40px";

const about = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Volunteer",
		link: "/leadership",
	},
	{
		name: "Community",
		link: "/community",
	},
	{
		name: "Organizations",
		link: "/organizations",
	},
	{
		name: "Partners",
		link: "/partners",
	},
	{
		name: "Leadership",
		link: "/leadership",
	},
];

const resources = [
	{
		name: "Notes",
		link: "/notes",
	},
	{
		name: "Tutoring",
		link: "/tutoring",
	},
	{
		name: "Essay Revision",
		link: "/essay",
	},
	{
		name: "SAT Prep",
		link: "/sat",
	},
	{
		name: "Homework Help",
		link: "/homework",
	},
	// {
	// 	name: "Blogs & Articles",
	// 	link: "/blog",
	// },
	// {
	// 	name: "Programs",
	// 	link: "/programs",
	// },

	// {
	// 	name: "Internships",
	// 	link: "/internships",
	// },
];

const support = [
	{
		name: "Contact Us",
		link: "/contact",
	},
	{
		name: "Donate",
		link: "/donate",
	},
	{
		name: "FAQ",
		link: "/faq",
	},
];

const programs = [
	{
		name: "Chapters",
		link: "/chapter",
	},
	{
		name: "Student Activities",
		link: "/activities",
	},
	{
		name: "Editorial",
		link: "/editorial",
	},
	{
		name: "Programming Simplified",
		link: "https://programmingsimplified.org/",
	},
];

const advertise = [
	{
		name: "Media Kit",
		link: "https://drive.google.com/file/d/1vM3wyYe4J0x7_wZ91LpH480gISL10FIU/view?usp=sharing",
	},
	{
		name: "Links",
		link: "/links",
	},
];
