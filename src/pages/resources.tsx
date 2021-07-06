import {
	Box,
	Button,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Flex, 
	Spacer
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Resources(): JSX.Element {
	return (
		<Flex>
			<Box pl="20px" flex="0.75" bg="brand.purple.dark">
				<Heading align="left">NOTES</Heading>
				<Text align="left" >We simplify complicated material by offering 
					notes and free help with classes! Our resources 
					cover both AP and non-AP courses, allowing you 
					to explore the intricacies of the subject at hand.</Text>
			</Box>
			<Box flex="2" bg="brand.purple.dark">
			</Box>


		</Flex>

		
		
	);
}
