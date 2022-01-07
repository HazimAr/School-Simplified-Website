import {
	Box,
	Center,
	Heading,
	Image,
	SimpleGrid,
	Spacer,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { fadeIn } from "@styles/animations";
import { motion } from "framer-motion";

type CardTestimonial = {
	name: string;
	content: string;
};

const cardTestimonial: CardTestimonial[] = [
	{
		name: "Flexibility",
		content:
			"Students can express their creativity through student-run projects, or help their classmates through a robust tutoring system.",
	},
	{
		name: "Student-Run",
		content:
			"Students can gain leadership experience, service hours, and directly impact their local community through the Chapters program.",
	},
	{
		name: "Entreprenurial",
		content:
			"Guided by School Simplified’s support network and resources, student have the opportunity to create a movement on a local, state, or national level.",
	},
	{
		name: "Service-Oriented",
		content:
			"In order to suceed in the chapters program, students must be open-minded, disciplined, and willing to serve their community.  ",
	},
];

export default function Testimonials(): JSX.Element {
	return (
		<>
			<Container
				bg="linear-gradient(180deg, rgba(90, 104, 210, 0.7) 0%, rgba(167, 178, 255, 0.476) 100%)"
				py={10}
				px={{ base: 0, lg: 40 }}
			>
				<Center>
					<ContainerInside>
						<Stack
							direction={{ base: "column", lg: "row" }}
							align="start"
							spacing={5}
						>
							<Stack textAlign="left" align="self-start">
								<Image
									src="/ps/commas.svg"
									w={{
										base: "40px",
										md: "50px",
										lg: "55px",
									}}
									alt="commas"
									py={3}
								/>

								<Heading size="lg">
									Why School Simplified Chapters?
								</Heading>
								<Text>
									School Simplified Chapters are here to help
									you acheive your academic goals
								</Text>
								<Text>
									Here are some qualities that distingush our
									chapters from any others:
								</Text>
							</Stack>
							<Spacer
								display={{ base: "none", lg: "initial" }}
								maxW={{ lg: 0 }}
							/>
							<SimpleGrid
								columns={{ base: 1, md: 1, lg: 2 }}
								spacingX={26}
								spacingY={{ base: 6, lg: 30 }}
								mt={6}
								width={{ base: "%100", lg: "82%" }}
							>
								{cardTestimonial.map(
									(cardTestimonial, index) => (
										<motion.div
											initial="initial"
											whileInView="onView"
											variants={fadeIn({
												delay: index * 0.3,
											})}
											key={cardTestimonial.name}
										>
											<Card {...cardTestimonial} />
										</motion.div>
									)
								)}
							</SimpleGrid>
						</Stack>
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
			h="100%"
		>
			<Text px={3.5} py={3} flex={1} textAlign="left" fontSize={15}>
				{props.content}
			</Text>

			<Box bg="#5A60AD" px={3.5} py={1.5} textAlign="left">
				<Heading size="sm">{props.name}</Heading>
			</Box>
		</VStack>
	);
}
