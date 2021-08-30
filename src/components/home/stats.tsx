import { HStack } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import CountUp from "react-countup";

export default function Stats() {
	return (
		<Container py={5}>
			<ContainerInside>
				<HStack
					spacing={{ base: 0, md: 5 }}
					justify={{ base: "flex-start", md: "center" }}
					flexDir={{ base: "column", md: "row" }}
					textAlign="left"
				>
					<CountUp
						end={500}
						suffix="M+ People Reached"
						duration={3}
						useEasing
					/>
					<CountUp
						end={60}
						suffix="K+ Community Members"
						duration={3}
						useEasing
					/>
					<CountUp
						end={400}
						suffix="+ Staff Members"
						duration={3}
						useEasing
					/>
					<CountUp
						end={147}
						suffix=" Countries"
						duration={3}
						useEasing
					/>
					<CountUp end={1} suffix=" Mission" duration={3} useEasing />
				</HStack>
			</ContainerInside>
		</Container>
	);
}
