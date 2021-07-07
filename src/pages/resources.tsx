import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

// Got to make all of the tabs of Subjects using Chakra

export default function Resources(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Flex>
					<Box pl="20px" flex="0.75" bg="brand.purple.dark">
						<Heading align="left">NOTES</Heading>
						<Text align="left">
							We simplify complicated material by offering notes
							and free help with classes! Our resources cover both
							AP and non-AP courses, allowing you to explore the
							intricacies of the subject at hand.
						</Text>
					</Box>
					<Box flex="2" bg="brand.purple.dark">
						hehe img here
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
