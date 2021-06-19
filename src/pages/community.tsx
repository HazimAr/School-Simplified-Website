import { Box, Text, Heading, Wrap, VStack, HStack, Flex, Spacer } from "@chakra-ui/react";

export default function Home(): JSX.Element {
	return <Box>
            <Flex>
                <Wrap spacing='40px' justify="left" margin='25px'>
                    <VStack spacing ={4}>
                        <Heading size='md'>Our Community</Heading>
                        <Text noOfLines={6}> Our organization features a global community of over 60,000 teenagers! 
                        Diverse, open-minded, and inclusive, our students enjoy conversing in an equitable environment where 
                        every new acquaintance becomes a longtime friend! 
                        </Text>
                        
                        <Box w='43vh' h='48vh' backgroundColor='#e0d5ff' padding='5px' rounded='30px' > 
                        {/*community art goes here */}
                        </Box>
                    
                        <Text fontSize='sm' > Artwork from our event winners. </Text>
                
                    </VStack>
                </Wrap>
            
                <Spacer />
                <Wrap margin ='15px' spacing ='40px'>
                <VStack spacing ={6}>
                    <Box w='32vh' h='32vh'  backgroundColor='#e0d5ff' padding='7px' pl='3vh' rounded='30px' d='flex' alignContent='left'>
                        <Text fontSize='3xl'>Events</Text>

                    </Box>

                    <Box w='32vh' h='32vh'  backgroundColor='#e0d5ff' padding='7px'pl='3vh' rounded='30px' d='flex' alignContent='left'>
                        <Text fontSize='3xl'>Muisc</Text>
                    </Box>

                    <Box w='32vh' h='32vh'  backgroundColor='#e0d5ff' padding='7px' pl='3vh' rounded='30px' d='flex' alignContent='left'>
                        <Text fontSize='3xl'> Friends </Text>  
                    </Box>
                </VStack>
                </Wrap>
            </Flex>
        </Box>
}
