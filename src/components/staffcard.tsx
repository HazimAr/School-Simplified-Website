/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Flex,
	Heading,
	Image,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
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
	const width = useBreakpointValue({ base: 200, lg: 300 });
	return (
		<Flex flexDir="column" p="15px" m="5px" align="center">
			<Center
				w={width}
				h={width}
				backgroundColor="brand.transparent"
				rounded="50px"
			>
				<Image
					rounded="30px"
					boxSize={{ base: 165, lg: 265 }}
					objectFit="cover"
					alt="staff member"
					src={img}
				/>
			</Center>
			<Box maxW={width} py="5px">
				<Heading size="md">{name}</Heading>
				<Text size="sm" flexWrap="wrap">
					{title}
				</Text>
			</Box>
		</Flex>
	);
}
