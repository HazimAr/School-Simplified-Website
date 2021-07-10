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
	Link,
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { AllSubjects, Note } from "types";

export default function NotesSection({ subjects }: AllSubjects): JSX.Element {
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading mb={5}>Notes</Heading>
				<Flex>
					<Box mr={{ base: 2, md: 4 }} w={{ base: 150, md: 190 }}>
						<Heading size="md" mb={3} textAlign="left">
							Categories
						</Heading>
						<NotesTree subjects={subjects} />
					</Box>
					<NotesGrid subjects={subjects} />
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
		>
			{subjects.map((categoryFolder, cIdx: number) => {
				const [scValue, setSCValue] = React.useState(-1);
				return (
					<AccordionItem key={"_" + cIdx}>
						<AccordionButton
							textAlign="left"
							color="whiteAlpha.600"
							_expanded={{ color: "white" }}
							onClick={() => {
								setSCValue(-1);
							}}
						>
							<Heading size="sm">{categoryFolder.title}</Heading>
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
							>
								{categoryFolder.content.map(
									(subcategoryFolder, scIdx: number) => {
										const [uValue, setUValue] =
											React.useState(-1);
										return (
											<AccordionItem key={"__" + scIdx}>
												<AccordionButton
													textAlign="left"
													color="whiteAlpha.600"
													_expanded={{
														color: "white",
													}}
													onClick={() => {
														// set the value of the child dropdown, then call selected
														setSCValue(scIdx);
														setUValue(-1);
													}}
													py={1}
													pl={1}
												>
													{subcategoryFolder.title}
												</AccordionButton>
												<AccordionPanel
													pb={3}
													pl={2}
													borderLeftColor="white"
													borderLeftWidth={1}
												>
													{/* Accordion V2 */}
													<Accordion
														borderColor="transparent"
														index={uValue}
													>
														{subcategoryFolder.content.map(
															(
																unitFolder,
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
																					cIdx,
																					scIdx,
																					uIdx
																				);
																			}}
																			py={
																				1
																			}
																			pl={
																				1
																			}
																		>
																			{
																				unitFolder.title
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
									}
								)}
							</Accordion>
						</AccordionPanel>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}

var setCategory: (arg0: number) => void = (_e) => {},
	setSubcategory: (arg0: number) => void = (_e) => {},
	setUnit: (arg0: number) => void = (_e) => {};

/**
 * Called when a unit accordion button is clicked
 * @param category the category being selected
 * @param subcategory the subcategory being selected
 * @param unit the unit being selected
 */
function selected(category: number, subcategory: number, unit: number) {
	if (!setCategory) {
		console.warn("setGridTitle unset!");
		return;
	}

	if (!setSubcategory) {
		console.warn("setSubcategory unset!");
		return;
	}

	if (!setUnit) {
		console.warn("setUnit unset!");
		return;
	}

	// console.log("Selected " + category);
	setCategory(category);
	setSubcategory(subcategory);
	setUnit(unit);
}

/**
 * Generates the right panel of this section.
 * @returns the JSX element that represents the grid section on the right of the page
 */
function NotesGrid({ subjects }: AllSubjects): JSX.Element {
	const [category, setC] = React.useState(-1);
	setCategory = setC; // breaking the Rule of Hooks?
	const [subcategory, setSC] = React.useState(-1);
	setSubcategory = setSC; // breaking the Rule of Hooks?
	const [unit, setU] = React.useState(-1);
	setUnit = setU; // breaking the Rule of Hooks?

	const halal =
		subjects[category] &&
		subjects[category].content[subcategory] &&
		subjects[category].content[subcategory].content[unit];

	const innerTitleSize = useBreakpointValue({ base: "md", lg: "lg" }),
		inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });

	return (
		<Box flex={1}>
			<Flex
				justifyContent="space-between"
				flexDir={{ base: "column", md: "row" }}
				mb={5}
			>
				<Heading size={innerTitleSize} mb={3} flexShrink={0} mr={5}>
					{halal
						? subjects[category].content[subcategory].content[unit]
								.title
						: null}
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
					<Input placeholder="Search" bg="brand.transparent" />
				</InputGroup>
			</Flex>
			<Flex
				flexWrap={{ base: "nowrap", md: "wrap" }}
				flexDir={{ base: "column", md: "row" }}
				alignContent={{ base: "stretch", md: "flex-start" }}
				overflowY="scroll"
				h={500}
			>
				{halal
					? subjects[category].content[subcategory].content[
							unit
					  ].content.map((note, idx: number) => (
							<NotesBox
								title={note.title}
								href={note.href}
								key={"note_" + idx}
							/>
					  ))
					: null}
			</Flex>
		</Box>
	);
}

/**
 * What's needed to create a NotesBox object
 */

/**
 * Creates a notes box
 * @returns a JSX Element that displays the blurb of the notes
 */
function NotesBox(props: Note): JSX.Element {
	const sideLength = useBreakpointValue({
		base: "initial",
		md: 125,
		lg: 185,
	});
	return (
		<Link
			href={props.href}
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
				fontSize={{ base: 14, lg: 18 }}
				_hover={{ cursor: "pointer" }}
			>
				{props.title}
			</Center>
		</Link>
	);
}
