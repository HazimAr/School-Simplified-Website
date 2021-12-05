import { getArtInfo } from "@api/notion";
import {
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
import NextChakraLink from "@components/nextChakra";
import { rounded } from "@styles/theme";

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
						justify="center"
					>
						<VStack
							flex={5}
							spacing={3}
							justify="center"
							align="flex-start"
						>
							<Heading size="2xl">Our Community</Heading>
							<Text fontSize="lg" textAlign="justify">
								Our organization features a global community of
								over 60,000 teenagers. In this diverse,
								open-minded, and inclusive community, you'll
								have opportunities to make new friends from all
								around the world.
							</Text>
							<NextChakraLink href="/discord" display="block">
								<Button
									timmysrc="/timmy/27.png"
									w="100%"
									h="100%"
								>
									Join Now
								</Button>
							</NextChakraLink>
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
						spacing={{ base: 5, md: 20 }}
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
							<Text textAlign="justify" py={3}>
								Our Discord server offers all of the features
								above, and more! We have 60k members, who are
								mainly college, middle, and high school
								students, which help each other with academics,
								extracurricular activities, and general life.
							</Text>
							<Text textAlign="justify">
								Communication is through text chat, voice calls,
								and other methods!
							</Text>
						</VStack>
						<Stack
							align={{ base: "center", md: "left" }}
							flexDir={{ base: "column", md: "row" }}
						>
							<Image
								src="timmy/timmy_dino.png"
								alt="timmy dino"
								w="300px"
							/>
						</Stack>
					</Stack>
					{/* <Divider size="1px" h="20px" /> */}
				</ContainerInside>
			</Container>

			<Container bg="rgba(141, 149, 249, 0.71)">
				<ContainerInside>
					<Stack
						direction={{ base: "column", md: "row" }}
						justify="center"
						spacing={10}
						textAlign={{ base: "center", md: "left" }}
						py={20}
					>
						<Stack
							flex={1}
							backgroundColor="brand.purple.dark"
							p={8}
							rounded={rounded}
							boxShadow="lg"
							justify="center"
						>
							<Heading>Events</Heading>
							<Text>
								We organize community events, often with prizes,
								such as:
							</Text>
							<UnorderedList textAlign="left" pl={10}>
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
						</Stack>

						<Stack
							flex={1}
							backgroundColor="brand.purple.dark"
							p={8}
							rounded={rounded}
							boxShadow="lg"
							justify="center"
						>
							<Heading>Music</Heading>
							<Text>
								We curate playlists to help you study, with
								genres like:
							</Text>
							<UnorderedList textAlign="left" pl={10}>
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
						</Stack>

						<Stack
							flex={1}
							backgroundColor="brand.purple.dark"
							p={8}
							rounded={rounded}
							boxShadow="lg"
							justify="center"
						>
							<Heading>Daily</Heading>
							<Text>
								We release daily opportunities and
								entertainment, such as:
							</Text>
							<UnorderedList textAlign="left" pl={10}>
								<ListItem>Internships</ListItem>
								<ListItem>Job Openings</ListItem>
								<ListItem>Student Discounts</ListItem>
								<ListItem>Motivational Quotes</ListItem>
								<ListItem>Fun Questions</ListItem>
							</UnorderedList>
						</Stack>
					</Stack>
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside py={10}></ContainerInside>
			</Container>

			<SocialMedias />
		</>
	);
}

export async function getServerSideProps() {
	const artInfo = await getArtInfo();
	return { props: { artInfo } };
}
