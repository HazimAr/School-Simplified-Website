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
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { FaSearch } from "react-icons/fa";

const categories: string[] = [
	"All",
	"Electives",
	"English",
	"Foreign Languages",
	"History",
	"Math",
	"Science",
	"Social Studies",
];

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
			defaultIndex={0}
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

var setCategory: (arg0: string) => void = (_e) => {};

/**
 * Called when a category accordion button is clicked is clicked
 * @param category the category being selected
 */
function selected(category: string) {
	if (!setCategory) {
		console.warn("setGridTitle unset!");
		return;
	}

	// console.log("Selected " + category);
	setCategory(category);
}

type AllNotes = {
	[category: string]: NotesProps[];
};

/**
 * Fetches from the backend (?) all notes blurbs to display for this page
 * @returns all notes blurbs
 */
function fetchNotes(): AllNotes {
	// filler for now; leaving open for backend integration
	// console.log("fetchNotes invoked");
	return {
		Electives: [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
		English: [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
		"Foreign Languages": [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
		History: [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
		Math: [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
		Science: [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
		"Social Studies": [
			{ title: "Interesting thing #1", href: "/s" },
			{ title: "Interesting thing #2", href: "/a" },
			{ title: "Interesting thing #3", href: "/a" },
			{ title: "Interesting thing #4", href: "/f" },
			{ title: "Interesting thing #5", href: "/e" },
			{ title: "Interesting thing #6", href: "/v" },
			{ title: "Interesting thing #7", href: "/w" },
		],
	};
}

const allNotes = fetchNotes();

/**
 * Generates the right panel of this section.
 * @returns the JSX element that represents the grid section on the right of the page
 */
function NotesGrid(): JSX.Element {
	const [category, setC] = React.useState("All");
	setCategory = setC; // breaking the Rule of Hooks?

	const notes =
		category === "All"
			? Object.values(allNotes).flat()
			: allNotes[category];

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
					{category}
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
			<Flex flexWrap="wrap" flexDir={{ base: "column", md: "row" }}>
				{notes.map((note, idx: number) => (
					<NotesBox
						title={note.title}
						href={note.href}
						key={"note_" + idx}
					/>
				))}
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
	return (
		<Link
			href={props.href}
			_hover={{ textDecoration: "none", cursor: "auto" }}
		>
			<Center
				w={{ base: "initial", md: 150, lg: 175 }}
				h={{ base: "initial", md: 150, lg: 175 }}
				borderRadius={25}
				mb={3}
				mr={3}
				p={3}
				bg="brand.transparent"
				color="brand.purple.dark"
				fontSize={{ base: 14, md: 18 }}
				_hover={{ cursor: "pointer" }}
			>
				{props.title}
			</Center>
		</Link>
	);
}
