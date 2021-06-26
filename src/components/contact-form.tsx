import {
  Form,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Divider
} from "@chakra-ui/react"

function StyledInput({ placeholder, type }: { placeholder: string, type: string }): JSX.Element {
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
    />
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
      <StyledInput placeholder="First Name" type=""/>
      <FormLabel>Last Name</FormLabel>
      <StyledInput placeholder="Last Name" type=""/>
      <FormLabel>Email</FormLabel>
      <StyledInput placeholder="Email" type="email"/>
      <FormLabel>Your Message</FormLabel>
      <StyledInput placeholder="Your Message" type=""/>
    </FormControl>
  )
}