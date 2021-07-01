import {
	Box,
	Flex,
	Heading,
	Spacer,
	Text,
	Link,
	Center,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import StyledButton from "@components/button";

export default function Donate(): JSX.Element {
	return (
		<>
			<Container>
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						maxW="1200px"
						w="100%"
						textAlign="left"
						flexWrap="wrap"
						py="10px"
					>
						<Box maxW="400px">
							<Heading size="md" py="15px">
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
						<Spacer />
						<Box
							bg="red"
							boxSize="200px"
							borderRadius="25px"
							p="20px"
						>
							<Center>
								<Link href="https://www.paypal.com/donate?token=NJtH7jwgJYMkVXNf_gRWpy6_ZTCwIeS5ipOzTutEI6nR8eqc_aucztFhJ19B_Wh_-rx9v4ieAP6j9qPL&Z3JncnB0=">
									<StyledButton>PayPal</StyledButton>
								</Link>
							</Center>
						</Box>
					</Flex>
				</ContainerInside>
			</Container>

			<Container>
				<ContainerInside py="25px">
					<Heading size="lg" py="10px">
						Why support us?
					</Heading>
					<Flex
						justify="space-between"
						maxW="1200px"
						w="100%"
						textAlign="left"
						py="10px"
					>
						<Box
							p="20px"
							bg="rgb(255,0,0,0.5)"
							mr="20px"
							borderRadius="25px"
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
							bg="rgb(255,0,0,0.5)"
							mr="20px"
							borderRadius="25px"
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
						<Box p="20px" bg="rgb(255,0,0,0.5)" borderRadius="25px">
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
