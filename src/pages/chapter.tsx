import { Heading } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Chapter() {
	return (
		<Container>
			<ContainerInside>
				<Heading>
					We are currently not taking applications right now. Please
					check back with us later
				</Heading>
			</ContainerInside>
		</Container>
	);
}
