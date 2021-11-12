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

type MenuItem = {
	name: string;
	children?: MenuItem[];
	href?: string;
};

const menuItems: MenuItem[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About Us",
		children: [
			{
				name: "Community",
				href: "/community",
			},
			{
				name: "Events",
				href: "/events",
			},
			{
				name: "Our Organizations",
				href: "/organizations",
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
			// {
			// 	name: "Social Media",
			// 	href: "/links",
			// },
		],
	},
	// {
	// 	name: "Blog",
	// 	href: "/blog",
	// },
	{
		name: "Resources",
		children: [
			{
				name: "Essay Revision",
				href: "/essay",
			},
			{
				name: "Tutoring",
				href: "/tutoring",
			},
			{
				name: "Notes",
				href: "/notes",
			},
			{
				name: "Homework Help",
				href: "/discord",
			},
			{
				name: "SAT Prep",
				href: "/sat",
			},
		],
	},
	{
		name: "Programs",
		children: [
			{
				name: "Chapters",
				href: "/chapter",
			},
			{
				name: "Student Activities",
				href: "/activities",
			},
			{
				name: "Editorial",
				href: "/editorial",
			},
			// {
			// 	name: "Programming Simplified",
			// 	href: "/",
			// },
			// {
			// 	name: "Accelerate Your Organization",
			// 	href: "/npo",
			// },
		],
	},
	{
		name: "Join Us",
		href: "/volunteer",
	},
	{
		name: "Donate",
		href: "/donate",
	},
	{
		name: "Contact Us",
		href: "/contact",
	},
];

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
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
						flexDir={{ base: "column", lg: "row" }}
					>
						<NextLink href="/" mb={{ base: 2, lg: 0 }}>
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
								md: null,
							}}
							flexWrap="wrap"
							justifyContent="center"
						>
							{menuItems.map((menuItem, idx: number) =>
								menuItem.children ? (
									<DropdownMenu
										menuItem={menuItem}
										key={"menuitem_" + idx}
									/>
								) : (
									<NextLink
										href={menuItem.href}
										key={"menuitem_" + idx}
									>
										{menuItem.name}
									</NextLink>
								)
							)}
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box h={{ base: 84, sm: 94, md: 83, lg: 54, xl: 62 }} />
		</>
	);
}

const graceTime = 50;

function DropdownMenu({ menuItem }: { menuItem: MenuItem }): JSX.Element {
	const { isOpen, onOpen, onClose } = useDisclosure();

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
			<MenuButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{menuItem.name}
			</MenuButton>
			<MenuList
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onMouseLeave}
			>
				{menuItem.children.map((child) => (
					<NextLink href={child.href} key={child.name}>
						<MenuItem>{child.name}</MenuItem>
					</NextLink>
				))}
			</MenuList>
		</Menu>
	);
}
