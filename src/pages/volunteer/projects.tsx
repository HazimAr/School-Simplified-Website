import Hero from "./hero";

import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function Projects() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="Projects Division Applications" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}