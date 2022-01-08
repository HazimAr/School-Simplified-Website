import { getLinkButtons } from "@api/notion";
import { Button, Center, Icon, Stack, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Hero from "@components/volunteering/hero";
import { LinkButtonProps } from "types";
import fetchIcon from "util/react_icon_fetcher";

//import Hero from "./volunteer/hero";

export default function Links({ buttons }: { buttons: LinkButtonProps[] }) {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="School Simplified" />
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside py={8}>
					<VStack spacing={5}>
						{buttons.map((button) => {
							return <LinkButton {...button} key={button.text} />;
						})}
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

function LinkButton(props: LinkButtonProps) {
	return (
		<NextLink
			href={props.href}
			isExternal
			w="100%"
			cursor="auto"
			maxW={560}
		>
			<Button
				w="100%"
				height={62.4}
				rounded="full"
				boxShadow="md"
				display="flex"
				flexDir="row"
				bg="brand.blue"
				cursor="pointer"
			>
				{props.iconName ? (
					<Icon
						as={fetchIcon(props.iconName)}
						boxSize={30}
						position="absolute"
						left={4}
						color="white"
					/>
				) : null}
				{props.text}
			</Button>
		</NextLink>
	);
}

export async function getStaticProps() {
	const buttons: LinkButtonProps[] = await getLinkButtons();
	return { props: { buttons }, revalidate: 60 };
}
