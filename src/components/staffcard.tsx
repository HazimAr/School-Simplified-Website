/* eslint-disable import/no-default-export */
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

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
		<Flex flexDir="column" align="center" justify="center" p="10px" m="5px">
			<Box
				w="200px"
				h="200px"
				backgroundColor="whiteAlpha.400"
				p="20px"
				rounded="50px"
			>
				<Image src={img} />
			</Box>
			<Heading size="md">{name}</Heading>
			<Text size="sm">{title}</Text>
		</Flex>
	);
}
