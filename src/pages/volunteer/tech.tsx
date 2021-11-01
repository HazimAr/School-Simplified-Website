import Hero from "@components/volunteering/hero";

import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function Tech() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="Information-Technology Department Applications" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}
