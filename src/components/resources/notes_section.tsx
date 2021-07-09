import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	useControllableState,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

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
	console.log("Selected " + category + "/" + subcategory);
}

export default function NotesSection(): JSX.Element {
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading>Notes</Heading>
				<Box>
					<Heading size="lg">Categories</Heading>

					{/* This is the tree area */}
					<NotesTree />
				</Box>
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
			{sortedKeys.map((key, idx: number) => {
				const subcategories = categories[key];

				// if the category has child subcategories (i.e. not the "All" section)
				if (subcategories.length) {
					const [value, setValue] = useControllableState({
						defaultValue: 0,
					});
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
								<Heading size="md">{key}</Heading>
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
								<Heading size="md">{key}</Heading>
							</AccordionButton>
						</AccordionItem>
					);
				}
			})}
		</Accordion>
	);
}
