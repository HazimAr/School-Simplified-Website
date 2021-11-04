import { Container, Heading, Center } from "@chakra-ui/react";

export default function Donate() {
	return (
			<Container py={19}>
				<Center my="20px">
					<Heading as="h1" size="4xl" mb={8}>
						Donate
					</Heading>
					<Heading as="h2" size="md" color="white">
						School simplified doesn't charge anything for our
						services, so we rely on your donations! Consider
						donating to us.
					</Heading>

					<iframe
						src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
						height="700"
						width="600"
						frameBorder="0"
						allowTransparency
					>
						{" "}
					</iframe>
				</Center>
			</Container>
	);
}
