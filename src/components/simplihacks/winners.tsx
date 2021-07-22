import { Box, Flex, Heading } from "@chakra-ui/react"
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import ProjectCard from "@components/simplihacks/projectcard";
import { ProjectWinner } from "types"

const winners: ProjectWinner[] = [
	{
		names: "Ayush Agarwal, Krushay Bhavsar",
		title: "Signslate",
		prize: "1st Place",
		link: "https://devpost.com/software/signslate",
		img: "/simplihacks/winners/signslate.png",
	},
	{
		names: "Ananya Jajoo, Angelina Tsuboi, Bhavya Modi",
		title: "Pocket CPR",
		prize: "2nd Place",
		link: "https://devpost.com/software/pocket-cpr-ros5qh",
		img: "/simplihacks/winners/pocketcpr.png",
	},
	{
		names: "Sirini Karunadasa",
		title: "International Gardener",
		prize: "3rd Place",
		link: "https://devpost.com/software/international-gardener",
		img: "/simplihacks/winners/internationalgardener.png",
	},
	{
		names: "Janine Jimenez, Tye Maxson, Ziyan Liu, Connie Guo",
		title: "Study4Change",
		prize: "Best Education",
		link: "https://devpost.com/software/study4change",
		img: "/simplihacks/winners/study4change.png",
	},
	{
		names: "Asrith Sreeram",
		title: "XTrack",
		prize: "Best Social Good",
		link: "https://devpost.com/software/xtrack",
		img: "/simplihacks/winners/xtrack.png",
	},
	{
		names: "Hazim Arafa, Connie Z, bonnie :p, Loid :)",
		title: "Anon-Therapy",
		prize: "Best Beginner",
		link: "https://devpost.com/software/anon-therapy",
		img: "/simplihacks/winners/anontherapy.png",
	},
	{
		names: "Deorah ",
		title: "SeniorSafety",
		prize: "Best Solo Project",
		link: "https://devpost.com/software/seniorsafety",
		img: "/simplihacks/winners/seniorsafety.png",
	}
];

export default function Winners(): JSX.Element {
	return (
		<Container py={19}>
			<ContainerInside>
				<Box>
					<Heading as="h1" my={7}>
						Winners
					</Heading>
					<Flex justify="center" flexWrap="wrap">
						{winners.map((project, i: number) => {
							return (
								<ProjectCard
									names={project.names}
									title={project.title}
									prize={project.prize}
									link={project.link}
									img={project.img}
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