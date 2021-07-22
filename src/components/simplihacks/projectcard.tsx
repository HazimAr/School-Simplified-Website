import { Text } from "@chakra-ui/react";

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
			<Text>{names}{title}{prize}{link}{img}</Text>
		</>
	);
}