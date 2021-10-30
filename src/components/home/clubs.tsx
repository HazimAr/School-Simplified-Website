import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Clubs from "@components/activities/changing_slide";

export default function Here() {
	return (
		<Container pt="100px">
			<ContainerInside>
				<Clubs />
			</ContainerInside>
		</Container>
	);
}
