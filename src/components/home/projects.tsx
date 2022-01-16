import {
	Box,
	Heading,
	Image,
	Stack,
	Text,
	VStack,
	HStack,
	Link,
	Center,
	Spacer,
	Flex,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { slideInDown, slideInUp } from "@styles/animations";
import { motion } from "framer-motion";

export default function Projects(): JSX.Element {
	return (
		<Container
			py={16}
			bg="linear-gradient(180deg, rgba(99, 106, 204, 0.9) 0%, rgba(126, 134, 230, 0.747) 100%, rgba(122, 131, 247, 0.9) 100%)"
		>
			<ContainerInside maxWidth="79%" textAlign="left">
				<Center>
					<Flex flexDir="column">
						<Stack>
							<motion.div
								initial="initial"
								whileInView="onView"
								variants={slideInDown()}
							>
								<Heading size="lg" mb={{ base: 2, md: 0 }}>
									Start Your{" "}
									<Link href="/projects">Project</Link> Today
								</Heading>

								<Text mt={2} mb={3} fontSize={19}>
									Take the chance to showcase your capability,
									creativity, and ideas while receiving
									community service hours and possibly
									becoming a project manager!
								</Text>
							</motion.div>
							<motion.div
								initial="initial"
								whileInView="onView"
								variants={slideInUp()}
							>
								<Box rounded={15} bg="#5E65B7" px={7} py={5}>
									<HStack spacing={0}>
										<VStack align="start" textAlign="left">
											<Heading fontSize={24}>
												What is a Project?
											</Heading>
											<Text mt={6} textAlign="left">
												A project is a temporary
												initiative undertaken to further
												School Simplified's mission of
												revolutionizing the future
												through learning!
											</Text>
											<Text mt={6} textAlign="left">
												Projects can include almost
												anything from hackathons,
												advocacy campaings, competitive
												startups, and more!
											</Text>

											<Stack
												direction={{
													base: "column",
													sm: "row",
												}}
												spacing="5%"
												p={15}
											>
												<NextLink
													isExternal
													href="https://forms.gle/fyP8RPFqtWNC4AY68"
													_hover={{
														textDecoration: "none",
													}}
												>
													<Button timmysrc="/timmy/10.png">
														Propose Project
													</Button>
												</NextLink>

												<NextLink
													isExternal
													href="/projects"
													_hover={{
														textDecoration: "none",
													}}
												>
													<Button timmysrc="/timmy/17.png">
														Learn More
													</Button>
												</NextLink>
											</Stack>
										</VStack>
										<Spacer maxW={{ md: 5, lg: 20 }} />
										<Image
											src="/timmy/projectstimmy.png"
											w={{ md: 250, lg: 350 }}
											display={{
												base: "none",
												md: "none",
												lg: "block",
											}}
											alt="Timmy with a computer"
										/>
									</HStack>
								</Box>
							</motion.div>
						</Stack>
					</Flex>
				</Center>
			</ContainerInside>
		</Container>
	);
}
