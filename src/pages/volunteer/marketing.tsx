import Hero from "@components/volunteering/hero";

import { HStack, Center, VStack, Image, Text } from "@chakra-ui/react";

import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { FaTiktok, FaLightbulb } from "react-icons/fa";
import { GiPencil } from "react-icons/gi";
import {
	BsInstagram,
	BsMegaphoneFill,
	BsPalette,
	BsTools,
} from "react-icons/bs";
export default function Marketing() {
	return (
		<>
			<Container h="300px">
				<ContainerInside>
					<Hero heading="Marketing Applications" />
				</ContainerInside>
			</Container>
			<Container bg="#8F9CFE" h="400px">
				<ContainerInside>
					<Center>
						<HStack>
							<Image
								src="/timmy/timmywithbackground.png"
								alt="timmy with pink background"
								w="350px"
								mr="70px"
							/>
							<HStack spacing="20px">
								<VStack spacing="20px">
									<NextLink
										isExternal
										href="https://forms.gle/QnwAAWpPs5XcWfzr8"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
										>
											<HStack>
												<BsPalette />
												<Text>Designer</Text>
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
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
										>
											<HStack>
												<BsTools />
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
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
										>
											<HStack>
												<BsMegaphoneFill />
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
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
										>
											<HStack>
												<FaLightbulb />
												<Text>
													Vice President of Global
													Marketing
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
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
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
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
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
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
										>
											<HStack>
												<GiPencil />
												<Text>Blog Writer</Text>
											</HStack>
										</Button>
									</NextLink>
									<NextLink
										isExternal
										href="https://forms.gle/fWDh8MMN2tsKo6gy7"
										_hover={{ TextDecoration: "none" }}
									>
										<Button
											bg="#7283FE"
											md="100px"
											w="350px"
											h="50px"
											textAlign="left"
											borderRadius="35px"
										>
											<HStack>
												<FaLightbulb />
												<Text>
													President of Marketing,
													Editorial
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
