import {
	Flex,
	Heading,
	HStack,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useDisclosure,
	Box,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	const graceTime = 50;

	return (
		<>
			<Container
				as="header"
				py={3}
				w="100%"
				position="fixed"
				zIndex={1000}
				bg="brand.transparent"
				backdropFilter="blur(12px)"
				// filter="blur(24px)"
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
									alt="logo"
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
							{menuItems.map((menuItem) => {
								const { isOpen, onOpen, onClose } =
									useDisclosure();

								let timeout: NodeJS.Timeout;

								const onMouseEnter = (): void => {
									if (timeout) {
										clearTimeout(timeout);
									}
									onOpen();
								};

								const onMouseLeave = (): void => {
									timeout = setTimeout(() => {
										onClose();
									}, graceTime);
								};

								return (
									<Menu isOpen={isOpen} key={menuItem.name}>
										<MenuButton
											onMouseEnter={onMouseEnter}
											onMouseLeave={onMouseLeave}
										>
											{menuItem.name}
										</MenuButton>
										<MenuList
											onMouseEnter={onMouseEnter}
											onMouseLeave={onMouseLeave}
										>
											{menuItem.children.map((child) => (
												<NextLink
													href={child.href}
													key={child.name}
												>
													<MenuItem>
														{child.name}
													</MenuItem>
												</NextLink>
											))}
										</MenuList>
									</Menu>
								);
							})}
							<NextLink href="/contact">Contact Us</NextLink>
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box h="54px" />
		</>
	);
}

const menuItems = [
	{
		name: "About Us",
		children: [
			{
				name: "Community",
				href: "/community",
			},
			{
				name: "Partners",
				href: "/partners",
			},
			{
				name: "Leadership",
				href: "/leadership",
			},
			{
				name: "FAQ",
				href: "/faq",
			},
		],
	},
	{
		name: "Programs",
		children: [
			{
				name: "Accelerate Your Organization",
				href: "/idfk",
			},
			{
				name: "Become a Chapter",
				href: "/idfk",
			},
			{
				name: "BAP (SOON TM)",
				href: "/idfk",
			},
			{
				name: "Internships",
				href: "/internships",
			},
		],
	},
	{
		name: "Get Involved",
		children: [
			{
				name: "Volunteer",
				href: "/volunteer",
			},
			{
				name: "Leadership Opportunities",
				href: "/leadership-something-idk-yet",
			},
		],
	},
	{
		name: "Support Us",
		children: [
			{
				name: "Donate",
				href: "/donate",
			},
			{
				name: "Sponsor",
				href: "/sponsor",
			},
		],
	},
];
