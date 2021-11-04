import { Container, Box, Heading, Center } from "@chakra-ui/react";

export default function Donate() {
	return (
		<Center>
		<Container py={19}>
			<Box my="20px">
				<Heading as="h1" size="4xl" mb={8}>
					Donate
				</Heading>
				<Heading as="h2" size="md" color="white">
					School simplified doesn't charge anything for our services,
					so we rely on your donations! Consider donating to us.
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
		</Center>
	);
}
