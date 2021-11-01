import { Container, Box, Heading } from "@chakra-ui/react";

export default function Donate() {
	return (
		<Container py={19}>
			<Box my="20px">
				<Heading as="h1" size="4xl" mb={8}>
					Donate
				</Heading>
				<Heading as="h2" size="md" color="white">
					text goes here on why people should consider donating to
					school simplified
				</Heading>
				<Heading as="h2" size="md" color="white">
					<iframe
						src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
						height="700"
						width="600"
						frameBorder="0"
						allowTransparency
					>
						{" "}
					</iframe>
				</Heading>
			</Box>
		</Container>
	);
}
