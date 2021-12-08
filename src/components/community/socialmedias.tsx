import { Heading, Stack, Text, VStack } from "@chakra-ui/react";
//import { Icon } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import { socials } from "config";

export default function SocialMedias(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<VStack>
					<VStack spacing={4}>
						<Heading>Our Socials</Heading>
						<Container>
							<Text size="md" color="white">
								Check out our socials for tips, entertainment,
								music, podcasts, opportunities, and more!
							</Text>
						</Container>
					</VStack>

					<Stack
						flexWrap="wrap"
						direction={{ base: "row", sm: "row" }}
						spacing={5}
						justify="center"
						align="center"
					>
						{socials.slice(0, 6).map((social) => {
							return (
								<NextLink
									href={social.link}
									key={social.name}
									isExternal
									transition="all 0.2s ease"
									_hover={{
										cursor: "pointer",
										transform: "scale(1.20)",
									}}
								>
									<social.icon size="60px" color="white" />
								</NextLink>
							);
						})}
					</Stack>
				</VStack>
			</ContainerInside>
		</Container>
	);
}
