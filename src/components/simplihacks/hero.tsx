import { VStack, HStack, Stack, Heading, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import React from "react";

type ButtonType = {
	link: string;
	text: string;
	icon: string;
};

const buttons: ButtonType[] = [
	{
		link: "https://b5s8rxcywdj.typeform.com/to/vvH5SbWk",
		text: "Sign Up",
		icon: "timmy/timmy_book_icon.png",
	},
	{
		link: "https://discord.gg/school",
		text: "Discord",
		icon: "timmy/timmy_happy_icon.png",
	},
	{
		link: "https://simplihacks.devpost.com/",
		text: "DevPost",
		icon: "timmy/timmy_shocked_icon.png",
	},
];

export default function Hero(): JSX.Element {
	return (
		<>
			<Container p="50px">
				<ContainerInside>
					<HStack>
						<VStack align="start">
							<Heading fontSize={40}>Simplihacks</Heading>
							<Text textAlign="left" fontSize="22px">
								Want to learn how to make cool websites and
								apps? Or maybe you just want to learn how to
								code for fun.
								{<br />}
								{<br />}
								We can help you do just that with Simplihacks!
								{<br />}
								{<br />}
								Simplihacks is a 2-day virtual hackathon,
								brought to you by School Simplified. If this is
								your first hackathon or you have no experience
								with coding, do not worry! Participants of all
								levels to compete are welcomed to join our great
								workshops that can get you started on your
								computer science journey.{" "}
							</Text>
							<Stack direction={{ base: "column", md: "row" }}>
								{buttons.map((button, i: number) => {
									return (
										<NextLink
											href={button.link}
											target="_blank"
											key={i}
										>
											<Button
												m={3}
												timmysrc={button.icon}
											>
												{button.text}
											</Button>
										</NextLink>
									);
								})}
							</Stack>
						</VStack>
						<Image
							maxW="350px"
							src="/timmy/timmy_shocked.png"
							display={{ base: "none", md: "block" }}
							alt="Timmy shocked"
						/>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
