import {
	Box,
	Flex,
	Heading,
	Link,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import {
	fadeIn,
	slideInLeft,
	slideInRight,
	slideInUp,
} from "@styles/animations";
import { motion } from "framer-motion";

type CardProps = {
	description: string;
	name: string;
	instructor: string;
};

const cards: CardProps[] = [
	{
		description:
			"Create your own websites from scratch by learning the basics of TypeScript, React, and Chakra UI!",
		name: "Website Development with Next.js",
		instructor: "Hazim Arafa",
	},
	{
		description:
			"Create an interactive Discord Bot using the latest features exposed by the discord API with TypeScript and NodeJS!",
		name: "Discord: Bot Development",
		instructor: "Max Morrow",
	},
	{
		description:
			"Discover the basics of object-oriented programming with the Java programming language!",
		name: "Java 101: The Basics",
		instructor: "Tachi Miura & Tachi Miura",
	},
	{
		description:
			"Form professional coding skills with the basics of Python and build a foundation that can be applied anywhere!",
		name: "Python 101: The Basics",
		instructor: "Hovhannes M & Rahul Datta",
	},
];

export default function ProgrammingSimplified(): JSX.Element {
	return (
		<Container bg="linear-gradient(180deg, rgba(96, 111, 230, 0.71) 0%, rgba(167, 178, 255, 0.71) 100%)">
			<ContainerInside overflow="hidden" textAlign="left">
				<VStack align="stretch" spacing={5} my={20}>
					<Flex
						flexDir={{ base: "column", md: "row" }}
						justify="space-between"
					>
						<motion.div
							initial="initial"
							whileInView="onView"
							variants={slideInLeft()}
						>
							<Box mb={{ base: 3, md: 0 }}>
								<Heading size="lg">
									Learn to apply code.
								</Heading>
								<Link href="https://programmingsimplified.org/">
									<Heading size="md" fontWeight="normal">
										Programming Simplified Program
									</Heading>
								</Link>
							</Box>
						</motion.div>
						<motion.div
							initial="initial"
							whileInView="onView"
							variants={slideInRight()}
						>
							<NextChakraLink
								href="https://programmingsimplified.org/"
								target="_blank"
							>
								<Button timmysrc="/timmy/29.png">
									Enroll Now
								</Button>
							</NextChakraLink>
						</motion.div>
					</Flex>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={fadeIn()}
					>
						<Box rounded={5} bgImg="/code.jpg" bgSize="cover">
							<Text
								bg="rgba(121, 128, 224, 0.71)"
								px={3.5}
								py={2.5}
							>
								Learn how to code and create your own real-life
								applications from experienced instructors from
								all around the world for free, forever!
							</Text>
						</Box>
					</motion.div>
					{/* <Stack
						direction={{ base: "column", md: "row" }}
						spacing={{ base: 3, md: 12 }}
						align="stretch"
					>
						
					</Stack> */}
					<SimpleGrid
						columns={{ base: 1, sm: 2, lg: 4 }}
						gap={{ base: 2, sm: 4, lg: 12 }}
					>
						{cards.map((card, index) => (
							<motion.div
								initial="initial"
								whileInView="onView"
								variants={slideInUp({
									amount: 50,
									delay: index * 0.3,
								})}
								key={card.name}
							>
								<Card {...card} />
							</motion.div>
						))}
					</SimpleGrid>
				</VStack>
			</ContainerInside>
		</Container>
	);
}

function Card(props: CardProps): JSX.Element {
	return (
		<VStack
			bg="#5A60ADCC"
			align="stretch"
			rounded={5}
			overflow="hidden"
			flex={1}
			h="100%"
			w="100%"
		>
			<Text px={3.5} py={2.5} flex={1}>
				{props.description}
			</Text>
			<Box bg="#5A60AD" px={3.5} py={2.5}>
				<Heading size="sm">{props.name}</Heading>
				{/* <Text>Taught by {props.instructor}</Text> */}
			</Box>
		</VStack>
	);
}
