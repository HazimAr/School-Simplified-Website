import { Flex, Heading } from "@chakra-ui/react";
import ActivitiesRotatingPanel from "@components/activities/rotatingPanel";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { motion } from "framer-motion";

export default function Here() {
	const fadeUpVariants = {
		initial: {
			opacity: 0,
			y: 50,
		},
		onView: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				delay: 0.3,
			},
		},
	};
	return (
		<Container bg="linear-gradient(180deg, rgba(123, 139, 255, 0.6) 0%, rgba(197, 203, 255, 0.6) 100%)">
			<ContainerInside textAlign="left">
				<motion.div
					initial="initial"
					whileInView="onView"
					variants={fadeUpVariants}
				>
					<Flex flexDir="column" py={12}>
						<Heading size="lg">Join Our Clubs</Heading>
						<Heading size="md" fontWeight="normal" mb={7}>
							<NextChakraLink href="/activities">
								Student Activites Program
							</NextChakraLink>
						</Heading>
						<ActivitiesRotatingPanel />
					</Flex>
				</motion.div>
			</ContainerInside>
		</Container>
	);
}
