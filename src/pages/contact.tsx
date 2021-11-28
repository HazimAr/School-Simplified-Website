import { Box, Flex, Heading, Image, Spacer} from "@chakra-ui/react";
import ContactForm from "@components/contact/contact-form";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Contact(): JSX.Element {
	return (
		<Container py={19}>
			<ContainerInside>
				<Box my="20px">
					<Heading as="h1" size="xl" mb={10}>
						Get in Touch
					</Heading>
					
				</Box>
				<Flex justify="center">
					<Flex
						flexDirection={{
							base: "column-reverse",
							xl: "row",
						}}
						justify="space-between"
						align="center"
						// px={{ sm: 10, md: 100, lg: 200 }}
						pb={10}
					>
						<Box w="100%" px={5}>
							<ContactForm />
						</Box>
						<Spacer />
						<Box px={5} w="100%" justifyContent="center">
							<Image
								src="/timmy/contact1.png"
								alt="Contact Person"
								h={{ base: "550px", "300px": "300px" }}
								minW="50%"
								maxH="550px"
								my={{ base: -5, sm: 5, lg: 0 }}
							/>
						</Box>
					</Flex>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
