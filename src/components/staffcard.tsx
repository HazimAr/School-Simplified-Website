/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Heading,
	Image,
	Stack,
	StackProps,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { Executive } from "types";
import { parseText } from "util/parse_notion";
// import { RiBoxingLine } from "react-icons/ri";

type StaffCardProps = {
	staff: Executive;
} & StackProps;

export default function StaffCard({
	staff: { name, image, title, biography },
	...props
}: StaffCardProps): JSX.Element {
	return (
		<Stack p={4} m={1} spacing={2} maxW={{ base: 200, lg: 300 }} {...props}>
			<Center p={17} backgroundColor="brand.transparent" rounded={50}>
				<Image
					rounded={30}
					style={{ aspectRatio: "1" }}
					alt={"Picture of " + name}
					objectFit="cover"
					// objectPosition="top"
					src={image?.url ?? "/staff/default.png"}
				/>
			</Center>
			<Box>
				<Heading size="md">{name}</Heading>
				<Text flexWrap="wrap">{title}</Text>
			</Box>
			{biography && (
				<Text fontSize={14}>
					{biography.map((s) =>
						React.cloneElement(parseText(s), { key: s.plain_text })
					)}
				</Text>
			)}
		</Stack>
	);
}
