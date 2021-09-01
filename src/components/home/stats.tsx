import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";
import { BsPeopleFill } from "react-icons/bs";
import { FaFlag, FaGlobe, FaHandHoldingHeart } from "react-icons/fa";

export default function Stats() {
	return (
		<Container py={20}>
			<ContainerInside>
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
						<Text>People Reached</Text>
					</StatsIcon>
					<StatsIcon Icon={FaHandHoldingHeart}>
						<CountUp end={60} suffix="K+" duration={3} useEasing />
						<Text>Community Members</Text>
					</StatsIcon>
					<StatsIcon Icon={FaFlag}>
						<CountUp end={1} duration={3} useEasing />
						<Text>Mission</Text>
					</StatsIcon>
					<StatsIcon Icon={BsPeopleFill}>
						<CountUp end={400} suffix="+" duration={3} useEasing />
						<Text>Staff Members</Text>
					</StatsIcon>
					<StatsIcon Icon={FaGlobe}>
						<CountUp end={147} suffix="" duration={3} useEasing />
						<Text>Countries</Text>
					</StatsIcon>

					{/* <Stack>
						<Button>Volunteer</Button>
						<Button>Partner</Button>
						<Button></Button>
					</Stack> */}
				</Flex>
			</ContainerInside>
		</Container>
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
