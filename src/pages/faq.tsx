import { getFaqInfo } from "@api/notion";
import { Flex, Heading } from "@chakra-ui/react";
import FaqList from "@components/contact/faq-list";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { QAPair } from "types";

export default function Contact({
	qaPairs,
}: {
	qaPairs: QAPair[];
}): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<Flex flexDirection="column" align="stretch">
					<Heading as="h1" size="xl" my={5}>
						FAQ
					</Heading>
					<FaqList list={qaPairs} />
				</Flex>
			</ContainerInside>
		</Container>
	);
}

export async function getServerSideProps() {
	const qaPairs = await getFaqInfo();
	return { props: { qaPairs } };
}
