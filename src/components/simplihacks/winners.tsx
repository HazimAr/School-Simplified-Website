import { VStack, Flex, Heading } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import ProjectCard from "@components/simplihacks/projectcard";
import { ProjectWinner } from "types";

const winners: ProjectWinner[] = [
	{
		names: "Ayush Agarwal, Krushay Bhavsar",
		title: "Signslate",
		prize: "1st Place Winner",
		link: "https://devpost.com/software/signslate",
		img: "/simplihacks/winners/signslate.png",
	},
	{
		names: "Ananya Jajoo, Angelina Tsuboi, Bhavya Modi",
		title: "Pocket CPR",
		prize: "2nd Place Winner",
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
		names: "Hazim Arafa, Connie Z, Bonnie, Loid",
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
	},
];

export default function Winners(): JSX.Element {
	return (
		<Container
			bg="linear-gradient(180deg, #7683E7 0%, #A8B2FF 100%);"
			py="50px"
		>
			<ContainerInside>
				<VStack align="start">
					<Heading fontSize="35px" my={7}>
						Winners from June 2021
					</Heading>
					<Flex w="100%" justify="center" flexWrap="wrap">
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
				</VStack>
			</ContainerInside>
		</Container>
	);
}
