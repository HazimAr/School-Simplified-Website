import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Image,
	ScaleFade,
	Text,
	useControllableState,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import useInterval from "@hooks/useInterval";
import React from "react";

import { FaArrowLeft, FaArrowRight, FaCircle } from "react-icons/fa";
import { ActivitySlideProps } from "types";

const clubs: ActivitySlideProps[] = [
	{
		clubName: "Chess  Club",
		clubDesc:
			"This is text to test the design of this sections. Sections are a part of a whole, and that is what this is, it could be 1 part of 1000000 or 10 of 12.  This is text to test the design of this sections. Sections are a part of a whole, and that is what this is, it could be 1 part of 1000000 or 10 of 12.  This is text to test the design of this sections. Sections are a part of a whole, and that is what this is, it could be 1 part of 1000000 or 10 of 12.  ",
		src: "/clubs/chess1.png",
		link: "/",
	},
    {
        clubName: "Cooking Club",
        clubDesc:
            "Our goal is to not only provide an opportunity to enhance such essential life skills but also to have fun and build a strong community! Anyone over 13+ can join whether or not they have true experience. All that matters is that everyone is willing to learn from one another and explore new ideas.",
        src: "/clubs/cooking1.png",
        link: "/",
    },
	{
        clubName: "Music Club",
        clubDesc:
            "In this club, we gather musicians and help with music, tempos, composing, rhythms, etc. This is a great opportunity for you to interact with other musicians and develop in your musical career! We take musicians of any kind! Woodwind, strings, etc. Feel free to join and play with us!",
        src: "/clubs/music1.png",
        link: "/",
    },
	{
        clubName: "Advocacy Club",
        clubDesc:
            "It takes a lot to stand up and make your voice heard. Are you up for that challenge? Join the Simplified Advocacy Club, and work alongside young students to make a difference and make your voice heard.",
        src: "/clubs/advocacy1.png",
        link: "/",
    },
	{
        clubName: "Coding Club",
        clubDesc:
            "In the Simplified Coding Club you’ll learn the basics of programming and how to apply your new skills in situations like contest programming, hackathons, and your own personal projects. Programming is an awesome skill to learn so we urge everyone of all skill levels to join! Not only will you be able to create projects relevant to what you want to do, but you can use them in real life as well.",
        src: "/clubs/coding1.png",
        link: "/",
    },
];

export default function ChangingSlide(): JSX.Element {
	const innerSlides = clubs.map((v, index: number) => {
		return <Panel {...v} key={"key_" + index} />;
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
		<Container>
			{clubs.map((club) => {
				return (
					<Image
						display="none"
						src={club.src}
						key={club.clubName}
						alt={club.clubDesc + " team icon"}
					/>
				);
			})}
			<ContainerInside py={8}>
				<Heading size="xl" mb={3}>
					Join our Clubs
				</Heading>
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
					{clubs.map((_v, idx: number) => {
						return (
							<Center key={"text_" + idx}>
								<Icon
									as={FaCircle}
									boxSize={3}
									color={
										idx == index
											? "white"
											: "brand.purple.dark"
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
			</ContainerInside>
		</Container>
	);
}

function Panel({
	src,
	clubName,
	clubDesc,
	link,
}: ActivitySlideProps): JSX.Element {
	return (
		<Box w="100%" py={5}>
			<ScaleFade in={true} unmountOnExit={false}>
				<Flex
					justifyContent="flex-start"
					flexDir={{ base: "column", md: "row" }}
					
				>
					<Image
							src={src}
							h={{ base: 100, sm: 200, md: 150, lg: 400 }}
							alt={clubName + " team logo"}
							w="100%"
						/>
					<VStack w="100%" alignItems="flex-start" borderRadius="0px 15px 15px 0px" bg="brand.transparent">
						<Heading p={15} size="lg" textAlign="left">
							{clubName}
						</Heading>
						<Text p={15} textAlign="left" my={2}>
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
