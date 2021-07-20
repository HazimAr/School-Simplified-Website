import {
	Box,
	Flex,
	Heading,
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
		name: "Volunteer",
		link: "/volunteer",
	},

	{
		name: "Contact Us",
		link: "/contact",
	},
	{
		name: "FAQ",
		link: "/faq",
	},
	// {
	// 	name: "Donate",
	// 	link: "/donate",
	// },
];

const services = [
	{
		name: "Homework Help",
		link: "https://discord.gg/A782bUXTP8",
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
		name: "Notes",
		link: "/notes",
	},
	// {
	// 	name: "College Prep",
	// 	link: "/prep",
	// },
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
			<Box zIndex={-1}>
				<Wave
					fill="#636EE0"
					// paused
					options={{
						height: 120,
						amplitude: 9,
						speed: 0.3,
						points: 4,
					}}
				/>
			</Box>
			<Container bg="#636EE0" mt="-8px">
				<ContainerInside pb={5}>
					<Flex
						justify="space-around"
						// flexWrap="wrap"
						flexDir={{ base: "column", sm: "row" }}
						textAlign={{ base: "center", md: "left" }}
					>
						<Box my={3}>
							<Heading size="md" color="white" mb={2}>
								Information
							</Heading>
							<UnorderedList
								styleType="none"
								m={0}
								p={0}
								color="brand.gold"
							>
								{infos.map((info) => {
									return (
										<ListItem key={info.name}>
											<NextLink href={info.link}>
												{info.name}
											</NextLink>
										</ListItem>
									);
								})}
							</UnorderedList>
						</Box>
						<Box my={3}>
							<Heading size="md" color="white" mb={2}>
								Get Help
							</Heading>
							<UnorderedList
								styleType="none"
								m={0}
								p={0}
								color="brand.gold"
							>
								{services.map((service) => {
									return (
										<ListItem key={service.name}>
											<NextLink href={service.link}>
												{service.name}
											</NextLink>
										</ListItem>
									);
								})}
							</UnorderedList>
						</Box>
						<Box my={3}>
							<Heading size="md" color="white" mb={2}>
								Social Media
							</Heading>
							<UnorderedList
								styleType="none"
								m={0}
								p={0}
								color="brand.gold"
							>
								{socials.map((social) => {
									return (
										<ListItem key={social.name}>
											<NextLink
												href={social.link}
												isExternal
											>
												{social.name}
											</NextLink>
										</ListItem>
									);
								})}
							</UnorderedList>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
			<Container bg="#727ce3" py="10px">
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						color="text.200"
					>
						<Text>
							School Simplified © 2021 All Rights Reserved
						</Text>
						{/* <Text>
							<NextLink href="/terms">Terms of Service</NextLink> |{" "}
							<NextLink href="/privacy">Privacy Policy</NextLink> 
						</Text> */}
					</Flex>
				</ContainerInside>
			</Container>
		</Box>
	);
}
