import {
	Box,
	Button,
	Center,
	Flex,
	Heading,
	HStack,
	Input,
	ListItem,
	SimpleGrid,
	Stack,
	Text,
	UnorderedList,
	VisuallyHidden,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { socials } from "config";
// import Wave from "react-wavify";

export default function Footer() {
	// const purple = useToken("colors", "brand.purple.light");
	return (
		<Box as="footer">
			{/* <Box zIndex={-1}>
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
			</Box> */}
			<Container bg="brand.purple.light" p={4}>
				<ContainerInside py={5}>
					<Stack
						justify="space-between"
						direction={{ base: "column", sm: "row" }}
						textAlign={{ base: "center", sm: "left" }}
						spacing={3}
					>
						<SimpleGrid
							columns={{ base: 1, md: 2, lg: 4 }}
							gap={3}
							flex={{ base: 3, lg: 4 }}
						>
							<VStack
								align="stretch"
								spacing={1}
								gridColumn={1}
								gridRowStart={1}
								gridRowEnd={{ base: 2, lg: 3 }}
							>
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
							</VStack>
							<VStack
								align="stretch"
								spacing={1}
								gridColumn={{ base: 1, md: 2 }}
								gridRowStart={{ base: 2, md: 1 }}
								gridRowEnd={{ base: 3, md: 2, lg: 3 }}
							>
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
							</VStack>
							<VStack
								align="stretch"
								spacing={1}
								gridColumn={{ base: 1, lg: 3 }}
								gridRowStart={{ base: 3, md: 2, lg: 1 }}
								gridRowEnd={{ base: 4, lg: 3 }}
							>
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
							</VStack>
							<VStack
								align="stretch"
								spacing={1}
								gridColumn={{ base: 1, md: 2, lg: 4 }}
								gridRow={{ base: 4, md: 2, lg: 1 }}
							>
								<Heading as="h3" size="md" mb={1}>
									Support
								</Heading>
								<UnorderedList styleType="none" mb={3} ml={0}>
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
							</VStack>
							<VStack
								align="stretch"
								spacing={1}
								gridColumn={{ base: 1, md: 2, lg: 4 }}
								gridRow={{ base: 5, md: 3, lg: 2 }}
							>
								<Heading as="h3" size="md" mb={1}>
									Advertise
								</Heading>
								<UnorderedList styleType="none" ml={0}>
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
							</VStack>
						</SimpleGrid>

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
						{/* <Stack>
							<Heading as="h3" size="md">
								Newsletter
							</Heading>
							<Text fontSize="xs">
								Join our newsletter to receive weekly news to
								stay updated!
							</Text>
						</Stack> */}

						<VStack align="stretch" spacing={1} flex={1}>
							<Heading as="h3" size="md">
								Newsletter
							</Heading>
							<Text fontSize="sm">
								Stay up-to-date by joining our newsletter to
								receive weekly news!
							</Text>
							<HStack pt={2}>
								<Input placeholder="Your email..." />

								<Button rounded="10px" w="35%">
									Sign Up
								</Button>
							</HStack>
							{/* <Spacer /> */}

							<HStack
								spacing={2}
								pt={5}
								justify="left"
								flexWrap={{ base: "wrap", sm: "nowrap" }}
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
						</VStack>
					</Stack>
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
						<Text fontSize="xs" textAlign="center">
							School Simplified © 2022 All Rights Reserved
						</Text>

						<Text fontSize="xs">
							School Simplified Inc. | 8 The Green, Dover, DE
							19901 | EIN: 86-3932154
						</Text>
						{/* <Text fontSize="xs">
							Made with love by passionate{" "}
							<NextLink href="https://github.com/HazimAr/School-Simplified">
								{" "}
								developers
							</NextLink>{" "}
							and designers
						</Text> */}
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
		link: "/volunteer",
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
	{
		name: "Legal",
		link: "/legal",
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
	// {
	// 	name: "SAT Prep",
	// 	link: "/sat",
	// },
	{
		name: "Homework Help",
		link: "https://discord.gg/school",
	},
	{
		name: "Blog",
		link: "/blog",
	},
];

const support = [
	{
		name: "Contact Us",
		link: "/contact",
	},
	{
		name: "Support Us",
		link: "/donate",
	},
	{
		name: "FAQ",
		link: "/faq",
	},
];

const programs = [
	{
		name: "Projects",
		link: "/projects",
	},
	{
		name: "Chapters",
		link: "/chapter",
	},
	{
		name: "Student Activities",
		link: "/activities",
	},
	{
		name: "Programming Simplified",
		link: "/programming",
	},
	// {
	// 	name: "Volunteer",
	// 	link: "/volunteer",
	// },
	// {
	// 	name: "Leadership Opportunities",
	// 	link: "/volunteer",
	// },
	// {
	// 	name: "Programs",
	// 	link: "/programs",
	// },
	// {
	// 	name: "Internships",
	// 	link: "/internships",
	// },
	// {
	// 	name: "Blog",
	// 	link: "/blog",
	// },
	// {
	// 	name: "Events",
	// 	link: "/events",
	// },
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
