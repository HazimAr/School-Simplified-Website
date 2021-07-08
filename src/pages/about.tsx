/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import StaffCard from "@components/staffcard";
// import { useState, useEffect } from "react";

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

// const marketing = <Text>Marketing</Text>;

// let body = marketing;
export default function About(): JSX.Element {
	// const [panel, setPanel] = useState("");

	// useEffect(() => {
	// 	if (panel === "m") {
	// 		body = <Text>Marketing</Text>;
	// 	}
	// 	if (panel === "a") {
	// 		body = <Text>Academics</Text>;
	// 	}
	// 	if (panel === "s") {
	// 		body = <Text>Secretary</Text>;
	// 	}
	// 	if (panel === "t") {
	// 		body = <Text>Technical</Text>;
	// 	}
	// 	if (panel === "h") {
	// 		body = <Text>HR</Text>;
	// 	}
	// }, [panel]);

	return (
		<Container>
			<ContainerInside>
				<Box py="20px">
					<Flex
						p="30px"
						align="center"
						justify="center"
						flexWrap="wrap"
					>
						<Box p="15px" maxW="500px" m="16px">
							<Heading align="left" fontSize="35px">
								Why Us?
							</Heading>
							<Text align="left" fontSize="15px">
								School Simplified believes that quality
								education should be accessible to all students.
								It strives to maintain its status as a NPO while
								delivering profit-affiliated services to
								teenagers all across the world. As an
								organization both by students and for students,
								we have a vested interest in watching you all
								succeed!
							</Text>
						</Box>
						<Image src="/staff/default.png" boxSize="200px" />
					</Flex>
				</Box>

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
			</ContainerInside>
		</Container>
	);
}
