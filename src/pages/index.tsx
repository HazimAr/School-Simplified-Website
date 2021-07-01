import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Home(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside>
					<Flex
						justify="center"
						align="center"
						pt="50px"
						pb="50px"
						flexWrap="wrap"
					>
						<Box maxW="50ch" textAlign="left" my={`${spacing}px`}>
							<Heading>The key to your future</Heading>
							<Text my="10px">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Culpa, ducimus inventore?
								Maiores incidunt possimus corrupti provident
								modi consequuntur
							</Text>
							<Button>Learn More</Button>
						</Box>

						<Box textAlign="left" my={`${spacing}px`}>
							<Image h="250px" src="/education.svg" />
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
			{/* 
			<Wave
				fill="rgba(255,255,255,0.3)"
				options={{
					height: 10,
					amplitude: 10,
					speed: 0.15,
					points: 5,
				}}
			/> */}

			<Container bg="brand.transparent">
				<ContainerInside>
					<Box py="100px" />
				</ContainerInside>
			</Container>
		</>
	);
}
