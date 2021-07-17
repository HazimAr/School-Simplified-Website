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
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Link,
	Text,
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { filter } from "fuzzaldrin";
import React from "react";
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
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading mb={5}>Notes</Heading>
				<Flex alignItems="stretch">
					<Box mr={{ base: 2, md: 4 }} w={{ base: 150, md: 190 }}>
						<Heading size="md" mb={3} textAlign="left">
							Categories
						</Heading>
						<NotesTree subjects={subjects} />
					</Box>
					<NotesGrid allNotes={allNotes} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}

/**
 * Generates the left panel of this section.
 * @returns the JSX element that represents the tree section on the left of the page
 */
function NotesTree({ subjects }: AllSubjects): JSX.Element {
	return (
		<Accordion
			borderColor="transparent"
			borderLeftColor="white"
			borderLeftWidth={3}
			allowToggle
		>
			{subjects.map((subject, subIdx: number) => {
				const [scValue, setSCValue] = React.useState(-1);
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
							<Heading size="sm">{subject.title}</Heading>
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
									const [uValue, setUValue] =
										React.useState(-1);
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
																			selected(
																				subjects,
																				subIdx,
																				cIdx,
																				uIdx
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

let setContent: (arg0: Unit) => void = (_e) => {},
	setSearchTerm: (arg0: string) => void = (_e) => {};

/**
 * Called when a unit accordion button is clicked or an update to the unit view should be rendered
 * @param subjects all subjects
 * @param subject the subject being selected
 * @param clazz the class being selected
 * @param unit the unit being selected
 */
function selected(
	subjects: Subject[],
	subject: number,
	clazz: number,
	unit: number
) {
	if (!setContent) {
		console.warn("setContent unset!");
		return;
	}

	setContent(subjects[subject]?.content[clazz]?.content[unit]);
}

/**
 * Generates the right panel of this section.
 * @param allNotes all notes ever
 * @returns the JSX element that represents the grid section on the right of the page
 */
function NotesGrid({ allNotes }: { allNotes: NotesProps[] }): JSX.Element {
	const [content, setC] = React.useState<Unit | undefined>(undefined);
	setContent = setC;
	const [searchTerm, setST] = React.useState("");
	setSearchTerm = setST;

	// const lc: NotesPropsComparator = new FuzzyComparator(searchTerm);

	const innerTitleSize = useBreakpointValue({ base: "md", lg: "lg" }),
		inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });

	let searchWait: ReturnType<typeof setTimeout> | null = null;
	const filteredTerms = searchTerm.length
		? filter(allNotes, searchTerm, { key: "title" })
		: null;

	return (
		<Flex flex={1} flexDir="column">
			<Flex
				justifyContent="space-between"
				flexDir={{ base: "column", md: "row" }}
				mb={5}
				flex={0}
			>
				<Heading size={innerTitleSize} mb={3} flexShrink={0} mr={5}>
					{content
						? searchTerm.length
							? "Search"
							: content.title
						: "Welcome!"}
				</Heading>
				<InputGroup
					size={inputGroupSize}
					maxW={{ base: 250, sm: 300, lg: 500 }}
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
							const loading = document.getElementById("loading");
							if (loading) {
								if (searchWait !== null)
									clearTimeout(searchWait);
								loading.style.display = "block";
								searchWait = setTimeout(() => {
									// console.log("Invoked with " + e.target.value);
									searchWait = null;
									loading.style.display = "none";
									setSearchTerm(e.target.value.trim());
								}, 500);
							}
						}}
					/>
					<InputRightElement
						pointerEvents="none"
						children={<Image src="/loading.svg" />}
						id="loading"
						display="none"
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
					filteredTerms ? (
						filteredTerms.map((note: NotesProps, idx: number) => (
							<NotesBox
								title={note.title}
								href={note.href}
								lastEdited={note.lastEdited}
								key={"note_" + idx}
							/>
						))
					) : (
						<Text fontStyle="italic">No matches found</Text>
					)
				) : content && content.content.length ? (
					content.content.map((note, idx: number) => (
						<NotesBox
							title={note.title}
							href={note.href}
							lastEdited={note.lastEdited}
							key={"note_" + idx}
						/>
					))
				) : (
					<Text fontStyle="italic">
						Select one of the categories on the left to start!
					</Text>
				)}
			</Flex>
		</Flex>
	);
}

/**
 * The date and time formatter
 */
const dateTimeFormatter = new Intl.DateTimeFormat("en-US");

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

	if (props.lastEdited) {
		return (
			<Link
				href={props.href}
				isExternal
				_hover={{ textDecoration: "none", cursor: "auto" }}
				_active={{ outline: "none" }}
			>
				<Flex
					w={sideLength}
					h={sideLength}
					borderRadius={25}
					mb={3}
					mr={3}
					p={3}
					bg="brand.transparent"
					color="brand.purple.dark"
					transition="all 0.2s ease"
					_hover={{ cursor: "pointer", transform: "scale(0.95)" }}
					_active={{
						transform: "scale(0.90)",
					}}
					flexDir="column"
					boxShadow="lg"
				>
					<Center flex={1} fontSize={{ base: 14, md: 12, lg: 18 }}>
						{props.title}
					</Center>
					<Text
						fontStyle="italic"
						textAlign={{ base: "center", md: "right" }}
						flex={0}
						fontSize={{ base: 12, md: 10, lg: 14 }}
					>
						Last edited{" "}
						{dateTimeFormatter.format(new Date(props.lastEdited))}
					</Text>
				</Flex>
			</Link>
		);
	} else
		return (
			<Link
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
					fontSize={{ base: 14, md: 12, lg: 18 }}
					_hover={{ cursor: "pointer" }}
				>
					{props.title}
				</Center>
			</Link>
		);
}
