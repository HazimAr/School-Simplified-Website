import {
	Box,
	// Button,
	// Divider,
	Flex,
	Heading,
	// Image,
	Text,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const items = [
	{
		title: "Essay Proofreading",
		link: "/essay"
	},
	{
		title: "Free Tutoring",
		link: "/tutoring"
	},
	{
		title: "24/7 Chat Help",
		link: "https://discord.gg/school"
	},
	{
		title: "College + HS Prep",
		link: "/cprep"
	},
	{
		title: "SAT/ACT Prep",
		link: "/satprep"
	}
];

export default function Services(): JSX.Element {
	return (
		<>
			<Container backgroundColor="brand.transparent">
				<ContainerInside py={8}>
					<Heading textAlign="left" mb={5} size="lg">
						Our Services
					</Heading>
					<Text textAlign="left">
						Although a non-profit organization, School Simplified
						offers the quality services of a profit-based company.
						With areas specifically dedicated to free tutoring,
						homework help, and essay proofreading, we can help guide
						you through your educational experience!
					</Text>
				</ContainerInside>
			</Container>
			<Container backgroundColor="brand.transparent">
				<ContainerInside pb={8}>
					<Flex justifyContent="space-evenly" flexWrap="wrap">
						{items.map((item, i: number) => {
							return (
								<Link
									href={item.link}
									isExternal
									textDecoration="none!important"
								>
									<Flex
										rounded={10}
										backgroundColor="brand.transparent2"
										key={"item_" + i}
										my={3}
										mx={2}
										p={7}
										w={175}
										h={125}
										alignItems="center"
									>
										<Text
											color="brand.purple.light"
											fontSize={20}
											textAlign="left"
										>
											{item.title}
										</Text>
									</Flex>
								</Link>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
			{/* cut the middle section */}
			{/* <Container>
				<ContainerInside py="30px">
					<Divider bg="white" />
					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						my="10px"
					>
						<Button
							backgroundColor="transparent"
							fontWeight="bold"
							fontSize="28px"
							minWidth="default"
							height="default"
							px="2px"
						>
							🠖
						</Button>
						<Button
							backgroundColor="transparent"
							fontWeight="bold"
							fontSize="28px"
							minWidth="default"
							height="default"
							px="2px"
						>
							🠔
						</Button>
						<Text mr="10px">01 / 10</Text>
					</Flex>
					<Flex justifyContent="space-between">
						<Flex flexDirection="column-reverse" flex="2">
							<Box mr="20px" maxW="258px">
								<Link
									href="https://discord.gg/school"
									isExternal
									textDecoration="none!important"
								>
									<Box
										p="15px"
										backgroundColor="brand.transparent2"
										rounded="40px"
									>
										<Flex
											flexDir="column"
											align="center"
											justify="center"
										>
											<Image
												src="https://picsum.photos/200/200"
												p="5px"
											/>
											<Text fontSize="12px">
												Join Here!
											</Text>
										</Flex>
									</Box>
								</Link>
							</Box>
						</Flex>
						<Box flex="1" />
						<Flex
							flexDirection="column"
							justifyContent="space-between"
							textAlign="right"
							flex="3"
						>
							<Text fontSize="24px">How do I sign up?</Text>
							<Text fontSize="21px">
								To receive our FREE services, first join our
								Discord on the link to the right!
							</Text>
						</Flex>
					</Flex>
				</ContainerInside>
			</Container> */}
			{/* <Container backgroundColor="brand.transparent">
				<ContainerInside py={13}>
					<Flex justifyContent="space-between">
						<Box flex="19" textAlign="left">
							<Heading size="lg" mb={5}>
								About Our Services
							</Heading>
							<Text>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum
							</Text>
						</Box>
						<Box flex="8" />
						<Box
							backgroundColor="brand.transparent2"
							rounded={14}
							w={100}
							flex="19"
						/>
					</Flex>
				</ContainerInside>
			</Container> */}
		</>
	);
}
