import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Spinner,
	Text,
	useBoolean,
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { filter } from "fuzzaldrin-plus";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AllSubjects, NotesProps, Subject, Unit } from "types";

export default function NotesSection({ subjects }: AllSubjects): JSX.Element {
	const allNotes: NotesProps[] = subjects
		.map((subject) => subject.content)
		.flat()
		.map((clazz) => clazz.content)
		.flat()
		.map((unit) => unit.content)
		.flat();

	const [content, setContent] = React.useState<Unit | undefined>(undefined);

	return (
		<Container>
			<ContainerInside my={7}>
				{/* <Heading mb={5}>Notes</Heading> */}
				<Flex alignItems="stretch">
					<Box mr={{ base: 2, md: 4 }} w={{ base: 150, md: 190 }}>
						<Heading size="md" mb={3} textAlign="left">
							Categories
						</Heading>
						<NotesTree
							subjects={subjects}
							setContent={setContent}
						/>
					</Box>
					<NotesGrid allNotes={allNotes} content={content} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}

/**
 * Generates the left panel of this section.
 * @returns the JSX element that represents the tree section on the left of the page
 */
function NotesTree({
	subjects,
	setContent,
}: {
	subjects: Subject[];
	setContent: (arg0: Unit) => void;
}): JSX.Element {
	const [scValue, setSCValue] = React.useState(-1);
	const [uValue, setUValue] = React.useState(-1);
	return (
		<Accordion
			borderColor="transparent"
			borderLeftColor="white"
			borderLeftWidth={3}
			allowToggle
		>
			{subjects.map((subject, subIdx: number) => {
				return (
					<AccordionItem key={"_" + subIdx}>
						<AccordionButton
							textAlign="left"
							color="whiteAlpha.600"
							_expanded={{ color: "white" }}
							onClick={() => {
								setSCValue(-1);
							}}
							minW="fit-content"
						>
							<Heading size="sm" color="white">
								{subject.title}
							</Heading>
						</AccordionButton>
						<AccordionPanel
							pb={3}
							borderLeftColor="white"
							borderLeftWidth={1}
							ml={3}
						>
							{/* Create an Accordion object since it's easier that way */}
							<Accordion
								borderColor="transparent"
								index={scValue}
								allowToggle
							>
								{subject.content.map((clazz, cIdx: number) => {
									return (
										<AccordionItem key={"__" + cIdx}>
											<AccordionButton
												minW="fit-content"
												textAlign="left"
												color="whiteAlpha.600"
												_expanded={{
													color: "white",
												}}
												onClick={() => {
													setSCValue(cIdx);
													setUValue(-1);
												}}
												py={1}
												pl={1}
											>
												{clazz.title}
											</AccordionButton>
											<AccordionPanel
												pb={3}
												pl={2}
												borderLeftColor="white"
												borderLeftWidth={1}
												minW="fit-content"
											>
												{/* Accordion V2 */}
												<Accordion
													borderColor="transparent"
													index={uValue}
												>
													{clazz.content.map(
														(
															unit,
															uIdx: number
														) => {
															return (
																<AccordionItem
																	key={
																		"___" +
																		uIdx
																	}
																>
																	<AccordionButton
																		textAlign="left"
																		color="whiteAlpha.600"
																		_expanded={{
																			color: "white",
																		}}
																		onClick={() => {
																			// set the value of the child dropdown, then call selected
																			setUValue(
																				uIdx
																			);
																			setContent(
																				subjects[
																					subIdx
																				]
																					?.content[
																					cIdx
																				]
																					?.content[
																					uIdx
																				]
																			);
																		}}
																		py={1}
																		pl={1}
																		fontSize={
																			14
																		}
																		minW="fit-content"
																	>
																		{
																			unit.title
																		}
																	</AccordionButton>
																</AccordionItem>
															);
														}
													)}
												</Accordion>
											</AccordionPanel>
										</AccordionItem>
									);
								})}
							</Accordion>
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}

/**
 * Generates the right panel of this section.
 * @param allNotes all notes ever
 * @returns the JSX element that represents the grid section on the right of the page
 */
function NotesGrid({
	allNotes,
	content,
}: {
	allNotes: NotesProps[];
	content: Unit | undefined;
}): JSX.Element {
	// const lc: NotesPropsComparator = new FuzzyComparator(searchTerm);
	const [searchTerm, setSearchTerm] = useState("");
	const [loading, _setLoading] = useBoolean(false);

	const innerTitleSize = useBreakpointValue({ base: "md", lg: "lg" }),
		inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });

	const [searchWait, setSearchWait] = useState<ReturnType<
		typeof setTimeout
	> | null>(null);
	const filteredTerms = searchTerm.length
		? filter(allNotes, searchTerm, { key: "title" })
		: null;

	return (
		<Flex flex={1} flexDir="column">
			<Flex
				justifyContent="space-between"
				alignContent="center"
				flexDir={{ base: "column", md: "row" }}
				mb={5}
				flex={0}
			>
				<Heading
					size={innerTitleSize}
					mb={3}
					flexShrink={0}
					mr={{ base: 0, md: 5 }}
					maxW={{ base: "initial", md: "65%" }}
					textAlign={{ base: "center", md: "left" }}
				>
					{searchTerm.length
						? "Search"
						: content
						? content.title
						: "Welcome!"}
				</Heading>
				<InputGroup
					size={inputGroupSize}
					maxW={{ base: "initial", md: 350, lg: 500 }}
					flexShrink={1}
				>
					<InputLeftElement
						pointerEvents="none"
						children={<Icon as={FaSearch} boxSize={5} />}
					/>
					<Input
						placeholder="Search All"
						bg="brand.transparent"
						onChange={(e) => {
							if (searchWait) clearTimeout(searchWait);
							_setLoading.on();
							setSearchWait(
								setTimeout(() => {
									// console.log("Invoked with " + e.target.value);
									setSearchWait(null);
									_setLoading.off();
									setSearchTerm(e.target.value.trim());
								}, 500)
							);
						}}
					/>
					<InputRightElement
						pointerEvents="none"
						children={
							<Center h="100%">
								<Spinner size={inputGroupSize} />
							</Center>
						}
						display={loading ? "block" : "none"}
					/>
				</InputGroup>
			</Flex>
			<Flex
				flexWrap={{ base: "nowrap", md: "wrap" }}
				flexDir={{ base: "column", md: "row" }}
				alignContent={{ base: "stretch", md: "flex-start" }}
				overflowY="scroll"
				minH={500}
				flex={1}
			>
				{searchTerm.length ? (
					filteredTerms?.length ? (
						filteredTerms.map((note: NotesProps, idx: number) => (
							<NotesBox
								title={note.title}
								href={note.href}
								key={"note_" + idx}
							/>
						))
					) : (
						<Text as="i">No matches found</Text>
					)
				) : content && content.content.length ? (
					content.content.map((note, idx: number) => (
						<NotesBox
							title={note.title}
							href={note.href}
							key={"note_" + idx}
						/>
					))
				) : (
					<Text as="i">
						{content
							? "There's nothing here right now. Check back later!"
							: "Select one of the categories on the left to get started."}
					</Text>
				)}
			</Flex>
		</Flex>
	);
}

/**
 * Creates a notes box
 * @param props the props needed to generate this element
 * @returns a JSX Element that displays the blurb of the notes
 */
function NotesBox(props: NotesProps): JSX.Element {
	const sideLength = useBreakpointValue({
		base: "initial",
		md: 125,
		lg: 185,
	});

	return (
		<NextLink
			href={props.href}
			isExternal
			_hover={{ textDecoration: "none", cursor: "auto" }}
		>
			<Center
				w={sideLength}
				h={sideLength}
				borderRadius={25}
				mb={3}
				mr={3}
				p={3}
				bg="brand.transparent"
				color="brand.purple.dark"
				transition="all 0.2s ease"
				fontSize={{ base: 14, md: 12, lg: 18 }}
				_hover={{ cursor: "pointer", transform: "scale(0.95)" }}
				_active={{
					transform: "scale(0.90)",
				}}
				boxShadow="lg"
			>
				{props.title}
			</Center>
		</NextLink>
	);
}
