import {
	Container,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Flex
	// FormControl,
	// FormLabel,
	// FormErrorMessage,
	// FormHelperText,
} from "@chakra-ui/react";

// <FormControl id="email">
//   <FormLabel>Email address</FormLabel>
//   <Input type="email" />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>

// export default function Form() {
// 	<FormControl id="name">
// 		<FormLabel>Name</FormLabel>
// 		<Input type="name" />
// 		<FormHelperText>Name</FormHelperText>
// 	</FormControl>
// 	<FormControl id="email">
// 		<FormLabel>Email</FormLabel>
// 		<Input type="email" />
// 		<FormHelperText>Email</FormHelperText>
// 	</FormControl>
// 	<FormControl id="subject">
// 		<FormLabel>Subject</FormLabel>
// 		<Input type="subject" />
// 		<FormHelperText>Subject</FormHelperText>
// 	</FormControl>
// 	<FormControl id="message">
// 		<FormLabel>Message</FormLabel>
// 		<Input type="message" />
// 		<FormHelperText>Message</FormHelperText>
// 	</FormControl>
// }

export default function Contact(): JSX.Element {
	return (
		<Container>
			<Accordion allowMultiple>
				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Flex textAlign="left">Who are you?</Flex>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Flex textAlign="left">
								Who started School Simplified
							</Flex>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Flex textAlign="left">
								Is School Simplified free to use?
							</Flex>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Flex textAlign="left">
								How can I get community service hours?
							</Flex>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Flex textAlign="left">
								How reliable is School Simplified?
							</Flex>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Container>
	);
}
