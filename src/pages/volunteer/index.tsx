import {
	Heading,
	Text,
	VStack,
	Center,
	Stack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import RotatingPanel from "@components/volunteering/rotating_panel";
import { useEffect } from "react";

/**
 * The Volunteering page!
 *
 * Mention that people can give people community service hours (!)
 * Needs information about the different positions (e.g. tutoring, technical, marketing, HR, etc.) (images from Mossa, alsdkfjadlskfj, aisdfhalj) [in one box, same layout for each]
 * Needs a clear button that lets users sign up, which takes them to the Discord to reinforce call to action
 * Needs a couple Undraw images
 * @returns the Volunteering page
 */
export default function Volunteering() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	useEffect(() => {
		onOpen();
	}, []);

	return (
		<>
			<Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Temporarily Closed</ModalHeader>
					<ModalCloseButton onClick={onClose} />
					<ModalBody>
						<Text fontWeight="bold" mb="1rem">
							Hi there! Applications are closed due to routine
							maintenance. You can still explore our teams, but
							please come back on December 7th to apply!
						</Text>
					</ModalBody>
				</ModalContent>
			</Modal>
			<ContainerBackground src="/timmy/raining_timmy.png" py={100}>
				<Center>
					<ContainerInside
						py={10}
						pr={{ base: 2, sm: 2 }}
						justifyContent="center"
					>
						<Stack
							textAlign="left"
							direction={{ base: "column", md: "row-reverse" }}
							width={{ xl: "700px", lg: "300px", sm: "100x" }}
							spacing={{ base: 5, md: 10 }}
							justifyContent={{ base: "left", md: "center" }}
						>
							<VStack flex={5} align="flex-start">
								<Heading
									size="xl"
									width={{
										xl: "300px",
										lg: "600px",
										sm: "600x",
									}}
								>
									Join Our Team
								</Heading>

								<Text fontSize="lg" textAlign="justify">
									<b>
										As the largest teen led nonprofit in
										North America, School Simplified
										provides you with a variety of
										opportunities. Become a part of our team
										today and together we can build a better
										future!
									</b>
								</Text>
							</VStack>
						</Stack>
					</ContainerInside>
				</Center>
			</ContainerBackground>
			<RotatingPanel />
		</>
	);
}
