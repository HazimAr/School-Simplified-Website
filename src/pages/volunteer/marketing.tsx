import Hero from "@components/volunteering/hero";

import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function Marketing() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="Marketing Applications" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}
