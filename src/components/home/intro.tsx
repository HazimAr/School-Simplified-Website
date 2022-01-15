import { Center, Heading, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { slideInUp } from "@styles/animations";

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
						<Heading fontWeight="bold" size="lg">
							We Inspire Learning
						</Heading>
						<Spacer minH={10} />
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
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInUp({ amount: 50, delay: 0.2 })}
					>
						<VStack>
							<Heading fontSize={25}>
								<CountUp
									end={500}
									suffix="M+"
									useEasing
									duration={3}
									delay={0.3}
								/>
							</Heading>
							<Text pb={{ base: 0, sm: 5, md: 0 }} fontSize={16}>
								Impressions
							</Text>
						</VStack>
					</motion.div>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInUp({ amount: 50, delay: 0.25 })}
					>
						<VStack>
							<Heading fontSize={25}>
								<CountUp
									end={62}
									suffix="K+"
									duration={3}
									useEasing
									delay={0.3}
								/>
							</Heading>
							<Text fontSize={16}>Community Members</Text>
						</VStack>
					</motion.div>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInUp({ amount: 50, delay: 0.3 })}
					>
						<VStack>
							<Heading fontSize={25}>
								<CountUp end={1} duration={3} useEasing />
							</Heading>
							<Text fontSize={16}>Mission</Text>
						</VStack>
					</motion.div>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInUp({ amount: 50, delay: 0.35 })}
					>
						<VStack>
							<Heading fontSize={25}>
								<CountUp
									end={500}
									suffix="+"
									duration={3}
									useEasing
									delay={0.3}
								/>
							</Heading>
							<Text fontSize={16}>Staff Members</Text>
						</VStack>
					</motion.div>
					<motion.div
						initial="initial"
						whileInView="onView"
						variants={slideInUp({ amount: 50, delay: 0.4 })}
					>
						<VStack>
							<Heading fontSize={25}>
								<CountUp end={147} duration={3} useEasing />
							</Heading>
							<Text fontSize={16}>Countries</Text>
						</VStack>
					</motion.div>
				</Stack>
			</ContainerInside>
		</ContainerBackground>
	);
}
