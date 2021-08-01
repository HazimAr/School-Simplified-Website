import {
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
					<Link href="https://www.tiktok.com/@schoolsimplified?">
						<Icon as={SiTiktok} boxSize="25px" />
					</Link>

					<Link href="https://www.instagram.com/school.simplified/">
						<Icon as={SiInstagram} boxSize="25px" />
					</Link>

					<Link href="https://twitter.com/schoolsimplify">
						<Icon as={SiTwitter} boxSize="25px" />
					</Link>

					<Link href="https://www.facebook.com/SchoolSimple/">
						<Icon as={ImFacebook2} boxSize="25px" />
					</Link>

					<Link href="https://discord.com/invite/school">
						<Icon as={FaDiscord} boxSize="29px" mt="3px" />
					</Link>

					<Link href="https://www.linkedin.com/company/school-simplified">
						<Icon as={SiLinkedin} boxSize="28px" />
					</Link>
				</HStack>

				<VStack spacing={4}>
					<Button
						leftIcon={<FaDiscord size="25px" />}
						width="500px"
						height="60px"
						mt="25px"
						rounded="30px"
						boxShadow="md"
					>
						Join School Help Discord
					</Button>

					<Button
						leftIcon={<FaGamepad size="30px" />}
						width="500px"
						height="60px"
						rounded="30px"
						boxShadow="md"
					>
						Join Minecraft Discord
					</Button>

					<Button
						leftIcon={<HiUserGroup size="30px" />}
						width="500px"
						height="60px"
						rounded="30px"
						boxShadow="md"
					>
						Join Our Staff
					</Button>

					<Button
						leftIcon={<HiOutlineMail size="30px" />}
						width="500px"
						height="60px"
						rounded="30px"
						boxShadow="md"
					>
						Contact Us
					</Button>
				</VStack>
			</VStack>
		</Center>
	);
}
