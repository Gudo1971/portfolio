import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FiMail } from "react-icons/fi";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactPage() {
  return (
    <Box maxW="800px" mx="auto" py={24} px={4}>
      <VStack gap={10} textAlign="center">
        <Heading size="2xl">Contact</Heading>

        <Text fontSize="lg" opacity={0.8} maxW="600px">
          Wil je samenwerken, heb je een vraag of wil je sparren over een
          project? Je kunt me bereiken via onderstaande kanalen.
        </Text>

        <VStack gap={8} mt={4}>
          <HStack gap={4}>
            <Icon as={FiMail} boxSize={6} opacity={0.8} />
            <Link
              href="mailto:g.gieles@telfort.nl"
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.400" }}
            >
              g.gieles@telfort.nl
            </Link>
          </HStack>

          <HStack gap={4}>
            <Icon as={FaLinkedin} boxSize={6} opacity={0.8} />
            <Link
              href="https://www.linkedin.com/in/gudo-gieles-b956395b/"
              target="_blank"
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.400" }}
            >
              LinkedIn
            </Link>
          </HStack>

          <HStack gap={4}>
            <Icon as={FaGithub} boxSize={6} opacity={0.8} />
            <Link
              href="https://github.com/Gudo1971"
              target="_blank"
              fontSize="lg"
              fontWeight="medium"
              _hover={{ color: "blue.400" }}
            >
              GitHub
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}
