import Hero from "@components/volunteering/hero";

import { HStack, Center, Text, SimpleGrid } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

export default function Marketing() {
	return (
		<>
			<Container h="300px">
				<ContainerInside>
					<Hero heading="School Simplified Legal" />
				</ContainerInside>
			</Container>

			<Container bg="#8F9CFE" py={10}>
				<ContainerInside>
					<Center>
						<HStack
							flexDirection={{
								base: "column",
								md: "row",
							}}
						>
							<SimpleGrid
								spacing="20px"
								columns={{ base: 1, lg: 2 }}
							>
								{legals.map((legal) => (
									<NextLink
										isExternal
										href={legal.link}
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#585EAB"
											md="100px"
											w="300px"
											rounded={5}
											minH="60px"
											textAlign="left"
											shadow="lg"
										>
											<HStack>
												<Text>{legal.name}</Text>
											</HStack>
										</Button>
									</NextLink>
								))}
							</SimpleGrid>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}

const legals = [
	{
		name: "Bylaws",
		link: "https://drive.google.com/file/d/1Xf8RyJoHZDWMuiWgnjbxEIkyoEbIpPiZ/view?usp=sharing",
	},

	{
		name: "Articles of Incorporation",
		link: "https://drive.google.com/file/d/1Xf8RyJoHZDWMuiWgnjbxEIkyoEbIpPiZ/view?usp=sharing",
	},
	{
		name: "501(c)3 Determination Letter",
		link: "https://drive.google.com/file/d/1v4IUPJLlCIIUQhQuaOjcBBWJgJbYBUb0/view?usp=sharing",
	},
	{
		name: "Employee Identification Number",
		link: "https://drive.google.com/file/d/19qZLprsRDo25LjzT4Xq4H2Ows4M_MsI6/view?usp=sharing",
	},
	{
		name: "Nomination Committee",
		link: "https://drive.google.com/file/d/11atdu7GLWbEp22IAUty2Im7ombjO-DnA/view?usp=sharing",
	},
	{
		name: "Conflict of Interest",
		link: "https://drive.google.com/file/d/1EshVGb8042ITZ5iqtiNZiaNDYaVdTUrj/view?usp=sharing",
	},
	{
		name: "Document Retention Policy",
		link: "https://drive.google.com/file/d/1_vlNmbDDmFEM298UxFP5IJTVvSn_egha/view?usp=sharing",
	},
	{
		name: "Code of Ethics or WhistleBlower Policy",
		link: "https://drive.google.com/file/d/1_vlNmbDDmFEM298UxFP5IJTVvSn_egha/view?usp=sharing",
	},
	{
		name: "Anti-Discrimination and Anti-Harassment Policy",
		link: "https://drive.google.com/file/d/1Hio0Tst49m55VcT_8OPdXwSQyP7ANI2W/view?usp=sharing",
	},
];
