import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import Button from "@components/button";
import { useReducer } from "react";

type StyledInputProps = {
	placeholder: string;
	type: string;
	value: string;
	onChange: (text: React.ChangeEvent<HTMLInputElement>) => void;
};

function StyledInput({
	placeholder,
	type,
	value,
	onChange,
}: StyledInputProps): JSX.Element {
	return (
		<Input
			borderWidth="xl"
			borderRadius="xl"
			borderColor="brand.purple.light"
			focusBorderColor="brand.purple.light"
			placeholder={placeholder}
			_placeholder={{ color: "#3f404e" }}
			_hover={{ backgroundColor: "transparent" }}
			type={type}
			mb={4}
			value={value}
			onChange={(text) => {
				onChange(text);
			}}
		/>
	);
}

type stateType = {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
};

type actionType = {
	type: string;
	payload: string;
};

function reducer(state: stateType, action: actionType): stateType {
	switch (action.type) {
		case "firstName":
			return { ...state, firstName: action.payload };
		case "lastName":
			return { ...state, lastName: action.payload };
		case "email":
			return { ...state, email: action.payload };
		case "subject":
			return { ...state, subject: action.payload };
		case "message":
			return { ...state, message: action.payload };
		default:
			return state;
	}
}

// eslint-disable-next-line import/no-default-export
export default function ContactForm(): JSX.Element {
	const [state, dispatch] = useReducer(reducer, {
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
	});

	const { firstName, lastName, email, subject, message } = state;
	const toast = useToast();
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
				<Stack mr={2}>
					<FormLabel>First Name</FormLabel>
					<StyledInput
						placeholder="First Name"
						type=""
						value={firstName}
						onChange={(text) => {
							dispatch({
								type: "firstName",
								payload: text.target.value,
							});
						}}
					/>
				</Stack>
				<Stack ml={2}>
					<FormLabel>Last Name</FormLabel>
					<StyledInput
						placeholder="Last Name"
						type=""
						value={lastName}
						onChange={(text) => {
							dispatch({
								type: "lastName",
								payload: text.target.value,
							});
						}}
					/>
				</Stack>
			</Flex>
			<FormLabel mt={3}>Email</FormLabel>
			<StyledInput
				placeholder="Email"
				type="email"
				value={email}
				onChange={(text) => {
					dispatch({ type: "email", payload: text.target.value });
				}}
			/>
			<FormLabel>Subject</FormLabel>
			<StyledInput
				placeholder="Subject"
				type=""
				value={subject}
				onChange={(text) => {
					dispatch({ type: "subject", payload: text.target.value });
				}}
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
				onChange={(text) => {
					dispatch({ type: "message", payload: text.target.value });
				}}
			/>
			<Button
				onClick={() => {
					console.log(state);
					toast({
						title: "Message Sent",
						description: "Thank you for sending us a message",
						status: "success",
						duration: 9000,
						isClosable: true,
					});
				}}
				color="white"
			>
				Send
			</Button>
		</FormControl>
	);
}
