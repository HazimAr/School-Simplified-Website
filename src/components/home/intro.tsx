import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import ContainerBackground from "@components/containerBackground";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";
import { BsFillPersonFill, BsPeopleFill } from "react-icons/bs";
import { FaFlag, FaGlobe, FaHandHoldingHeart } from "react-icons/fa";

const spacing = 20;

export default function Intro() {
	return (
		<ContainerBackground src="/timmy/lofi_timmy.png">
			<ContainerInside>
				<Flex justify="center" align="center" mt={50}>
					<Box maxW="60ch" my={`${spacing}px`}>
						<Heading fontWeight="extrabold">
							School Simplified
							<br /> We Inspire Learning
						</Heading>
						<Text my="10px">
							Through learning, we empower the next generation to
							revolutionize the future. School Simplified is a
							nonprofit organization dedicated to learning done
							equally, fairly and with meaning. And we don’t just
							mean education, but also business, trades, passions,
							leadership, and life.
						</Text>
						{/* <NextLink href="/notes">
							<Button>Get Free Help</Button>
						</NextLink> */}
					</Box>
				</Flex>
				<Flex
					spacing={{ base: 0, md: 5 }}
					justify={{ base: "center", md: "space-around" }}
					flexWrap="wrap"
					flexDir={{ base: "column", sm: "row" }}
					textAlign="center"
					fontSize={{ base: "lg", md: "xl" }}
				>
					<StatsIcon Icon={BsPeopleFill}>
						<CountUp end={500} suffix="M+" duration={3} useEasing />
						<Text>Impression</Text>
					</StatsIcon>
					<StatsIcon Icon={FaHandHoldingHeart}>
						<CountUp end={60} suffix="K+" duration={3} useEasing />
						<Text>Community Members</Text>
					</StatsIcon>
					<StatsIcon Icon={FaFlag}>
						<CountUp end={1} duration={3} useEasing />
						<Text>Mission</Text>
					</StatsIcon>
					<StatsIcon Icon={BsFillPersonFill}>
						<CountUp end={400} suffix="+" duration={3} useEasing />
						<Text>Staff Members</Text>
					</StatsIcon>
					<StatsIcon Icon={FaGlobe}>
						<CountUp end={147} suffix="" duration={3} useEasing />
						<Text>Countries</Text>
					</StatsIcon>
				</Flex>
			</ContainerInside>
		</ContainerBackground>
	);
}

function StatsIcon({ children, Icon, ...props }) {
	return (
		<VStack m="5px" {...props}>
			<Box display={{ base: "none", md: "block" }}>
				<Icon size="4rem" color="#fff" />
			</Box>
			{children}
		</VStack>
	);
}
