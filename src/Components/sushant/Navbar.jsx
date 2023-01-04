import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";

const Links = [
  "Dashboard",
  "Projects",
  "Team",
  "Dashboard",
  "Projects",
  "Team",
  "Dashboard",
  "Projects",
  <SearchIcon />,
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          border={"1px"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon padding={0} />}
            aria-label={"Open Menu"}
            display={{ sm: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={5} alignItems={"center"} border={"1px"}>
            <Box mr={{xl:"100px", lg: "0px"}}>
              {/* <Image src={"https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"} alt="logo" h={"60px"} /> */}
              logo
            </Box>
            <HStack
              as={"nav"}
              spacing={{xl:10, lg:5}}
              display={{ base: "none", md: "flex" }}
              border="1px"
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} border="1px" ml={"-200px"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <BsCart2 />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                {/* <MenuDivider /> */}
                <MenuItem>Link 3</MenuItem>
                <MenuItem>Link 4</MenuItem>
                <MenuItem>Link 5</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
