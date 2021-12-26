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
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { motion } from "framer-motion";

type CardTestimonial = {
	name: string;
	title: string;
	content: string;
};

const cardTestimonial: CardTestimonial[] = [
	{
		name: "Devin S.",
		title: "Website Dev Student",
		content:
			"I was able to start making my own website with just React and Chakra UI. I'm so happy with it.",
	},
	{
		name: "Daniyal S.",
		title: "Java 101 Student",
		content:
			"I'm so glad I found Programming Simplified. It's a great place to learn.",
	},
	{
		name: "Ally H.",
		title: "Website Dev Student",
		content:
			"I was able to get started with web development with zero prior knowledge on the subject!",
	},
	{
		name: "Kaylee A.",
		title: "Python 101 Student",
		content:
			"I've learned so much from this course! I'm so excited to continue learning!",
	},
];

export default function PSTestimonials(): JSX.Element {
	return (
		<>
			<Container
				bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
				py={10}
				px={40}
			>
				<Center>
					<ContainerInside overflow="hidden" textAlign="left">
						<HStack>
							<VStack>
								<ContainerInside mx={7}>
									<Image
										src="/ps/commas.svg"
										w={{
											base: "55px",
											md: "55px",
											lg: "55px",
										}}
										display={{ base: "none", md: "block" }}
										alt="commas"
										py={5}
									/>

									<motion.div
										initial="initial"
										whileInView="onView"
									>
										<Heading size="lg">
											Why Programming Simplified?
										</Heading>
										<Text mt={4} textAlign="left" size="md">
											Programming Simplified is here to
											help you learn, grow and succeed.
											<br /> <br />
											Here are some testimonials from
											students:
										</Text>
									</motion.div>
								</ContainerInside>
							</VStack>
							<ContainerInside>
								<Flex flexDir="column" align="stretch">
									<SimpleGrid
										columns={{ base: 1, md: 2 }}
										mt={8}
										spacingX={26}
										spacingY={39}
									>
										{cardTestimonial.map(
											(cardTestimonial) => (
												<motion.div
													initial="initial"
													whileInView="onView"
													variants={{
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
													<Card
														{...cardTestimonial}
														key={
															cardTestimonial.title
														}
													/>
												</motion.div>
											)
										)}
									</SimpleGrid>
								</Flex>
							</ContainerInside>
						</HStack>
					</ContainerInside>
				</Center>
			</Container>
		</>
	);
}

function Card(props: CardTestimonial): JSX.Element {
	return (
		<VStack
			bg="#5A60ADCC"
			align="stretch"
			rounded={10}
			overflow="hidden"
			flex={1}
		>
			<Text px={3.5} py={2.5} flex={1} textAlign="left">
				{props.content}
			</Text>

			<Box bg="#5A60AD" px={3.5} py={1.5} textAlign="left">
				<Heading size="sm">{props.name}</Heading>

				<Text flex={1} textAlign="left">
					{props.title}
				</Text>
			</Box>
		</VStack>
	);
}
