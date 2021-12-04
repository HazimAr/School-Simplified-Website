import { Image } from "@chakra-ui/image";
import { Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/layout";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";

export default function GettingStarted() {
	return (
		<Container
			bg="linear-gradient(180deg, rgba(90, 96, 173, 0.71) 0%, rgba(131, 145, 255, 0.71) 100%)"
			py="50px"
		>
			<ContainerInside>
				<HStack
					spacing={{ base: 8, lg: 16 }}
					mx={{ base: 8, sm: 24, md: 16, lg: 28 }}
				>
					<VStack spacing={4} align="stretch" textAlign="left">
						<Heading size="lg">Getting Started</Heading>
						<Text>
							School Simplified is a digital nonprofit
							organization run by high school volunteers dedicated
							to learning done equally, fairly and with meaning.
						</Text>
						<SimpleGrid
							columns={{ base: 1, md: 2 }}
							spacingX={8}
							spacingY={4}
						>
							<NextChakraLink href="/" display="block">
								<Button
									timmySrc="/timmy/1.png"
									w="100%"
									h="100%"
								>
									Programs
								</Button>
							</NextChakraLink>
							<NextChakraLink
								href="/organizations"
								display="block"
							>
								<Button
									timmySrc="/timmy/timmy_flying_icon.png"
									w="100%"
									h="100%"
								>
									Organizations
								</Button>
							</NextChakraLink>
							<NextChakraLink href="/" display="block">
								<Button
									timmySrc="/timmy/3.png"
									w="100%"
									h="100%"
								>
									Resources
								</Button>
							</NextChakraLink>
							<NextChakraLink href="/community" display="block">
								<Button
									timmySrc="/timmy/27.png"
									w="100%"
									h="100%"
								>
									Community
								</Button>
							</NextChakraLink>
						</SimpleGrid>
					</VStack>
					<Image
						src="/timmy/homepage_getting_started.png"
						alt="A Timmy with a graduation cap and book pointing towards the text on the left"
						h={{ base: 0, md: 175, lg: "initial" }}
					/>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
