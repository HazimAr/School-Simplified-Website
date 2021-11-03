import { Heading, Center } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Chapter() {
	return (
		<Container>
			<ContainerInside>
				<Center h="100vh">
					<Heading>
						We are not currently taking applications.
						Please check back with us later,
						we look forward to working with you!
					</Heading>
				</Center>
			</ContainerInside>
		</Container>
	);
}
