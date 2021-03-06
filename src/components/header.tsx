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

type MenuItem = {
	name: string;
	children?: MenuItem[];
	href?: string;
	isBold?: boolean;
};

const menuItems: MenuItem[] = [
	// {
	// 	name: "Home",
	// 	href: "/",
	// },
	{
		name: "About Us",
		children: [
			{
				name: "Community",
				href: "/community",
			},
			// {
			// 	name: "Events",
			// 	href: "/events",
			// },
			// {
			// 	name: "Our Organizations",
			// 	href: "/organizations",
			// },
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
			{
				name: "Legal",
				href: "/legal",
			},
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
				name: "Notes",
				href: "/notes",
			},
			{
				name: "Tutoring",
				href: "/tutoring",
			},
			{
				name: "Essay Revision",
				href: "/essay",
			},
			// {
			// 	name: "SAT Prep",
			// 	href: "/sat",
			// },
			{
				name: "Homework Help",
				href: "/discord",
			},
			{
				name: "Blog",
				href: "/blog",
			},
		],
	},
	{
		name: "Programs",
		children: [
			{
				name: "Projects",
				href: "/projects",
			},
			{
				name: "Chapters",
				href: "/chapter",
			},
			{
				name: "Student Activities",
				href: "/activities",
			},
			{
				name: "Programming Simplified",
				href: "/programming",
			},
			// {
			// 	name: "Accelerate Your Organization",
			// 	href: "/accelerate",
			// },
		],
	},
	{
		name: "Volunteer",
		href: "/volunteer",
	},
	{
		name: "Contact Us",
		href: "/contact",
	},
	{
		name: "Donate",
		href: "/donate",
		isBold: true,
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
									src="/ss_logo_final_svg.svg"
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
							{menuItems.map((menuItem) =>
								menuItem.children ? (
									<DropdownMenu
										menuItem={menuItem}
										key={menuItem.name}
									/>
								) : (
									<NextLink
										href={menuItem.href}
										key={menuItem.name}
									>
										{menuItem.isBold ? (
											<b>{menuItem.name}</b>
										) : (
											menuItem.name
										)}
									</NextLink>
								)
							)}
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box h={{ base: 84, sm: 94, md: 83, lg: 54 }} />
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
				{menuItem.isBold ? <b>{menuItem.name}</b> : menuItem.name}
			</MenuButton>
			<MenuList
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onClick={onMouseLeave}
			>
				{menuItem.children.map((child) => (
					<NextLink
						href={child.href}
						_hover={{ background: "white-400" }}
						key={child.name}
					>
						<MenuItem>
							{child.isBold ? <b>{child.name}</b> : child.name}
						</MenuItem>
					</NextLink>
				))}
			</MenuList>
		</Menu>
	);
}
