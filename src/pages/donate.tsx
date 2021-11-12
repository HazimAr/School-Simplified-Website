import { Heading, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Donate() {
	return (
		<Container py={19}>
			<ContainerInside>
				<VStack my={8}>
					<Heading as="h1" size="2xl" mb={8}>
						Donate
					</Heading>
					<Heading as="h2" size="md" color="white">
						We doesn't charge anything for our services, so we rely
						on your donations! Please consider donating to us.
					</Heading>

					<iframe
						src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
						height="700"
						width="600"
						frameBorder="0"
						allowTransparency
					/>
				</VStack>
			</ContainerInside>
		</Container>
	);
}
