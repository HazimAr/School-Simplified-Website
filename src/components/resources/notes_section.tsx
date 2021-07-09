import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
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
					<Flex alignItems="stretch">
						<Box mr={3}>
							<Divider orientation="vertical" bg="white" w={1} />
						</Box>
						<Box mb={2}>
							{sortedKeys.map((key, idx: number) => {
								const subcategories = categories[key];

								return (
									<>
										<Heading
											key={"_" + idx}
											textAlign="left"
											size="md"
											mt={2}
										>
											{key}
										</Heading>
										{subcategories.length ? (
											<Flex mt={1}>
												<Box mr={2}>
													<Divider
														orientation="vertical"
														bg="white"
													/>
												</Box>
												<Box>
													{subcategories.map(
														(
															subcategory,
															index: number
														) => {
															return (
																<Text
																	textAlign="left"
																	key={
																		"__" +
																		index
																	}
																>
																	{
																		subcategory
																	}
																</Text>
															);
														}
													)}
												</Box>
											</Flex>
										) : null}
									</>
								);
							})}
						</Box>
					</Flex>
				</Box>
			</ContainerInside>
		</Container>
	);
}
