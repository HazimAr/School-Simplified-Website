import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	BoxProps,
	Button,
	Divider,
	Heading,
	SimpleGrid,
	Spacer,
	Stack,
	StackProps,
	Text,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
// import { Document, Page } from "react-pdf/dist/umd/entry.parcel";
import { AllSubjects, NotesProps, Subject } from "types";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

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
				<SimpleGrid gap={3} columns={subjects.length}>
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
					<SimpleGrid gap={6} columns={2}>
						<NotesDropdown
							subject={subjects.find(
								(value) => value.title === subject
							)}
							onNotesSelect={(notes) => setPdfURL(notes.href)}
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
										<Spacer />
										<AccordionIcon />
									</AccordionButton>
									<AccordionPanel
										bg="#656BB8CC"
										px={4}
										py={2}
									>
										<Stack spacing={1}>
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
	useEffect(() => {
		setNumPages(null);
	}, [pdfURL]);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<Stack
			{...stackProps}
			textAlign="left"
			spacing={0}
			rounded={5}
			overflow="hidden"
		>
			<Heading bg="brand.darkerBlue" size="sm" p={3}>
				Notes Preview
			</Heading>
			<Box bg="#5A60ADCC" px={8} py={3} borderBottomRadius={5}>
				{pdfURL ? (
					<Box position="relative">
						<Document
							file={pdfURL}
							onLoadSuccess={onDocumentLoadSuccess}
							onLoadError={console.error}
						>
							<Page pageNumber={pageNumber} />
						</Document>
						<Box
							position="absolute"
							top={0}
							left={0}
							h="100%"
							w="50%"
							onClick={() => {
								if (numPages > 0) setPageNumber(numPages - 1);
							}}
						/>
						<Box
							position="absolute"
							top={0}
							right={0}
							h="100%"
							w="50%"
							onClick={() => {
								if (numPages < numPages - 1)
									setPageNumber(numPages + 1);
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
