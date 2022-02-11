import { getScholarshipData } from "@api/notion";
import { Heading, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakra";
import RotatingPanel from "@components/rotatingPanel";
import { ScholarshipProps } from "types";
import Four from "@pages/404";

export default function Scholarship({
	scholarshipData,
}: {
	scholarshipData: ScholarshipProps[];
}): JSX.Element {
	return (
		<Four></Four> || (
			<Container py={19}>
				<ContainerInside>
					<Heading>Scholarships</Heading>
					<Text as="i">This page should be invisible...</Text>

					{/* <Table size="sm">
					<Tbody>
						{scholarshipData.map((entry) => {
							return (
								<Tr key={entry.link} maxW="100%" fontSize={10}>
									<Td>
										<NextChakraLink href={entry.link}>
											{entry.title}
										</NextChakraLink>
									</Td>
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
				</Table> */}

					<RotatingPanel
						Element={Panel}
						innerPanelProps={scholarshipData}
						viewPortHeight={500}
						mt={16}
					/>
				</ContainerInside>
			</Container>
		)
	);
}

function Panel(props: ScholarshipProps) {
	return (
		<NextChakraLink href={props.link}>
			<VStack>
				<Heading size="sm">{props.title}</Heading>
				<Text>{props.value}</Text>
				<Text>{props.international_or_domestic}</Text>
				<Text>{props.state}</Text>
				<Text>{props.eligible_grades}</Text>
				<Text>{props.open_date}</Text>
				<Text>{props.closing_date}</Text>
				<Text>{props.notes}</Text>
			</VStack>
		</NextChakraLink>
	);
}

export async function getServerSideProps() {
	const scholarshipData = await getScholarshipData();
	return { props: { scholarshipData } };
}
