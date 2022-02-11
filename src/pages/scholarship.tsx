import { getScholarshipData } from "@api/notion";
import { Heading, Table, Tbody, Td, Tr } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import { ScholarshipProps } from "types";

export default function Scholarship({
	scholarshipData,
}: {
	scholarshipData: ScholarshipProps[];
}): JSX.Element {
	return (
		<Container py={19}>
			<ContainerInside>
				<Heading>Scholarships</Heading>
				<Table size="sm">
					<Tbody>
						{scholarshipData.map((entry) => {
							return (
								<Tr key={entry.link} maxW="100%" fontSize={10}>
									<Td>
										<NextChakraLink href={entry.link}>
											{entry.title}
										</NextChakraLink>
									</Td>
									<Td></Td>
									<Td>{entry.value}</Td>
									<Td>{entry.international_or_domestic}</Td>
									<Td>{entry.state}</Td>
									<Td>{entry.eligible_grades}</Td>
									<Td>{entry.open_date}</Td>
									<Td>{entry.closing_date}</Td>
									<Td>{entry.notes}</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</ContainerInside>
		</Container>
	);
}

export async function getServerSideProps() {
	const scholarshipData = await getScholarshipData();
	return { props: { scholarshipData } };
}
