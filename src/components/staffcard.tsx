/* eslint-disable import/no-default-export */
import { Box, Text, Image, Heading } from "@chakra-ui/react";

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
		<Box p={4} m={2}>
			<Box
				w="40vh"
				h="40vh"
				backgroundColor="whiteAlpha.400"
				rounded="50px"
				p={5}
				alignContent="center"
				justifyContent="center"
			>
				<Image src={img} />
			</Box>
			<Heading size="md">{name}</Heading>
			<Text size="sm">{title}</Text>
		</Box>
	);
}
