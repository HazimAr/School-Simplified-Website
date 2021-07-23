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
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import StaffCard from "@components/staffcard";
import React from "react";
import { GovernanceDocument, GovernanceSection, Person } from "types";

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
		title: "Secretary & Chief of Staff",
		img: "/staff/LaurenHsieh.jpg",
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
		title: "Chief Human Resources Officer (CHRO) ",
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
];

export default function About({ data }: { data: any }): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside>
					<Box>
						<Heading size="2xl" my={7}>
							Leadership
						</Heading>

						<Divider bg="white" />
						<Heading fontSize={30} my={5}>
							Executive Profiles
						</Heading>
						<Flex justifyContent="center" flexWrap="wrap">
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

						<Box mt={5}>
							<Heading fontSize={30}>Board of Directors</Heading>
						</Box>
						<Stack textAlign="left" my={10}>
							<Flex align="center">
								<Heading width="100%" fontSize={17}>
									Name
								</Heading>
								<Heading width="100%" fontSize={17}>
									Title
								</Heading>
							</Flex>

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
						</Stack>
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
					<Flex textAlign="left" justify="center" mt={5}>
						{data.map((section: GovernanceSection) => {
							return (
								<Stack key={section.title} flex={1}>
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
