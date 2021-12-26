import {
	Center,
	Heading,
	Image,
	Text,
	HStack,
	VStack,
	Flex,
	SimpleGrid,
	Box,
	Stack,
	Spacer,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { fadeIn } from "@styles/animations";
import { motion } from "framer-motion";

type CardProps = {
	title: string;
	subtitle: string;
	content: string;
};

const cardProps: CardProps[] = [
	{
		title: "Python 101: The Basics",
		subtitle: "Start forming your professional coding skills!",
		content:
			"Learn the basics of Python and build a foundation in programming that can be applied anywhere! This course contains knowledge on storing and handling data, control flow, error handling, and even version control for your projects",
	},
	{
		title: "Java 101: The Basics",
		subtitle:
			"Discover more about all the information needed for the AP Computer Science exam, and more!",
		content:
			"Learn the basics of object-oriented programming with the Java programming language! From computational thinking to recursive sorting algorithms, we've got you covered.",
	},
	{
		title: "Website Development with Next.js",
		subtitle: "Create your own websites from scratch!",
		content:
			"Learn the basics of TypeScript, React, and Chakra UI to develop websites! Creating your own websites scratch is a useful skill that can help foster creativity, help you understand code, and allow you to start your own personal projects. The course covers VS Code and GitHub for professional settings usage.",
	},
	{
		title: "Discord: Bot Development",
		subtitle: "Create your own interactive Discord Bot!",
		content:
			"Learn how yo use the latest features exposed by the discord API (slash commands, interactions) with TypeScript and NodeJS. The course teaches the fundamentals of server side code, event listeners, strong typing and more through a fun and popular application of these techniques.",
	},
];

export default function Programming(): JSX.Element {
	return (
		<>
			<Container py={50} px={{ base: 12, lg: 20 }} bg="#5E65B7">
				<ContainerInside>
					<Center>
						<HStack spacing={0}>
							<VStack align="start" textAlign="left">
								<Heading size="lg">Learn How to Code</Heading>
								<NextLink
									isExternal
									href="https://programmingsimplified.org/"
								>
									<Heading size="sm" fontWeight="hairline">
										Programming Simplified Program
									</Heading>
								</NextLink>
								<Text mt={6} textAlign="left">
									Want to create, launch, and produce
									projects? Want to gain coding skills through
									an innovative way of learning? <br />
									<br />
									Programming Simplified will help you do just
									that! It is a program designed to help
									beginner programmers learn the necessary
									basic skills to start their own career
									projects!
								</Text>

								<Stack
									direction={{ base: "column", sm: "row" }}
									spacing={15}
									p={15}
								>
									<NextLink
										isExternal
										href="https://programmingsimplified.org/"
										_hover={{ textDecoration: "none" }}
									>
										<Button timmysrc="/timmy/17.png">
											Learn More
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://discord.com/invite/s6HAveWMCg"
										_hover={{ textDecoration: "none" }}
									>
										<Button timmysrc="/timmy/22.png">
											{" "}
											Join Now{" "}
										</Button>
									</NextLink>
								</Stack>
							</VStack>
							<Spacer maxW={{ md: 5, lg: 20 }} />
							<Image
								src="/timmy/pscomputer.png"
								w={{ md: 200, lg: 250 }}
								display={{ base: "none", md: "block" }}
								alt="Timmy with a computer"
							/>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>

			<Container
				bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
				py={14}
				px={{ base: 5, lg: 40 }}
			>
				<ContainerInside overflow="hidden" textAlign="left">
					<Flex flexDir="column" align="stretch">
						<motion.div initial="initial" whileInView="onView">
							<Heading size="lg">
								Courses in Programming Simplified
							</Heading>
							<Text size="md" fontWeight="normal">
								<b>Completion:</b> 4 to 12 weeks
							</Text>
							<Text mt={4} textAlign="left">
								Learn at your own pace with professionally
								recorded lessons. To receive the certificate of
								completion at the end of a course, you will have
								to create an independent and personal project!
							</Text>
						</motion.div>
						<SimpleGrid
							columns={{ base: 1, md: 2 }}
							mt={6}
							spacingX={26}
							spacingY={39}
						>
							{cardProps.map((cardProp, index) => (
								<motion.div
									initial="initial"
									whileInView="onView"
									variants={fadeIn({ delay: index * 0.3 })}
									key={cardProp.title}
								>
									<Card {...cardProp} />
								</motion.div>
							))}
						</SimpleGrid>
					</Flex>
				</ContainerInside>
			</Container>
		</>
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
				<b>{props.subtitle}</b>
			</Text>
			<Text px={3.5} py={2} flex={1}>
				{props.content}
			</Text>
			<Box bg="#5A60AD" px={3.5} py={2.5}>
				<Heading size="sm">{props.title}</Heading>
			</Box>
		</VStack>
	);
}
