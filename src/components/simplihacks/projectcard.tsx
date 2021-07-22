import { Box, Flex, Text, Image, Heading, Link } from "@chakra-ui/react";

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
				maxW="320px"
				m="10px"
				rounded="30px"
				backgroundColor="brand.transparent"
				flexDir="column"
				align="center"
				shadow="lg"
				overflow="hidden"
			>
				<Image src={img} />
				<Box my="10px" mb="10px" mx="10px" maxW="310px">
					<Link href={link}>
						<Heading fontSize={24}>{title}</Heading>
					</Link>
					<Heading fontSize={20} color="brand.purple.light">
						{prize}
					</Heading>
					<Text as="b">{names}</Text>
				</Box>
			</Flex>
		</>
	);
}