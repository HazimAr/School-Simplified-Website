import Hero from "./hero";

import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function Acad() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="Academics Department Applications" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}
