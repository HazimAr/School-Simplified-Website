import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const items = [
	{
		title: "Essay Proofreading",
		link: "/essay",
		external: false,
	},
	{
		title: "Free Tutoring",
		link: "/tutoring",
		external: false,
	},
	{
		title: "24/7 Chat Help",
		link: "https://discord.gg/school",
		external: true,
	},
	{
		title: "College + HS Prep",
		link: "/cprep",
		external: false,
	},
	{
		title: "SAT/ACT Prep",
		link: "/satprep",
		external: false,
	},
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
											textAlign="center"
										>
											{item.title}
											{item.external ? (
												<ExternalLinkIcon mx={2} />
											) : null}
										</Text>
									</Flex>
								</Link>
							);
						})}
					</Flex>
				</ContainerInside>
			</Container>
			
		</>
	);
}
