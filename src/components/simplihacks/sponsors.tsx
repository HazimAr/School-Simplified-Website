import { Flex, Text } from "@chakra-ui/layout";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { Sponsor } from "types"

const sponsors: Sponsor[] = [
    {
        image: "test",
        link: "schoolsimplified.org"
    }
]

export default function Sponsors(): JSX.Element {
	return (
        <>
            <Container py={20} bg="brand.transparent">
                <ContainerInside>

                </ContainerInside>
            </Container>
        </>
    );
}
