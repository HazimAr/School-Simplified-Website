import { Box, Heading, HStack, Image, Text, Stack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

import { useState } from "react";

export default function Intro() {
	const [content, setContent] = useState(0);
	return (
		<Container>
			<ContainerInside>
				<HStack justify="center">
					<Stack textAlign="left">
						<Heading>Learn to apply code</Heading>
						<HStack spacing={0} w="100%">
							<SectionButton
								borderLeftRadius={"25px"}
								onClick={() => {
									setContent(0);
								}}
								active={content === 0}
							>
								About
							</SectionButton>
							<SectionButton
								onClick={() => {
									setContent(1);
								}}
								active={content === 1}
							>
								Courses
							</SectionButton>
							<SectionButton
								borderRightRadius={"25px"}
								onClick={() => {
									setContent(2);
								}}
								active={content === 2}
							>
								Join
							</SectionButton>
						</HStack>
						<Stack bg="brand.transparent" p={5} rounded="25px">
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
						display={{ base: "none", lg: "block" }}
					/>
				</HStack>
			</ContainerInside>
		</Container>
	);
}

function SectionButton(props) {
	const { children, onClick, active } = props;
	return (
		<Box
			onClick={onClick}
			maxW="200px"
			py={3}
			w="100%"
			bg={
				active
					? "linear-gradient(90deg, #FFA270 0%, #e6c068 100%)"
					: "brand.transparent"
			}
			textAlign="center"
			// borderLeftRadius={left ? "100px" : 0}
			// borderRightRadius={left ? 0 : "100PX"}
			transition="all 0.1s ease-in"
			_hover={{
				bg: "brand.transparent2",
				cursor: "pointer",
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
