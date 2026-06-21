import { Box, Text, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="var(--colors-border)"
      py={6}
      px={{ base: 4, md: 8 }}
      bg="var(--colors-bg)"
    >
      <VStack gap={4} textAlign="center">
        {/* NAV LINKS */}
        <HStack gap={6}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Text
              fontSize="sm"
              color="var(--colors-subtle)"
              _hover={{ color: "var(--colors-accent)" }}
              transition="0.2s"
            >
              Home
            </Text>
          </NavLink>

          <NavLink to="/projects" style={{ textDecoration: "none" }}>
            <Text
              fontSize="sm"
              color="var(--colors-subtle)"
              _hover={{ color: "var(--colors-accent)" }}
              transition="0.2s"
            >
              Projects
            </Text>
          </NavLink>

          <NavLink to="/contact" style={{ textDecoration: "none" }}>
            <Text
              fontSize="sm"
              color="var(--colors-subtle)"
              _hover={{ color: "var(--colors-accent)" }}
              transition="0.2s"
            >
              Contact
            </Text>
          </NavLink>
        </HStack>

        {/* SOCIALS */}
        <HStack gap={6}>
          <Link
            href="https://github.com/Gudo1971"
            target="_blank"
            _hover={{ color: "var(--colors-accent)" }}
          >
            <Icon as={FaGithub} boxSize={5} color="var(--colors-subtle)" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/gudo-gieles-b956395b/"
            target="_blank"
            _hover={{ color: "var(--colors-accent)" }}
          >
            <Icon as={FaLinkedin} boxSize={5} color="var(--colors-subtle)" />
          </Link>
        </HStack>

        {/* COPYRIGHT */}
        <Text fontSize="sm" color="var(--colors-subtle)">
          © {new Date().getFullYear()} Gudo Gieles All rights reserved
        </Text>
      </VStack>
    </Box>
  );
}
