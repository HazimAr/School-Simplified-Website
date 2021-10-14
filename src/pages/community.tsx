import { getArtInfo } from "@api/notion";
import {
	Divider,
	Heading,
	Image,
	ListItem,
	Stack,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Art from "@components/community/art";
import SocialMedias from "@components/community/socialmedias";
import Container from "@components/container";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { rounded } from "@styles/theme";
import React from "react";
import { ArtData, SpotifyLink } from "types";

const mainPlaylists: SpotifyLink[] = [
	{
		title: "Study Lofi",
		link: "https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1",
	},
	{
		title: "Jazz Lofi",
		link: "https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065",
	},
	{
		title: "90s Pop",
		link: "https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2",
	},
	{
		title: "2010-2015 Pop",
		link: "https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87",
	},
];

export default function Community({
	artInfo,
}: {
	artInfo: ArtData;
}): JSX.Element {
	return (
		<>
			<ContainerBackground src="/timmy/duck_group_shot.png" py={10}>
				<ContainerInside>
					<Stack
						textAlign="left"
						direction={{ base: "column", md: "row-reverse" }}
						spacing={{ base: 5, md: 10 }}
						justifyContent="center"
					>
						<VStack flex={2} justifyContent="center">
							<Heading size="2xl">Our Community</Heading>

							<Text fontSize="lg">
								Our organization features a global community of
								over 60,000 teenagers. In this diverse,
								open-minded, and inclusive community, you'll
								have opportunities to make new friends from all
								around the world.
							</Text>
						</VStack>
						<Art artInfo={artInfo} />
					</Stack>
				</ContainerInside>
			</ContainerBackground>

			<Container
				py={10}
				bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(108, 125, 254, 0.71) 100%)"
			>
				<ContainerInside>
					<Stack
						direction={{ base: "column", md: "row" }}
						spacing={{ base: 5, md: 10 }}
						alignItems="center"
					>
						<VStack
							boxSize="100%"
							align={{ base: "center", md: "left" }}
							alignItems="stretch"
							flex={2}
						>
							<Heading textAlign={{ base: "center", md: "left" }}>
								Our Discord Server
							</Heading>

							<Text fontSize="2xl" textAlign="left">
								Our Discord server offers all of the features
								above, and more! Our 60k members are high school
								students who help each other with academics,
								extracurricular activities, and general life.
								Communication is through text chat, voice calls,
								and other methods!
							</Text>

							<NextLink
								href="https://discord.com/invite/school"
								isExternal
								w="fit-content"
							>
								<Button>Join Our Discord</Button>
							</NextLink>
						</VStack>
						<Stack
							align={{ base: "center", md: "left" }}
							flexDir={{ base: "column", md: "row" }}
						>
							<Image
								src="/timmy/24.png"
								alt="timmy holding a ticket"
								w="300px"
							/>
							<Image
								src="/timmy/25.png"
								alt="timmy holding puzzle pieces"
								w="300px"
							/>
						</Stack>
					</Stack>
				</ContainerInside>
			</Container>

			<Container py={10}>
				<ContainerInside>
					<Stack
						direction={{ base: "column", md: "row" }}
						justify="center"
						spacing={10}
						textAlign="center"
					>
						<VStack
							flex={1}
							backgroundColor="brand.transparent"
							p={8}
							rounded={rounded}
							boxShadow="lg"
							justify="center"
						>
							<Heading>Events</Heading>
							<Heading size="sm" as="i">
								We organize community events, often with prizes,
								such as:
							</Heading>
							<UnorderedList textAlign="left">
								<ListItem>Competitions</ListItem>
								<NextLink href="/simplihacks">
									<ListItem>Hackathons</ListItem>
								</NextLink>
								<ListItem>Talent Shows</ListItem>
								<ListItem>Movie Nights</ListItem>
								<ListItem>Game Nights</ListItem>
							</UnorderedList>
							{/* <Heading size="sm">
									Join our discord server to participate in
									these events!
								</Heading> */}
						</VStack>

						<VStack
							flex={1}
							backgroundColor="brand.transparent"
							p={8}
							rounded={rounded}
							boxShadow="lg"
							justify="center"
						>
							<Heading>Music</Heading>
							<Heading size="sm" as="i">
								We curate playlists to help you study, with
								genres like:
							</Heading>
							<UnorderedList textAlign="left">
								{mainPlaylists.map((playlist, i: number) => {
									return (
										<NextLink
											href={playlist.link}
											key={i}
											isExternal
										>
											<ListItem>
												{playlist.title}
											</ListItem>
										</NextLink>
									);
								})}
							</UnorderedList>
							{/* 
								<Heading size="5px">
									Check out our Spotify for the complete list!
								</Heading> */}
						</VStack>

						<VStack
							flex={1}
							backgroundColor="brand.transparent"
							p={8}
							rounded={rounded}
							boxShadow="lg"
							justify="center"
						>
							<Heading>Daily</Heading>
							<Heading size="sm" as="i">
								We release daily opportunities and
								entertainment, such as:
							</Heading>
							<UnorderedList textAlign="left">
								<ListItem>Internship/ Job Openings</ListItem>
								<ListItem>Student Discounts</ListItem>
								<ListItem>Motivational Quotes</ListItem>
								<ListItem>Fun Questions</ListItem>
							</UnorderedList>
						</VStack>
					</Stack>
				</ContainerInside>
			</Container>

			<SocialMedias />
		</>
	);
}

export async function getServerSideProps() {
	const artInfo = await getArtInfo();
	return { props: { artInfo } };
}
