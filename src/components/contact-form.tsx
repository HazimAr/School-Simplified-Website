import { useState } from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

type StyledInputProps = {
	placeholder: string,
	type: string,
	value: string
	onChange: (text: React.ChangeEvent<HTMLInputElement>) => void
}

function StyledInput({ placeholder, type, value, onChange }: StyledInputProps): JSX.Element {
	return (
		<Input
			borderWidth="xl"
			borderRadius="xl"
			borderColor="#5a60ad"
			focusBorderColor="#5a60ad"
			placeholder={placeholder}
			_placeholder={{ color: "#3f404e" }}
			_hover={{ backgroundColor: "transparent" }}
			type={type}
			mb={4}
			value={value}
			onChange={(text) => onChange(text)}
		/>
	);
}

type ButtonProps = {
	children: any,
	onClick: () => void
}

function Button({ children, onClick }: ButtonProps): JSX.Element {
	return (
		<Box
			as="button"
			height="3rem"
			width="6rem"
			lineHeight="1.2"
			borderRadius="2xl"
			fontWeight="semibold"
			backgroundColor="#5a60ad"
			color="white"
			_hover={{ bg: "#ebedf0", boxShadow: "none" }}
			_active={{
				bg: "#dddfe2",
				transform: "scale(0.98)",
				backgroundColor: "#5a60ad",
        boxShadow: "none"
			}}
			_focus={{
				boxShadow: "none",
				backgroundColor: "#5a60ad",
			}}
			onClick={onClick}
		>
			{children}
		</Box>
	);
}

export default function ContactForm(): JSX.Element {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	return (
		<FormControl
			id="first-name"
			isRequired
			backgroundColor="white"
			color="#171717"
			borderRadius="2.25rem"
			p={10}
		>
			<Flex flexDirection="row" justify="space-between">
				<Flex flexDirection="column" >
					<FormLabel>First Name</FormLabel>
					<StyledInput 
						placeholder="First Name" 
						type="" 
						value={firstName}
						onChange={(text) => setFirstName(text.target.value)}
					/>
				</Flex>
				<Flex flexDirection="column" >
					<FormLabel>Last Name</FormLabel>
					<StyledInput 
						placeholder="Last Name" 
						type="" 
						value={lastName}
						onChange={(text) => setLastName(text.target.value)}
					/>
				</Flex>
			</Flex>
			<FormLabel>Email</FormLabel>
			<StyledInput 
				placeholder="Email" 
				type="email"
				value={email}
				onChange={(text) => setEmail(text.target.value)} 
			/>
			<FormLabel>Subject</FormLabel>
			<StyledInput 
				placeholder="Subject" 
				type="" 
				value={subject}
				onChange={(text) => setSubject(text.target.value)}
			/>
			<FormLabel>Your Message</FormLabel>
			<Textarea
				borderWidth="xl"
				borderRadius="xl"
				borderColor="#5a60ad"
				focusBorderColor="#5a60ad"
				placeholder="Your Message"
				_placeholder={{ color: "#3f404e" }}
				_hover={{ backgroundColor: "transparent" }}
				mb={4}
				value={message}
				onChange={(text) => setMessage(text.target.value)}
			/>
			<Button 
			onClick={() => console.log(
				firstName,
				lastName,
				email,
				subject,
				message
			)}
			>
				Send
			</Button>
		</FormControl>
	);
}
