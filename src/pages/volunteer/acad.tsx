import Hero from "@components/volunteering/hero";

import { HStack, Center, VStack, Image, Text } from "@chakra-ui/react";

import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { FaChalkboardTeacher, FaPenNib } from "react-icons/fa";
import { GiBlackBook } from "react-icons/gi";
export default function Acad() {
	return (
		<>
			<Container h="300px">
				<ContainerInside>
					<Hero heading="Academics Applications" />
				</ContainerInside>
			</Container>

			<Container bg="#8F9CFE" h="400px">
				<ContainerInside>
					<Center>
						<HStack
							flexDirection={{
								base: "column",
								md: "row",
							}}
						>
							<Image
								src="/timmy/timmy_lanyard.png"
								alt="timmy with lanyard"
								w="300px"
								mr="70px"
							/>
							<VStack spacing="20px">
								<NextLink
									isExternal
									href="https://forms.gle/71ffx3YBm7xjK54A9"
									_hover={{ TextDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<FaChalkboardTeacher />
											<Text>Tutor</Text>
										</HStack>
									</Button>
								</NextLink>

								<NextLink
									isExternal
									href="https://forms.gle/y1uXnvQ1EHEAHocn8"
									_hover={{ TextDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<GiBlackBook />
											<Text>Chat Helper</Text>
										</HStack>
									</Button>
								</NextLink>

								<NextLink
									isExternal
									href="https://forms.gle/y1uXnvQ1EHEAHocn8"
									_hover={{ TextDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<FaPenNib />
											<Text>Essay Reviser</Text>
										</HStack>
									</Button>
								</NextLink>
							</VStack>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}
