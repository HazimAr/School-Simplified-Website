import Hero from "@components/volunteering/hero";

import { HStack, Center, VStack, Image, Text } from "@chakra-ui/react";

import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { FaPaintBrush, FaTools, FaTiktok } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";
import { GiLightBulb, GiFountainPen } from "react-icons/gi";
import { BsInstagram } from "react-icons/bs";
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
							<Image
								src="/timmy/timmy_lanyard.png"
								alt="timmy with lanyard"
								w="300px"
								mr="70px"
							/>
							<HStack spacing="40px">
								<VStack spacing="20px">
									<NextLink
										isExternal
										href="https://forms.gle/QnwAAWpPs5XcWfzr8"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<FaPaintBrush />
												<Text>Design</Text>
											</HStack>
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://forms.gle/TgNLPu9bYARxt8Ks5"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<FaTools />
												<Text>Discord Editor</Text>
											</HStack>
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://forms.gle/e8EArXqZYXZj6vxr6"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<GoMegaphone />
												<Text>
													Public Relations Specialist
												</Text>
											</HStack>
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://forms.gle/grxWXCRPjPAV9izLA"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<GiLightBulb />
												<Text>
													Vice President of Marketing
												</Text>
											</HStack>
										</Button>
									</NextLink>
								</VStack>

								<VStack spacing="20px">
									<NextLink
										isExternal
										href="https://forms.gle/qe4LaxJsnZNigP3c7"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<BsInstagram />
												<Text>
													Instagram Content Creator
												</Text>
											</HStack>
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://forms.gle/qe4LaxJsnZNigP3c7"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<FaTiktok />
												<Text>
													TikTok Content Creator
												</Text>
											</HStack>
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://forms.gle/qe4LaxJsnZNigP3c7"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<GiFountainPen />
												<Text>Blog Writer</Text>
											</HStack>
										</Button>
									</NextLink>

									<NextLink
										isExternal
										href="https://forms.gle/zfCwVeCtAqkQPr2f7"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											w="300px"
											h="50px"
											textAlign="left"
										>
											<HStack>
												<GiLightBulb />
												<Text>
													Marketing Leadership
												</Text>
											</HStack>
										</Button>
									</NextLink>
								</VStack>
							</HStack>
						</HStack>
					</Center>
				</ContainerInside>
			</Container>
		</>
	);
}
