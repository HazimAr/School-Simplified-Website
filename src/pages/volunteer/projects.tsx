import Hero from "@components/volunteering/hero";

import { HStack, Center, VStack, Image, Text } from "@chakra-ui/react";

import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { BsCheckLg } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";

export default function Projects() {
	return (
		<>
			<Container h="300px">
				<ContainerInside>
					<Hero heading="Projects Applications" />
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
							<Image
								src="/timmy/timmy_lanyard.png"
								alt="timmy with lanyard"
								w="300px"
								mr="70px"
								align="center"
							/>
							<VStack spacing="20px">
								<NextLink
									isExternal
									href="https://forms.gle/fyP8RPFqtWNC4AY68"
									_hover={{ TextDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										md="100px"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>
												Propose a new Project Team!
											</Text>
										</HStack>
									</Button>
								</NextLink>

								<NextLink
									isExternal
									href="https://forms.gle/ptdYuHK3gDWguswT9"
									_hover={{ TextDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										md="100px"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<GiNotebook />
											<Text>Notes Team</Text>
										</HStack>
									</Button>
								</NextLink>

								<NextLink
									isExternal
									href="https://forms.gle/ptdYuHK3gDWguswT9"
									_hover={{ TextDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										md="100px"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<FaSchool />
											<Text>Prep Team</Text>
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
