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
	Grid,
	Center,
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
								Join Us
							</Heading>
							<UnorderedList styleType="none">
								{join.map((item) => (
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
						<Stack>
							{/* <Heading as="h3" size="md">
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
							<Spacer /> */}

							<Grid templateColumns="repeat(3, 1fr)" gap={3} py={10} >
								{socials.map((item) => {
									return (
										<Center key={item.link}>
											<NextLink href={item.link}>
												<item.icon size={size} />
											</NextLink>
										</Center>
									);
								})}
							</Grid>
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
							<Text>
								Made with 💖 by passionate <NextLink href="https://github.com/HazimAr/School-Simplified"> developers
								</NextLink> and designers
							</Text>
						</VStack>
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
		name: "Leadership",
		link: "/leadership",
	},
	// {
	// 	name: "Our Organizations",
	// 	link: "/organizations",
	// },
	{
		name: "Community",
		link: "/community",
	},
	{
		name: "Partners",
		link: "/partners",
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
		name: "Essay Revisions",
		link: "/essay",
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

const join = [
	{
		name: "Volunteer",
		link: "/volunteer",
	},
	{
		name: "Become A Chapter",
		link: "/chapter",
	},
	{
		name: "Accelerate Your Organization",
		link: "/accelerate",
	},
	{
		name: "Student Activities",
		link: "/activities",
	},
];

const advertise = [
	{
		name: "Brand Policy",
		link: "https://drive.google.com/file/d/1vM3wyYe4J0x7_wZ91LpH480gISL10FIU/view?usp=sharing",
	},
	{
		name: "Links",
		link: "/links",
	},
];
