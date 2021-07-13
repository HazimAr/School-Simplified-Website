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
import ContainerInside from "@components/containerInside";
import Wave from "react-wavify";

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
		name: "Community",
		link: "/community",
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
		name: "Volunteering",
		link: "/volunteering",
	},
	{
		name: "Resources",
		link: "/resources",
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
		link: "/prep",
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
		name: "Discord",
		link: "https://discord.gg/school",
	},
	{
		name: "Linkedin",
		link: "https://www.linkedin.com/company/school-simplified",
	},
	{
		name: "Twitter",
		link: "https://twitter.com/schoolsimplify/",
	},
];

// eslint-disable-next-line import/no-default-export
export default function Footer(): JSX.Element {
	return (
		<Box as="footer">
			<Box pt="-100px">
				<Wave
					fill="#636EE0"
					// paused
					options={{
						height: 120,
						amplitude: 12,
						speed: 0.25,
						points: 3,
					}}
				/>
			</Box>
			<Container bg="#636EE0" mt="-7px">
				<ContainerInside>
					<Flex
						justify="space-between"
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
							<Heading size="md">Follow Us</Heading>
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
				</ContainerInside>
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
