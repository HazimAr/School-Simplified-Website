import {
	Box,
	Center,
	Flex,
	Heading,
	Icon,
	Text,
} from "@chakra-ui/react";
import StyledButton from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaPaypal } from "react-icons/fa";
import Head from "next/head";
import NextLink from "@components/nextChakra";

type DonateCard = {
	title: string;
	description: string;
}

const pillInformation: DonateCard[] = [
	{
		title: "Services",
		description:
			"Our services are all free but some expenses are unavoidable for us. Your donation helps fund us, allowing us to improve our services.",
	},
	{
		title: "Community",
		description:
			"Your donation helps us pay for resources our team uses to provide you with events, giveaways, and things to improve the community.",
	},
	{
		title: "Team",
		description:
			"Our team consists solely of teenage volunteers. Donations help us provide our team with what they need so we can continue to help you.",
	},
];

function Card( {info}: {info: DonateCard} ): JSX.Element {
	return (
		<Box
			p="20px"
			bg="brand.transparent2"
			borderRadius="25px"
			maxW="300px"
			m="10px"
			boxShadow="lg"
			backdropFilter="blur(5px)"
		>
			<Heading fontSize={23} py="9px" color="brand.purple.dark">
				{info.title}
			</Heading>
			<Text>{info.description}</Text>
		</Box>
	);
}

export default function Donate(): JSX.Element {
	return (
		<>
			<Head>
				<title>School Simplified | Donate</title>
			</Head>
			<Container>
				<ContainerInside py="25px">
					<Flex justify="center" maxW="1200px" flexWrap="wrap">
						<Box maxW="400px" textAlign="center" mx="5%" my="20px">
							<Heading as="h1" pb="15px">
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
							<NextLink href="/stupid" isExternal>
								<StyledButton my="15px">
									Donate with PayPal
								</StyledButton>
							</NextLink>
						</Flex>
					</Flex>
				</ContainerInside>
			</Container>

			<Container bg="brand.transparent" color="brand.purple.light">
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
						alignItems={{ base: "center", md: "stretch" }}
					>
						{pillInformation.map((information, i: number) => {
							return <Card info={information} key={i} />;
						})}
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
