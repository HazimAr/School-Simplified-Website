import { Heading } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const categories = {
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

export default function NotesSection(): JSX.Element {
	return (
		<Container>
			<ContainerInside my={5}>
				<Heading>Notes</Heading>
			</ContainerInside>
		</Container>
	);
}
