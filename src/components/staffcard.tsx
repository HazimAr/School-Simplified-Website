/* eslint-disable import/no-default-export */
import { Box, Flex, Heading, Image, Text, Center } from "@chakra-ui/react";

type StaffCard = {
	name: string;
	title: string;
	img: string;
	desc: string;
	isLeft: boolean; // image on the left?
};

export default function StaffCard({
	title,
	name,
	img,
	desc,
	isLeft,
}: StaffCard): JSX.Element {
	return (
		<Flex
			flexDir={isLeft ? "row" : "row-reverse"}
			align="center"
			justify="center"
			m={5}
		>
			<Center
				w={{ base: 100, md: 160, lg: 200 }}
				h={{ base: 100, md: 160, lg: 200 }}
				backgroundColor="whiteAlpha.400"
				p={5}
				rounded={{ base: 25, md: 40, lg: 50 }}
				mx={8}
			>
				<Image src={img} />
			</Center>
			<Box>
				<Heading size="md" display="inline" mr={3}>
					{name}
				</Heading>
				<Text display="inline" fontStyle="italic">
					{title}
				</Text>
				<Text textAlign={isLeft ? "left" : "right"}>{desc}</Text>
			</Box>
		</Flex>
	);
}
