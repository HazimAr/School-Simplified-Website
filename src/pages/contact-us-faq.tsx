import {
	Container,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box
} from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
  } from "@chakra-ui/react"

export default function Contact(): JSX.Element {
	return (
		<Container>
			<Accordion allowMultiple>
				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Who are you?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Who started School Simplified
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								Is School Simplified free to use?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								How can I get community service hours?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem borderRadius="md">
					<h2>
						<AccordionButton>
							<Box flex="1" textAlign="left">
								How reliable is School Simplified?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</AccordionPanel>
				</AccordionItem>

			</Accordion>
		</Container>
	);
}
