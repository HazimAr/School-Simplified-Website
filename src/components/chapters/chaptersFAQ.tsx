import { Heading } from "@chakra-ui/react";
import FaqList from "@components/contact/faq-list";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const qaPairs = [
	{
		question: "What are School Simplified Chapters?",
		answer: [
			{
				text: "School Simplified Chapters are student-run, school-affiliated subunits of the School Simplified Chapters Program that aim to further our mission to equalize education.  Chapters do this by bringing our resources to the local level to help disadvantaged students achieve their academic ambitions.",
				link: "",
			},
		],
	},
	{
		question: "Who can start a Chapter?",
		answer: [
			{
				text: "Any student with a minimum GPA of 3.5 can start a chapter! If you believe that you have encountered extenuating circumstances and still want to start a chapter, feel free to contact our national team.",
				link: "",
			},
		],
	},
	{
		question: "Why choose School Simplified Chapters?",
		answer: [
			{
				text: "School Simplified Chapters gives students access to resources such as subject notes, tutors, and aid in forming their own non-profit without a large membership fee.",
				link: "",
			},
		],
	},
	{
		question: "What is expected of Chapter Members and Presidents?",
		answer: [
			{
				text: "Chapters offer free services to improve their community, usually tutoring, essay revision, or conducting service projects. Although, chapters are free to focus on one or more of these three areas, they can propose their own unique purpose. Chapters must meet at least twice a month and fill out a quarterly report.",
				link: "",
			},
		],
	},
	{
		question: "How much freedom will School Simplified chapters give me?",
		answer: [
			{
				text: "School Simplified Chapters will allow students to choose their own leadership team and a goal that they would like to pursue.",
				link: "",
			},
		],
	},
	{
		question: "Is there a due date to submitting a chapter application?",
		answer: [
			{
				text: "We accept chapters on a rolling basis!",
				link: "",
			},
		],
	},
	{
		question: "What happens after I submit my application?",
		answer: [
			{
				text: "After you submit your application, it will be reviewed by the national staff. If approved, chapters officers must be appointed, and a short orientation will be conducted.",
				link: "",
			},
		],
	},
	{
		question:
			"Are there requirements I need to fulfill to remain an active member of my School Simplified Chapter?",
		answer: [
			{
				text: "In order to remain an active member, students must maintain a GPA above 3.5 and act in accordance with the School Simplified code of conduct.",
				link: "",
			},
		],
	},
	{
		question: "Are there any student membership fees?",
		answer: [
			{
				text: "As of now, national leadership does not collect membership fees. However, individual chapter leadership may opt to collect a maximum fee of $10 per member to further the chapters purpose.",
				link: "",
			},
		],
	},
	{
		question: "How do I increase student involvement?",
		answer: [
			{
				text: "In order to increase student involvement, we encourage chapters to connect with other schools and advertise their services.",
				link: "",
			},
		],
	},
	{
		question: "How can parents become involved?",
		answer: [
			{
				text: "Parents can help with tutoring, reaching out to local charities, or finding potential service opportunities.",
				link: "",
			},
		],
	},
	{
		question: "What does a School Simplified Chapter do?",
		answer: [
			{
				text: "School Simplified Chapters aim to provide free resources to high schoolers across the world. Although most chapters will choose to concentrate in a tutoring program, service program, or essay-revision program, students are encouraged to bring their creativity to the School Simplified spotlight.",
				link: "",
			},
		],
	},
];

export default function FAQ(): JSX.Element {
	return (
		<Container py={15} px={{ base: 0, lg: 40 }}>
			<ContainerInside textAlign="left">
				<Heading size="lg" my={7}>
					Frequently Asked Questions
				</Heading>
				<FaqList list={qaPairs} />
			</ContainerInside>
		</Container>
	);
}
