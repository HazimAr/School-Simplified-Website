import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

export default function Chapter() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Heading mt="10vh">Start Your Own Chapter</Heading>
					<NextLink
						isExternal
						href="https://docs.google.com/forms/d/e/1FAIpQLSfs8_MYtRqA2vq5X5hm9hu-QjLb7PczSJ6wCBTz6vuXOkVKjg/viewform?usp=sf_link"
						_hover={{ textDecoration: "none" }}
						p={15}
					>
						<Button mt="2vh">Applications</Button>
					</NextLink>
				</ContainerInside>
			</Container>
			<Container
				boxShadow=" 0 0 100px 100px rgba(108, 125, 254, 0.71) "
				py={50}
				my={50}
				bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(108, 125, 254, 0.71) 100%);"
			>
				<ContainerInside>
					<HStack>
						<VStack alignItems="flex-start">
							<Heading my={5}>
								Taking Chapters to the Next Level.
							</Heading>
							<Text fontSize="18px" textAlign="left">
								School Simplified chapters are the perfect blend
								of flexibility and rigor. With the chapters
								program, motivated students from around the
								world are able to gain leadership experience,
								conduct service projects, and help others
								progress in their academics. Chapters can offer
								service, tutoring, essay revision, and college
								resources. Each chapter is free to focus on one
								or more areas of interest.
							</Text>
						</VStack>
						<Image
							src="/timmy/timmy_chapter.png"
							display={{ base: "none", md: "block" }}
							alt="Timmy with globe"
						/>
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
