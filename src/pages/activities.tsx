import ContainerBackground from "@components/containerBackground";
import { VStack, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Activities() {
	return (
		<>
			<ContainerBackground src="/timmy/watermelon.png" py="100px">
				<VStack>
					<Heading>Clubs</Heading>
					<Button>Club President</Button>
				</VStack>
			</ContainerBackground>
			<Container bg="#5A60AD">
				<ContainerInside>
					<HStack>
						<VStack w="100%">
							<Heading>Student Activities</Heading>
							<Text>
								Student Activities is a division of School
								Simplified that focuses on clubs and also all
								student opportunities outside of school. Our
								goal is to advance learning outside of school!
							</Text>
						</VStack>
						<Image src="/timmy/16.png" w="600px" />
					</HStack>
				</ContainerInside>
			</Container>
		</>
	);
}
