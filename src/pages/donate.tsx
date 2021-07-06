import {
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Link,
	Spacer,
	Text,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaPaypal } from "react-icons/fa";

export default function Donate(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside py="25px">
					<Flex
						justify="center"
						maxW="1200px"
						flexWrap="wrap"
					>
						<Box maxW="400px" textAlign="center" mx="5%" my="20px">
							<Heading size="md" pb="15px">
								Support Us
							</Heading>
							<Text>
								Your donation helps us as a small teen run
								non-profit continue to support thousands of
								teens and young adults throughout the world.
								Through your help, we are able to bring School
								Simplified to more people, bringing educational
								equity and success to to teenagers alike!
							</Text>
						</Box>
						<Flex flexDir="column" justify="center" align="center">
							<Box
								bg="brand.transparent"
								boxSize="175px"
								borderRadius="25px"
								p="20px"
							>
								<Center>
									<Icon as={FaPaypal} boxSize="150px" />
								</Center>
							</Box>
							<Link
								href="https://www.paypal.com/donate?token=NJtH7jwgJYMkVXNf_gRWpy6_ZTCwIeS5ipOzTutEI6nR8eqc_aucztFhJ19B_Wh_-rx9v4ieAP6j9qPL&Z3JncnB0="
								isExternal
							>
								<StyledButton my="15px">
									Donate with PayPal
								</StyledButton>
							</Link>
						</Flex>
					</Flex>
				</ContainerInside>
			</Container>

			<Container
				bg="brand.transparent"
				pb="100px"
				color="brand.purple.light"
			>
				<ContainerInside align="center">
					<Heading size="lg" pt="20px">
						Why support us?
					</Heading>
					<Flex
						justify="center"
						align="center"
						textAlign="left"
						py="10px"
						flexDir={{ base: "column", md: "row" }}
					>
						<Box
							p="20px"
							bg="brand.transparent2"
							m="10px"
							borderRadius="25px"
							maxW="300px"
						>
							<Heading size="md" py="15px">
								Services
							</Heading>
							<Text>
								Our services are all free but some expenses are
								unavoidable for us. Your donation helps fund us,
								allowing us to improve our services.
							</Text>
						</Box>
						<Spacer />
						<Box
							p="20px"
							bg="brand.transparent2"
							m="10px"
							borderRadius="25px"
							maxW="300px"
						>
							<Heading size="md" py="15px">
								Community
							</Heading>
							<Text>
								Your donation helps us pay for resources our
								team uses to provide you with events, giveaways,
								and things to improve the community.
							</Text>
						</Box>
						<Spacer />
						<Box
							p="20px"
							bg="brand.transparent2"
							borderRadius="25px"
							maxW="300px"
							m="10px"
						>
							<Heading size="md" py="15px">
								Team
							</Heading>
							<Text>
								Our team consists solely of teenage volunteers.
								Donations help us provide our team with what
								they need so we can continue to help you.
							</Text>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
