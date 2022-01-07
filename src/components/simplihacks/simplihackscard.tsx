/* eslint-disable import/no-default-export */
import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

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
		<VStack>
			<Box
				flexDir="column"
				p="15px"
				align="center"
				backgroundColor="brand.transparent"
				rounded="20px"
				mb="10px"
				minW="150px"
				shadow="lg"
			>
				<Image
					display="block"
					rounded="20px"
					alt="staff member"
					maxW="125px"
					w="100%"
					src={img}
				/>
			</Box>
			<Heading fontSize="18px">{name}</Heading>
			<Text m="0">{title}</Text>
		</VStack>
	);
}
