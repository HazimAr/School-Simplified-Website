import { Box, Center } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";

export default function Tutoring(): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Tutoring</title>
			</Head>
			<Container>
				<ContainerInside py={10}>
					<Center>
						<Box w={{ base: "230px", sm: "400px", lg: "600px" }}>
							<iframe
								title=""
								src="https://docs.google.com/forms/d/e/1FAIpQLSfT9urTBij4P7Pb3MA0yYw-VfdSJOxLJeMkw9KEn8pAGzbtTQ/viewform?embedded=true"
								height="750"
								width="100%"
								frameBorder={0}
								marginHeight={0}
								marginWidth={0}
							>
								Loading…
							</iframe>
						</Box>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}
