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
	Image,
	SimpleGrid,
	Spacer,
	Stack,
	StackProps,
	Text,
	VisuallyHidden,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { useContainerDimensions } from "@hooks/useContainerDimensions";
import { useEffect, useRef, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { AllSubjects, NotesProps, Subject } from "types";

// use minified worker file
// for more documentation on this package, visit
// https://github.com/wojtekmaj/react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.min.js";

type NotesViewerProps = AllSubjects & BoxProps;

export default function NotesViewer({
	subjects,
	...boxProps
}: NotesViewerProps): JSX.Element {
	const [subject, setSubject] = useState("");
	const [pdfURL, setPdfURL] = useState(null);
	return (
		<Container {...boxProps}>
			<ContainerInside>
				<SimpleGrid gap={3} columns={{ base: 1, md: subjects.length }}>
					{subjects.map((s: Subject) => (
						<Button
							key={s.title}
							onClick={() => {
								setSubject(s.title);
								setPdfURL(null);
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
							onNotesSelect={(notes) =>
								setPdfURL(notes.file?.url ?? "")
							}
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
			<Accordion bg="#5A60ADCC" px={8} py={3} allowMultiple>
				{subject.content.map((clazz) => (
					<AccordionItem
						key={clazz.title}
						borderColor="brand.darkerBlue"
					>
						<AccordionButton p={2} bg="#53599F">
							{clazz.icon?.type === "emoji" ? (
								<Center h="1.25em" lineHeight={1.25} mr={2}>
									<Text
										w="1.25em"
										role="img"
										textAlign="center"
									>
										{clazz.icon.emoji}
									</Text>
								</Center>
							) : clazz.icon?.type === "file" ? (
								<Center h="1.25em" mr={2}>
									<Image
										w="1.25em"
										src={clazz.icon.file.url}
										alt={`Icon for ${clazz.title}`}
									/>
								</Center>
							) : (
								<Box w="1.25em" />
							)}
							<Heading size="sm">{clazz.title}</Heading>
							<Spacer minW={10} />
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel px={0} pt={0} pb={1.5}>
							<Accordion bg="#5A60ADCC" allowMultiple>
								{clazz.content.map((unit) => (
									<AccordionItem
										borderColor="#656BB8CC"
										key={unit.title}
									>
										<AccordionButton
											py={1.5}
											px={3}
											bg="#585EAB"
											_hover={{ bg: "#fff1" }}
										>
											<Text
												fontSize={16}
												textAlign="left"
											>
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
															background: "#fff3",
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
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Stack>
	);
}

type NotesPreviewProps = { pdfURL: string } & StackProps;

function NotesPreview({
	pdfURL,
	...stackProps
}: NotesPreviewProps): JSX.Element {
	const [numPages, setNumPages] = useState(null);
	const pdfBox = useRef<HTMLDivElement>();
	const { width } = useContainerDimensions(pdfBox);
	useEffect(() => {
		setNumPages(null);
	}, [pdfURL]);

	function onDocumentLoadSuccess(success: any) {
		// console.log("loaded successfully!", success);
		setNumPages(success.numPages);
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
					<Document
						file={pdfURL}
						onLoadSuccess={onDocumentLoadSuccess}
						onLoadError={console.error}
						error={
							<Text>
								Sorry, we were unable to load a preview of the
								document.
								<br />
								You can still access the file using the button
								in the top right corner or by clicking{" "}
								<NextChakraLink href={pdfURL} isExternal>
									<Text as="u">here</Text>
								</NextChakraLink>
								.
							</Text>
						}
						externalLinkTarget="_blank"
					>
						<Box
							overflowX="hidden"
							overflowY="scroll"
							style={{ aspectRatio: "17/22" }}
						>
							<Stack overflow="visible" ref={pdfBox}>
								{[...Array(numPages).keys()].map((i) => (
									<Page
										pageIndex={i}
										width={width}
										error={`Sorry, we were unable to load page #${
											i + 1
										}.`}
										key={i}
									/>
								))}
							</Stack>
						</Box>
					</Document>
				) : pdfURL === "" ? (
					<Text as="i">
						We are working on this particular set of notes. Please
						check back later!
					</Text>
				) : (
					<Text as="i">Please select a document from the left!</Text>
				)}
			</Box>
		</Stack>
	);
}
