/* eslint-disable sonarjs/no-duplicate-string */
import Link from "next/link";
import { Box, Flex, Text, Spacer, Divider, Heading } from "@chakra-ui/react";
import StaffCard from "@components/staffcard";

const people = [
	{
		name: "Ethan Wu",
		title: "Chairman + Founder",
		img: "/staff/default.png",
	},
	{
		name: "Ethan Hsu",
		title: "CEO + Director",
		img: "/staff/default.png",
	},
	{
		name: "Nathanael Ma",
		title: "Vice Chairman",
		img: "/staff/default.png",
	},
	{
		name: "Jason Mei",
		title: "CAO",
		img: "/staff/default.png",
	},
	{
		name: "Max Konzerowski",
		title: "CTO",
		img: "/staff/default.png",
	},
	{
		name: "Harry",
		title: "CMO",
		img: "/staff/default.png",
	},
	{
		name: "Arohini Rajvanshi",
		title: "CHRO",
		img: "/staff/default.png",
	},
	{
		name: "Paige Delancey",
		title: "Executive Secretary + Director",
		img: "/staff/default.png",
	},
	{
		name: "Alex Andujar",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Dhananjai Senthil Kumar",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Atsi Gupta",
		title: "Director",
		img: "/staff/default.png",
	},
];

export default function About(): JSX.Element {
	return (
		<Box backgroundColor="purple.300">
			<Box>
				<Heading size="lg">Testing</Heading>
				<Text size="md">Leqaders of School Simplified</Text>
			</Box>
			<Divider orientation="horizontal" size="md"/>
			<Flex
				p="2"
				s={3}
				align="stretch"
				alignItems="center"
				justifyContent="center"
				flexWrap="wrap"
			>
				{people.map((staff, i: number) => {
					return (
						<StaffCard
							title={staff.title}
							name={staff.name}
							img={staff.img}
							key={i}
						/>
					);
				})}
			</Flex>
		</Box>
	);
}
