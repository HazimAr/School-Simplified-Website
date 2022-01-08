import {
	Button,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

export default function PopUp() {
	const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Maintenance Mode</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Our website will continue changing throughout the
							weekend, if you would like to report any issues from
							typos to dysfunctionality, let us know at
							support@schoolsimplified.org.
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
