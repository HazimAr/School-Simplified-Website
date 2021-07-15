/* eslint-disable import/no-default-export */
import { Box, Flex, Heading, Image, Text, Center } from "@chakra-ui/react";
// import { RiBoxingLine } from "react-icons/ri";

type StaffCard = {
	name: string;
	title: string;
	img: string;
};

export default function StaffCard({
	title,
	name,
	img,
}: StaffCard): JSX.Element {
	return (
		<Flex flexDir="column" p="15px" m="5px" align="center">
			<Center
				w="200px"
				h="200px"
				backgroundColor="whiteAlpha.400"
				p="20px"
				rounded="50px"
			>
				<Image rounded="30px" display="block" boxSize="155px" objectFit="cover" src={img} />
			</Center>
			<Box maxW="200px" py="5px">
				<Heading size="md">{name}</Heading>
				<Text size="sm" flexWrap="wrap">
					{title}
				</Text>
			</Box>
		</Flex>
	);
}
