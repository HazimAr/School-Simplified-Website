import Hero from "@components/volunteering/hero";
import { HStack, Center, VStack, Image, Text } from "@chakra-ui/react";

import NextLink from "@components/nextChakra";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { BsShieldShaded, BsCalendar3 } from "react-icons/bs";
import { RiGroupFill } from "react-icons/ri";

export default function Community() {
	return (
		<>
			<Container h="300px">
				<ContainerInside>
					<Hero heading="Community Applications" />
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
							/>
							<VStack spacing="20px">
								<NextLink
									isExternal
									href="https://forms.gle/mt3DSRcXoC5Byjs7A"
									_hover={{ textDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										md="100px"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsShieldShaded />
											<Text>Moderator</Text>
										</HStack>
									</Button>
								</NextLink>

								<NextLink
									isExternal
									href="https://forms.gle/oAZeJFnUWeNZkr2TA"
									_hover={{ textDecoration: "none" }}
								>
									<Button
										bg="#7283FE"
										md="100px"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCalendar3 />
											<Text>Events Organizer</Text>
										</HStack>
									</Button>
								</NextLink>

								<NextLink
									isExternal
									href="https://forms.gle/oj8u1i2Yyb5YbDUR7"
									_hover={{ textDecoration: "none" }}
								>
									<HStack>
										<Button
											bg="#7283FE"
											md="100px"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<RiGroupFill />
												<Text>Student Advisory</Text>
											</HStack>
										</Button>
									</HStack>
								</NextLink>
							</VStack>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}
