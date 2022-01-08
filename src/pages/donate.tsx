import { Heading, Stack, VStack, Text, Box, Image } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Donate() {
	const reasons = [
		{
			title: "Education",
			desc: "Supporting your child's or your education by improving the quality of our services!",
		},
		{
			title: "Opportunity",
			desc: "Creating opportunities and fascilitating information access for students!",
		},
		{
			title: "Innovation",
			desc: "Initiating new programs to support students in their pursuit of learning!",
		},
	];

	return (
		<Container my={24} mx={6}>
			<ContainerInside>
				<Stack
					direction={{ base: "column-reverse", lg: "row" }}
					align="center"
					spacing={{ base: 50, md: 10 }}
				>
					<Box display={{ base: "inline-block", lg: "none" }}>
						<iframe
							src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
							frameBorder="0"
							width="350px"
							height="600px"
							scrolling="no"
						/>
					</Box>
					<Box
						rounded={15}
						bg="brand.purple.dark"
						height="600px"
						width="900px"
						display={{ base: "none", lg: "block" }}
					>
						<Image
							position="relative"
							left="30%"
							top="-11%"
							src="timmy/timmy_donation_money.png"
						/>
						<iframe
							src="https://master.d3o53wn77q6k5v.amplifyapp.com/"
							frameBorder="0"
							width="100%"
							height="100%"
							style={{ position: "relative", top: "-17%" }}
						/>
					</Box>
					<VStack align="start" width="100%">
						<Heading textAlign="left" py="10px">
							Support School Simplified
						</Heading>
						<Text fontSize="18px" textAlign="left">
							Since we do not charge anything for our services,
							your support allows us to continue fighting for your
							needs and helping students from around the world.
						</Text>
						<Text fontSize="18px" textAlign="left">
							Our team thanks you, for your generosity!
						</Text>
						<Heading pt={15} textAlign="left" fontSize="18px">
							Here is what your money will go towards:
						</Heading>
						<Stack
							direction={{ base: "column", md: "row" }}
							w="100%"
						>
							{reasons.map((reason) => {
								return (
									<Box
										bg="brand.purple.dark"
										p={15}
										rounded={10}
										key={reason.title}
										w="100%"
										// h="100%"
										align="start"
									>
										<Text
											color="brand.yellow"
											fontSize="16px"
										>
											{reason.title}
										</Text>
										<Text mt={2} fontSize="14px">
											{reason.desc}
										</Text>
									</Box>
								);
							})}
						</Stack>
					</VStack>
					<Image
						display={{ base: "none", md: "block" }}
						position="absolute"
						right="20vw"
						top="10vh"
						zIndex={-1}
						src="timmy/timmy_rich_2.png"
						w="300px"
					/>
				</Stack>
			</ContainerInside>
		</Container>
	);
}
