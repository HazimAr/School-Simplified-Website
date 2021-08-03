import {
	Box,
	Button,
	Center,
	HStack,
	Icon,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import { FaDiscord, FaGamepad } from "react-icons/fa";
import { HiOutlineMail, HiUserGroup } from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram, SiLinkedin, SiTiktok, SiTwitter } from "react-icons/si";

export default function Links(): JSX.Element {
	return (
		<Center>
			<VStack spacing={3}>
				<Image
					src="\logos\ss_logo.png"
					alt="school simplified logo"
					boxSize="100px"
					margin="10px"
				/>

				<Text fontSize="xl">School Simplified</Text>

				<Text fontSize="md">
					Free Tutoring | Free Notes | Free Essay Revisions
				</Text>

				<HStack spacing={5}>
					<Link href="https://www.tiktok.com/@schoolsimplified?" isExternal>
						<Icon as={SiTiktok} boxSize="25px" />
					</Link>

					<Link href="https://www.instagram.com/school.simplified/" isExternal>
						<Icon as={SiInstagram} boxSize="25px" />
					</Link>

					<Link href="https://twitter.com/schoolsimplify" isExternal>
						<Icon as={SiTwitter} boxSize="25px" />
					</Link>

					<Link href="https://www.facebook.com/SchoolSimple/" isExternal>
						<Icon as={ImFacebook2} boxSize="25px" />
					</Link>

					<Link href="https://discord.com/invite/school" isExternal>
						<Icon as={FaDiscord} boxSize="29px" mt="3px" />
					</Link>

					<Link href="https://www.linkedin.com/company/school-simplified" isExternal>
						<Icon as={SiLinkedin} boxSize="28px" />
					</Link>
				</HStack>

				<VStack spacing={5}>

					<Link href="https://discord.com/invite/school" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<FaDiscord size="25px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							mt="25px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Join School Help Discord</Text>
						</Button>
					</Link>

					<Link href="https://discord.com/invite/simplified" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<FaGamepad size="30px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Join Minecraft Discord</Text>
						</Button>
					</Link>

					<Link href="/volunteer">
						<Button
							leftIcon={
								<Box flex={0}>
									<HiUserGroup size="30px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Join Our Staff</Text>
						</Button>
					</Link>

					<Link href="/contact">
						<Button
							leftIcon={
								<Box flex={0}>
									<HiOutlineMail size="30px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Contact Us</Text>
						</Button>
					</Link>

					<Link href="https://www.tiktok.com/@schoolsimplified?" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<SiTiktok size="25px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>TikTok</Text>
						</Button>
					</Link>

					<Link href="https://www.instagram.com/school.simplified/" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<SiInstagram size="25px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Instagram</Text>
						</Button>
					</Link>

					<Link href="https://twitter.com/schoolsimplify/" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<SiTwitter size="25px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Twitter</Text>
						</Button>
					</Link>

					<Link href="https://www.facebook.com/SchoolSimple/" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<ImFacebook2 size="25px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Facebook</Text>
						</Button>
					</Link>

					<Link href="https://www.linkedin.com/company/school-simplified" isExternal>
						<Button
							leftIcon={
								<Box flex={0}>
									<SiLinkedin size="25px" />
								</Box>
							}
							width="560px"
							height="62.4px"
							rounded="30px"
							boxShadow="md"
							display="flex"
							flexDir="row"
							bg="#5A60AD"
						>
							<Text flex={1}>Linkedin</Text>
						</Button>
					</Link>


				</VStack>
			</VStack>
		</Center>
	);
}
