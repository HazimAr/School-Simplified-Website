import {
	//Text,
	Image,
	Heading,
	VStack,
	HStack,
	Link,
	Icon,
} from "@chakra-ui/react";

import fetchIcon from "util/react_icon_fetcher";

export default function Hero({ heading }) {
	return (
		<VStack spacing={3} py="50px">
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
					<Icon as={fetchIcon("SiInstagram")} boxSize="25px" />
				</Link>

				<Link
					href="https://www.tiktok.com/@schoolsimplified?"
					isExternal
				>
					<Icon as={fetchIcon("SiTiktok")} boxSize="25px" />
				</Link>

				<Link href="https://discord.com/invite/school" isExternal>
					<Icon as={fetchIcon("FaDiscord")} boxSize="29px" mt="3px" />
				</Link>

				<Link
					href="https://www.linkedin.com/company/school-simplified"
					isExternal
				>
					<Icon as={fetchIcon("SiLinkedin")} boxSize="28px" />
				</Link>

				<Link href="https://twitter.com/schoolsimplify" isExternal>
					<Icon as={fetchIcon("SiTwitter")} boxSize="25px" />
				</Link>

				<Link href="https://www.facebook.com/SchoolSimple/" isExternal>
					<Icon as={fetchIcon("ImFacebook2")} boxSize="25px" />
				</Link>
			</HStack>
		</VStack>
	);
}
