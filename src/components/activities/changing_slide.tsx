import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	ScaleFade,
	Text,
	useControllableState,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import NextLink from "@components/nextChakra";
import useInterval from "@hooks/useInterval";
import { rounded } from "@styles/theme";
import React from "react";

import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import { ActivitySlideProps } from "types";

const clubs: ActivitySlideProps[] = [
	{
		clubName: "Chess  Club",
		clubDesc:
			"We strive to help people learn and enjoy the game of chess, or to teach others the basics of the game. We also host tournaments for the game with other events at hand. We do have a couple rules, however; keep in mind that you must be 13+, follow all server rules, and have fun!",
		src: "/clubs/chess.png",
		link: "/",
	},
	{
		clubName: "Cooking Club",
		clubDesc:
			"Our goal is to not only provide an opportunity to enhance such essential life skills but also to have fun and build a strong community! Anyone over 13+ can join whether or not they have true experience. All that matters is that everyone is willing to learn from one another and explore new ideas.",
		src: "/clubs/cooking.png",
		link: "/",
	},
	{
		clubName: "Music Club",
		clubDesc:
			"In this club, we gather musicians and help with music, tempos, composing, rhythms, etc. This is a great opportunity for you to interact with other musicians and develop in your musical career! We take musicians of any kind! Woodwind, strings, etc. Feel free to join and play with us!",
		src: "/clubs/music.png",
		link: "/",
	},
	{
		clubName: "Advocacy Club",
		clubDesc:
			"It takes a lot to stand up and make your voice heard. Are you up for that challenge? Join the Simplified Advocacy Club, and work alongside young students to make a difference and make your voice heard.",
		src: "/clubs/advocacy.png",
		link: "/",
	},
	{
		clubName: "Coding Club",
		clubDesc:
			"In the Simplified Coding Club you’ll learn the basics of programming and how to apply your new skills in situations like contest programming, hackathons, and your own personal projects. Programming is an awesome skill to learn so we urge everyone of all skill levels to join! Not only will you be able to create projects relevant to what you want to do, but you can use them in real life as well.",
		src: "/clubs/coding.png",
		link: "/",
	},
];

export default function ChangingSlide(): JSX.Element {
	const innerSlides = clubs.map((club) => {
		return <Panel {...club} key={club.clubName} />;
	});
	const [index, setIndex] = useControllableState({
		defaultValue: 0,
		onChange: (_newIndex: number) => {
			// 	console.log(index + " vs " + newIndex);
		},
	});

	useInterval(() => {
		setIndex(index === innerSlides.length - 1 ? 0 : index + 1);
	}, 5000);

	return (
		<VStack>
			<Box mb={3}>{innerSlides[index]}</Box>
			<Center>
				<Center
					onClick={() =>
						setIndex(
							index === 0 ? innerSlides.length - 1 : index - 1
						)
					}
					w="fit-content"
					mx={2}
					cursor="pointer"
				>
					<Icon as={FaArrowLeft} boxSize={5} />
				</Center>
				{clubs.map((club, idx: number) => {
					return (
						<Center key={club.clubName}>
							<Icon
								as={FaCircle}
								boxSize={3}
								color={
									idx == index ? "white" : "brand.purple.dark"
								}
								mx={2}
								onClick={() => setIndex(idx)}
								cursor="pointer"
								opacity={0.7}
							/>
						</Center>
					);
				})}
				<Center
					onClick={() =>
						setIndex(
							index === innerSlides.length - 1 ? 0 : index + 1
						)
					}
					w="fit-content"
					mx={2}
					cursor="pointer"
				>
					<Icon as={FaArrowRight} boxSize={5} />
				</Center>
			</Center>
		</VStack>
	);
}

function Panel({
	src,
	clubName,
	clubDesc,
	link,
}: ActivitySlideProps): JSX.Element {
	return (
		<Box w="100%">
			<ScaleFade in={true} unmountOnExit={false}>
				<Flex flexDir={{ base: "column", md: "row" }}>
					<Box
						backgroundImage={src}
						backgroundSize="cover"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						h="500px"
						w="100%"
						display={{ base: "none", lg: "block" }}
						borderLeftRadius={{ base: rounded, lg: "50%" }}
					/>
					{/* <Image src={src} alt={clubName + " team logo"} w="100%" /> */}
					<VStack
						w="100%"
						borderLeftRadius={{ base: rounded, lg: "none" }}
						borderRightRadius={{ base: rounded, lg: "50%" }}
						justify="center"
						bg="brand.transparent"
						px={5}
					>
						<Heading p={15} size="xl" textAlign="left">
							{clubName}
						</Heading>
						<Text w="95%" p={15} textAlign="left" my={2}>
							{clubDesc}
						</Text>

						<NextLink
							isExternal
							href={link}
							_hover={{ textDecoration: "none" }}
							p={15}
						>
							<Button mt={3}>
								Join <ExternalLinkIcon ml={2} />
							</Button>
						</NextLink>
					</VStack>
				</Flex>
			</ScaleFade>
		</Box>
	);
}
