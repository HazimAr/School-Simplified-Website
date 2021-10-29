import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { Link, Icon, HStack, VStack, Text, Image, Box } from "@chakra-ui/react";
import {
	SiSpotify,
	SiInstagram,
	SiTiktok,
	SiDiscord,
	SiFacebook,
	SiTwitter,
	SiLinkedin,
} from "react-icons/si";

export default function Applications() {
	return (
		<>
			<Container>
				<ContainerInside>
					<VStack spacing={0.5}>
						<Image
							src="/logos/ss_logo.png"
							alt="School Simplified Logo"
							boxSize="118px"
						/>
						<Text fontSize="2.5rem">Department Applications</Text>
						<Text fontSize="16px">
							Free Tutoring | Free Notes | Free Essay Revisions
						</Text>

						<HStack spacing={3.5}>
							<Link
								href="https://open.spotify.com/user/5lkgh8ryszqens1ywo58m5lv8?si=d32db06d4491493a"
								isExternal
							>
								<Icon as={SiSpotify} w={8} h={8} />
							</Link>
							<Link
								href="https://www.instagram.com/school.simplified/"
								isExternal
							>
								<Icon as={SiInstagram} w={8} h={8} />
							</Link>
							<Link
								href="https://www.tiktok.com/@schoolsimplified?"
								isExternal
							>
								<Icon as={SiTiktok} w={8} h={8} />
							</Link>
							<Link
								href="https://discord.com/invite/school"
								isExternal
							>
								<Icon as={SiDiscord} w={8} h={8} />
							</Link>
							<Link
								href="https://www.facebook.com/SchoolSimple/"
								isExternal
							>
								<Icon as={SiFacebook} w={8} h={8} />
							</Link>
							<Link
								href="https://twitter.com/schoolsimplify"
								isExternal
							>
								<Icon as={SiTwitter} w={8} h={8} />
							</Link>
							<Link
								href="https://www.linkedin.com/company/school-simplified"
								isExternal
							>
								<Icon as={SiLinkedin} w={8} h={8} />
							</Link>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside align="center">
					<VStack spacing={5}>
						<Box
							as="button"
							width="537px"
							height="61.98px"
							bg="#6C7DFECC"
							boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
							borderRadius="45px"
						>
							<Image
								boxSize="47px"
								borderRadius="full"
								src="/mobileicon.png"
								alt="test"
							/>
							Heading
						</Box>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

