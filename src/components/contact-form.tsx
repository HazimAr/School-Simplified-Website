import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

function StyledInput({
	placeholder,
	type,
}: {
	placeholder: string;
	type: string;
}): JSX.Element {
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
		/>
	);
}

function Button({ text }: { text: string }): JSX.Element {
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
			onClick={() => {}}
		>
			{text}
		</Box>
	);
}

export default function ContactForm(): JSX.Element {
	return (
		<FormControl
			id="first-name"
			isRequired
			backgroundColor="white"
			color="#171717"
			borderRadius="2.25rem"
			p={10}
		>
			<FormLabel>First Name</FormLabel>
			<StyledInput placeholder="First Name" type="" />
			<FormLabel>Last Name</FormLabel>
			<StyledInput placeholder="Last Name" type="" />
			<FormLabel>Email</FormLabel>
			<StyledInput placeholder="Email" type="email" />
			<FormLabel>Subject</FormLabel>
			<StyledInput placeholder="Subject" type="" />
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
			/>
			<Button text="Send" />
		</FormControl>
	);
}
