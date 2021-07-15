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
		name: "Leadership",
		link: "/leadership",
	},
	{
		name: "Community",
		link: "/community",
	},

	{
		name: "Contact Us",
		link: "/contact",
	},
	{
		name: "FAQ",
		link: "/contact",
	},
	// {
	// 	name: "Discord",
	// 	link: "https://discord.gg/school",
	// },
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
		name: "Discord",
		link: "https://discord.gg/school",
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/school.simplified/",
	},
	{
		name: "Tiktok",
		link: "https://www.tiktok.com/@schoolsimplified",
	},
	// {
	// 	name: "Facebook",
	// 	link: "https://www.facebook.com/SchoolSimple/",
	// },

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
			<Box zIndex={-1} pt={-100}>
				<Wave
					fill="#636EE0"
					// paused
					options={{
						height: 120,
						amplitude: 9,
						speed: 0.2,
						points: 4,
					}}
				/>
			</Box>
			<Container bg="#636EE0" mt="-7px">
				<ContainerInside pb={5}>
					<Flex
						justify="space-around"
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
			<Container bg="#727ce3" py="10px">
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
