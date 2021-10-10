/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { getGovernanceData } from "@api/notion";
import {
	Box,
	Divider,
	Flex,
	Heading,
	HStack,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
	Center,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import StaffCard from "@components/staffcard";
import { useState } from "react";
import { GovernanceDocument, GovernanceSection, Person } from "types";

export default function About({ data }: { data: any }): JSX.Element {
	const [senior, setSenior] = useState(true);
	return (
		<>
			<Container>
				<ContainerInside>
					<Box>
						<Heading size="2xl" my={7}>
							Leadership
						</Heading>

						<Divider bg="white" />
						<Center my={5}>
							<ExecutiveButton
								onClick={() => {
									!senior && setSenior(true);
								}}
								left
								active={senior}
							>
								Senior Executives
							</ExecutiveButton>
							<ExecutiveButton
								onClick={() => {
									senior && setSenior(false);
								}}
								active={!senior}
							>
								Executives
							</ExecutiveButton>
						</Center>
						<Heading fontSize={30} mb={5}>
							Executive Profiles
						</Heading>
						<Flex justifyContent="center" flexWrap="wrap">
							{(senior ? seniorExecs : execs).map(
								(staff: Person, i: number) => {
									return (
										<StaffCard
											title={staff.title}
											name={staff.name}
											img={staff.img}
											key={i}
										/>
									);
								}
							)}
						</Flex>

						<Divider bg="white" />

						<Box mt={5}>
							<Heading fontSize={30}>Board of Directors</Heading>
						</Box>
						<Table variant="simple" colorScheme="whiteAlpha">
							<Thead>
								<Tr>
									<Th>
										<Heading fontSize={17}>Name</Heading>
									</Th>
									<Th>
										<Heading fontSize={17}>Title</Heading>
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{boardOfDirectors.map((staff) => (
									<Tr key={staff.name}>
										<Td fontWeight="bold" fontSize={20}>
											{staff.name}
										</Td>
										<Td fontSize={20}>{staff.title}</Td>
									</Tr>
								))}
							</Tbody>
						</Table>
						<Divider bg="white" />

						<VStack py={5}>
							<Heading fontSize={30}>Founders</Heading>
							<HStack
								py={2}
								spacing={{ base: 0, sm: 10 }}
								flexDir={{ base: "column", sm: "row" }}
							>
								<Text fontSize={20} fontWeight="bold">
									Jason Mei
								</Text>
								<Text fontSize={20} fontWeight="bold">
									Ethan Hsu
								</Text>
								<Text fontSize={20} fontWeight="bold">
									Ethan Wu
								</Text>
								<Text fontSize={20} fontWeight="bold">
									Nathanael Ma
								</Text>{" "}
							</HStack>
						</VStack>
					</Box>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<Divider bg="white" />
					<Flex
						textAlign={{ base: "center", sm: "left" }}
						justify="center"
						mt={5}
						flexDir={{ base: "column", sm: "row" }}
					>
						{data.map((section: GovernanceSection) => {
							return (
								<Stack key={section.title} flex={1} my={3}>
									<Heading fontSize={20}>
										{section.title}
									</Heading>
									<Stack>
										{section.docs.map(
											(doc: GovernanceDocument) => {
												return (
													<NextLink
														key={doc.href}
														href={doc.href}
													>
														<Text>{doc.title}</Text>
													</NextLink>
												);
											}
										)}
									</Stack>
								</Stack>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const data = await getGovernanceData();
	return { props: { data } };
}

const seniorExecs: Person[] = [
	{
		name: "Ethan Hsu",
		title: "Chief Executive Officer (CEO) & President",
		img: "/staff/EthanHsu.jpg",
	},

	{
		name: "Lauren Hsieh",
		title: "Secretary & Chief of Staff",
		img: "/staff/LaurenHsieh.jpg",
	},
	{
		name: "Anncine Lin",
		title: "Deputy Chief of Staff",
		img: "/staff/AnncineLin.jpg",
	},
	{
		name: "Harry Chow",
		title: "Chief Marketing Officer (CMO)",
		img: "/staff/HarryChow.jpg",
	},
	{
		name: "Masa Murry",
		title: "Senior Vice President of Global Marketing",
		img: "/staff/",
	},
	{
		name: "Param Patil",
		title: "Chief Advancements Officer (CAO)",
		img: "/staff/RohitChoudhary.jpg",
	},
	{
		name: "Jason Mei",
		title: "Executive Vice President of Information Technology",
		img: "/staff/JasonMei.jpg",
	},
	{
		name: "Hazim Arafa",
		title: "President of Programming Simplified",
		img: "/staff/HazimArafa.jpg",
	},
	{
		name: "Aarush Goradia",
		title: "President of Student Advancement (PSA)",
		img: "/staff/AarushGoradia.jpg",
	},
	{
		name: "David Sun",
		title: "President of National Chapters",
		img: "/staff/DavidSun",
	},

	{
		name: "Diana Zheng",
		title: "Treasurer",
		img: "/staff/DianaZheng.jpg",
	},
];

const execs: Person[] = [
	{
		name: "Yasmeen Elkheir",
		title: "Vice President of Programming Simplified, Operations",
		img: "/staff/YasmeenElkheir.jpg",
	},
	{
		name: "Rohit Penta",
		title: "Vice President of Technical",
		img: "/staff/RohitPenta.jpg",
	},
	{
		name: "Isamar Zhu",
		title: "Vice President of Programming Simplified, Staff",
		img: "/staff/IsamarZhu.jpg",
	},
	{
		name: "Rohit Choudhary",
		title: "Vice President of Academics",
		img: "/staff/RohitChoudhary.jpg",
	},
	{
		name: "Josh Schram",
		title: "Vice President of Academics",
		img: "/staff/JoshSchram.jpg",
	},
	{
		name: "Jiahao Zhang",
		title: "Global Vice President of Advancement",
		img: "/staff/JiahoZhang.jpg",
	},
	{
		name: "Max Konzerowsky",
		title: "Vice President of Technical",
		img: "/staff/MaxKonzerowsky.jpg",
	},
	{
		name: "Nicholas Zhang",
		title: "Vice President of Technical",
		img: "/staff/NicholasZhang.jpg",
	},
];

const boardOfDirectors: Person[] = [
	{
		name: "Nathanael Ma",
		title: "Lead Director",
		img: "/staff/default.png",
	},
	{
		name: "Madison Li",
		title: "Lead Director",
		img: "/staff/default.png",
	},
	{
		name: "Ethan Hsu",
		title: "Chairperson & CEO",
		img: "/staff/default.png",
	},

	{
		name: "Harry Chow",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Lauren Hsieh",
		title: "Director & Secretary",
		img: "/staff/default.png",
	},
	{
		name: "Diana Zheng",
		title: "Director & Treasurer",
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
	{
		name: "Isaias Vilato",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Param Patil",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Kayla Laguana",
		title: "Director",
		img: "/staff/default.png",
	},
];

function ExecutiveButton({ children, onClick, left = false, active }) {
	return (
		<Box
			onClick={onClick}
			maxW="200px"
			py={3}
			w="100%"
			bg={
				active
					? "linear-gradient(90deg, #FFA270 0%, #e6c068 100%)"
					: "brand.transparent"
			}
			borderLeftRadius={left ? "100px" : 0}
			borderRightRadius={left ? 0 : "100PX"}
			transition="all 0.1s ease-in"
			_hover={{
				bg: "brand.transparent2",
				cursor: "pointer",
			}}
		>
			{children}
		</Box>
	);
}
