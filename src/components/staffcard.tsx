/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	StackProps,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Executive } from "types";
import { parseText } from "util/parse_notion";
import Button from "./button";
// import { RiBoxingLine } from "react-icons/ri";

type StaffCardProps = {
	staff: Executive;
} & StackProps;

export default function StaffCard({
	staff: { name, image, title, tagline, biography },
	...props
}: StaffCardProps): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const taglineElement = tagline?.length ? (
		<Text
			as="q"
			position="relative"
			_before={{
				position: "absolute",
				top: "-0.3em",
				left: 0,
				fontSize: 22,
			}}
			_after={{
				position: "absolute",
				bottom: "-0.9em",
				right: 0,
				fontSize: 22,
			}}
			fontSize={14}
			p={2}
		>
			{tagline.map((s) =>
				React.cloneElement(parseText(s), {
					key: s.plain_text + JSON.stringify(s.annotations),
				})
			)}
		</Text>
	) : null;

	return (
		<VStack
			p={4}
			m={1}
			spacing={2}
			maxW={{ base: 200, lg: 300 }}
			{...props}
		>
			{biography?.length ? (
				<Center
					p={17}
					backgroundColor="brand.transparent"
					rounded={50}
					transition="0.25s ease transform"
					_hover={{
						transform: "scale(0.95)",
						cursor: "pointer",
					}}
					onClick={onOpen}
				>
					<Image
						alt={"Picture of " + name}
						objectFit="cover"
						// overflow="hidden"
						// position="relative"
						style={{ aspectRatio: "1" }}
						// objectPosition="top"
						src={image?.url ?? "/staff/default.png"}
						rounded={30}
					/>
				</Center>
			) : (
				<Center p={17} backgroundColor="brand.transparent" rounded={50}>
					<Image
						alt={"Picture of " + name}
						objectFit="cover"
						rounded={30}
						// overflow="hidden"
						// position="relative"
						style={{ aspectRatio: "1" }}
						// objectPosition="top"
						src={image?.url ?? "/staff/default.png"}
						onClick={onOpen}
					/>
				</Center>
			)}
			<Box>
				<Heading size="md">{name}</Heading>
				<Text flexWrap="wrap">{title}</Text>
			</Box>

			{taglineElement}
			{biography?.length ? (
				<Modal
					isOpen={isOpen}
					onClose={onClose}
					motionPreset="slideInBottom"
					size="6xl"
					isCentered
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{name}'s Bio</ModalHeader>
						<ModalCloseButton />

						<ModalBody>
							<Stack
								spacing={5}
								direction={{ base: "column", md: "row" }}
								maxH="75vh"
								justify="stretch"
								// maxW="100%"
							>
								<Stack
									flex={1}
									spacing={4}
									direction={{ base: "row", md: "column" }}
									align="center"
								>
									<Image
										alt={"Picture of " + name}
										objectFit="cover"
										rounded={30}
										style={{ aspectRatio: "1" }}
										src={image?.url ?? "/staff/default.png"}
										maxW={{ base: "33%", md: "100%" }}
									/>
									<VStack>
										<Heading size="lg">{name}</Heading>
										<Text as="i">{title}</Text>
										{taglineElement}
									</VStack>
								</Stack>
								<Box
									flex={2}
									overflowY="auto"
									pr={2}
									textAlign="justify"
								>
									{biography.map((s) =>
										React.cloneElement(parseText(s), {
											key:
												s.plain_text +
												JSON.stringify(s.annotations),
										})
									)}
								</Box>
							</Stack>
						</ModalBody>
						<ModalFooter>
							{/* <Button>Other action</Button> */}
							<Button onClick={onClose}>Close</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			) : null}
		</VStack>
	);
}
