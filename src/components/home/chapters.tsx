import { Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { slideInLeft, slideInRight } from "@styles/animations";
import { motion } from "framer-motion";
import { MotionDiv } from ".";

export default function Chapters(): JSX.Element {
	return (
		<Container
			bg="linear-gradient(180deg, rgba(90, 104, 221, 0.7) 0%, rgba(132, 143, 255, 0.7) 100%)"
			position="relative"
			overflow="hidden"
		>
			<ContainerInside textAlign="left">
				<Flex flexDir="column" my={16}>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInLeft()}
					>
						<Heading size="lg">
							Bring School Simplified To Your Community
						</Heading>
						<Heading size="md" fontWeight="normal">
							<NextChakraLink href="/chapter">
								Chapters Program
							</NextChakraLink>
						</Heading>
					</motion.div>

					<Stack
						direction={{ base: "column", lg: "row" }}
						mt={6}
						spacing={10}
						align="flex-start"
					>
						<Image
							src="/map.png"
							alt="A map representing the presence of School Simplified around the United States"
							alignSelf="center"
						/>
						<MotionDiv
							initial="initial"
							whileInView="onView"
							variants={slideInRight()}
						>
							<VStack spacing={7} align="flex-start">
								<Text>
									Motivated students from around the world are
									able to gain leadership experience, conduct
									service projects, and help others progress
									in their academics.
								</Text>
								<Text>
									Chapters can offer service, tutoring, essay
									revision, and college resources. Each
									chapter is free to focus on one or more
									areas of interest.
								</Text>
								<NextChakraLink
									href="https://docs.google.com/forms/d/e/1FAIpQLSfs8_MYtRqA2vq5X5hm9hu-QjLb7PczSJ6wCBTz6vuXOkVKjg/closedform"
									isExternal
								>
									<Button timmysrc="/timmy/timmy_globe_icon.png">
										Apply Now
									</Button>
								</NextChakraLink>
							</VStack>
						</MotionDiv>
					</Stack>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
