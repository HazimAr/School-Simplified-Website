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
