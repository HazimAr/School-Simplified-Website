import {
	Divider,
	Heading,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import NextLink from "@components/nextChakra";

import { RiSpotifyLine } from "react-icons/ri";
import { SpotifyLink } from "types";

const lofiPlaylists: SpotifyLink[] = [
	{
		title: "Study Lofi",
		link: "https://open.spotify.com/playlist/5xy112KNO4WBzaxR1tioT9?si=cbf67fcfe567406b&nd=1",
	},
	{
		title: "Jazz Lofi",
		link: "https://open.spotify.com/playlist/2qfpV3Cv3LGASgLk5DDIwA?si=df83f8b734784065",
	},
	{
		title: "Rainy Day Lofi",
		link: "https://open.spotify.com/playlist/42VuHYE30tU6olqgYCUGj9?si=4cdc91ce894b4d8c",
	},
	{
		title: "Anime Lofi",
		link: "https://open.spotify.com/playlist/6WGCRBoHJ5NZRg6D3VM7DK?si=4b658781fd54463b",
	},
	{
		title: "Sleeping Lofi",
		link: "https://open.spotify.com/playlist/3DGBkdcT236zwEQqsaeiHc?si=c56fda3f5c994ddd",
	},
];

const popPlaylists: SpotifyLink[] = [
	{
		title: "90s Pop",
		link: "https://open.spotify.com/playlist/3KUCDUAke9JNCi3EC3DR4A?si=b84da9bd407d43f2",
	},
	{
		title: "2000-2009 Pop",
		link: "https://open.spotify.com/playlist/2l050Xz8rnNfYqkyx47WTu?si=040ec727a26844bd",
	},
	{
		title: "2010-2015 Pop",
		link: "https://open.spotify.com/playlist/1lhX7W0NEvzMSsFCkQfxk4?si=5c16816fc6974f87",
	},
	{
		title: "2016-2017 Pop",
		link: "https://open.spotify.com/playlist/02oYO9n5qfmULA2deeQ4pR?si=1be766a9b13e4ccf",
	},
	{
		title: "2018-2019 Pop",
		link: "https://open.spotify.com/playlist/3zXZy9Xh93IY13jpqYf6AU?si=f58dac68060a46a6",
	},
	{
		title: "2020-2021 Pop",
		link: "https://open.spotify.com/playlist/1qyZMhC4rC1tc04FdfQr00?si=221b54418a0f4077",
	},
];

export default function Spotify(): JSX.Element {
	const {
		isOpen: isOpenSpotify,
		onOpen: onOpenSpotify,
		onClose: onCloseSpotify,
	} = useDisclosure();
	return (
		<>
			<Icon
				as={RiSpotifyLine}
				boxSize={100}
				color="white"
				onClick={onOpenSpotify}
				transition="all 0.2s ease"
				_hover={{
					cursor: "pointer",
					transform: "scale(1.20)",
				}}
			/>

			<Modal isOpen={isOpenSpotify} onClose={onCloseSpotify}>
				<ModalOverlay />
				<ModalContent bg="brand.purple.dark">
					<ModalHeader>Spotify</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Button mb={3}>
							<NextLink
								href="https://open.spotify.com/user/5lkgh8ryszqens1ywo58m5lv8?si=e3b58782d2e94498"
								isExternal
							>
								Our Spotify
							</NextLink>
						</Button>

						<Text>Here are links to all of our playlists:</Text>

						<Divider borderColor="white" my={3} />

						<Heading size="md" mb={3}>
							Lofi Playlists:
						</Heading>

						<VStack>
							{lofiPlaylists.map((playlist, i: number) => {
								return (
									<NextLink
										href={playlist.link}
										key={i}
										isExternal
									>
										{playlist.title}
									</NextLink>
								);
							})}
						</VStack>

						<Divider borderColor="white" my={3} />

						<Heading size="md" mb={3}>
							Pop Playlists:
						</Heading>

						<VStack>
							{popPlaylists.map((playlist, i: number) => {
								return (
									<NextLink
										href={playlist.link}
										key={i}
										isExternal
									>
										{playlist.title}
									</NextLink>
								);
							})}
						</VStack>
					</ModalBody>
					<ModalFooter>
						<Button mr={3} onClick={onCloseSpotify}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
