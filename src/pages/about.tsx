/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/no-duplicate-string */
import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import StaffCard from "@components/staffcard";

type Person = {
	name: string;
	title: string;
	img: string;
};

const leadership: Person[] = [
	{
		name: "Ethan Wu",
		title: "Chairman + Founder",
		img: "/staff/default.png",
	},
	{
		name: "Ethan Hsu",
		title: "Chief Executive Officer (CEO) + President",
		img: "/staff/default.png",
	},
	{
		name: "Lauren Hsieh",
		title: "Secretary & Chief of Staff",
		img: "/staff/default.png",
	}
];

export default function About(): JSX.Element {
	return (
		<>
			<Container bg="brand.transparent">
				<ContainerInside>
					<Box py={5}>
						<Flex
							align="center"
							justify="center"
							flexDir={{ base: "column", md: "row" }}
						>
							<Box>
								<Heading
									textAlign={{ base: "center", md: "left" }}
									fontSize="2xl"
									mb={3}
								>
									Why Us?
								</Heading>
								<Text
									textAlign={{ base: "center", md: "left" }}
								>
									School Simplified believes that quality
									education should be accessible to all
									students. It strives to maintain its status
									as a NPO while delivering profit-affiliated
									services to teenagers all across the world.
									As an organization both by students and for
									students, we have a vested interest in
									watching you all succeed!
								</Text>
							</Box>
							<Image
								src="/undraw/learning.svg"
								w={{ base: 200, md: 300, lg: 400 }}
								ml={{ base: 0, md: 8 }}
								mt={{ base: 8, md: 0 }}
							/>
						</Flex>
					</Box>
				</ContainerInside>
			</Container>
			<Container>
				<ContainerInside>
					<Box>
						<Box py={3}>
							<Heading size="2xl" mb={3}>
								Leadership
							</Heading>
						</Box>

						<Divider bg="white" />
						<Box py={2}>
							<Heading fontSize={30}>
								Executive Profiles
							</Heading>
						</Box>
						<Flex justifyContent="center" flexWrap="wrap">
							{leadership.map((staff, i: number) => {
								return (
									<StaffCard
										title={staff.title}
										name={staff.name}
										img={staff.img}
										key={i}
									/>
								);
							})}
						</Flex>

						<Divider bg="white" />

					</Box>
				</ContainerInside>
			</Container>
		</>
	);
}
