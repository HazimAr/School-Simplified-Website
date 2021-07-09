import {
	Accordion,
	AccordionButton,
	AccordionItem,
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Link,
	SimpleGrid,
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { FaSearch } from "react-icons/fa";

const categories: string[] = [
	"All",
	"Math",
	"Science",
	"History",
	"English",
	"Social Studies",
	"Foreign Languages",
	"Electives",
].sort((a, b) => a.localeCompare(b));

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
					<NotesGrid flex={1} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}

/**
 * Generates the left panel of this section.
 * @param props any extra props to supply to this element
 * @returns the JSX element that represents the tree section on the left of the page
 */
function NotesTree(props: any): JSX.Element {
	return (
		<Accordion
			borderColor="transparent"
			borderLeftColor="white"
			borderLeftWidth={3}
			defaultIndex={0}
			{...props}
		>
			{categories.map((category, idx: number) => {
				return (
					<AccordionItem key={"_" + idx}>
						<AccordionButton
							textAlign="left"
							color="whiteAlpha.600"
							_expanded={{ color: "white" }}
							onClick={() => {
								selected(category);
							}}
						>
							<Heading size="sm">{category}</Heading>
						</AccordionButton>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}

var setGridTitle: (arg0: string) => void = (_e) => {};
var setNoteCards: (arg0: NotesProps[]) => void = (_e) => {};

/**
 * Called when a category accordion button is clicked is clicked
 * @param category the category being selected
 */
function selected(category: string) {
	if (!setGridTitle) {
		console.warn("setGridTitle unset!");
		return;
	}

	if (!setNoteCards) {
		console.warn("setNoteCards unset!");
		return;
	}

	// console.log("Selected " + category);
	if (category === "All") {
		// The "All" category
		setGridTitle("All Notes");
	} else {
		// Any other category
		setGridTitle(category + " Notes");
	}

	setNoteCards(fetchNotes(category));
}

/**
 * Fetches from the backend (?) all notes blurbs to display for this page
 * @param category the category to fetch the notes blurbs for
 * @returns all relevant notes blurbs
 */
function fetchNotes(category: String): NotesProps[] {
	// filler for now; leaving open for backend integration
	if (category.length) {
		// console.log("fetchNotes invoked");
		return [
			{ title: "Interesting thing #1", href: "/" },
			{ title: "Interesting thing #2", href: "/" },
			{ title: "Interesting thing #3", href: "/" },
			{ title: "Interesting thing #4", href: "/" },
			{ title: "Interesting thing #5", href: "/" },
			{ title: "Interesting thing #6", href: "/" },
			{ title: "Interesting thing #7", href: "/" },
		];
	} else {
		// console.log("blank invoked");
		return [];
	}
}

/**
 * Generates the right panel of this section.
 * @param props any extra props to supply to this element
 * @returns the JSX element that represents the grid section on the right of the page
 */
function NotesGrid(props: any): JSX.Element {
	const [gridTitle, setGT] = React.useState("All Notes");
	setGridTitle = setGT; // breaking the Rule of Hooks?
	const [notes, setN] = React.useState(fetchNotes(""));
	setNoteCards = setN; // breaking the Rule of Hooks?

	const innerTitleSize = useBreakpointValue({ base: "md", lg: "lg" }),
		inputGroupSize = useBreakpointValue({ base: "sm", lg: "md" });

	return (
		<Box {...props}>
			<Flex
				justifyContent="space-between"
				flexDir={{ base: "column", md: "row" }}
			>
				<Heading size={innerTitleSize} mb={3} flexShrink={0} mr={5}>
					{gridTitle}
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
			<SimpleGrid columns={4} spacing={3}>
				{notes.map((note, idx: number) => (
					<NotesBox
						title={note.title}
						href={note.title}
						key={"note_" + idx}
					/>
				))}
			</SimpleGrid>
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
function NotesBox({ title, href }: NotesProps): JSX.Element {
	return (
		<Link
			href={href}
			_hover={{ textDecoration: "none" }}
			pointerEvents="none"
		>
			<Center
				w={150}
				h={150}
				borderRadius={25}
				bg="brand.transparent"
				color="brand.purple.dark"
				fontSize={18}
				pointerEvents="auto"
			>
				{title}
			</Center>
		</Link>
	);
}
