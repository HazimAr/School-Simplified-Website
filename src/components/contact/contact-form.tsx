import {
	Box,
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	InputProps,
	Spacer,
	Stack,
	Textarea,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Field, Form, Formik } from "formik";

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
			mt={-2}
			{...inputProps}
		/>
	);
}

// eslint-disable-next-line import/no-default-export
export default function ContactForm(): JSX.Element {
	// const [state, dispatch] = useReducer(reducer, defaultState);
	// const [disabled, setDisabled] = useBoolean();

	// const { firstName, lastName, email, subject, message } = state;
	function validateFirstName(firstName: string) {
		if (!firstName.trim()) return "First name is required";
	}
	function validateLastName(lastName: string) {
		if (!lastName.trim()) return "Last name is required";
	}
	function validateEmail(email: string) {
		if (!email.trim()) return "Email is required";
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
			return "Please input a valid email address";
	}
	function validateSubject(subject: string) {
		if (!subject.trim()) return "Subject is required";
	}
	function validateMessage(message: string) {
		if (!message.trim()) return "Message is required";
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
					axios
						.post("/message", values)
						.then((success) => {
							console.log(success);
							toast({
								title: "Message Sent",
								description:
									"Thank you for sending us a message",
								status: "success",
								duration: 9000,
								isClosable: true,
							});
						})
						.catch(console.warn)
						.then(() => {
							actions.resetForm();
							actions.setSubmitting(false);
						});
				}}
			>
				{(props) => {
					let error = null;
					for (const a in props.errors) {
						if (props.touched[a]) error = props.errors[a];
					}

					return (
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
										</FormControl>
									)}
								</Field>
								<Field
									name="subject"
									validate={validateSubject}
								>
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
										</FormControl>
									)}
								</Field>
								<Field
									name="message"
									validate={validateMessage}
								>
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
												_placeholder={{
													color: "#3f404e",
												}}
												_hover={{
													backgroundColor:
														"#5866D910",
												}}
												id="message"
												mt={-2}
											/>
										</FormControl>
									)}
								</Field>
								<FormControl isInvalid={error}>
									<Center>
										{error ? (
											<FormErrorMessage>
												{error}
											</FormErrorMessage>
										) : (
											<FormHelperText color="gray.500">
												Thank you for reaching out to
												us!
											</FormHelperText>
										)}
									</Center>
								</FormControl>
								{/* <Text>{JSON.stringify(props)}</Text> */}
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
					);
				}}
			</Formik>
		</Box>
	);
}
