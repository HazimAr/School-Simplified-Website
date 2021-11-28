import {
	Heading,
	HStack,
	VStack,
	Stack,
	Text,
	Box,
	Image,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Button from "@components/button";

export default function Four(): JSX.Element {
	return (
		<>
			<Container p="50px">
				<ContainerInside>
					<Stack
						direction={{ base: "column", lg: "row" }}
						mb="10px"
						justify="space-between"
					>
						<Heading fontSize="35px">
							Start Your Project Today
						</Heading>
						<Button timmysrc="timmy/timmy_flying_icon.png">
							Propose Project
						</Button>
					</Stack>
					<Text textAlign="left" fontSize="22px">
						Take the chance to showcase your capability, creativity,
						and ideas while receiving community service hours and
						possibly becoming a project manager!
					</Text>
				</ContainerInside>
			</Container>
			<Container
				p="50px"
				bg="linear-gradient(180deg, rgba(140, 147, 228, 0.4615) 0%, rgba(167, 178, 255, 0.71) 100%);"
			>
				<ContainerInside>
					<HStack>
						<Image
							display={{ base: "none", md: "block" }}
							src="timmy/timmy_flying.png"
						/>
						<VStack spacing={30}>
							<Questions
								title="What is a project?"
								text="A project is a temporary endeavor that creates a unique product or service consistent with our mission of inspiring learning while fostering an environment attuned to adapting and improving through customer input."
							/>
							<Questions
								title="Do I lead my own project?"
								text="That is up to you! Once your proposal is approved, you can choose to be the project manager or recommend a friend to take over while you are in the team helping with the project.
"
							/>
						</VStack>
					</HStack>
				</ContainerInside>
			</Container>
			<Container py="50px">
				<ContainerInside>
					<Heading fontSize="35px" textAlign="left">
						SimpliHacks
					</Heading>
					<Heading fontSize="22px" textAlign="left">
						Previous Projects
					</Heading>
					<Text py="15px" fontSize="22px" textAlign="left">
						An example of a project would be our hackathon, which
						was one of the largest ever in the US, earning over
						$100k in prizes! It took three months of planning out
						the factors that play into building a project, such as
						cost, sponsorships, participants, platforms, and more.
					</Text>
					<Stack
						direction={{ base: "column-reverse", lg: "row" }}
						align="start"
						spacing={50}
					>
						<Winner
							image="simplihacks/winners/signslate.png"
							title="Signslate"
							award="1st Place Winner from June 2021"
							winners="Ayush Agarwal, Krushay Bhavsar"
						/>
						<VStack align="start" spacing={5}>
							<Text fontSize="22px" textAlign="left">
								Simplihacks is a 2-day virtual hackathon,
								brought to you by School Simplified. If this is
								your first hackathon or you have no experience
								with coding, do not worry! Participants of all
								levels to compete are welcomed to join our great
								workshops that can get you started on your
								computer science journey.
								{<br />}
								{<br />}
								Want to learn how to make cool websites and
								apps? Or maybe you just want to learn how to
								code for fun. We’ll help you do just that.
							</Text>
							<Button timmysrc="timmy/timmy_scroll_icon.png">
								More Information
							</Button>
						</VStack>
					</Stack>
				</ContainerInside>
			</Container>
		</>
	);
}

function Questions({ title, text }: { title: string; text: string }) {
	return (
		<Box borderRadius="5px" bg="rgba(90, 96, 173, .8)">
			<Box w="100%" bg="rgba(90, 96, 173, 1)" p="15px" borderRadius="5px">
				<Heading textAlign="left" fontSize="22px">
					{title}
				</Heading>
			</Box>
			<Text textAlign="left" m="20px" fontSize="18px">
				{text}
			</Text>
		</Box>
	);
}

function Winner({
	image,
	title,
	award,
	winners,
}: {
	image: string;
	title: string;
	award: string;
	winners: string;
}) {
	return (
		<Box
			w="100%"
			minW="350px"
			borderRadius="5px"
			bg="rgba(90, 96, 173, .8)"
		>
			<Image w="100%" src={image} />
			<VStack align="start" p="15px">
				<Heading fontSize="22px">{title}</Heading>
				<Text textAlign="left" fontSize="18px">
					{award}
				</Text>
				<Heading textAlign="left" fontSize="18px">
					{winners}
				</Heading>
			</VStack>
		</Box>
	);
}
