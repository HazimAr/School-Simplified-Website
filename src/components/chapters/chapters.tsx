import {
	Center,
	Heading,
	Image,
	Text,
	HStack,
	VStack,
	Flex,
	Spacer,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { motion } from "framer-motion";

export default function Chapters(): JSX.Element {
	return (
		<>
			<Container py={50} px={{ base: 0, lg: 10 }} bg="#5E65B7">
				<ContainerInside maxWidth={800}>
					<Center>
						<HStack spacing={0}>
							<VStack align="start" textAlign="left">
								<Heading size="lg">
									Start Your Own Chapter
								</Heading>
								<Text mt={6} textAlign="left">
									School Simplified chapters are the perfect
									blend of flexbility and rigor.
								</Text>
								<NextLink
									isExternal
									href="https://docs.google.com/forms/d/e/1FAIpQLSfs8_MYtRqA2vq5X5hm9hu-QjLb7PczSJ6wCBTz6vuXOkVKjg/viewform?usp=sf_link"
									_hover={{ textDecoration: "none" }}
								>
									<Button timmysrc="/timmy/timmy_flying_icon.png">
										Apply Now
									</Button>
								</NextLink>
								<Heading size="lg">
									Taking Chapters to the Next Level
								</Heading>
								<Text>
									With the chapters program, motivated
									students from around the world are able to
									gain leadership experience, conduct service
									projects, and help others progress in their
									academics.
								</Text>
								<Text>
									Chapters can offer service, tutoring, essay
									revision, and college resources. Each
									chapter is free to focus on one or more
									areas of interest.
								</Text>
							</VStack>
							<Spacer maxW={{ md: 5, lg: 20 }} />
							<Image
								src="/timmy/featured_thin.png"
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
				px={{ base: 0, lg: 40 }}
			>
				<ContainerInside overflow="hidden" textAlign="left">
					<Flex flexDir="column" align="stretch">
						<motion.div initial="initial" whileInView="onView">
							<Heading size="lg">
								How to Bring School Simplified To Your Community
							</Heading>
							<Text mt={4} textAlign="left">
								To start a chapter, there are a few steps you
								need to complete first:
							</Text>
							<Text>
								<ul>
									Submit a School Simplified Charter
									application.
								</ul>
								<ul>
									Elect officers, specifically each of the
									following: President, Vice President,
									Secretary, Treasurer, and a Marketing
									Officer.
								</ul>
								<ul>
									Review any essential documents with any
									elected officers.
								</ul>
								<ul>Start recruiting chapter members.</ul>
								<ul>
									Host fun events during your school year!
								</ul>
							</Text>
						</motion.div>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
