import { Heading, VStack } from "@chakra-ui/layout";
import Button from "@components/button";
import ContainerBackground from "@components/containerBackground";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Npo() {
	return (
		<>
			<ContainerBackground src="/timmy/sunburn.png" py="100px">
				<ContainerInside>
					<VStack>
						<Heading>
							Accelerate Your <br /> Organization
						</Heading>
						<Button>Start Here</Button>
					</VStack>
				</ContainerInside>
			</ContainerBackground>
			<Container>
				<ContainerInside>
					<Heading>Becoming a NonProfit Organization</Heading>
				</ContainerInside>
			</Container>
		</>
	);
}
