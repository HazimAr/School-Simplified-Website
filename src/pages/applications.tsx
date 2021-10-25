import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Button from "@components/button";

export default function Applications() {
	return (
		<Container>
			<ContainerInside>
				<Button>Example Button</Button>
			</ContainerInside>
		</Container>
	);
}
