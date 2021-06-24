import {
	Link, 
	Flex, 
	Image, 
	Box, 
	Heading, 
	Text,
	Divider,
	Button
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const items = ['Essay Proofreading', 'Free Tutoring', '24/7 Chat Helping', 'College + HS Prep', 'Life Skills', 'SAT/ACT Prep'];

export default function Services(): JSX.Element {
	return (
		<>
			<Container backgroundColor="purple.300">
				<ContainerInside p="20px">
					<Heading textAlign="left" mb="15px">Our Services</Heading>
					<Text textAlign="left">Although a non-profit organization, School Simplified offers the quality services of a profit-based company. With areas specifically dedicated to free tutoring, homework help, and essay proofreading, we can help guide you through your educational experience!</Text>
					<Flex justifyContent="center" flexWrap="wrap">
						{items.map((item, i: number) => {
							return (
								<Box rounded="50px" backgroundColor="purple.200" key={'item_' + i} m="10px 5px" p="30px 20px" w="175px" h="400px">
									<Text color="purple.500" fontSize="20px" textAlign="left">{item}</Text>
								</Box>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside p="20px">
					<Divider bg="white" />
					<Flex flexDirection="row-reverse" alignItems="center" my="10px">
						<Button>→</Button>
						<Button>←</Button>
						<Text mr="15px">01 / 10</Text>
					</Flex>
					<Flex justifyContent="space-between">
						<Flex flexDirection="column-reverse" flex="2">
							<Box p="15px" backgroundColor="purple.200" rounded="20px" mr="20px">
								<Flex flexDir="column" align="center" justify="center">
									<Image src="https://picsum.photos/200/200" />
									<Text>Join Here!</Text>
								</Flex>
							</Box>
						</Flex>
						<Box flex="1" />
						<Flex flexDirection="column" justifyContent="space-between" textAlign="right" flex="3">
							<Heading fontSize="20px">How do I sign up?</Heading>
							<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidicunt.</Text>
						</Flex>
					</Flex>
				</ContainerInside>
			</Container>
			<Container backgroundColor="purple.300">
				<ContainerInside px="20px" py="40px">
					<Flex justifyContent="space-between">
						<Box flex="1" mr="15px" textAlign="left">
							<Heading fontSize="24px" mb="15px">About Our Services</Heading>
							<Text>Lorem ipsum, whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever whatever</Text>
						</Box>
						<Box backgroundColor="gray.100" rounded="20px" w="100px" flex="1" ml="15px" />
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
};
