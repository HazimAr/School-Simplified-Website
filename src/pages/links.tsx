import { getLinkButtons } from "@api/notion";
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
import { LinkButtonProps } from "types";
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
								<LinkButton {...button} key={"key_" + index} />
							);
						})}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

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
				bg="brand.blue"
				cursor="pointer"
			>
				{props.iconName ? (
					<Icon
						as={fetchIcon(props.iconName)}
						boxSize={30}
						position="absolute"
						left={4}
						color="white"
					/>
				) : null}
				{props.text}
			</Button>
		</NextLink>
	);
}

export async function getStaticProps() {
	const buttons: LinkButtonProps[] = await getLinkButtons();
	return { props: { buttons }, revalidate: 60 };
}
