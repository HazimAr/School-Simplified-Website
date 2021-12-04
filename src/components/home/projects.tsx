import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Projects(): JSX.Element {
	return (
		<Container
			py={16}
			bg="linear-gradient(180deg, rgba(99, 106, 204, 0.9) 0%, rgba(126, 134, 230, 0.747) 100%, rgba(122, 131, 247, 0.9) 100%)"
		>
			<ContainerInside textAlign="left">
				<VStack spacing={3} align="stretch">
					<Heading size="lg">Start Your Project Today</Heading>
					<Text fontSize={20}>
						Take the chance to showcase your capability, creativity,
						and ideas while receiving community service hours and
						possibly becoming a project manager!
					</Text>
					<Stack direction={{ base: "column", md: "row" }}>
						<Image
							src="/timmy/flying_timmy.png"
							alt="Timmy with a propeller hat and swirl blush"
							alignSelf="center"
							maxW={{ base: 200, md: "40%" }}
						/>
						<Flex
							flexDir="column"
							align="stretch"
							justify="space-evenly"
							alignSelf="stretch"
						>
							<Box>
								<Heading fontSize={25} mb={1}>
									What is a project?
								</Heading>
								<Text>
									A project is a temporary endeavor that
									creates a unique product or service
									consistent with our mission of inspiring
									learning while fostering an environment
									attuned to adapting and improving through
									customer input.
								</Text>
							</Box>
							<Box mt={5}>
								<Heading fontSize={25} mb={1}>
									Do I lead my own project?
								</Heading>
								<Text>
									That is up to you! Once your proposal is
									approved, you can choose to be the project
									manager or recommend a friend to take over
									while you are in the team helping with the
									project.
								</Text>
							</Box>
						</Flex>
					</Stack>
				</VStack>
			</ContainerInside>
		</Container>
	);
}
