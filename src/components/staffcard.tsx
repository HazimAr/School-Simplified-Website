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
	staff: { name, image, title, tagline, biography },
	...props
}: StaffCardProps): JSX.Element {
	return (
		<Stack p={4} m={1} spacing={2} maxW={{ base: 200, lg: 300 }} {...props}>
			<Center p={17} backgroundColor="brand.transparent" rounded={50}>
				<Box
					rounded={30}
					overflow="hidden"
					position="relative"
					style={{ aspectRatio: "1" }}
				>
					<Image
						alt={"Picture of " + name}
						objectFit="cover"
						h="100%"
						w="100%"
						// objectPosition="top"
						src={image?.url ?? "/staff/default.png"}
					/>
					{biography?.length ? (
						<Center
							position="absolute"
							h="100%"
							w="100%"
							top={0}
							left={0}
							opacity={0}
							background="#0007"
							transition="0.2s ease all"
							_hover={{ opacity: 1 }}
						>
							<Text fontSize={14}>
								{biography.map((s) =>
									React.cloneElement(parseText(s), {
										key:
											s.plain_text +
											JSON.stringify(s.annotations),
									})
								)}
							</Text>
						</Center>
					) : null}
				</Box>
			</Center>
			<Box>
				<Heading size="md">{name}</Heading>
				<Text flexWrap="wrap">{title}</Text>
			</Box>
			{tagline?.length ? (
				<Text fontSize={14}>
					{tagline.map((s) =>
						React.cloneElement(parseText(s), {
							key: s.plain_text + JSON.stringify(s.annotations),
						})
					)}
				</Text>
			) : null}
		</Stack>
	);
}
