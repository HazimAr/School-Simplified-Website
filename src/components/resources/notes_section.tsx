import {
	Accordion,
	AccordionButton,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text
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

export default function NotesSection(): JSX.Element {
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading>Notes</Heading>
				<Box>
					<Heading size="lg">Categories</Heading>

					{/* This is the tree area */}
					<Accordion
						borderColor="transparent"
						borderLeftColor="white"
						borderLeftWidth={3}
					>
						{sortedKeys.map((key, idx: number) => {
							const subcategories = categories[key];
							return (
								<AccordionItem key={"_" + idx}>
									<AccordionButton
										textAlign="left"
										color="whiteAlpha.600"
										_expanded={{ color: "white" }}
									>
										<Heading size="md">{key}</Heading>
									</AccordionButton>
									{subcategories.length ? (
										<AccordionPanel
											pb={3}
											borderLeftColor="white"
											borderLeftWidth={1}
											ml={3}
										>
											{subcategories.map(
												(
													subcategory,
													index: number
												) => {
													return (
														<Text
															textAlign="left"
															key={"__" + index}
														>
															{subcategory}
														</Text>
													);
												}
											)}
										</AccordionPanel>
									) : null}
								</AccordionItem>
							);
						})}
					</Accordion>
				</Box>
			</ContainerInside>
		</Container>
	);
}
