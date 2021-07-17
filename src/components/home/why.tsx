import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Why(): JSX.Element {
	return (
		<Container py={5}>
			<ContainerInside>
				<Box py={5}>
					<Flex
						align="center"
						justify="center"
						flexDir={{ base: "column", md: "row" }}
					>
						<Box>
							<Heading
								textAlign={{ base: "center", md: "left" }}
								fontSize="2xl"
								mb={3}
							>
								Why Us?
							</Heading>
							<Text
								textAlign={{ base: "center", md: "left" }}
								maxW="60ch"
							>
								School Simplified believes that quality
								education should be accessible to all students.
								As an organization run by students and for students, we
								want to help you succeed!
							</Text>
						</Box>
						<Image
							src="/undraw/learning.svg"
							w={{ base: 200, md: 300, lg: 400 }}
							ml={{ base: 0, md: 8 }}
							mt={{ base: 8, md: 0 }}
						/>
					</Flex>
				</Box>
			</ContainerInside>
		</Container>
	);
}
