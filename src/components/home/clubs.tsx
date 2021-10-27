import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Clubs from "@components/activities/changing_slide";
import NextLink from "@components/nextChakra";

import React from "react";

export default function Here() {
	return (
		<Container py="50px">
			<ContainerInside>
				<Clubs />
			</ContainerInside>
		</Container>
	);
}
