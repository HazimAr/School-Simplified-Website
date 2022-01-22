/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { getGovernanceData } from "@api/notion";
import {
	Box,
	BoxProps,
	Center,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import StaffCard from "@components/staffcard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GovernanceDocument, GovernanceSection, Person } from "types";

export default function About({ data }: { data: any }): JSX.Element {
	// const [senior, setSenior] = useState(true);
	const [group, setGroup] = useState<PeopleGroup>(peopleGroups?.[0]);
	return (
		<>
			<Container>
				<ContainerInside>
					<Heading size="2xl" my={7}>
						Leadership
					</Heading>

					<Divider bg="white" />
					<Center my={5}>
						<SimpleGrid
							columns={peopleGroups.length}
							rounded={25}
							background="#FFFC"
							boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
							zIndex={0}
						>
							{peopleGroups.map((personGroup) => (
								<Box key={personGroup.name} position="relative">
									{group &&
									personGroup.name === group.name ? (
										<motion.div
											layoutId="activeButton"
											style={{
												width: "100%",
												height: "100%",
												zIndex: 1,
												top: 0,
												position: "absolute",
												background: "white",
												borderRadius: "9999px",
												paddingInlineStart:
													"var(--chakra-space-12)",
												paddingInlineEnd:
													"var(--chakra-space-12)",
												paddingTop:
													"var(--chakra-space-3\\.5)",
												paddingBottom:
													"var(--chakra-space-3\\.5)",
											}}
										>
											{/* <Heading
												color="brand.purple.dark"
												size="md"
												as="h3"
											>
												{personGroup.name}
											</Heading> */}
											<motion.h3
												style={{
													fontFamily:
														"var(--chakra-fonts-heading)",
													fontWeight: "bold",
													fontSize:
														"var(--chakra-fontSizes-xl)",
													lineHeight: "1.2",
													color: "var(--chakra-colors-brand-purple-dark)",
												}}
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												// exit={{ opacity: 0 }}
												transition={{
													duration: 0.3,
												}}
												// layoutId="activeHeader"
											>
												{personGroup.name}
											</motion.h3>
										</motion.div>
									) : null}
									<ExecutiveButton
										onClick={() => setGroup(personGroup)}
									>
										<AnimatePresence>
											<Heading
												color="inherit"
												size="md"
												as="h3"
											>
												{personGroup.name}
											</Heading>
										</AnimatePresence>
									</ExecutiveButton>
								</Box>
							))}
						</SimpleGrid>
					</Center>
					<Heading fontSize={30} mb={5}>
						Executive Profiles
					</Heading>
					<Flex justifyContent="center" flexWrap="wrap">
						{group
							? group.people.map((staff: Person) => {
									return (
										<StaffCard
											title={staff.title}
											name={staff.name}
											img={staff.img}
											key={staff.img}
										/>
									);
							  })
							: null}
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
								Ethan Wu
							</Text>
							<Text fontSize={20} fontWeight="bold">
								Nathanael Ma
							</Text>
							<Text fontSize={20} fontWeight="bold">
								Ethan Hsu
							</Text>
							<Text fontSize={20} fontWeight="bold">
								Jason Mei
							</Text>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside pb={7}>
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
	return {
		props: {
			data,
		},
	};
}

type PeopleGroup = {
	name: string;
	people: Person[];
};

const corporateOfficers: Person[] = [
	{
		name: "Ethan Hsu",
		title: "Chief Executive Officer & President",
		img: "/staff/EthanHsu.jpg",
	},
	{
		name: "Masa Murry",
		title: "Chief Operating Officer",
		img: "/staff/MasaMurry.jpg",
	},
	// {
	// 	name: "Lauren Hsieh",
	// 	title: "Chief of Staff & Corporate Secretary ",
	// 	img: "/staff/LaurenHsieh.jpg",
	// },
	{
		name: "Param Patil",
		title: "Chief Advancements Officer",
		img: "/staff/ParamPatil.jpg",
	},
	{
		name: "Harry Chow",
		title: "Chief Marketing Officer",
		img: "/staff/HarryChow.jpg",
	},
	{
		name: "Anncine Lin",
		title: "Chief Human Resources Officer",
		img: "/staff/AnncineLin.jpg",
	},
	// {
	// 	name: "Jason Mei",
	// 	title: "Executive Vice President of Information Technology",
	// 	img: "/staff/JasonMei.jpg",
	// },
	// {
	// 	name: "Diana Zheng",
	// 	title: "Corporate Treasurer",
	// 	img: "/staff/DianaZheng.jpg",
	// },
	{
		name: "Sabrina Zhang",
		title: "Executive Assisstant to CEO",
		img: "/staff/SabrinaZhang.jpg",
	},
	{
		name: "Annette Lin",
		title: "Editor in Chief",
		img: "/staff/AnnetteLin.jpg",
	},
	// {
	// 	name: "Zach Martin",
	// 	title: "President of School Simplified Digital",
	// 	img: "/staff/ZachMartin.jpg",
	// },
	{
		name: "Brandon Woo",
		title: "Chief Information Officer",
		img: "/staff/BrandonWoo.jpg",
	},
	{
		name: "Kyle Chen",
		title: "Chief Financial Officer",
		img: "/staff/KyleChen.jpg",
	},
	// {
	// 	name: "Krishanu Datta",
	// 	title: "Senior Vice President of IT",
	// 	img: "/staff/KrishanuDatta.jpg",
	// },
];

const divisionPresidents: Person[] = [
	{
		name: "Bhavyasri Suggula",
		title: "Executive Projects Director",
		img: "/staff/BhavyasriSuggula.jpg",
	},
	{
		name: "Hazim Arafa",
		title: "President of Programming Simplified",
		img: "/staff/HazimArafa.jpg",
	},
	{
		name: "David Sun",
		title: "President of National Chapters",
		img: "/staff/DavidSun.jpg",
	},
	{
		name: "Aarush Goradia",
		title: "President of Student Activities",
		img: "/staff/AarushGoradia.jpg",
	},
	{
		name: "Maya Murry",
		title: "President of Research Simplified",
		img: "/staff/MayaMurry.jpg",
	},
	// {
	// 	name: "Jiahao Zhang",
	// 	title: "Global Vice President of Advancement",
	// 	img: "/staff/JiahaoZhang.jpg",
	// },
	// {
	// 	name: "Yasmeen Elkheir",
	// 	title: "Vice President of Operations, Programming Simplified",
	// 	img: "/staff/YasmeenElkheir.jpg",
	// },
	// {
	// 	name: "Isamar Zhu",
	// 	title: "Vice President of Staff, Programming Simplified",
	// 	img: "/staff/IsamarZhu.jpg",
	// },
	// {
	// 	name: "Josh Schram",
	// 	// name: "Josh Schram",
	// 	title: "Vice President of Academics, Digital",
	// 	img: "/staff/JoshSchram.jpg",
	// },
	// {
	// 	name: "Rohit Choudhary",
	// 	title: "Vice President of Academics, Digital",
	// 	img: "/staff/RohitChoudhary.jpg",
	// },

	// {
	// 	name: "Rohit Penta",
	// 	title: "Vice President of Technology, Digital",
	// 	img: "/staff/RohitPenta.jpg",
	// },
	// {
	// 	name: "Max Konzerowsky",
	// 	title: "Vice President of Information-Technology, School Simplified Digital",
	// 	img: "/staff/MaxKonzerowsky.jpg",
	// },
	// {
	// 	name: "Nicholas Zhang",
	// 	title: "Vice President of Information-Technology, School Simplified Digital",
	// 	img: "/staff/NicholasZhang.jpg",
	// },

	// {
	// 	name: "Sophia Bhatia",
	// 	title: "Vice President of Community Engagement",
	// 	img: "/staff/soape.jpg",
	// },
	// {
	// 	name: "Noah Bondi",
	// 	title: "National VP of Communications (Chapters)",
	// 	img: "/staff/NoahBondi.jpg",
	// },
	// {
	// 	name: "Vivek Anandh",
	// 	title: "Vice President of Information-Technology, National Chapters",
	// 	img: "/staff/VivekAnandh.jpg",
	// },
	// {
	// 	name: "Gavin Hecock",
	// 	title: "Vice President of Student Activities",
	// 	img: "/staff/GavinHecock.jpg",
	// },
	// {
	// 	name: "Christina Dong",
	// 	title: "Vice President of Marketing, National Chapters",
	// 	img: "/staff/ChristinaDong.jpg",
	// },
	// {
	// 	name: "Adrian Sucahyo",
	// 	title: "Vice President of Operations, Chapters",
	// 	img: "/staff/AdrianSucahyo.jpg",
	// },
];

const peopleGroups: PeopleGroup[] = [
	{ name: "Corporate Officers", people: corporateOfficers },
	{ name: "Divison Presidents", people: divisionPresidents },
];

const boardOfDirectors: Person[] = [
	{
		name: "Ethan Hsu",
		title: "Chairperson",
		img: "/staff/default.png",
	},
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
		name: "Lauren Hsieh",
		title: "Secretary",
		img: "/staff/default.png",
	},
	{
		name: "Diana Zheng",
		title: "Director",
		img: "/staff/default.png",
	},
	{
		name: "Harry Chow",
		title: "Director",
		img: "/staff/default.png",
	},
	// {
	// 	name: "Rohit Choudhary",
	// 	title: "Director",
	// 	img: "/staff/default.png",
	// },
	// {
	// 	name: "Atsi Gupta",
	// 	title: "Director",
	// 	img: "/staff/default.png",
	// },
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

function ExecutiveButton({ children, ...props }: BoxProps) {
	return (
		<Box
			as="button"
			px={12}
			py={3.5}
			transition="all 0.2s ease"
			fontSize="14px"
			fontWeight="semibold"
			background="transparent"
			color="#5A60ADCC"
			minW={205}
			{...props}
		>
			{children}
		</Box>
	);
}
