import { Box, Text, Heading, Wrap, VStack, Flex, Spacer, Divider } from "@chakra-ui/react";

export default function Home(): JSX.Element {
	return <Box>

             {/*art box */}
            <Flex textAlign="left">
                <Wrap spacing='40px' justify="left" margin='25px'>
                    <VStack spacing ={4}>
                        <Heading size='md'>Our Community</Heading>

                        <Text noOfLines={6}> Our organization features a global community of over 60,000 teenagers! 
                        Diverse, open-minded, and inclusive, our students enjoy conversing in an equitable environment where 
                        every new acquaintance becomes a longtime friend! 
                        </Text>
                        
                        <Box w='43vh' h='48vh' backgroundColor='#e0d5ff' padding='5px' rounded='40px' > 
                        {/*community art goes here */}
                        </Box>
                    
                        <Text fontSize='sm' > Artwork from our event winners. </Text>
                
                    </VStack>
                </Wrap>

                <Spacer />

                <Wrap margin ='15px' spacing ='40px'>

                <VStack spacing ={6}>

                    {/*info boxes */}
                    <Box w='32vh' h='32vh'  backgroundColor='#e0d5ff' padding='7px' pl='3vh' rounded='40px' d='flex' alignContent='left'>
                        <Text fontSize='3xl'>Events</Text>

                    </Box>

                    <Box w='32vh' h='32vh'  backgroundColor='#e0d5ff' padding='7px'pl='3vh' rounded='40px' d='flex' alignContent='left'>
                        <Text fontSize='3xl'>Muisc</Text>
                    </Box>

                    <Box w='32vh' h='32vh'  backgroundColor='#e0d5ff' padding='7px' pl='3vh' rounded='40px' d='flex' alignContent='left'>
                        <Text fontSize='3xl'> Friends </Text>  
                    </Box>

                </VStack>

                </Wrap>
            </Flex>

            <Divider orientation="horizontal" borderColor="white"/>

            <Flex textAlign="left">

                <Wrap spacing='40px' justify="left" margin='25px'>
                        
                        {/*disc box */}
                        <Box w='43vh' h='48vh' backgroundColor='#d8b2fb' padding='5px' rounded='40px' > 
                        {/*photo goes here */}
                        <Text >  Join our Discord. Come for the academic help, stay for the events, live music, and friends!  </Text>
                        </Box>

                </Wrap>
                
                <Spacer />
                <Wrap spacing= '30px' margin='20px'>
                    {/*members box */}
                    <Box > 
                        <Heading mb="8vh"> Our Members </Heading>
                        <Text >Our community consists of members ranging from teenagers to teachers alike. </Text>
                    </Box>
                </Wrap>
            </Flex>
            
            <Divider orientation="horizontal" borderColor="white"/>
            <Flex textAlign="left">

                <Wrap spacing= '30px' margin='20px'>
                    {/*staff box */}
                    <Box>
                        <Heading mb='5vh'> Our Staff </Heading>
                        <Text>School Simplified staff</Text>
                    </Box>
                </Wrap>
            </Flex>





        </Box>
}
