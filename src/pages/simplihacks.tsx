import { Box, Flex, Text } from "@chakra-ui/layout";
import { rounded } from "@styles/theme";
import Container from "@components/container";
import ContainerInside from "@components/containerInside"; 
import React from "react";

export default function Simplihacks(): JSX.Element {
    return (
        <>
            <Container>
                <ContainerInside>
                    <Flex
                        backgroundColor="brand.transparent"
                        p="30px"
                        rounded={rounded}
                        boxShadow="lg"
                        align="center">
                            <Text fontSize={17}>Simplihacks is a 2-day virtual hackathon, brought to you by School Simplified. If this is your first hackathon, or maybe you don’t even know how to code, don’t worry! 
                            Simplihacks isn’t only for those with years of coding and engineering experience. We invite participants
                            of all levels to compete because we have some great workshops that can get you started on your computer 
                            science journey. Want to learn how to make cool websites and apps? Or maybe you just want to learn how to code for fun. We’ll help you do just that. 
                            We envision Simplihacks as a tremendous learning experience and hopefully a fun one. We hope you 
                            join us for an amazing weekend!</Text>
                    </Flex>
                </ContainerInside>
            </Container>
        </>
    );
}