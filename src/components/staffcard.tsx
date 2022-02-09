/* eslint-disable import/no-default-export */
import {
	Box,
	Center,
	Heading,
	HStack,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
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
			<Center p={17} backgroundColor="brand.transparent" rounded={50}>
				{biography?.length ? (
					<Box rounded={30} overflow="hidden">
						<Image
							alt={"Picture of " + name}
							objectFit="cover"
							// overflow="hidden"
							// position="relative"
							style={{ aspectRatio: "1" }}
							// objectPosition="top"
							src={image?.url ?? "/staff/default.png"}
							transition="0.25s ease transform"
							_hover={{
								transform: "scale(1.1)",
								cursor: "pointer",
							}}
							onClick={onOpen}
						/>
					</Box>
				) : (
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
				)}
			</Center>
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
					size="3xl"
					isCentered
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>{name}'s Bio</ModalHeader>
						<ModalCloseButton />

						<ModalBody>
							<HStack spacing={5}>
								<VStack flex={1}>
									<Image
										alt={"Picture of " + name}
										objectFit="cover"
										rounded={30}
										style={{ aspectRatio: "1" }}
										src={image?.url ?? "/staff/default.png"}
									/>
									<Heading size="lg" pt={4}>
										{name}
									</Heading>
									<Text as="i">{title}</Text>
									{taglineElement}
								</VStack>
								<Box flex={2}>
									{biography.map((s) =>
										React.cloneElement(parseText(s), {
											key:
												s.plain_text +
												JSON.stringify(s.annotations),
										})
									)}
								</Box>
							</HStack>
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
