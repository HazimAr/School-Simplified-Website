import { Box, Center, Heading } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function Four(): JSX.Element {
	return (
		<Center h="70vh" mt="120px">
			<Box w="80%">
				<ReactPlayer
					url="/rick.mp4"
					width="100%"
					height="100%"
					// autoPlay
					loop
					playing
				/>

				<Heading>
					If this doesn't load go to home page then come back
				</Heading>
			</Box>
		</Center>
	);
}
