import {
	Container,
	Accordion,
	Heading,
	// Input, Stack, Icon, InputGroup, InputLeftElement, Button, FormControl
	// FormControl,
	// FormLabel,
	// FormErrorMessage,
	// FormHelperText,
} from "@chakra-ui/react";

import FaqList from "@components/faq-list";

// const form = () => {
// 	return ( 
// 		<form action='submit'>
// 			<Stack spacing={3} >
// 				<FormControl isRequired>
// 					<InputGroup>
// 						<InputLeftElement children={<Icon name='info' />} />
// 						<Input type='name' placeholder='Name' aria-label='Name' />
// 					</InputGroup>
// 				</FormControl>
// 				<FormControl isRequired>
// 					<InputGroup>
// 						<InputLeftElement children={<Icon name='email' />} />
// 						<Input type='email' placeholder='Email' aria-label='Email' />
// 					</InputGroup>
// 				</FormControl>
// 				<FormControl isRequired>
// 					<InputGroup>
// 						<InputLeftElement children={<Icon name='info' />} />
// 						<Input type='name' placeholder='Subject' aria-label='Subject' />
// 					</InputGroup>
// 				</FormControl>
// 				<FormControl isRequired>
// 					<InputGroup>
// 						<InputLeftElement children={<Icon name='info' />} />
// 						<Input type='name' placeholder='Your Message' aria-label='Your Message' />
// 					</InputGroup>
// 				</FormControl>
// 				<Button type='submit' boxShadow='sm' _hover={{boxShadow: 'md' }} _active={{boxShadow: 'lg' }} >Send</Button>
// 				<FormHelperText textAlign='center'>
// 					By clicking 'Send' I agree to the Privacy Policy
// 				</FormHelperText>
// 			</Stack>
// 		</form>
// 	);	
// }

// <FormControl id="email">
//   <FormLabel>Email address</FormLabel>
//   <Input type="email" />
//   <FormHelperText>We'll never share your email.</FormHelperText>
// </FormControl>

export default function Contact(): JSX.Element {
	
	const qaPairs = [
		{
			"question": "Who are you?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "Who started School Simplified?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "Is School Simplified free to use?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "How can I get community service hours?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			"question": "How reliable is School Simplified?",
			"answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
	]

	return (
		<Container>
			<Heading as="h1" size="xl" mb={3}>FAQ</Heading>
			<FaqList list={qaPairs} />
		</Container>
	);
}
