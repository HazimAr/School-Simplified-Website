/* eslint-disable sonarjs/no-duplicate-string */
import Link from "next/link";
import { Box, Flex, Text, Spacer, Divider, Heading } from "@chakra-ui/react";
import StaffCard from "@components/staffcard";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

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
		<Container backgroundColor="purple.300">
			<ContainerInside>
				<Box>
					<Box py="20px">
						<Heading fontSize="35px">Leadership</Heading>
						<Text fontSize="20px">
							Leaders of School Simplified
						</Text>
					</Box>

					<Divider bg="white" />

					<Flex justifyContent="center" flexWrap="wrap">
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
				<Box backgroundColor="purple.100">
					<Heading fontSize="35px">
						Volunteering Opportunities
					</Heading>
					<Text fontSize="20px">
						Over 300+ volunteers across the world
					</Text>
				</Box>
			</ContainerInside>
		</Container>
	);
}
