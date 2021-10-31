import Hero from "@components/volunteering/hero";

import { HStack, Center, VStack, Image, Text } from "@chakra-ui/react";

import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { BsCheckLg } from "react-icons/bs";
export default function Marketing() {
	return (
		<>
			<Container h="300px">
				<ContainerInside>
					<Hero heading="Marketing Applications" />
				</ContainerInside>
			</Container>

			<Container bg="#8F9CFE" h={{ base: "1000px", md: "800px" }}>
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
									href="https://forms.gle/QnwAAWpPs5XcWfzr8"
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
										md="100px"
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>Discord</Text>
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
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>Public Relations</Text>
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
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
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
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>TikTok Content Creator</Text>
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
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>Blog Writer</Text>
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
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>
												Vice President of Global
												Marketing
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
										w="300px"
										h="50px"
										textAlign="left"
									>
										<HStack>
											<BsCheckLg />
											<Text>
												President of Marketing,
												Editorial
											</Text>
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
