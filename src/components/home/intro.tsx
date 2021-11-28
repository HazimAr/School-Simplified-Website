import { Stack, Heading, Text, VStack, Center } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";

export default function Intro() {
	return (
		<ContainerBackground
			background="rgba(90, 96, 173, 0.71)"
			src="/timmy/lofi_timmy.png"
			py="50px"
		>
			<ContainerInside>
				<Center>
					<VStack spacing={5} maxW="60ch">
						<Heading fontWeight="extrabold" size="3xl">
							School Simplified:
						</Heading>
						<Heading fontWeight="bold" size="2xl">
							We Inspire Learning
						</Heading>
						<Text my="10px">
							Through learning, we empower the next generation to
							revolutionize the future. School Simplified is a
							nonprofit organization dedicated to learning done
							equally, fairly and with meaning.
						</Text>
					</VStack>
				</Center>
				<Stack
					spacing={5}
					justify={{ base: "center", md: "space-around" }}
					flexWrap="wrap"
					direction={{ base: "column", sm: "row" }}
					fontSize={{ base: "lg", md: "xl" }}
					mt={16}
				>
					<VStack>
						<Heading>
							<CountUp
								end={500}
								suffix="M+"
								useEasing
								duration={3}
							/>
						</Heading>
						<Text pb={{ base: 0, sm: 5 }}>Impressions</Text>
					</VStack>
					<VStack>
						<Heading>
							<CountUp
								end={62}
								suffix="K+"
								duration={3}
								useEasing
							/>
						</Heading>
						<Text>Community Members</Text>
					</VStack>
					<VStack>
						<Heading>
							<CountUp end={1} duration={3} useEasing />
						</Heading>
						<Text>Mission</Text>
					</VStack>
					<VStack>
						<Heading>
							<CountUp
								end={500}
								suffix="+"
								duration={3}
								useEasing
							/>
						</Heading>
						<Text>Staff Members</Text>
					</VStack>
					<VStack>
						<Heading>
							<CountUp end={147} duration={3} useEasing />
						</Heading>
						<Text>Countries</Text>
					</VStack>
				</Stack>
			</ContainerInside>
		</ContainerBackground>
	);
}
