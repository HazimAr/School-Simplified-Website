import { Heading, Stack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { slideInLeft, slideInRight } from "@styles/animations";
import { motion } from "framer-motion";

export default function GettingStarted() {
	return (
		<Container
			bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(131, 145, 255, 0.71) 100%)"
			py="50px"
		>
			<ContainerInside overflow="hidden">
				<Stack
					spacing={{ base: 0, md: 8, lg: 16 }}
					mx={{ base: 8, sm: 24, md: 16, lg: 28 }}
					direction={{ base: "column", md: "row" }}
				>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInLeft()}
					>
						<VStack spacing={4} align="stretch" textAlign="left">
							<Heading size="lg">Getting Started</Heading>
							<Text>
								School Simplified is a 501(c)3 nonprofit
								organization dedicated to learning done 
								equally, fairly and	with meaning.
							</Text>
							<SimpleGrid
								columns={{ base: 1, md: 2 }}
								spacingX={8}
								spacingY={4}
							>
								<NextChakraLink 
									href="/#acad" 
									display="block">
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
								<NextChakraLink 
									href="/volunteer" 
									display="block">
									<Button
										timmysrc="/timmy/timmy_flying_icon.png"
										w="100%"
										h="100%"
									>
										Volunteer
									</Button>
								</NextChakraLink>
								<NextChakraLink
									href="/faq"
									display="block"
								>
									<Button
										timmysrc="/timmy/1.png"
										w="100%"
										h="100%"
									>
										FAQs
									</Button>
								</NextChakraLink>
							</SimpleGrid>
						</VStack>
					</motion.div>
					<motion.img
						initial="initial"
						whileInView="onView"
						variants={slideInRight()}
						src="/timmy/homepage_getting_started.png"
						alt="A Timmy with a graduation cap and book pointing towards the text on the left"
					/>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
