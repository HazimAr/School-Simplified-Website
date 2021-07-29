import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
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
			<Flex
				maxW={320}
				m={3}
				rounded={10}
				backgroundColor="brand.transparent"
				flexDir="column"
				align="center"
				shadow="lg"
				overflow="hidden"
			>
				<Image src={img} />
				<VStack m={3} justifyContent="center" flex={1}>
					<NextLink href={link} target="_blank">
						<Heading fontSize={24}>{title}</Heading>
					</NextLink>
					<Heading fontSize={20} color="brand.purple.light">
						{prize}
					</Heading>
					<Text as="b">{names}</Text>
				</VStack>
			</Flex>
		</>
	);
}
