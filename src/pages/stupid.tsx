import { Box, Center, Heading } from "@chakra-ui/react";
import ReactPlayer from "react-player";

export default function Four(): JSX.Element {
	return (
		<Center h="90vh">
			<Box>
				<ReactPlayer
					url="/rick.mp4"
					width="848px"
					height="480px"
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
