import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import ContactForm from "@components/contact/contact-form";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Contact(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Box py={10} align="center">
					<Heading as="h1" size="xl" mb={3}>
						Get in Touch
					</Heading>
					<Heading as="h2" size="md">
						Have Questions? Comments? Concerns?
					</Heading>
				</Box>
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
					<Box>
						<ContactForm />
					</Box>
					<Image
						src="/undraw/contact.svg"
						alt="Contact Person"
						h="350px"
						mb={{ base: 5, sm: 5, lg: 0 }}
					/>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
