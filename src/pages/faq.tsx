import { getFaqInfo } from "@api/notion";
import { Box, Flex, Heading } from "@chakra-ui/react";
import FaqList from "@components/contact/faq-list";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";
import { QASection } from "types";

export default function Contact({
	qaPairs: qaSections,
}: {
	qaPairs: QASection[];
}): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | FAQ</title>
			</Head>
			<Container>
				<ContainerInside>
					<Flex flexDirection="column" align="stretch">
						<Heading as="h1" size="xl" my={5}>
							FAQ
						</Heading>
						{qaSections.map((qaSection, idx: number) => {
							return (
								<Box key={"section_" + idx}>
									<Heading my={5} size="lg">
										{qaSection.title}
									</Heading>
									<FaqList list={qaSection.list} />
								</Box>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getStaticProps() {
	const qaPairs = await getFaqInfo();
	return { props: { qaPairs }, revalidate: 60 };
}
