import {
	Box,
    Button,
	Text,
	Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";



export default function Resources(): JSX.Element {

    return(
        
        <Container bg="brand.purple.dark">

            <ContainerInside>

            <Box maxW="400px">
                <Heading size="md" py="15px">
                    Notes
                </Heading>
                <Text>
                We simplify complicated material by offering 
                notes and free help with classes! Our resources 
                cover both AP and non-AP courses, allowing you 
                to explore the intricacies of the subject at hand.
                </Text>
            </Box>

        <Menu>
        <MenuButton as={Button}>CATEGORIES</MenuButton>
            <MenuList>
                <MenuItem>
                    <Menu>
                        <MenuButton as={Button}>Math</MenuButton>
                        <MenuList>
                            <MenuItem>All</MenuItem>
                            <MenuItem>Algebra I</MenuItem>
                            <MenuItem>Algebra II</MenuItem>
                            <MenuItem>Geometry</MenuItem>
                            <MenuItem>Trigonometry</MenuItem>
                        </MenuList>
                    </Menu>
                </MenuItem>
                <MenuItem>
                        <Menu>
                            <MenuButton as={Button}>Science</MenuButton>
                            <MenuList>
                                <MenuItem>Biology</MenuItem>
                                <MenuItem>Chemistry</MenuItem>
                                <MenuItem>Physics</MenuItem>
                                <MenuItem>Environmental Science</MenuItem>
                            </MenuList>
                        </Menu>
                    </MenuItem>
                <MenuItem>
                    <Menu>
                        <MenuButton as={Button}>History</MenuButton>
                        <MenuList>
                            <MenuItem>American History</MenuItem>
                            <MenuItem>World History</MenuItem>
                            <MenuItem>European History</MenuItem>
                        </MenuList>
                    </Menu>
                </MenuItem>
                <MenuItem>
                <Menu>
                    <MenuButton as={Button}>English</MenuButton>
                        <MenuList>
                            <MenuItem>Poetry</MenuItem>
                            <MenuItem>Fables</MenuItem>
                            <MenuItem>American Literature</MenuItem>
                            <MenuItem>Composition</MenuItem>
                        </MenuList>
                    </Menu>
                </MenuItem>
                <MenuItem>
                    <Menu>
                        <MenuButton as={Button}>Math</MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                    </Menu>
                    </MenuItem>
            </MenuList>
        </Menu>

            </ContainerInside>
        </Container>
        



    )

    
    
}