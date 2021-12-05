import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";

type CardProps = {
	description: string;
	name: string;
	instructor: string;
};

const cards: CardProps[] = [
	{
		description:
			"Learn the basics of TypeScript, React, and Chakra UI to develop websites! Creating your own websites from scratch is a useful skill that can help foster creativity, help you understand code, and allow you to start your own personal projects.",
		name: "Website Development with React & Next.js",
		instructor: "Hazim Arafa",
	},
	{
		description:
			"Learn the basics of JavaScript, Discord API, and discord,js, a JavaScript library used for Discord bot development. With Discord bots being used in almost every server, knowledge of bot development will help students understand the utilities of bots and create their own!",
		name: "Discord: Bot Development",
		instructor: "Max Morrow",
	},
];

export default function ProgrammingSimplified(): JSX.Element {
	return (
		<Container bg="linear-gradient(180deg, rgba(96, 111, 230, 0.71) 0%, rgba(167, 178, 255, 0.71) 100%)">
			<ContainerInside textAlign="left">
				<VStack align="stretch" spacing={5} my={20}>
					<Flex
						flexDir={{ base: "column", md: "row" }}
						justify="space-between"
					>
						<Box mb={{ base: 3, md: 0 }}>
							<Heading size="lg">Learn to apply code.</Heading>
							<Heading size="md" fontWeight="normal">
								Programming Simplified Program
							</Heading>
						</Box>
						<NextChakraLink href="https://programmingsimplified.org/">
							<Button timmysrc="/timmy/29.png">Enroll Now</Button>
						</NextChakraLink>
					</Flex>
					<Box rounded={5} bgImg="/code.jpg" bgSize="cover">
						<Text
							bgColor="rgba(121, 128, 224, 0.71)"
							px={3.5}
							py={2.5}
						>
							Learn how to code and create your own real-life
							applications from experienced instructors from all
							around the world for free, forever!
						</Text>
					</Box>
					<Stack
						direction={{ base: "column", md: "row" }}
						spacing={{ base: 3, md: 12 }}
						align="stretch"
					>
						{cards.map((card) => (
							<Card {...card} key={card.name} />
						))}
					</Stack>
				</VStack>
			</ContainerInside>
		</Container>
	);
}

function Card(props: CardProps): JSX.Element {
	return (
		<VStack
			bgColor="#5A60ADCC"
			align="stretch"
			rounded={5}
			overflow="hidden"
			flex={1}
		>
			<Text px={3.5} py={2.5} flex={1}>
				{props.description}
			</Text>
			<Box bgColor="#5A60AD" px={3.5} py={2.5}>
				<Heading size="sm">{props.name}</Heading>
				{/* <Text>Taught by {props.instructor}</Text> */}
			</Box>
		</VStack>
	);
}
