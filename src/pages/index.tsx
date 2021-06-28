import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Home(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Flex
					justify="center"
					align="center"
					py="100px"
					flexWrap="wrap"
				>
					<Box maxW="50ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your future</Heading>
						<Text my="10px">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Culpa, ducimus inventore? Maiores incidunt
							possimus corrupti provident modi consequuntur
						</Text>
						<Button>Learn More</Button>
					</Box>
					{/* <Spacer /> */}
					<Box maxW="50ch" textAlign="left" my={`${spacing}px`}>
						<Heading>The key to your future</Heading>
						<Text my="10px">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Culpa, ducimus inventore? Maiores incidunt
							possimus corrupti provident modi consequuntur
						</Text>
						<Button>Learn More</Button>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
