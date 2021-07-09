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
	SimpleGrid,
	useBreakpointValue,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { FaSearch } from "react-icons/fa";

type Categories = {
	[key: string]: string[];
};
const categories: Categories = {
	All: [],
	Math: [
		"All",
		"Algebra I",
		"Algebra II",
		"Geometry",
		"Trigonometry",
		"Calculus AB",
		"Calculus BC",
		"Multivariable Calculus",
	],
	Science: [
		"All",
		"Biology",
		"Chemistry",
		"Physics I",
		"Physics II",
		"Forensic Science",
	],
	History: ["All", "World History", "US History"],
	English: [
		"All",
		"English I",
		"English II",
		"English Language and Composition",
		"English Literature and Composition",
	],
	"Social Studies": ["All", "World Geography", "Human Geography"],
	"Foreign Languages": [
		"All",
		"Spanish I",
		"Spanish II",
		"Spanish Language and Composition",
		"Spanish Literature and Composition",
	],
	Electives: ["All", "Art History"],
};
const sortedKeys = Object.keys(categories).sort((a, b) => a.localeCompare(b));

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
			{sortedKeys.map((key, idx: number) => {
				const subcategories = categories[key];

				// if the category has child subcategories (i.e. not the "All" section)
				if (subcategories.length) {
					const [value, setValue] = React.useState(0);
					return (
						<AccordionItem key={"_" + idx}>
							<AccordionButton
								textAlign="left"
								color="whiteAlpha.600"
								_expanded={{ color: "white" }}
								onClick={() => {
									selected({ category: key });
									setValue(0);
								}}
							>
								<Heading size="sm">{key}</Heading>
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
									index={value}
								>
									{subcategories.map(
										(subcategory, index: number) => {
											return (
												<AccordionItem
													key={"__" + index}
												>
													<AccordionButton
														textAlign="left"
														color="whiteAlpha.600"
														_expanded={{
															color: "white",
														}}
														onClick={() => {
															// set the value of the child dropdown, then call selected
															setValue(index);
															selected({
																category: key,
																subcategory:
																	subcategory,
															});
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
				} else {
					// this should be the "All" category (or any other childless category)
					return (
						<AccordionItem key={"_" + idx}>
							<AccordionButton
								textAlign="left"
								color="whiteAlpha.600"
								_expanded={{ color: "white" }}
								onClick={() => {
									selected({ category: key });
								}}
							>
								<Heading size="sm">{key}</Heading>
							</AccordionButton>
						</AccordionItem>
					);
				}
			})}
		</Accordion>
	);
}

var setGridTitle: (arg0: string) => void = (_e) => {};

/**
 * Called when a category accordion button is clicked or a subcategory thing is clicked
 * @param category the category being selected
 * @param subcategory the subcategory being selected
 */
function selected({
	category,
	subcategory = "All",
}: {
	category: string;
	subcategory?: string;
}) {
	if (!setGridTitle) {
		console.warn("setGridTitle unset!");
		return;
	}

	// console.log("Selected " + category + "/" + subcategory);
	if (category === "All") {
		// The "All" category
		setGridTitle("All Notes");
	} else if (subcategory === "All") {
		// The "All" subcategory with other subcategories
		setGridTitle("All " + category + " Notes");
	} else {
		// Any other subcategory
		setGridTitle(subcategory + " Notes");
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
			<SimpleGrid columns={4}>
				<NotesBox title="Square" href="/" />
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
		<Link href={href}>
			<Center
				w={200}
				h={200}
				bg="brand.transparent"
				color="brand.purple.dark"
				fontSize={20}
			>
				{title}
			</Center>
		</Link>
	);
}
