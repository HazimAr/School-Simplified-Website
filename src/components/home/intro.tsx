import { Flex, Heading, Text, VStack, Center, Spacer } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";

export default function Intro() {
	return (
		<ContainerBackground src="/timmy/lofi_timmy.png" py="50px">
			<ContainerInside>
				<Center>
					<VStack spacing={5} maxW="60ch">
						<Heading fontWeight="extrabold" size="3xl">
							School Simplified:
						</Heading>
						<Heading fontWeight="bold" size="2xl" pv="0"	>
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
							{<CountUp
								end={500}
								suffix="M+"
								useEasing
								duration={3}
							/>}
						</Heading>
						<Text>Impressions</Text>
						<Spacer/><Spacer/><Spacer/>
					</VStack>
					<VStack>
						<Heading>
							{<CountUp
								end={62}
								suffix="K+"
								duration={3}
								useEasing
							/>}
						</Heading>
						<Text>Community Members</Text>
						<Spacer/><Spacer/><Spacer/>
					</VStack>
					<VStack>
						<Heading>
							{<CountUp end={1} duration={3} useEasing />}
						</Heading>
						<Text>Mission</Text>
						<Spacer/><Spacer/><Spacer/>
					</VStack>
					<VStack>
						<Heading>
							{<CountUp
								end={500}
								suffix="+"
								duration={3}
								useEasing
							/>}
						</Heading>
						<Text>Staff Members</Text>
						<Spacer/><Spacer/><Spacer/>
					</VStack>
					<VStack>
						<Heading>
							{ <CountUp
								end={147}
								suffix=""
								duration={3}
								useEasing
							/>}
						</Heading>
						<Text>Countries</Text>
					</VStack>
				</Flex>
			</ContainerInside>
		</ContainerBackground>
	);
}
