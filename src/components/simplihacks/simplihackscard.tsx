/* eslint-disable import/no-default-export */
import { Box, Center, Flex, Heading, Text, Avatar } from "@chakra-ui/react";
import React from "react";

type SimplihacksCard = {
	name: string;
	title: string;
	img: string;
};

export default function SimplihacksCard({
	title,
	name,
	img,
}: SimplihacksCard): JSX.Element {
	return (
		<Flex
			flexDir="column"
			p="15px"
			m="10px"
			align="center"
			backgroundColor="brand.transparent"
			rounded="50px"
			w="170px"
			shadow="lg"
		>
			<Center w="100px" h="150px">
				<Avatar
					display="block"
					boxSize="135px"
					alt="staff member"
					src={img}
				/>
			</Center>
			<Box maxW="150px" py="5px">
				<Heading size="md">{name}</Heading>
				<Text size="sm" flexWrap="nowrap">
					{title}
				</Text>
			</Box>
		</Flex>
	);
}