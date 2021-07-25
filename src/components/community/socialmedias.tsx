import { Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import {
	RiDiscordLine,
	RiFacebookBoxLine,
	RiInstagramLine,
	RiLinkedinBoxLine,
	RiTwitterLine,
} from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
import React from "react";
import { SocialMediaIcon } from "types";
import Spotify from "@components/community/spotify"

const socialMedias: SocialMediaIcon[] = [
	{
		icon: RiInstagramLine,
		size: 100,
		link: "https://www.instagram.com/school.simplified/",
	},
	{
		icon: RiFacebookBoxLine,
		size: 100,
		link: "https://www.facebook.com/SchoolSimple/",
	},
	{
		icon: RiDiscordLine,
		size: { base: 100, md: 150 },
		link: "https://discord.com/invite/school",
	},
	{
		icon: SiTiktok,
		size: 90,
		link: "https://www.tiktok.com/@schoolsimplified",
	},
	{
		icon: RiTwitterLine,
		size: 90,
		link: "https://twitter.com/schoolsimplify",
	},
	{
		icon: RiLinkedinBoxLine,
		size: 100,
		link: "https://www.linkedin.com/company/school-simplified",
	},
];

export default function SocialMedias(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<VStack>
					<VStack spacing={4}>
						<Heading>Our Socials</Heading>
						<Container>
							<Heading fontSize="18px" mb="35px" color="white">
								Check out our socials for tips, entertainment,
								music, podcasts, opportunities, and more!
							</Heading>
						</Container>
					</VStack>

					<HStack
						flexWrap="wrap"
						flexDir={{ base: "column", sm: "row" }}
						justify="center"
						align="center"
					>
                        <Spotify />

						{socialMedias.map((social, i: number) => {
							return (
								<NextLink href={social.link} key={i} isExternal>
									<Icon
										as={social.icon}
										boxSize={social.size}
										color="white"
										transition="all 0.2s ease"
										_hover={{
											cursor: "pointer",
											transform: "scale(1.20)",
										}}
									/>
								</NextLink>
							);
						})}
					</HStack>
				</VStack>
			</ContainerInside>
		</Container>
	);
}