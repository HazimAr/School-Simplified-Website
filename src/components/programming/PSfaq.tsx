import { Heading } from "@chakra-ui/react";
import FaqList from "@components/contact/faq-list";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const qaPairs = [
	{
		question: "What experience do I need prior to joining the course?",
		answer: [
			{
				text: "No prior experience is needed to apply!",
				link: "",
			},
		],
	},
	{
		question: "How do I get started with courses?",
		answer: [
			{
				text: "To get started, log in with your Discord account and navigate to the Courses page of ",
				link: "",
			},
			{
				text: "Programming Simplified",
				link: "https://programmingsimplified.org/",
			},
			{
				text: ". There, you will have full access to all of our curriculums.",
				link: "",
			},
		],
	},
	{
		question: "How quickly can I finish a course?",
		answer: [
			{
				text: "The pace at which you complete the course is completely up to you. However, refer to the 'Completion' section of each course page to see an estimated time frame.",
				link: "",
			},
		],
	},
	{
		question: "How do I earn my certification?",
		answer: [
			{
				text: "Once you have completed a course, you will be able to earn your certification by completing the course's certification exam.",
				link: "",
			},
		],
	},
	{
		question: "How can I contact you?",
		answer: [
			{
				text: "If you have any questions, concers or suggestions, please email ",
				link: "",
			},
			{
				text: "programmingsimplified@gmail.com",
				link: "mailto:programmingsimplified@gmail.com",
			},
			{
				text: " or contact us on our ",
				link: "",
			},
			{
				text: "Discord server",
				link: "https://discord.com/invite/s6HAveWMCg",
			},
			{
				text: "!",
				link: "",
			},
		],
	},
];

export default function FAQ(): JSX.Element {
	return (
		<Container py={15} px={{ base: 5, lg: 40 }}>
			<ContainerInside textAlign="left">
				<Heading size="lg" my={7}>
					Frequently Asked Questions
				</Heading>
				<FaqList list={qaPairs} />
			</ContainerInside>
		</Container>
	);
}
