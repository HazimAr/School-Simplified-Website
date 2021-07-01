import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Flex
					justify="center"
					align="center"
					mt="50px"
					mb="50px"
					flexWrap="wrap"
				>
					<Box maxW="50ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your future</Heading>
						<Text my="10px">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Culpa, ducimus inventore? Maiores incidunt
							possimus corrupti provident modi consequuntur
						</Text>
						<Button>Request Now</Button>
					</Box>

					<Box textAlign="left" my={`${spacing}px`}>
						<Image h="300px" src="/undraw/education.svg" />
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
