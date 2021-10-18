import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	ListItem,
	Text,
	UnorderedList,
	Stack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<HStack justify="center">
					<Stack textAlign="left">
						<Heading>Learn to apply code</Heading>
						<Stack>
							<Text>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Eligendi eos cupiditate
								necessitatibus numquam quibusdam itaque
								recusandae molestias, culpa commodi temporibus
								obcaecati magnam velit et fugit reprehenderit
								illum nesciunt harum excepturi?
							</Text>
							<Button w="fit-content">Enroll</Button>
						</Stack>
					</Stack>
					<Image
						src="/timmy/29.png"
						alt="Timmy working on laptop"
						w="500px"
					/>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
