import {
	Heading,
	HStack,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { motion } from "framer-motion";

export default function GettingStarted() {
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
	const slideInRightVariants = {
		initial: {
			opacity: 0,
			x: "100",
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
			bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(131, 145, 255, 0.71) 100%)"
			py="50px"
		>
			<ContainerInside>
				<HStack
					spacing={{ base: 0, md: 8, lg: 16 }}
					mx={{ base: 8, sm: 24, md: 16, lg: 28 }}
				>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInLeftVariants}
					>
						<VStack spacing={4} align="stretch" textAlign="left">
							<Heading size="lg">Getting Started</Heading>
							<Text>
								School Simplified is a digital nonprofit
								organization run by high school volunteers
								dedicated to learning done equally, fairly and
								with meaning.
							</Text>
							<SimpleGrid
								columns={{ base: 1, md: 2 }}
								spacingX={8}
								spacingY={4}
							>
								<NextChakraLink href="/" display="block">
									<Button
										timmysrc="/timmy/1.png"
										w="100%"
										h="100%"
									>
										Programs
									</Button>
								</NextChakraLink>
								<NextChakraLink
									href="/organizations"
									display="block"
								>
									<Button
										timmysrc="/timmy/timmy_flying_icon.png"
										w="100%"
										h="100%"
									>
										Organizations
									</Button>
								</NextChakraLink>
								<NextChakraLink href="/" display="block">
									<Button
										timmysrc="/timmy/3.png"
										w="100%"
										h="100%"
									>
										Resources
									</Button>
								</NextChakraLink>
								<NextChakraLink
									href="/community"
									display="block"
								>
									<Button
										timmysrc="/timmy/27.png"
										w="100%"
										h="100%"
									>
										Community
									</Button>
								</NextChakraLink>
							</SimpleGrid>
						</VStack>
					</motion.div>
					<motion.img
						initial="initial"
						whileInView="onView"
						variants={slideInRightVariants}
						src="/timmy/homepage_getting_started.png"
						alt="A Timmy with a graduation cap and book pointing towards the text on the left"
					/>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
