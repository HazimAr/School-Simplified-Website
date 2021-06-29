import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	Image,
	Link,
	Text,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const items = [
	"Essay Proofreading",
	"Free Tutoring",
	"24/7 Chat Helping",
	"College + HS Prep",
	"SAT/ACT Prep",
];

export default function Services(): JSX.Element {
	return (
		<Box>
			<Container backgroundColor="#BEC6FDD6">
				<ContainerInside p="20px">
					<Heading textAlign="left" mb="15px" fontSize="28px">
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
			<Container backgroundColor="#BEC6FDD6">
				<ContainerInside pb="20px">
					<Flex justifyContent="space-evenly" flexWrap="wrap">
						{items.map((item, i: number) => {
							return (
								<Box
									rounded="30px"
									backgroundColor="#FFFFFF7A"
									key={"item_" + i}
									m="10px 5px"
									p="20px"
									w="175px"
									h="225px"
								>
									<Text
										color="#5A60AD"
										fontSize="21px"
										textAlign="left"
									>
										{item}
									</Text>
								</Box>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside p="30px 20px">
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
								{" "}
								{/* maxW is hard-coded, so I need to find a good way to dynamically determine it soon */}
								<Link
									href="https://discord.gg/school"
									isExternal={true}
									textDecoration="none!important"
								>
									<Box
										p="15px"
										backgroundColor="#FFFFFF7A"
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
			</Container>
			<Container backgroundColor="#BEC6FDD6">
				<ContainerInside px="20px" py="40px">
					<Flex justifyContent="space-between">
						<Box flex="19" textAlign="left">
							<Heading fontSize="28px" mb="15px">
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
						</Box>{" "}
						{/* 184px */}
						<Box flex="8" /> {/* 82px */}
						<Box
							backgroundColor="#FFFFFF7A"
							rounded="40px"
							w="100px"
							flex="19"
						/>{" "}
						{/* 195px */}
					</Flex>
				</ContainerInside>
			</Container>
			<Container backgroundColor="#BEC6FDD6" h="150px" />{" "}
			{/* accounting for extra space on the bottom*/}
		</Box>
	);
}
