import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	return (
		<>
			<Container
				bg="#636EE0CD"
				as="header"
				py={3}
				w="100%"
				position="fixed"
				zIndex={1000}
				backdropFilter="blur(5px)"
			>
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						flexDir={{ base: "column", md: "row" }}
					>
						<NextLink href="/" mb={{ base: 2, md: 0 }}>
							<Flex justify="center" align="center">
								<Image
									src="/logo.png"
									width={30}
									height={30}
									alt="School Simplified Logo"
								/>
								<Heading size="md" color="white" ml={2.5}>
									School Simplified
								</Heading>
							</Flex>
						</NextLink>
						<HStack
							spacing={3}
							fontSize={{
								base: 10,
								sm: 12,
								md: "initial",
							}}
						>
							<NextLink href="/">Home</NextLink>
							<Menu>
								<MenuButton>About Us</MenuButton>
								<MenuList>
									<NextLink href="/community">
										<MenuItem>Community</MenuItem>
									</NextLink>
									<NextLink href="/leadership">
										<MenuItem>Leadership</MenuItem>
									</NextLink>
									<NextLink href="/faq">
										<MenuItem>FAQ</MenuItem>
									</NextLink>
									<NextLink href="/partners">
										<MenuItem>Partners</MenuItem>
									</NextLink>
								</MenuList>
							</Menu>
							<Menu>
								<MenuButton
								// rightIcon={<ChevronDownIcon />}
								>
									Services
								</MenuButton>
								<MenuList>
									<NextLink href="/tutoring">
										<MenuItem>Tutoring</MenuItem>
									</NextLink>
									<NextLink href="/essay">
										<MenuItem>Essay Revision</MenuItem>
									</NextLink>
									<NextLink href="/notes">
										<MenuItem>Notes</MenuItem>
									</NextLink>
								</MenuList>
							</Menu>
							<NextLink href="/volunteer">Volunteer</NextLink>
							<NextLink href="/links">Contact Us</NextLink>
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box w="100%" h="50px" />
		</>
	);
}
