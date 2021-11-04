import { Flex, Heading, Text, VStack, Center } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";

export default function Intro() {
	return (
		<ContainerBackground src="/timmy/lofi_timmy.png" py="50px">
			<ContainerInside>
				<Center>
					<VStack spacing={10} maxW="60ch">
						<Heading fontWeight="extrabold" size="3xl">
							School Simplified:
							<br /> We Inspire Learning
						</Heading>
						<Text my="10px">
							Through learning, we empower the next generation to
							revolutionize the future. School Simplified is a
							nonprofit organization dedicated to learning done
							equally, fairly and with meaning.
						</Text>
					</VStack>
				</Center>
				<Flex
					spacing={{ base: 0, md: 5 }}
					justify={{ base: "center", md: "space-around" }}
					flexWrap="wrap"
					flexDir={{ base: "column", sm: "row" }}
					textAlign="center"
					// display="none"
					fontSize={{ base: "lg", md: "xl" }}
					mt="50px"
				>
					<VStack>
						<Heading>
							{/* <CountUp
								end={500}
								suffix="M+"
								duration={3}
								useEasing
							/> */}
							500M+
						</Heading>
						<Text>Impression</Text>
					</VStack>
					<VStack>
						<Heading>
							{/* <CountUp
								end={60}
								suffix="K+"
								duration={3}
								useEasing
							/> */}
							60K+
						</Heading>
						<Text>Community Members</Text>
					</VStack>
					<VStack>
						<Heading>
							{/* <CountUp end={1} duration={3} useEasing /> */}
							1
						</Heading>
						<Text>Mission</Text>
					</VStack>
					<VStack>
						<Heading>
							{/* <CountUp
								end={400}
								suffix="+"
								duration={3}
								useEasing
							/> */}
							400+
						</Heading>
						<Text>Staff Members</Text>
					</VStack>
					<VStack>
						<Heading>
							{/* <CountUp
								end={147}
								suffix=""
								duration={3}
								useEasing
							/> */}
							147
						</Heading>
						<Text>Countries</Text>
					</VStack>
				</Flex>
			</ContainerInside>
		</ContainerBackground>
	);
}
