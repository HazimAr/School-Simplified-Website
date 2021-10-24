import { Box, Flex, Heading, Center, AspectRatio } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function RickRoll(): JSX.Element {
	return (
		<AspectRatio maxW="2000px" ratio={1}>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/dQw4w9WgXcQ"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</AspectRatio>
	);
}
