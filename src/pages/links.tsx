import {
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
import NextLink from "@components/nextChakra";
import React from "react";
import fetchIcon from "util/react_icon_fetcher";

export default function Links({
	buttons,
}: {
	buttons: LinkButtonProps[];
}): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside>
					<VStack spacing={3}>
						<Image
							src="\logos\ss_logo.png"
							alt="school simplified logo"
							boxSize={100}
							mt={{ base: 12, md: 4 }}
							// mx="10px"
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
								<Icon
									as={fetchIcon("SiTiktok")}
									boxSize="25px"
								/>
							</Link>

							<Link
								href="https://www.instagram.com/school.simplified/"
								isExternal
							>
								<Icon
									as={fetchIcon("SiInstagram")}
									boxSize="25px"
								/>
							</Link>

							<Link
								href="https://twitter.com/schoolsimplify"
								isExternal
							>
								<Icon
									as={fetchIcon("SiTwitter")}
									boxSize="25px"
								/>
							</Link>

							<Link
								href="https://www.facebook.com/SchoolSimple/"
								isExternal
							>
								<Icon
									as={fetchIcon("ImFacebook2")}
									boxSize="25px"
								/>
							</Link>

							<Link
								href="https://discord.com/invite/school"
								isExternal
							>
								<Icon
									as={fetchIcon("FaDiscord")}
									boxSize="29px"
									mt="3px"
								/>
							</Link>

							<Link
								href="https://www.linkedin.com/company/school-simplified"
								isExternal
							>
								<Icon
									as={fetchIcon("SiLinkedin")}
									boxSize="28px"
								/>
							</Link>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside align="center" mt={8}>
					<VStack spacing={5} maxW={560}>
						{buttons.map((button, index: number) => {
							return (
								<LinkButton
									href={button.href}
									iconName={button.iconName}
									boxSize={button.boxSize}
									text={button.text}
									key={"key_" + index}
								/>
							);
						})}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

type LinkButtonProps = {
	href: string;
	iconName: string;
	boxSize: any;
	text: string;
};
function LinkButton(props: LinkButtonProps) {
	return (
		<NextLink href={props.href} isExternal w="100%" cursor="auto">
			<Button
				w="100%"
				height={62.4}
				rounded="full"
				boxShadow="md"
				display="flex"
				flexDir="row"
				bg="#6C7DFE"
				cursor="pointer"
			>
				<Icon
					as={fetchIcon(props.iconName)}
					boxSize={props.boxSize}
					position="absolute"
					left={4}
				/>
				{props.text}
			</Button>
		</NextLink>
	);
}

export function getStaticProps() {
	const buttons: LinkButtonProps[] = [
		{
			href: "https://discord.com/invite/school",
			iconName: "FaDiscord",
			boxSize: "25px",
			text: "Join Discord",
		},
		{
			href: "/volunteer",
			iconName: "HiUserGroup",
			boxSize: "30px",
			text: "Join Our Staff",
		},
		{
			href: "/contact",
			iconName: "HiOutlineMail",
			boxSize: "30px",
			text: "Contact Us",
		},
		{
			href: "/partners",
			iconName: "FaRegHandshake",
			boxSize: "30px",
			text: "Partner with Us",
		},
		// {
		// 	href: "https://www.tiktok.com/@schoolsimplified?",
		// 	iconName: "SiTiktok",
		// 	boxSize: "25px",
		// 	text: "TikTok",
		// },
		// {
		// 	href: "https://www.instagram.com/school.simplified/",
		// 	iconName: "SiInstagram",
		// 	boxSize: "25px",
		// 	text: "Instagram",
		// },
		// {
		// 	href: "https://twitter.com/schoolsimplify/",
		// 	iconName: "SiTwitter",
		// 	boxSize: "25px",
		// 	text: "Twitter",
		// },
		// {
		// 	href: "https://www.facebook.com/SchoolSimple/",
		// 	iconName: "ImFacebook2",
		// 	boxSize: "25px",
		// 	text: "Facebook",
		// },
		// {
		// 	href: "https://www.linkedin.com/company/school-simplified",
		// 	iconName: "SiLinkedin",
		// 	boxSize: "25px",
		// 	text: "LinkedIn",
		// },
	];
	return { props: { buttons } };
}
