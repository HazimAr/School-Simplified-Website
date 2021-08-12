import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";

export default function Blog(): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Blogs</title>
			</Head>
			<Container>
				<ContainerInside>School Simplified</ContainerInside>
			</Container>
		</>
	);
}
