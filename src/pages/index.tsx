import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

const size = "16px";
const textSize = "12px";

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
							<Button>Request Now</Button>
						</Box>

						<Box textAlign="left" my={`${spacing}px`}>
							<Image h="300px" src="/undraw/education.svg" />
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

			<Container bg="brand.transparent" py="50px">
				<ContainerInside>
					<Flex justify="center" textAlign="left">
						<Flex
							w="100%"
							mx="25px"
							align="center"
							justify="flex-end"
						>
							<Image h="300px" src="/undraw/study.svg" />
						</Flex>

						<Box w="100%" mx="25px">
							<Box maxW="400px">
								<Box>
									<Heading size="md">
										Here's What You Get
									</Heading>
									<Text fontSize="14px">
										Lorem ipsum dolor sit amet consectetur
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Assumenda minima
										deleniti Lorem ipsum
									</Text>
								</Box>
								<Flex my="10px">
									<Box maxW="50%">
										<Heading size={size}>
											Free Tutoring
										</Heading>
										<Text fontSize={textSize}>
											Lorem ipsum dolor sit amet
											consectetur elit. Assumenda minima
											deleniti Lorem ipsum
										</Text>
									</Box>
									<Box maxW="50%">
										<Heading size={size}>
											Essay Revisions
										</Heading>
										<Text fontSize={textSize}>
											Lorem ipsum dolor sit amet
											consectetur elit. Assumenda minima
											deleniti Lorem ipsum
										</Text>
									</Box>
								</Flex>
								<Flex my="10px">
									<Box maxW="50%">
										<Heading size={size}>
											College Prep
										</Heading>
										<Text fontSize={textSize}>
											Lorem ipsum dolor sit amet
											consectetur elit. Assumenda minima
											deleniti Lorem ipsum
										</Text>
									</Box>
									<Box maxW="50%">
										<Heading size={size}>SAT Prep</Heading>
										<Text fontSize={textSize}>
											Lorem ipsum dolor sit amet
											consectetur elit. Assumenda minima
											deleniti Lorem ipsum
										</Text>
									</Box>
								</Flex>
							</Box>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
