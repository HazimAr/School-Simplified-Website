import Hero from "./hero";

import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function Community() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="Community Division Applications" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}
