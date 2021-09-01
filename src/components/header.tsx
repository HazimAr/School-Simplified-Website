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
	useDisclosure,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	const graceTime: number = 250;

	const {
		isOpen: aIsOpen,
		onOpen: aOnOpen,
		onClose: aOnClose,
	} = useDisclosure();
	const {
		isOpen: sIsOpen,
		onOpen: sOnOpen,
		onClose: sOnClose,
	} = useDisclosure();
	let aTimeout: NodeJS.Timeout, sTimeout: NodeJS.Timeout;
	return (
		<>
			<Container
				bg="brand.purple.light"
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
								base: 11,
								sm: 14,
								md: "initial",
							}}
						>
							<NextLink href="/">Home</NextLink>
							<Menu isOpen={aIsOpen}>
								<MenuButton
									onMouseEnter={() => {
										if (aTimeout) clearTimeout(aTimeout);
										aOnOpen();
										sOnClose();
									}}
									onMouseLeave={() =>
										(aTimeout = setTimeout(
											aOnClose,
											graceTime
										))
									}
								>
									About Us
								</MenuButton>
								<MenuList
									onMouseEnter={() => {
										if (aTimeout) clearTimeout(aTimeout);
										aOnOpen();
										sOnClose();
									}}
									onMouseLeave={() =>
										(aTimeout = setTimeout(
											aOnClose,
											graceTime
										))
									}
								>
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
							<Menu isOpen={sIsOpen}>
								<MenuButton
									// rightIcon={<ChevronDownIcon />}
									onMouseEnter={() => {
										if (sTimeout) clearTimeout(sTimeout);
										sOnOpen();
										aOnClose();
									}}
									onMouseLeave={() =>
										(sTimeout = setTimeout(
											sOnClose,
											graceTime
										))
									}
								>
									Services
								</MenuButton>
								<MenuList
									onMouseEnter={() => {
										if (sTimeout) clearTimeout(sTimeout);
										sOnOpen();
										aOnClose();
									}}
									onMouseLeave={() =>
										(sTimeout = setTimeout(
											sOnClose,
											graceTime
										))
									}
								>
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
