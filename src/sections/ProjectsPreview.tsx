import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Wrap,
  WrapItem,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/ProjectsData";

export function ProjectsPreview() {
  return (
    <Box
      pt={1}
      pb={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      maxW="1920px"
      mx="auto"
    >
      <Heading mt={0} mb={6} color="text">
        Projects
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {projects.slice(0, 3).map((project) => {
          const sourceLink = project.frontendGithub ?? project.github;

          return (
            <Box
              key={project.id}
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
              <Image
                src={project.image}
                alt={project.title}
                borderRadius="12px"
                width="100%"
                height="720px"
                objectFit="cover"
                mb={6}
              />

              <Heading size="md" mb={2} color="text">
                {project.title}
              </Heading>

              <Text color="subtle" mb={3} height="100px">
                {project.description}
              </Text>

              <Wrap mb={4}>
                {project.tech.map((t) => (
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
                <RouterLink to={`/projects/${project.id}`}>
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
                  {sourceLink && (
                    <a
                      href={sourceLink}
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
                  )}
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
