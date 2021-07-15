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

const leadership: Person[] = [
	{
		name: "Ethan Hsu",
		title: "Chief Executive Officer (CEO) & President",
		img: "/staff/EthanHsu.jpg",
	},
	{
		name: "Aarush Goradia",
		title: "Chief Operating Officer (COO)",
		img: "/staff/AarushGoradia.jpg",
	},
	{
		name: "Nicole Liu",
		title: "Executive Vice President (EVP)",
		img: "/staff/NicoleLiu.jpg",
	},
	{
		name: "Lauren Hsieh",
		title: "Secretary & Executive Assistant to CEO",
		img: "/staff/LaurenHsieh.jpg",
	},
	{
		name: "Anncine Lin",
		title: "Deputy Chief of Staff",
		img: "/staff/default.png",
	},
	{
		name: "Madison Li",
		title: "Chief Academics Officer (CAO)",
		img: "/staff/MadisonLi.png",
	},
	{
		name: "Harry Chow",
		title: "Chief Marketing Officer (CMO)",
		img: "/staff/HarryChow.jpg",
	},
	{
		name: "Jason Mei",
		title: "Chief Information & Technology Officer (CIO)",
		img: "/staff/JasonMei.jpg",
	},
	{
		name: "Arohini Rajvanshi",
		title: "Chief Human Resource Officer (CHRO) ",
		img: "/staff/ArohiniRajvanshi.jpg",
	},
	{
		name: "Diana Zheng",
		title: "Treasurer",
		img: "/staff/DianaZheng.jpg",
	},
];

const boardOfDirectors: Person[] = [
	{
		name: "Nathanael Ma",
		title: "Lead Director",
		img: "/staff/default.png",
	},
	{
		name: "Ethan Hsu",
		title: "Director & CEO",
		img: "/staff/default.png",
	},
	{
		name: "Madison Li",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Harry Chow",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Lauren Hsieh",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Diana Zheng",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Rohit Choudhary",
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
						<Box py={3}>
							<Heading size="2xl" mb={3}>
								Leadership
							</Heading>
						</Box>

						<Divider bg="white" />
						<Box py={2}>
							<Heading fontSize={30}>Executive Profiles</Heading>
						</Box>
						<Flex justifyContent="center" alignItems="center" flexWrap="wrap">
							{leadership.map((staff, i: number) => {
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

						<Divider bg="white" />

						<Box py={3}>
							<Heading fontSize={30}>Board of Directors</Heading>
						</Box>
						<Box textAlign="left">

							<Flex align="center">
								<Heading width="100%" fontSize={17}>
									Name
								</Heading>
								<Heading width="100%" fontSize={17}>
									Title
								</Heading>
							</Flex>

							<Divider bg="white" />
							{boardOfDirectors.map((staff) => {
								return (
									<Box>
										<Divider bg="white.500" />
										<Flex py={2}>
											<Text
												width="100%"
												fontSize={20}
												fontWeight="bold"
											>
												{staff.name}
											</Text>
											<Text width="100%" fontSize={20}>
												{staff.title}
											</Text>
										</Flex>
									</Box>
								);
							})}
						</Box>
						<Divider bg="white" />

						<Box py={3}>
							<Heading fontSize={30}>Founders</Heading>
							<Flex py={2}>
								<Text
									width="100%"
									fontSize={20}
									fontWeight="bold"
								>
									Jason Mei
								</Text>
								<Text
									width="100%"
									fontSize={20}
									fontWeight="bold"
								>
									Ethan Hsu
								</Text>
							</Flex>
							<Flex py={2}>
								<Text
									width="100%"
									fontSize={20}
									fontWeight="bold"
								>
									Ethan Wu
								</Text>
								<Text
									width="100%"
									fontSize={20}
									fontWeight="bold"
								>
									Nathanael Ma
								</Text>
							</Flex>
						</Box>
					</Box>
				</ContainerInside>
			</Container>
		</>
	);
}
