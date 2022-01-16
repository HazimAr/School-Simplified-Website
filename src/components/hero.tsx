import { Heading, HStack, Icon, Image, Link, VStack } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { SiInstagram, SiLinkedin, SiTiktok, SiTwitter } from "react-icons/si";

export default function Hero({ heading }) {
	return (
		<VStack spacing={3} py={50}>
			<Image
				src="\logos\ss_logo.png"
				alt="school simplified logo"
				boxSize={100}
				mt={{ base: 12, md: 4 }}
				// mx="10px"
			/>

			<Heading fontSize="xl">{heading}</Heading>

			{/* <Text fontSize="md">
				Free Tutoring | Free Notes | Free Essay Revisions
			</Text> */}

			<HStack spacing={5}>
				<Link
					href="https://www.instagram.com/schoolsimplified/"
					isExternal
				>
					<Icon as={SiInstagram} boxSize="25px" />
				</Link>

				<Link
					href="https://www.tiktok.com/@schoolsimplified?"
					isExternal
				>
					<Icon as={SiTiktok} boxSize="25px" />
				</Link>

				<Link href="https://discord.com/invite/school" isExternal>
					<Icon as={FaDiscord} boxSize="29px" mt="3px" />
				</Link>

				<Link
					href="https://www.linkedin.com/company/school-simplified"
					isExternal
				>
					<Icon as={SiLinkedin} boxSize="28px" />
				</Link>

				<Link href="https://twitter.com/schoolsimplify" isExternal>
					<Icon as={SiTwitter} boxSize="25px" />
				</Link>

				<Link href="https://www.facebook.com/SchoolSimple/" isExternal>
					<Icon as={ImFacebook2} boxSize="25px" />
				</Link>
			</HStack>
		</VStack>
	);
}
