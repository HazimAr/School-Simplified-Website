import { Box, Center, Heading } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function Four(): JSX.Element {
	return (
		<Center h="70vh" mt="120px">
			<Box w="80%" >
				<ReactPlayer
					url="/rick.mp4"
					width="100%"
					height="100%"
					// autoPlay
					loop
					playing
				/>

				<Heading>
					There are no controls on this video only rick. Sorry
				</Heading>
			</Box>
		</Center>
	);
}
