import { Flex, Heading } from "@chakra-ui/react";
import ActivitiesRotatingPanel from "@components/activities/rotatingPanel";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Here() {
	return (
		<Container bg="linear-gradient(180deg, rgba(123, 139, 255, 0.6) 0%, rgba(197, 203, 255, 0.6) 100%)">
			<ContainerInside textAlign="left">
				<Flex flexDir="column" py={12}>
					<Heading size="lg">Join Our Clubs</Heading>
					<Heading size="md" fontWeight="normal" mb={7}>
						Student Activites Program
					</Heading>
					<ActivitiesRotatingPanel />
				</Flex>
			</ContainerInside>
		</Container>
	);
}
