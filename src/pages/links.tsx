import {
	Box,
	Button,
	HStack,
	Icon,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineMail, HiUserGroup } from "react-icons/hi";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram, SiLinkedin, SiTiktok, SiTwitter } from "react-icons/si";

export default function Links(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside>
					<VStack spacing={3}>
						<Image
							src="\logos\ss_logo.png"
							alt="school simplified logo"
							boxSize="100px"
							mt={{ base: "40px", md: "10px" }}
							mx="10px"
						/>

						<Text fontSize="xl">School Simplified</Text>

						<Text fontSize="md">
							Free Tutoring | Free Notes | Free Essay Revisions
						</Text>

						<HStack spacing={5}>
							<Link
								href="https://www.tiktok.com/@schoolsimplified?"
								isExternal
							>
								<Icon as={SiTiktok} boxSize="25px" />
							</Link>

							<Link
								href="https://www.instagram.com/school.simplified/"
								isExternal
							>
								<Icon as={SiInstagram} boxSize="25px" />
							</Link>

							<Link
								href="https://twitter.com/schoolsimplify"
								isExternal
							>
								<Icon as={SiTwitter} boxSize="25px" />
							</Link>

							<Link
								href="https://www.facebook.com/SchoolSimple/"
								isExternal
							>
								<Icon as={ImFacebook2} boxSize="25px" />
							</Link>

							<Link
								href="https://discord.com/invite/school"
								isExternal
							>
								<Icon as={FaDiscord} boxSize="29px" mt="3px" />
							</Link>

							<Link
								href="https://www.linkedin.com/company/school-simplified"
								isExternal
							>
								<Icon as={SiLinkedin} boxSize="28px" />
							</Link>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside align="center">
					<VStack spacing={5}>
						<Link
							href="https://discord.com/invite/school"
							isExternal
							w="100%"
							maxW="560px"
						>
							<Button
								leftIcon={
									<Box flex={0}>
										<FaDiscord size="25px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								mt="25px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Join Discord</Text>
							</Button>
						</Link>

						<Link href="/volunteer" w="100%" maxW="560px">
							<Button
								leftIcon={
									<Box flex={0}>
										<HiUserGroup size="30px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Join Our Staff</Text>
							</Button>
						</Link>

						<Link href="/contact" w="100%" maxW="560px">
							<Button
								leftIcon={
									<Box flex={0}>
										<HiOutlineMail size="30px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Contact Us</Text>
							</Button>
						</Link>

						{/* <Link
							href="https://www.tiktok.com/@schoolsimplified?"
							isExternal
							w="100%"
							maxW="560px"
						>
							<Button
								leftIcon={
									<Box flex={0}>
										<SiTiktok size="25px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>TikTok</Text>
							</Button>
						</Link>

						<Link
							href="https://www.instagram.com/school.simplified/"
							isExternal
							w="100%"
							maxW="560px"
						>
							<Button
								leftIcon={
									<Box flex={0}>
										<SiInstagram size="25px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Instagram</Text>
							</Button>
						</Link>

						<Link
							href="https://twitter.com/schoolsimplify/"
							isExternal
							w="100%"
							maxW="560px"
						>
							<Button
								leftIcon={
									<Box flex={0}>
										<SiTwitter size="25px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Twitter</Text>
							</Button>
						</Link>

						<Link
							href="https://www.facebook.com/SchoolSimple/"
							isExternal
							w="100%"
							maxW="560px"
						>
							<Button
								leftIcon={
									<Box flex={0}>
										<ImFacebook2 size="25px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Facebook</Text>
							</Button>
						</Link>

						<Link
							href="https://www.linkedin.com/company/school-simplified"
							isExternal
							w="100%"
							maxW="560px"
						>
							<Button
								leftIcon={
									<Box flex={0}>
										<SiLinkedin size="25px" />
									</Box>
								}
								w="100%"
								maxW="560px"
								height="62.4px"
								rounded="30px"
								boxShadow="md"
								display="flex"
								flexDir="row"
								bg="#6C7DFE"
							>
								<Text flex={1}>Linkedin</Text>
							</Button>
						</Link> */}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}
