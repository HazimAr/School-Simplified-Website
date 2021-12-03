import { Stack, Heading, Text, VStack, Center, Spacer } from "@chakra-ui/react";
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
					<VStack spacing={2} align="stretch" textAlign="left">
						<Heading fontWeight="bold" fontSize={55}>
							School Simplified:
						</Heading>
						<Heading fontWeight="bold" size="lg" fontStyle="italic">
							We Inspire Learning
						</Heading>
						<Spacer minH={65} />
						<Text fontSize={22}>
							Through learning, we empower the next generation to
							revolutionize the future.
						</Text>
					</VStack>
				</Center>
				<Stack
					spacing={5}
					justify={{ base: "center", md: "space-around" }}
					flexWrap="wrap"
					direction={{ base: "column", sm: "row" }}
					fontSize={{ base: "lg", md: "xl" }}
					mt={10}
				>
					<VStack>
						<Heading fontSize={25}>
							<CountUp
								end={500}
								suffix="M+"
								useEasing
								duration={3}
							/>
						</Heading>
						<Text pb={{ base: 0, sm: 5, md: 0 }} fontSize={16}>
							Impressions
						</Text>
					</VStack>
					<VStack>
						<Heading fontSize={25}>
							<CountUp
								end={62}
								suffix="K+"
								duration={3}
								useEasing
							/>
						</Heading>
						<Text fontSize={16}>Community Members</Text>
					</VStack>
					<VStack>
						<Heading fontSize={25}>
							<CountUp end={1} duration={3} useEasing />
						</Heading>
						<Text fontSize={16}>Mission</Text>
					</VStack>
					<VStack>
						<Heading fontSize={25}>
							<CountUp
								end={500}
								suffix="+"
								duration={3}
								useEasing
							/>
						</Heading>
						<Text fontSize={16}>Staff Members</Text>
					</VStack>
					<VStack>
						<Heading fontSize={25}>
							<CountUp end={147} duration={3} useEasing />
						</Heading>
						<Text fontSize={16}>Countries</Text>
					</VStack>
				</Stack>
			</ContainerInside>
		</ContainerBackground>
	);
}
