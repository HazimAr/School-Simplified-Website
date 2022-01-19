import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Hero from "@components/hero";

export default function Legal() {
	return (
		<>
			<Container>
				<ContainerInside>
					<Hero heading="School Simplified Legal" />
				</ContainerInside>
			</Container>
			<Container bg="#8F9CFE" py={10}>
				<ContainerInside>
					<Center>
						<SimpleGrid spacing={5} columns={{ base: 1, lg: 2 }}>
							{legals.map((legal, idx: number) => {
								const isLastOdd =
									idx == legals.length - 1 &&
									legals.length % 2 != 0;
								// console.log("making #", idx + 1, isLastOdd);
								return isLastOdd ? (
									<Center
										gridColumnStart={1}
										gridColumnEnd={{
											base: 2,
											lg: 3,
										}}
										key={legal.name}
									>
										<NextLink isExternal href={legal.link}>
											<Button
												w={300}
												rounded={5}
												minH={61}
												shadow="lg"
											>
												{legal.name}
											</Button>
										</NextLink>
									</Center>
								) : (
									<NextLink
										isExternal
										href={legal.link}
										key={legal.name}
										h="100%"
									>
										<Button
											w={300}
											rounded={5}
											minH={61}
											shadow="lg"
											h="100%"
										>
											<Text>
												{idx == legals.length - 1}
											</Text>
											{legal.name}
										</Button>
									</NextLink>
								);
							})}
						</SimpleGrid>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}

const legals = [
	{
		name: "Bylaws",
		link: "https://drive.google.com/file/d/1BpJG9vcxU4wLQ4U3YLVbkvaKcRFja1tH/view?usp=drivesdk",
	},
	{
		name: "Articles of Incorporation",
		link: "https://drive.google.com/file/d/1KJsKqbk3Q78yPrCCMM16f3pYO6fnlDoh/view?usp=sharing",
	},
	{
		name: "501(c)3 Determination Letter",
		link: "https://drive.google.com/file/d/1v4IUPJLlCIIUQhQuaOjcBBWJgJbYBUb0/view?usp=sharing",
	},
	{
		name: "Employer Identification Number",
		link: "https://drive.google.com/file/d/19qZLprsRDo25LjzT4Xq4H2Ows4M_MsI6/view?usp=sharing",
	},
	{
		name: "Nomination Committee",
		link: "https://drive.google.com/file/d/1ynayW82DEB7Xc1CMGJ0kvr0hzJeg5Pvg/view?usp=sharing",
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
		name: "Code of Ethics and Whistle Blower Policy",
		link: "https://drive.google.com/file/d/1alMJ6t5zoQ0LNXYu8KGEvXIFgw82nnF_/view?usp=sharing",
	},
	{
		name: "Anti-Discrimination and Anti-Harassment Policy",
		link: "https://drive.google.com/file/d/1Hio0Tst49m55VcT_8OPdXwSQyP7ANI2W/view?usp=sharing",
	},
];
