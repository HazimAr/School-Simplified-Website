import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import ContactForm from "@components/contact/contact-form";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";

export default function Contact(): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Contact Us</title>
			</Head>
			<Container py={19}>
				<ContainerInside>
					<Box my="20px">
						<Heading as="h1" size="xl" mb={3}>
							Get in Touch
						</Heading>
						<Heading as="h2" size="md" color="white">
							Questions, comments, or concerns?
						</Heading>
					</Box>
					<Flex justify="center">
						<Box py={10} align="center"></Box>
						<Flex
							flexDirection={{
								base: "column-reverse",
								xl: "row",
							}}
							justify="space-between"
							align="center"
							// px={{ sm: 10, md: 100, lg: 200 }}
							pb={10}
						>
							<Box w="100%">
								<ContactForm />
							</Box>
							<Box w="100%" justify="center">
								<Image
									src="/timmy/19.png"
									alt="Contact Person"
									h={{base: "550px", "300px":"300px"}}
									minW="300px"
									maxH="550px"
									my={{ base: -5, sm: 5, lg: 0 }}
								/>
							</Box>
						</Flex>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
