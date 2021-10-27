import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Join(): JSX.Element {
	return (
		<>
			<Container bg="brand.transparent">
				<ContainerInside py={10}>
					<Image
						flex={{ base: 1, sm: 0 }}
						src="/timmy/30.png"
						h={{ base: 0, md: 175, lg: 350 }}
						float="left"
						display={["none", "block"]}
						mx={15}
						alt="Timmy with a lanyard"
					/>
					<Flex alignItems="center">
						<Box flex={1} textAlign="left">
							<Heading size="xl" my={3}>
								<b>Join Our Team</b>
							</Heading>
							<Text>
								<b>
									As the largest student run nonprofit in
									North America, School Simplified provides
									you with a variety of opportunities. Become
									a part of our team today and together we can
									build a better future!
								</b>
							</Text>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
