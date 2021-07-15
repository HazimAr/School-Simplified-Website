import { Heading, VStack } from "@chakra-ui/react";

export default function Four(): JSX.Element {
	return (
		<VStack>
			<video width="1000" height="1000" autoPlay loop>
				<source src="/rick.mp4" type="video/mp4" />
			</video>
			<Heading>There are no controls on this video only rick. Sorry</Heading>
		</VStack>
	);
}
