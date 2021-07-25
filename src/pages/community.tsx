import { getArtInfo } from "@api/notion";
import {
	Divider,
	Heading,
	HStack,
	Image,
	ListItem,
	Stack,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { rounded } from "@styles/theme";
import React from "react";
import SocialMedias from "@components/community/socialmedias"
import Art from "@components/community/art"
import { ArtData, SpotifyLink } from "types";

const mainPlaylists: SpotifyLink[] = [
	{
		title: "Study Lofi",
		link: "https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1"
	},
	{
		title: "Jazz Lofi",
		link: "https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065"
	},
	{
		title: "90s Pop",
		link: "https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2"
	},
	{
		title: "2010-2015 Pop",
		link: "https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87"
	},
];

export default function Community({
	artInfo,
}: {
	artInfo: ArtData;
}): JSX.Element {
	return (
		<>
			<Container py={10}>
				<ContainerInside>
					<VStack textAlign="left">
						<HStack
							textAlign="left"
							flexDir={{ base: "column", md: "row" }}
							spacing={10}
						>
							<Art artInfo={artInfo}/>

							<Stack w="100%">
								<Heading size="lg">Our Community</Heading>

								<Text fontSize="lg">
									Our organization features a global community
									of over 60,000 teenagers. In this diverse,
									open-minded, and inclusive community, you'll
									have opportunities to make new friends from
									all around the world.
								</Text>
							</Stack>
						</HStack>

						<HStack
							flexDir={{ base: "column", md: "row" }}
							//flexWrap="wrap"
							justify="center"
							spacing={{ base: 0, md: 10 }}
							textAlign="center"
						>
							<VStack
								w="100%"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
								h="300px"
								justify="center"
							>
								<Heading>Events</Heading>
								<Heading size="sm" as="i">
									We organize community events, often with
									prizes, such as:
								</Heading>
								<UnorderedList textAlign="left">
									<ListItem>Competitions</ListItem>
									<ListItem>Hackathons</ListItem>
									<ListItem>Talent Show</ListItem>
									<ListItem>Movie Nights</ListItem>
									<ListItem>Game Nights</ListItem>
								</UnorderedList>
								{/* <Heading size="sm">
									Join our discord server to participate in
									these events!
								</Heading> */}
							</VStack>

							<VStack
								w="100%"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
								h="300px"
								my="20px!important"
								justify="center"
							>
								<Heading mt="-15px">Music</Heading>
								<Heading size="sm" as="i">
									We curate playlists to help you study, with
									genres like:
								</Heading>
								<UnorderedList textAlign="left">
									{mainPlaylists.map(
										(playlist, i: number) => {
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
										}
									)}
								</UnorderedList>
								{/* 
								<Heading size="5px">
									Check out our Spotify for the complete list!
								</Heading> */}
							</VStack>

							<VStack
								w="100%"
								backgroundColor="brand.transparent"
								p="20px"
								rounded={rounded}
								boxShadow="lg"
								h="300px"
								justify="center"
							>
								<Heading mt="-15px">Daily</Heading>
								<Heading size="sm" as="i">
									We release daily opportunities and
									entertainment, such as:
								</Heading>
								<UnorderedList textAlign="left">
									<ListItem>
										Internship/ Job Openings
									</ListItem>
									<ListItem>Student Discounts</ListItem>
									<ListItem>Motivational Quotes</ListItem>
									<ListItem>Fun Questions</ListItem>
								</UnorderedList>
							</VStack>
						</HStack>
					</VStack>
					<Divider borderColor="white" mt="50px" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside maxW="1000px">
					<HStack
						flexDir={{ base: "column", md: "row" }}
						spacing={{ base: 0, md: 10 }}
					>
						{/* disc box */}
						<VStack
							boxSize="100%"
							maxW="458px"
							bg="brand.transparent"
							rounded={rounded}
							boxShadow="lg"
							justify="center"
							spacing={5}
						>
							<NextLink
								href="https://discord.com/invite/school"
								isExternal
							>
								<Image
									src="\undraw\duck_group_shot.png"
									h="300px"
									alt="group timmy"
									objectFit="cover"
								/>
							</NextLink>

							<Heading size="md" color="white" pl="15px" pb="15px" pr="15px">
								Join our Discord. Come for the academic help,
								stay for the family!
							</Heading>
						</VStack>

						<Stack
							boxSize="100%"
							flexDir="column"
							my="20px!important"
							align={{ base: "center", md: "left" }}
							alignItems="stretch"
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
						</Stack>
					</HStack>

					<Divider borderColor="white" my="50px" />
				</ContainerInside>
			</Container>

			<SocialMedias />

		</>
	);
}

export async function getServerSideProps() {
	const artInfo = await getArtInfo();
	console.log(artInfo);
	return { props: { artInfo } };
}