import ContainerBackground from "@components/containerBackground";
import {
	VStack,
	Heading,
	HStack,
	Image,
	Text,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Box,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Activities() {
	return (
		<>
			<ContainerBackground src="/timmy/watermelon.png" py="100px">
				<VStack>
					<Heading>Clubs</Heading>
					<Button>Club President</Button>
				</VStack>
			</ContainerBackground>
			<Container bg="#5A60AD">
				<ContainerInside>
					<HStack>
						<VStack w="100%">
							<Heading>Student Activities</Heading>
							<Text>
								Student Activities is a division of School
								Simplified that focuses on clubs and also all
								student opportunities outside of school. Our
								goal is to advance learning outside of school!
							</Text>
							<Button>Club President</Button>
						</VStack>
						<Image src="/timmy/16.png" w="600px" />
					</HStack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<Heading>FAQ</Heading>

					<Accordion>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Section 1 title
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box flex="1" textAlign="left">
										Section 2 title
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</ContainerInside>
			</Container>
		</>
	);
}
