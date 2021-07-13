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
};

const people: Person[] = [
	{
		name: "Ethan Wu",
		title: "Chairman + Founder",
		img: "/staff/default.png",
	},
	{
		name: "Ethan Hsu",
		title: "Chief Executive Officer (CEO) + President",
		img: "/staff/default.png",
	},
	{
		name: "Lauren Hsieh",
		title: "Secretary & Chief of Staff",
		img: "/staff/default.png",
	},
	{
		name: "Aarush Goradia",
		title: "Chief Operating Officer (COO)",
		img: "/staff/default.png",
	},
	{
		name: "Nicole Liu",
		title: "Executive Vice President (EVP)",
		img: "/staff/default.png",
	},
	{
		name: "Madison Li",
		title: "Chief Academics Officer (CAO)",
		img: "/staff/default.png",
	},
	{
		name: "Harry Chow",
		title: "Chief Marketing Officer (CMO)",
		img: "/staff/default.png",
	},
	{
		name: "Max Konzerowsky",
		title: "Chief Technical Officer (CTO)",
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
		name: "Diana Zheng",
		title: "Treasurer",
		img: "/staff/default.png",
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
									img={staff.img}
									// isLeft={i % 2 === 0}
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
