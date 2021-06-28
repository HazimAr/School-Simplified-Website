import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Home(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Flex justify="space-between" align="center">
					<Box maxW="400px" textAlign="left" py="100px">
						<Heading>The key to your future</Heading>
						<Text>
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
