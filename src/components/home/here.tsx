import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
const size = "16px";
const textSize = "12px";

export default function Here() {
	return (
		<Container bg="brand.transparent" py="50px" mb="25px">
			<ContainerInside>
				<Flex justify="center" textAlign="left">
					<Flex w="100%" mx="25px" align="center" justify="flex-end">
						<Image h="300px" src="/undraw/exams.svg" />
					</Flex>

					<Box w="100%" mx="25px">
						<Box maxW="400px">
							<Box>
								<Heading size="md">Here's What You Get</Heading>
								<Text fontSize="14px">
									Lorem ipsum dolor sit amet consectetur Lorem
									ipsum dolor sit amet consectetur adipisicing
									elit. Assumenda minima deleniti Lorem ipsum
								</Text>
							</Box>
							<Flex my="10px">
								<Box maxW="50%">
									<Heading size={size}>Free Tutoring</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
								<Box maxW="50%">
									<Heading size={size}>
										Essay Revisions
									</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
							</Flex>
							<Flex my="10px">
								<Box maxW="50%">
									<Heading size={size}>College Prep</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
								<Box maxW="50%">
									<Heading size={size}>SAT Prep</Heading>
									<Text fontSize={textSize}>
										Lorem ipsum dolor sit amet consectetur
										elit. Assumenda minima deleniti Lorem
										ipsum
									</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
