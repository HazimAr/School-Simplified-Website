import { getScholarshipData } from "@api/notion";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { ScholarshipProps } from "types";

export default function Scholarship({
	scholarshipData,
}: {
	scholarshipData: ScholarshipProps[];
}): JSX.Element {
	return (
		<Container py={19}>
			<ContainerInside>
				<Heading>This page is temporary lol how did u find it</Heading>
				{scholarshipData.map((entry, i: number) => {
					return (
						<Flex key={i} py={2}>
							<Text width="100%" fontSize={10}>
								{entry.title}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.link}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.value}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.international_or_domestic}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.state}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.eligible_grades}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.open_date}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.closing_date}
							</Text>
							<Text width="100%" fontSize={10}>
								{entry.notes}
							</Text>
						</Flex>
					);
				})}
			</ContainerInside>
		</Container>
	);
}

export async function getServerSideProps() {
	const scholarshipData = await getScholarshipData();
	return { props: { scholarshipData } };
}
