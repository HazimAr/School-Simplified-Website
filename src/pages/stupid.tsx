import { Box, Center, Heading } from "@chakra-ui/react";

export default function Rick(): JSX.Element {
	return (
		<Center h="90vh">
			<Box>
				<video width="1250" height="1250" autoPlay loop>
					<source
						src="http://school-simplified.vercel.app/rick.mp4"
						type="video/mp4"
					/>
				</video>
				<Heading>
					There are no controls on this video only rick. Sorry
				</Heading>
			</Box>
		</Center>
	);
}
