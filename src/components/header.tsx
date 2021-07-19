import {
	Box,
	Flex,
	Heading,
	HStack,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

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
						<Link href="/" mb={{ base: 2, md: 0 }}>
							<Flex justify="center" align="center">
								<Image src="/logo.png" w={30} />
								<Heading size="md" color="white" ml={2.5}>
									School Simplified
								</Heading>
							</Flex>
						</Link>
						<HStack
							spacing={3}
							fontSize={{
								base: 11,
								sm: 12,
								md: "initial",
							}}
						>
							<Link href="/">Home</Link>

							<Menu>
								<MenuButton
								// rightIcon={<ChevronDownIcon />}
								>
									Get Help
								</MenuButton>
								<MenuList>
									<Link href="/tutoring">
										<MenuItem>Tutoring</MenuItem>
									</Link>
									<Link href="/essay">
										<MenuItem>Essay Revision</MenuItem>
									</Link>
									<Link href="/notes">
										<MenuItem>Notes</MenuItem>
									</Link>
								</MenuList>
							</Menu>
							<Link href="/volunteer">Volunteer</Link>
							<Link href="/contact">Contact Us</Link>
							<Link href="/faq">FAQ</Link>
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box w="100%" h="50px" />
		</>
	);
}
