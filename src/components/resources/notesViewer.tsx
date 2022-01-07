import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	BoxProps,
	Button,
	Center,
	Divider,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Spacer,
	Stack,
	StackProps,
	Text,
	VisuallyHidden,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { useContainerDimensions } from "@hooks/useContainerDimensions";
import { useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import { AllSubjects, NotesProps, Subject } from "types";

type NotesViewerProps = AllSubjects & BoxProps;

export default function NotesViewer({
	subjects,
	...boxProps
}: NotesViewerProps): JSX.Element {
	const [subject, setSubject] = useState("");
	const [pdfURL, setPdfURL] = useState("");
	return (
		<Container {...boxProps}>
			<ContainerInside>
				<SimpleGrid gap={3} columns={{ base: 1, md: subjects.length }}>
					{subjects.map((s: Subject) => (
						<Button
							key={s.title}
							onClick={() => {
								setSubject(s.title);
								setPdfURL("");
							}}
							bg={subject === s.title ? "white" : "transparent"}
							color={subject === s.title ? "brand.blue" : "white"}
							borderWidth={3}
							borderColor="white"
							pointerEvents={subject === s.title ? "none" : null}
						>
							{s.title}
						</Button>
					))}
				</SimpleGrid>
				<Divider mt={8} mb={14} borderColor="white" />
				{subject ? (
					<SimpleGrid gap={6} columns={{ base: 1, md: 2 }}>
						<NotesDropdown
							subject={subjects.find(
								(value) => value.title === subject
							)}
							onNotesSelect={(notes) => setPdfURL(notes.file.url)}
						/>
						<NotesPreview pdfURL={pdfURL} />
					</SimpleGrid>
				) : (
					<Text as="i">Select a subject above to get started!</Text>
				)}
			</ContainerInside>
		</Container>
	);
}

type NotesDropdownProps = {
	subject: Subject;
	onNotesSelect: (a: NotesProps) => void;
} & StackProps;

function NotesDropdown({
	subject,
	onNotesSelect,
	...stackProps
}: NotesDropdownProps): JSX.Element {
	return (
		<Stack
			{...stackProps}
			textAlign="left"
			spacing={0}
			rounded={5}
			overflow="hidden"
		>
			<Heading size="md" p={3} bg="brand.darkerBlue">
				{subject.title}
			</Heading>
			<VStack bg="#5A60ADCC" px={8} py={3} align="stretch" spacing={1.5}>
				{subject.content.map((clazz) => (
					<Box key={clazz.title}>
						<Heading size="sm" p={2} bg="#53599F" mb={1.5}>
							{clazz.title}
						</Heading>
						<Accordion bg="#5A60ADCC" allowMultiple>
							{clazz.content.map((unit) => (
								<AccordionItem border="none" key={unit.title}>
									<AccordionButton p={1.5} bg="#585EAB">
										<Text fontSize={16} textAlign="left">
											{unit.title}
										</Text>
										<Spacer minW={10} />
										<AccordionIcon />
									</AccordionButton>
									<AccordionPanel bg="#656BB8CC" p={2}>
										<Stack spacing={0}>
											{unit.content.map((notes) => (
												<Box
													onClick={() =>
														onNotesSelect(notes)
													}
													fontSize={14}
													transition="all 0.2s ease"
													_hover={{
														background: "#fff5",
														cursor: "pointer",
													}}
													key={notes.title}
													px={2}
													py={0.5}
												>
													{notes.title}
												</Box>
											))}
										</Stack>
									</AccordionPanel>
								</AccordionItem>
							))}
						</Accordion>
					</Box>
				))}
			</VStack>
		</Stack>
	);
}

type NotesPreviewProps = { pdfURL: string } & StackProps;

function NotesPreview({
	pdfURL,
	...stackProps
}: NotesPreviewProps): JSX.Element {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const pdfBox = useRef<HTMLDivElement>();
	const { width } = useContainerDimensions(pdfBox);
	useEffect(() => {
		setNumPages(null);
		setPageNumber(1);
	}, [pdfURL]);

	function onDocumentLoadSuccess(egg: any) {
		// console.log("loaded successfully!", egg);
		setNumPages(egg.numPages);
	}

	return (
		<Stack
			{...stackProps}
			textAlign="left"
			spacing={0}
			rounded={5}
			overflow="hidden"
		>
			<HStack p={3} bg="brand.darkerBlue">
				<Heading size="sm">Notes Preview</Heading>
				<Spacer />
				{pdfURL ? (
					<NextChakraLink href={pdfURL} isExternal>
						<Center>
							<Icon
								as={FaFileDownload}
								color="brand.yellow"
								transition="all 0.2s ease"
								_hover={{
									color: "white",
									transform: "scale(1.15)",
								}}
								_active={{ transform: "scale(1)" }}
							/>
							<VisuallyHidden>Download</VisuallyHidden>
						</Center>
					</NextChakraLink>
				) : null}
			</HStack>
			<Box bg="#5A60ADCC" px={8} py={3} borderBottomRadius={5}>
				{pdfURL ? (
					<Box position="relative" ref={pdfBox}>
						<Document
							file={pdfURL}
							onLoadSuccess={onDocumentLoadSuccess}
							onLoadError={console.error}
						>
							<Page pageNumber={pageNumber} width={width} />
						</Document>
						<Box
							position="absolute"
							top={0}
							left={0}
							h="100%"
							w="50%"
							onClick={() => {
								// console.log(
								// 	"left clicked",
								// 	pageNumber,
								// 	numPages
								// );
								if (pageNumber > 1)
									setPageNumber(pageNumber - 1);
							}}
						/>
						<Box
							position="absolute"
							top={0}
							right={0}
							h="100%"
							w="50%"
							onClick={() => {
								// console.log(
								// 	"right clicked",
								// 	pageNumber,
								// 	numPages
								// );
								if (pageNumber < numPages)
									setPageNumber(pageNumber + 1);
							}}
						/>
					</Box>
				) : (
					<Text as="i">Please select a file from the left!</Text>
				)}
			</Box>
		</Stack>
	);
}
