import { Heading } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function CourseList(): JSX.Element {
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading>Courses</Heading>
			</ContainerInside>
		</Container>
	);
}
