import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import NextLink from "@components/nextChakra";

type ProjectCard = {
	names: string;
	title: string;
	prize: string;
	link: string;
	img: string;
};

export default function ProjectCard({
	names,
	title,
	prize,
	link,
	img,
}: ProjectCard): JSX.Element {
	return (
		<>
			<Box
				boxShadow="0px 4px 8px rgba(0, 0, 0, 0.25)"
				maxW={320}
				m={3}
				rounded={5}
				backgroundColor="brand.purple.dark"
				minW="350px"
			>
				<Image w="100%" src={img} alt={title + " project image"} />
				<VStack align="start" p="15px">
					<NextLink href={link} target="_blank">
						<Heading fontSize={24}>{title}</Heading>
					</NextLink>
					<Text textAlign="left" fontSize="14px">
						{prize}
					</Text>
					<Heading textAlign="left" fontSize="16px">
						{names}
					</Heading>
				</VStack>
			</Box>
		</>
	);
}
