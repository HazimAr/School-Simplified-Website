import {
	Box,
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	InputProps,
	Spacer,
	Stack,
	Textarea,
	useBoolean,
	useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useReducer } from "react";

function StyledInput({
	placeholder,
	type,
	id,
	...inputProps
}: InputProps): JSX.Element {
	return (
		<Input
			borderWidth={3}
			borderRadius="xl"
			borderColor="#5766D9"
			focusBorderColor="brand.purple.dark"
			placeholder={placeholder}
			_placeholder={{ color: "#3f404e" }}
			_hover={{ backgroundColor: "#5866D910" }}
			type={type}
			id={id}
			{...inputProps}
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
	// const [state, dispatch] = useReducer(reducer, defaultState);
	// const [disabled, setDisabled] = useBoolean();

	// const { firstName, lastName, email, subject, message } = state;
	function validateFirstName(firstName: string) {
		if (!firstName) return "First name is required";
	}
	function validateLastName(lastName: string) {
		if (!lastName) return "Last name is required";
	}
	function validateEmail(email: string) {
		if (!email) return "Email is required";
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
			return "Please input a valid email address";
	}
	function validateSubject(subject: string) {
		if (!subject) return "Subject is required";
	}
	function validateMessage(message: string) {
		if (!message) return "Message is required";
	}

	const toast = useToast();

	return (
		<Box
			backgroundColor="white"
			color="#171717"
			borderRadius="2.25rem"
			p={10}
			shadow="lg"
		>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					subject: "",
					message: "",
				}}
				onSubmit={(values, actions) => {
					// egg
					console.log(values);
					toast({
						title: "Message Sent",
						description: "Thank you for sending us a message",
						status: "success",
						duration: 9000,
						isClosable: true,
					});
					actions.resetForm();
					actions.setSubmitting(false);
				}}
			>
				{(props) => (
					<Form>
						<Stack>
							<Stack direction="row">
								<Field
									name="firstName"
									validate={validateFirstName}
								>
									{({ field, form }) => (
										<FormControl
											isInvalid={
												form.errors.firstName &&
												form.touched.firstName
											}
											isRequired
										>
											<FormLabel
												htmlFor="firstName"
												fontWeight="700"
												color="#5A60AD"
											>
												First name
											</FormLabel>
											<StyledInput
												{...field}
												id="firstName"
												placeholder="First name . . ."
											/>
											<FormErrorMessage>
												{form.errors.firstName}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
								<Spacer />
								<Field
									name="lastName"
									validate={validateLastName}
								>
									{({ field, form }) => (
										<FormControl
											isInvalid={
												form.errors.lastName &&
												form.touched.lastName
											}
											isRequired
										>
											<FormLabel
												htmlFor="lastName"
												fontWeight="700"
												color="#5A60AD"
											>
												Last name
											</FormLabel>
											<StyledInput
												{...field}
												id="lastName"
												placeholder="Last name . . ."
											/>
											<FormErrorMessage>
												{form.errors.lastName}
											</FormErrorMessage>
										</FormControl>
									)}
								</Field>
							</Stack>
							<Field name="email" validate={validateEmail}>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.email &&
											form.touched.email
										}
										isRequired
									>
										<FormLabel
											htmlFor="email"
											fontWeight="700"
											color="#5A60AD"
										>
											Email
										</FormLabel>
										<StyledInput
											{...field}
											id="email"
											placeholder="Email . . ."
											type="email"
										/>
										<FormErrorMessage>
											{form.errors.email}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name="subject" validate={validateSubject}>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.subject &&
											form.touched.subject
										}
										isRequired
									>
										<FormLabel
											fontWeight="700"
											color="#5A60AD"
											htmlFor="email"
										>
											Subject
										</FormLabel>
										<StyledInput
											{...field}
											id="subject"
											placeholder="Subject . . ."
											type="subject"
										/>
										<FormErrorMessage>
											{form.errors.subject}
										</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name="message" validate={validateMessage}>
								{({ field, form }) => (
									<FormControl
										isInvalid={
											form.errors.message &&
											form.touched.message
										}
										isRequired
									>
										<FormLabel
											fontWeight="700"
											color="#5A60AD"
											htmlFor="message"
										>
											Your Message
										</FormLabel>
										<Textarea
											{...field}
											borderWidth={3}
											borderRadius="xl"
											borderColor="#5766D9"
											focusBorderColor="#5a60ad"
											placeholder="Your message . . ."
											_placeholder={{ color: "#3f404e" }}
											_hover={{
												backgroundColor: "#5866D910",
											}}
											id="message"
										/>
									</FormControl>
								)}
							</Field>
							<Button
								color="#5A60AD"
								borderWidth={3}
								borderRadius="xl"
								borderColor="#5766D9"
								isLoading={props.isSubmitting}
								type="submit"
							>
								Send Message
							</Button>
						</Stack>
					</Form>
				)}
			</Formik>
		</Box>
	);
	// return (
	// 	<FormControl
	// 		id="first-name"
	// 		isRequired
	// 		backgroundColor="white"
	// 		justify="space-between"
	// 		color="#171717"
	// 		borderRadius="2.25rem"
	// 		p={10}
	// 		shadow="lg"
	// 	>
	// 		<Flex flexDirection="row" justify="space-between">
	// 			<Stack mr={2}>
	// 				<FormLabel fontWeight="700" color="#5A60AD" mb={-1}>
	// 					First Name
	// 				</FormLabel>
	// 				<StyledInput
	// 					placeholder="First name . . ."
	// 					type=""
	// 					value={firstName}
	// 					onChange={(text) => {
	// 						dispatch({
	// 							type: "firstName",
	// 							payload: text.target.value,
	// 						});
	// 					}}
	// 				/>
	// 			</Stack>
	// 			<Stack ml={2}>
	// 				<FormLabel fontWeight="700" color="#5A60AD" mb={-1}>
	// 					Last Name
	// 				</FormLabel>
	// 				<StyledInput
	// 					placeholder="Last name . . ."
	// 					type=""
	// 					value={lastName}
	// 					onChange={(text) => {
	// 						dispatch({
	// 							type: "lastName",
	// 							payload: text.target.value,
	// 						});
	// 					}}
	// 				/>
	// 			</Stack>
	// 		</Flex>
	// 		<FormLabel fontWeight="700" color="#5A60AD" mt={3} mb={1}>
	// 			Email
	// 		</FormLabel>
	// 		<StyledInput
	// 			placeholder="Email . . ."
	// 			type="email"
	// 			value={email}
	// 			onChange={(text) => {
	// 				dispatch({ type: "email", payload: text.target.value });
	// 			}}
	// 		/>
	// 		<FormLabel fontWeight="700" color="#5A60AD" mb={1}>
	// 			Subject
	// 		</FormLabel>
	// 		<StyledInput
	// 			placeholder="Subject . . ."
	// 			type=""
	// 			value={subject}
	// 			onChange={(text) => {
	// 				dispatch({ type: "subject", payload: text.target.value });
	// 			}}
	// 		/>
	// 		<FormLabel fontWeight="700" color="#5A60AD" mb={1}>
	// 			Your Message
	// 		</FormLabel>
	// 		<Textarea
	// 			borderWidth={3}
	// 			borderRadius="xl"
	// 			borderColor="#5766D9"
	// 			focusBorderColor="#5a60ad"
	// 			placeholder="Your message . . ."
	// 			_placeholder={{ color: "#3f404e" }}
	// 			_hover={{ backgroundColor: "transparent" }}
	// 			mb={4}
	// 			value={message}
	// 			onChange={(text) => {
	// 				dispatch({ type: "message", payload: text.target.value });
	// 			}}
	// 		/>
	// <Button
	// 	onClick={() => {
	// 		setDisabled.on();
	// 		setTimeout(() => {
	// 			console.log(state);
	// 			toast({
	// 				title: "Message Sent",
	// 				description: "Thank you for sending us a message",
	// 				status: "success",
	// 				duration: 9000,
	// 				isClosable: true,
	// 			});
	// 			dispatch({ type: "clear", payload: "" });
	// 			setDisabled.off();
	// 		}, Math.random() * 1000 + 500);
	// 	}}
	// 	color="#5A60AD"
	// 	borderWidth={3}
	// 	borderRadius="xl"
	// 	borderColor="#5766D9"
	// 	px={{ sm: 3, md: 3, lg: 3 }}
	// 	disabled={disabled}
	// >
	// 	Send Message
	// </Button>
	// 	</FormControl>
	// );
}
