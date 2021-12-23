import {
	Box,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { motion } from "framer-motion";

type CardProps = {
	title: string;
	content: string;
	timmySrc: string;
	onLeft: boolean;
	href: string;
};

const cardProps: CardProps[] = [
	{
		title: "Notes",
		content:
			"Master your classes and be at the top of your tests with our notes! We offer extensive and simple notes for all your needs!",
		timmySrc: "/timmy/17_cowboy.png",
		onLeft: false,
		href: "/notes",
	},
	{
		title: "Essay Revision",
		content:
			"Get your essays proofread by the best of the best so that you can be at the top of your class all year round!",
		timmySrc: "/timmy/29_cowboy.png",
		onLeft: false,
		href: "/essay",
	},
	{
		title: "Tutoring",
		content:
			"Take a shot at our private tutoring, personalized and offered by top notch students for every subject you need!",
		timmySrc: "/timmy/16_cowboy.png",
		onLeft: true,
		href: "/tutoring",
	},
	{
		title: "School Help",
		content:
			"To help you reach your full potential, receive one-on-one help so you can focus on the the skills and knowledge that you need!",
		timmySrc: "/timmy/24_cowboy.png",
		onLeft: true,
		href: "/discord",
	},
];

export default function AcademicServices(): JSX.Element {
	const slideInLeftVariants = {
		initial: {
			opacity: 0,
			x: "-100",
		},
		onView: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				delay: 0.3,
			},
		},
	};
	return (
		<Container
			bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
			py={16}
		>
			<ContainerInside overflow="hidden" textAlign="left">
				<Flex flexDir="column" align="stretch">
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInLeftVariants}
					>
						<Heading size="lg">Academic Services</Heading>
						<Heading size="md" fontWeight="normal">
							Digital Program
						</Heading>
						<Text mt={6} textAlign="justify">
							Despite being mainly based in the United States, we
							have an online community of over 60,000 where
							like-minded teenagers can meet and form life-lasting
							connections. We provide numerous free resources such
							as tutoring, essay revision, notes, standarized
							testing preparation, college preparation, and
							numerous more!
						</Text>
					</motion.div>
					<SimpleGrid
						columns={{ base: 1, md: 2 }}
						mt={8}
						spacingX={26}
						spacingY={39}
					>
						{cardProps.map((cardProp) => (
							<motion.div
								initial="initial"
								whileInView="onView"
								variants={{
									initial: {
										opacity: 0,
										x: cardProp.onLeft ? "-100" : "100",
									},
									onView: {
										opacity: 1,
										x: 0,
										transition: {
											duration: 1,
											delay: 0.3,
										},
									},
								}}
							>
								<Card {...cardProp} key={cardProp.title} />
							</motion.div>
						))}
					</SimpleGrid>
				</Flex>
			</ContainerInside>
		</Container>
	);
}

function Card(props: CardProps): JSX.Element {
	return (
		<NextChakraLink
			href={props.href}
			display="block"
			transition="transform 0.2s ease-in"
			_hover={{
				transform: "scale(0.95)",
			}}
		>
			<VStack
				rounded={5}
				bg="#5A60ADCC"
				align="stretch"
				overflow="hidden"
				spacing={22}
				h="100%"
			>
				<Box px={8} py={4} bg="#5A60AD">
					<Heading size="md">{props.title}</Heading>
				</Box>
				<Stack
					direction={props.onLeft ? "row-reverse" : "row"}
					pl={props.onLeft ? 2 : 22}
					pr={props.onLeft ? 22 : 2}
					flex={1}
				>
					<Text pb={4}>{props.content}</Text>
					<Image
						src={props.timmySrc}
						alt={
							"Timmy that accompanies the " +
							props.title +
							" section of academic sources."
						}
						alignSelf="flex-end"
						maxW="45%"
					/>
				</Stack>
			</VStack>
		</NextChakraLink>
	);
}
