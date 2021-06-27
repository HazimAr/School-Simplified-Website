import { Heading, Flex, Image } from "@chakra-ui/react";
import ContactForm from "@components/contact-form";
import FaqList from "@components/faq-list";
import Container from "@components/container";

export default function Contact(): JSX.Element {
	const qaPairs = [
		{
			"question": "Who are you?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "Who started School Simplified?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "Is School Simplified free to use?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "How can I get community service hours?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "How reliable is School Simplified?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
	]

	return (
		<>
			<Container 
				flexDirection={{ sm: "column", lg: "row" }} 
				justify="space-between"
				px={{ sm: 10, md: 100, lg: 200}}
			>
				<Container flexDirection="column" flex={1} py={10}>
					<Heading as="h1" size="xl" mb={3}>Get in Touch</Heading>
					<Heading as="h2" size="md" mb={3}>Have a Question? Comment? Concern?</Heading>
					<Image src="/contactPerson.png" w="200px" />
				</Container>
				<Container flex={2} py={10}>
					<ContactForm />
				</Container>
			</Container>
			<Container flexDirection="column" align="stretch" >
				<Heading as="h1" size="xl" mb={3}>FAQ</Heading>
				<FaqList list={qaPairs} />
			</Container>
		</>
	);
}
