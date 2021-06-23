import Link from "next/link";
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import StaffCard from "@components/staffcard";

const people = [
	{
		title: "Professional Fullstack Developer",
		name: "Hazim",
		img: "/staff/default.png",
	},
	{
		title: "Professional Fullstack Developer",
		name: "Hazim",
		img: "/staff/default.png",
	},
	{
		title: "Professional Fullstack Developer",
		name: "Hazim",
		img: "/staff/default.png",
	},
	{
		title: "Professional Fullstack Developer",
		name: "Hazim",
		img: "/staff/default.png",
	},
];

export default function About(): JSX.Element {
	return (
		<Flex
			p="2"
			s={3}
			align="stretch"
			alignItems="center"
			justifyContent="center"
			flexWrap="wrap"
			backgroundColor="purple.300"
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
	);
}
