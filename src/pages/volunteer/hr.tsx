import Hero from "@components/volunteering/hero";

import Container from "@components/container";
import ContainerInside from "@components/containerInside";
export default function HR() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="Human Resources Applications" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}
