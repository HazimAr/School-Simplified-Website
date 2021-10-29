import { Text, Image, Heading } from "@chakra-ui/react";

export default function Hero({ heading }) {
	return (
		<>
			<Image
				src="\logos\ss_logo.png"
				alt="school simplified logo"
				boxSize={100}
				mt={{ base: 12, md: 4 }}
				// mx="10px"
			/>

			<Heading fontSize="xl">{heading}</Heading>

			<Text fontSize="md">
				Free Tutoring | Free Notes | Free Essay Revisions
			</Text>
		</>
	);
}
