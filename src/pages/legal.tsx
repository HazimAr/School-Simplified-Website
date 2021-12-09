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
					<Hero heading="Marketing Applications" />
				</ContainerInside>
			</Container>

			<Container bg="#8F9CFE" h={{ base: "600px", md: "400px" }}>
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
											bg="#7283FE"
											md="100px"
											w="300px"
											minH="50px"
											textAlign="left"
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
