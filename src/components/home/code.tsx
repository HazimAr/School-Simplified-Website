import {
	Box,
	Center,
	Flex,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import { useState } from "react";

export default function Intro() {
	const [content, setContent] = useState(0);
	return (
		<ContainerBackground src="/code.jpg" py="100px">
			<ContainerInside>
				<HStack justify="center">
					<VStack w="100%" textAlign="left" spacing="25px">
						<Heading>Learn to apply code</Heading>
						<Flex justify="center" w="100%">
							<SectionButton
								borderLeftRadius="25px"
								onClick={() => {
									setContent(0);
								}}
								selected={content === 0}
							>
								About
							</SectionButton>
							<SectionButton
								onClick={() => {
									setContent(1);
								}}
								selected={content === 1}
							>
								Courses
							</SectionButton>
							<SectionButton
								borderRightRadius={"25px"}
								onClick={() => {
									setContent(2);
								}}
								selected={content === 2}
							>
								Join
							</SectionButton>
						</Flex>
						<Stack bg="brand.transparent" p={5} rounded={rounded}>
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
					</VStack>
					<Center w="60%" display={{ base: "none", lg: "flex" }}>
						<Image
							src="/timmy/29.png"
							alt="Timmy working on laptop"
							w="300px"
						/>
					</Center>
				</HStack>
			</ContainerInside>
		</ContainerBackground>
	);
}

function SectionButton(props) {
	const { children, onClick, selected } = props;
	return (
		<Box
			onClick={onClick}
			py={3}
			w="100%"
			bg={
				selected
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
