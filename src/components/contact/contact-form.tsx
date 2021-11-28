import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Textarea,
	useBoolean,
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
			borderWidth={3}
			borderRadius="xl"
			borderColor="#5766D9"
			focusBorderColor="brand.purple.dark"
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

const defaultState: stateType = {
	firstName: "",
	lastName: "",
	email: "",
	subject: "",
	message: "",
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
		case "clear":
			return defaultState;
		default:
			return state;
	}
}

// eslint-disable-next-line import/no-default-export
export default function ContactForm(): JSX.Element {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const [disabled, setDisabled] = useBoolean();

	const { firstName, lastName, email, subject, message } = state;
	const toast = useToast();
	return (
		<FormControl
			id="first-name"
			isRequired
			backgroundColor="white"
			justify="space-between"
			color="#171717"
			borderRadius="2.25rem"
			p={10}
			shadow="lg"
		>
			<Flex flexDirection="row" justify="space-between">
				<Stack mr={2}>
					<FormLabel fontWeight="700" color="#5A60AD" mb={-1}>
						First Name
					</FormLabel>
					<StyledInput
						placeholder="First name . . ."
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
					<FormLabel fontWeight="700" color="#5A60AD" mb={-1}>
						Last Name
					</FormLabel>
					<StyledInput
						placeholder="Last name . . ."
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
			<FormLabel fontWeight="700" color="#5A60AD" mt={3} mb={1}>
				Email
			</FormLabel>
			<StyledInput
				placeholder="Email . . ."
				type="email"
				value={email}
				onChange={(text) => {
					dispatch({ type: "email", payload: text.target.value });
				}}
			/>
			<FormLabel fontWeight="700" color="#5A60AD" mb={1}>
				Subject
			</FormLabel>
			<StyledInput
				placeholder="Subject . . ."
				type=""
				value={subject}
				onChange={(text) => {
					dispatch({ type: "subject", payload: text.target.value });
				}}
			/>
			<FormLabel fontWeight="700" color="#5A60AD" mb={1}>
				Your Message
			</FormLabel>
			<Textarea
				borderWidth={3}
				borderRadius="xl"
				borderColor="#5766D9"
				focusBorderColor="#5a60ad"
				placeholder="Your message . . ."
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
					setDisabled.on();
					setTimeout(() => {
						console.log(state);
						toast({
							title: "Message Sent",
							description: "Thank you for sending us a message",
							status: "success",
							duration: 9000,
							isClosable: true,
						});
						dispatch({ type: "clear", payload: "" });
						setDisabled.off();
					}, Math.random() * 1000 + 500);
				}}
				color="#5A60AD"
				borderWidth={3}
				borderRadius="xl"
				borderColor="#5766D9"
				px={{ sm: 3, md: 3, lg: 3 }}
				disabled={disabled}
			>
				Send Message
			</Button>
		</FormControl>
	);
}
