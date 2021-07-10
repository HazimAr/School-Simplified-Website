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

type AllNotes = {
	[category: string]: {
		[subcategory: string]: { [unit: string]: NotesProps[] }[];
	}[];
};

/**
 * Fetches from the backend (?) all notes blurbs to display for this page
 * @returns all notes blurbs
 */
function fetchNotes(): AllNotes {
	// filler for now; leaving open for backend integration
	// console.log("fetchNotes invoked");
	return {
		Math: [
			{
				"Algebra I": [
					{
						Quadratics: [
							{ title: "Interesting thing #1", href: "/s" },
							{ title: "Interesting thing #2", href: "/a" },
							{ title: "Interesting thing #3", href: "/a" },
							{ title: "Interesting thing #4", href: "/f" },
							{ title: "Interesting thing #5", href: "/e" },
							{ title: "Interesting thing #6", href: "/v" },
							{ title: "Interesting thing #7", href: "/w" },
						],
					},
				],
			},
		],
	};
}

const allNotes = fetchNotes();

export default function NotesSection(): JSX.Element {
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading mb={5}>Notes</Heading>
				<Flex>
					<Box flex={0} mr={5}>
						<Heading size="md" mb={3} textAlign="left">
							Categories
						</Heading>
						<NotesTree />
					</Box>
					<NotesGrid />
				</Flex>
			</ContainerInside>
		</Container>
	);
}

/**
 * Generates the left panel of this section.
 * @returns the JSX element that represents the tree section on the left of the page
 */
function NotesTree(): JSX.Element {
	return (
		<Accordion
			borderColor="transparent"
			borderLeftColor="white"
			borderLeftWidth={3}
		>
			{Object.keys(allNotes).map((category, idx: number) => {
				const [value, setValue] = React.useState(-1);
				return (
					<AccordionItem key={"_" + idx}>
						<AccordionButton
							textAlign="left"
							color="whiteAlpha.600"
							_expanded={{ color: "white" }}
							onClick={() => {
								setValue(-1);
							}}
						>
							<Heading size="sm">{category}</Heading>
						</AccordionButton>
						<AccordionPanel
							pb={3}
							borderLeftColor="white"
							borderLeftWidth={1}
							ml={3}
						>
							{/* Create an Accordion object since it's easier that way */}
							<Accordion borderColor="transparent" index={value}>
								{Object.keys(allNotes[category]).map(
									(subcategory, index: number) => {
										return (
											<AccordionItem key={"__" + index}>
												<AccordionButton
													textAlign="left"
													color="whiteAlpha.600"
													_expanded={{
														color: "white",
													}}
													onClick={() => {
														// set the value of the child dropdown, then call selected
														setValue(index);
														selected(
															category,
															subcategory
														);
													}}
													py={1}
													pl={1}
												>
													{subcategory}
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
	);
}

var setCategory: (arg0: string) => void = (_e) => {},
	setSubcategory: (arg0: string) => void = (_e) => {};

/**
 * Called when a category accordion button is clicked is clicked
 * @param category the category being selected
 * @param subcategory the subcategory being selected
 */
function selected(category: string, subcategory: string) {
	if (!setCategory) {
		console.warn("setGridTitle unset!");
		return;
	}

	if (!setSubcategory) {
		console.warn("setSubcategory unset!");
		return;
	}

	// console.log("Selected " + category);
	setCategory(category);
	setSubcategory(subcategory);
}

/**
 * Generates the right panel of this section.
 * @returns the JSX element that represents the grid section on the right of the page
 */
function NotesGrid(): JSX.Element {
	const [category, setC] = React.useState("");
	setCategory = setC; // breaking the Rule of Hooks?
	const [subcategory, setSC] = React.useState("");
	setSubcategory = setSC; // breaking the Rule of Hooks?

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
					{subcategory}
				</Heading>
				<InputGroup
					size={inputGroupSize}
					maxW={{ base: 300, lg: 500 }}
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
				flexWrap="wrap"
				flexDir={{ base: "column", md: "row" }}
				alignContent="flex-start"
				overflowY="scroll"
				h={500}
			>
				{allNotes[category] && allNotes[category][subcategory]
					? allNotes[category][subcategory].map(
							(note, idx: number) => (
								<NotesBox
									title={note.title}
									href={note.href}
									key={"note_" + idx}
								/>
							)
					  )
					: null}
			</Flex>
		</Box>
	);
}

/**
 * What's needed to create a NotesBox object
 */
type NotesProps = {
	title: string;
	href: string;
};

/**
 * Creates a notes box
 * @returns a JSX Element that displays the blurb of the notes
 */
function NotesBox(props: NotesProps): JSX.Element {
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
