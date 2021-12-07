import { Box, Divider, Flex, Heading, ScaleFade, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import RotatingPanel from "@components/rotatingPanel";

type Review = {
	review: string;
	name: string;
	title: string;
	key: string;
};

const reviews: Review[] = [
	{
		review: "They helped me over the course of 3 days redo over 9 assignments to pass the year. I want everyone to know that they are so kind and always ready to help, they are always courteous and understanding. I want to say from the bottom of my heart, thank you!",
		name: "Dak",
		title: "Freshman",
		key: "F",
	},
	{
		review: "I've had multiple tutoring sessions with [my tutor] and he's helped me revise an essay that got me into a program at Stanford, as well as get a 100% on my final with the help of some practice questions he made for me. Overall, he's an amazing tutor and I've noticed a significant improvement in my scores and understanding of the material.",
		name: "Adam",
		title: "Senior",
		key: "S",
	},
	{
		review: "Well, from the start, you were very kind and willing to answer any questions I had on general English knowledge. You helped me enhance my English essay and gave me ways of explaining my thoughts.",
		name: "Mollwee",
		title: "Tutoring, English",
		key: "M",
	},
	{
		review: "The tutoring she gives are just hella helpful and I’ve actually been able to understand what were doing my science class which is usually not normal Because of here lessons I would understand a lot of assignments like a month or 2 worth of work which is why my grade went from C+ to an A- so it really helps. I got a perfect score on my quiz btw.",
		name: "Biscuit",
		title: "Tutoring, Science",
		key: "B",
	},
	{
		review: "Our tutoring sessions have been very informative and fun, and they’ve really helped me understand certain topics which I was confused about prior.",
		name: "kakA",
		title: "Tutoring",
		key: "k",
	},
	{
		review: "achineseman#9174 is an awesome tutor. They create a slideshow of new vocabulary to help me learn and help me with my homework from school. They are very kind, too. They quiz me from time to time during the session to see if I remember the vocabulary and it really helps. They are very organized and neat, too: eg. uses slideshow, document, etc. They are always prepared and are good Chinese speakers. They seem very knowledgeable and are patient. They are also funny and I enjoy the sessions. I like everything they do.",
		name: "Claudia",
		title: "Tutoring, English",
		key: "C",
	},
	{
		review: "It was helpful and informative, and with your help I figured out how to apply concepts better because you teach them before doing a problem",
		name: "abbt",
		title: "Tutoring",
		key: "a",
	},
	{
		review: "I just wanna thank you again because you not only helped me in bio, but also in just general knowledge that I should probably know LOL I really appreciate your help, may the lake always stay with you :)) You were such a great tutor and I was lucky to get you!!",
		name: "Sasha",
		title: "Tutoring, Biology",
		key: "Sa",
	},
	{
		review: "I’ve had multiple experiences with School Simplified on Discord, and it has been great so far! I love how kind people are and the dedication each person has to help you into succeeding in your assignments/homework! They help you understand and guide you along the way!",
		name: "Shania",
		title: "Homework Help",
		key: "S",
	},
	{
		review: "I wanna take all the math helpers honestly. You all are so unbelievably patient when it comes to helping with homework, and all my experiences with tutors were all extremely pleasant and helped me learn easily.",
		name: "Gosu Ligaya",
		title: "Homework Help",
		key: "G",
	},
	{
		review: "I don’t have a specific person to thank and I rarely talk here but thank you for this whole community of helpful and welcoming people that even if a person is struggling on a specific subject, you go out of your way to help them when they are in need. THanks for the helper for being so awesome and being there when you need it. Thanks to the moderators for keeping the server in check and allowing no negativity in this wonderful and learning environment. Thank you so much you guys!!",
		name: "",
		title: "Homework Help",
		key: "",
	},
	{
		review: "Sabrina's been a really great tutor for me. She takes valuable time to customize the lessons in a way where I learn best and always asks to make sure it's working for me. She's also gone above and beyond and made customized homework sheets like how my teacher does at school which really helps me learn. She's very reliable and nice and I'm very grateful for her tutoring. Overall I'd say she's an amazing tutor and I'm very grateful to be learning from her.",
		name: "The Glorious Leader",
		title: "Tutoring",
		key: "Gl",
	},
];

export default function Intro() {
	return (
		<Container
			py={12}
			bg="linear-gradient(180deg, rgba(161, 167, 237, 0.6) 0%, rgba(108, 125, 254, 0.6) 100%);"
		>
			<ContainerInside textAlign="left">
				<Heading as="h1" mb={3}>
					Your Success is Our Success!
				</Heading>
				<Text fontSize="xl" color="white">
					School Simplified believes that quality education should be
					accessible to everyone with equal opportunity. As an
					organization run by students from around the world we know
					exactly what you need to succeed! Take advantage of that and
					help us help you!
				</Text>
				<Divider bg="white" my="40px" />
				<Heading as="h1" mb={3}>
					Don't Believe Us?
				</Heading>
				<Text fontSize="lg" color="white" mb={5}>
					Ask some of our students and hear what they have to say!
				</Text>

				<RotatingPanel Element={Testimony} innerPanelProps={reviews} />
			</ContainerInside>
		</Container>
	);
}

function Testimony(props: Review): JSX.Element {
	return (
		<ScaleFade in={true} unmountOnExit={false}>
			<Flex
				flexDir="column"
				px={9}
				py={5}
				rounded={20}
				bgColor="#FFFFFFC0"
			>
				<Text color="#5A60AD">"{props.review}"</Text>
				<Box alignSelf="flex-end" textAlign="right">
					<Heading as="h1" size="md" mt={4} color="#5A60AD">
						{props.name}
					</Heading>
					<Text color="#5A60AD">{props.title}</Text>
				</Box>
			</Flex>
		</ScaleFade>
	);
}
