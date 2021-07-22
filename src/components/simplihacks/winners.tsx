import { Box } from "@chakra-ui/react"
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import ProjectCard from "@components/simplihacks/projectcard"
import React from "react";
import { ProjectWinner } from "types";

const winners: ProjectWinner[] = [
	{
		names: "Ayush Agarwal, Krushay Bhavsar",
		title: "Signslate",
		prize: "1st Place",
		link: "https://devpost.com/software/signslate",
		img: "Joe",
	},
	{
		names: "Ananya Jajoo, Angelina Tsuboi, Bhavya Modi",
		title: "Pocket CPR",
		prize: "2nd Place",
		link: "https://devpost.com/software/pocket-cpr-ros5qh",
		img: "Joe",
	},
	{
		names: "Sirini Karunadasa",
		title: "International Gardener",
		prize: "3rd Place",
		link: "https://devpost.com/software/international-gardener",
		img: "Joe",
	},
	{
		names: "Janine Jimenez, Tye Maxson, Ziyan Liu, Connie Guo",
		title: "Study4Change",
		prize: "Best Education",
		link: "https://devpost.com/software/study4change",
		img: "Joe",
	},
	{
		names: "Asrith Sreeram",
		title: "XTrack",
		prize: "Best Social Good",
		link: "https://devpost.com/software/xtrack",
		img: "Joe",
	},
	{
		names: "Hazim Arafa, Connie Z, bonnie :p, Loid :)",
		title: "Anon-Therapy",
		prize: "Best Beginner",
		link: "https://devpost.com/software/anon-therapy",
		img: "Joe",
	},
	{
		names: "Deorah ",
		title: "SeniorSafety",
		prize: "Best Solo Project",
		link: "https://devpost.com/software/seniorsafety",
		img: "Joe",
	},
];

export default function Winners(): JSX.Element {
	return <></>;
}
