import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import ContactForm from "@components/contact/contact-form";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import FaqList from "@components/contact/faq-list";

export default function Contact(): JSX.Element {
	const qaPairs = [
		{
			question: "Who are you?",
			// eslint-disable-next-line sonarjs/no-duplicate-string
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "Who started School Simplified?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "Is School Simplified free to use?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "How can I get community service hours?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			question: "How reliable is School Simplified?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
	];

	return (
		<Container>
			<ContainerInside>
				<Box py={10} align="center">
					<Heading as="h1" size="xl" mb={3}>
						Get in Touch
					</Heading>
					<Heading as="h2" size="md">
						Have a Question? Comment? Concern?
					</Heading>
				</Box>
				<Flex
					flexDirection={{ sm: "column-reverse", lg: "row" }}
					justify="space-between"
					align="center"
					// px={{ sm: 10, md: 100, lg: 200 }}
					pb={10}
				>
					<Box>
						<ContactForm />
					</Box>
					<Image
						src="/undraw/contact.svg"
						alt="Contact Person"
						h="350px"
						mb={{ sm: 5, lg: 0 }}
					/>
				</Flex>
				<Flex flexDirection="column" align="stretch">
					<Heading as="h1" size="xl" mb={3}>
						FAQ
					</Heading>
					<FaqList list={qaPairs} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}
