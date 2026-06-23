import {
  Box,
  Heading,
  Text,
  Wrap,
  WrapItem,
  Badge,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export function DeveloperToolsSection() {
  return (
    <Box
      pt={1}
      pb={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      maxW="1800px"
      mx="auto"
    >
      <Heading mt={0} mb={6} color="text">
        Developer Tools
      </Heading>

      <Box
        maxW="1190px"
        mx="auto"
        p={5}
        borderRadius="lg"
        boxShadow="md"
        bg="card"
        border="1px solid"
        borderColor="border"
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-4px)",
          borderColor: "blue.400",
        }}
        transition="0.2s"
      >
        <Heading size="md" mb={2} color="text">
          react-chakra-v3-template
        </Heading>

        <Text color="subtle" mb={3}>
          Starter template voor moderne React‑apps met Chakra UI v3, semantic
          tokens, dark/light/system mode, recipes en Vite + React 19.
        </Text>

        <Wrap mb={4}>
          {["React", "Chakra UI v3", "Vite", "TypeScript"].map((t) => (
            <WrapItem key={t}>
              <Badge
                px={2}
                py={1}
                borderRadius="6px"
                bg="var(--colors-bg)"
                border="1px solid"
                borderColor="var(--colors-border)"
                color="var(--colors-text)"
              >
                {t}
              </Badge>
            </WrapItem>
          ))}
        </Wrap>
        <Flex justify="space-between" align="center" mt={4}>
          <RouterLink to="/projects/3">
            <Text
              color="blue.400"
              fontWeight="bold"
              _hover={{ color: "blue.500" }}
            >
              Bekijk project →
            </Text>
          </RouterLink>

          <Flex align="center" gap={2}>
            <FaGithub size={20} />
            <a
              href="https://github.com/Gudo1971/react-chakra-v3-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text
                color="subtle"
                fontWeight="medium"
                _hover={{ color: "blue.400" }}
              >
                GitHub
              </Text>
            </a>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
