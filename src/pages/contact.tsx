import { Heading, Flex } from "@chakra-ui/react";
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
			<Container flexDirection="row">
				<Heading as="h1" size="xl" mb={3}>Get in Touch</Heading>
				<ContactForm />
			</Container>
			<Container flexDirection="column">
				<Heading as="h1" size="xl" mb={3}>FAQ</Heading>
				<FaqList list={qaPairs} />
			</Container>
		</>
	);
}
