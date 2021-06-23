/* eslint-disable import/no-default-export */
import { Box, Text, Image } from "@chakra-ui/react";

type StaffCard = {
	title: string;
	name: string;
	img: string;
};

export default function StaffCard({
	title,
	name,
	img,
}: StaffCard): JSX.Element {
	return (
		<Box>
			<Box
				w="45vh"
				h="45vh"
				backgroundColor="whiteAlpha.400"
				rounded="50px"
				p={5}
				alignContent="center"
				justifyContent="center"
			>
				<Image src={img} />
			</Box>
			<Text>{name}</Text>
			<Text>{title}</Text>
		</Box>
	);
}
