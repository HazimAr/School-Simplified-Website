/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import StaffCard from "@components/staffcard";

type Person = {
	name: string;
	title: string;
	img: string;
	desc: string;
};

const people: Person[] = [
	{
		name: "Ethan Wu",
		title: "Chairman + Founder",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Ethan Hsu",
		title: "CEO + Director",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Nathanael Ma",
		title: "Vice Chairman",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Jason Mei",
		title: "CAO",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Max Konzerowski",
		title: "CTO",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Harry",
		title: "CMO",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Arohini Rajvanshi",
		title: "CHRO",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Paige Delancey",
		title: "Executive Secretary + Director",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Alex Andujar",
		title: "Director",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Dhananjai Senthil Kumar",
		title: "Director",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
	{
		name: "Atsi Gupta",
		title: "Director",
		img: "/staff/default.png",
		desc: "wibble wobble",
	},
];

export default function About(): JSX.Element {
	return (
		<>
			<Container bg="brand.transparent">
				<ContainerInside>
					<Box py={5}>
						<Flex
							align="center"
							justify="center"
							flexDir={{ base: "column", md: "row" }}
						>
							<Box>
								<Heading
									textAlign={{ base: "center", md: "left" }}
									fontSize="2xl"
									mb={3}
								>
									Why Us?
								</Heading>
								<Text
									textAlign={{ base: "center", md: "left" }}
								>
									School Simplified believes that quality
									education should be accessible to all
									students. It strives to maintain its status
									as a NPO while delivering profit-affiliated
									services to teenagers all across the world.
									As an organization both by students and for
									students, we have a vested interest in
									watching you all succeed!
								</Text>
							</Box>
							<Image
								src="/undraw/learning.svg"
								w={{ base: 200, md: 300, lg: 400 }}
								ml={{ base: 0, md: 8 }}
								mt={{ base: 8, md: 0 }}
							/>
						</Flex>
					</Box>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<Box>
						<Box py={7}>
							<Heading size="2xl" mb={3}>
								Leadership
							</Heading>
							<Text fontSize={20}>
								Leaders of School Simplified
							</Text>
						</Box>

						<Divider bg="white" />

						{people.map((staff, i: number) => {
							return (
								<StaffCard
									title={staff.title}
									name={staff.name}
									desc={staff.desc}
									img={staff.img}
									isLeft={i % 2 === 0}
									key={"card_" + i}
								/>
							);
						})}
					</Box>
				</ContainerInside>
			</Container>
		</>
	);
}
