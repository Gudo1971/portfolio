import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import cvFile from "../assets/cv nieuwe stijl.pdf";

const themeVariables = {
  light: {
    "--colors-text": "#1a202c",
    "--colors-subtle": "#4a5568",
    "--colors-bg": "#ffffff",
    "--colors-card": "#f7fafc",
    "--colors-border": "#e2e8f0",
    "--colors-accent": "#4299e1",
    "--colors-accent-hover": "#3182ce",
  },
  dark: {
    "--colors-text": "#e2e8f0",
    "--colors-subtle": "#a0aec0",
    "--colors-bg": "#0a0f1a",
    "--colors-card": "#1a202c",
    "--colors-border": "#4a5568",
    "--colors-accent": "#63b3ed",
    "--colors-accent-hover": "#4299e1",
  },
};

export function Header() {
  const { open, onOpen, onClose } = useDisclosure();
  const isOpen = open;

  const [mode, setMode] = useState<"light" | "dark">("light");

  const getTheme = (value: string | null): "light" | "dark" =>
    value === "dark" ? "dark" : "light";

  const applyTheme = (theme: "light" | "dark") => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    Object.entries(themeVariables[theme]).forEach(([name, value]) => {
      root.style.setProperty(name, value);
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem("theme");
    const current = getTheme(savedTheme || root.getAttribute("data-theme"));

    applyTheme(current);
    setMode(current);
  }, []);

  const toggleColorMode = () => {
    const root = document.documentElement;
    const current = getTheme(root.getAttribute("data-theme"));
    const next = current === "dark" ? "light" : "dark";

    applyTheme(next);
    window.localStorage.setItem("theme", next);
    setMode(next);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const bg = mode === "dark" ? "gray.900" : "white";
  const text = mode === "dark" ? "white" : "gray.800";
  const subtle = mode === "dark" ? "gray.400" : "gray.600";
  const border = mode === "dark" ? "gray.700" : "gray.300";

  return (
    <Box
      as="header"
      w="100%"
      borderBottom="1px solid"
      borderColor={border}
      bg={bg}
      position="sticky"
      top={0}
      zIndex={50}
    >
      <Flex
        maxW="1920px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        h={16}
        align="center"
        justify="space-between"
      >
        <Box fontWeight="bold" fontSize="xl" color={text}>
          Gudo Gieles
        </Box>

        <HStack gap={6} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              style={{ textDecoration: "none" }}
            >
              <Box
                fontSize="md"
                color={subtle}
                _hover={{ color: "blue.400" }}
                transition="0.2s"
              >
                {item.label}
              </Box>
            </NavLink>
          ))}

          <Link href={cvFile} download _hover={{ textDecoration: "none" }}>
            <Button bg="blue.500" color="white" _hover={{ bg: "blue.600" }}>
              <FiDownload style={{ marginRight: "6px" }} />
              Download CV
            </Button>
          </Link>

          <IconButton
            aria-label="Toggle color mode"
            variant="ghost"
            color={text}
            onClick={toggleColorMode}
            _hover={{ color: "blue.400" }}
          >
            {mode === "dark" ? <FiSun /> : <FiMoon />}
          </IconButton>
        </HStack>

        <HStack display={{ base: "flex", md: "none" }} gap={2}>
          <IconButton
            aria-label="Toggle color mode"
            variant="ghost"
            color={text}
            onClick={toggleColorMode}
            _hover={{ color: "blue.400" }}
          >
            {mode === "dark" ? <FiSun /> : <FiMoon />}
          </IconButton>

          <Box
            onClick={isOpen ? onClose : onOpen}
            cursor="pointer"
            p={2}
            color={text}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
}
