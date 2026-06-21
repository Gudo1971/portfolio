import { Box, Heading, Text, Stack, Image, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import type { Project } from "../data/ProjectsData";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      border="1px solid"
      borderColor="border"
      borderRadius="12px"
      p={5}
      bg="card"
      _hover={{
        borderColor: "blue.400",
        transform: "translateY(-4px)",
        transition: "0.2s",
      }}
    >
      <Image
        src={project.image}
        alt={project.title}
        borderRadius="12px"
        width="100%"
        height="520px" // <<< vaste hoogte
        objectFit="cover" // <<< snijdt netjes bij
      />

      <Heading size="md" mb={2} mt={6} color="text">
        {project.title}
      </Heading>

      <Text color="subtle" mb={3}>
        {project.description}
      </Text>

      <Stack direction="row" gap={2} mb={4} wrap="wrap">
        {project.tech.map((t) => (
          <Box
            key={t}
            px={3}
            py={1}
            borderRadius="6px"
            bg="var(--colors-bg)"
            border="1px solid"
            borderColor="var(--colors-border)"
            fontSize="sm"
            color="var(--colors-text)"
          >
            {t}
          </Box>
        ))}
      </Stack>

      <RouterLink to={`/projects/${project.id}`}>
        <Button
          w="full"
          bg="blue.500"
          color="white"
          _hover={{ bg: "blue.600" }}
        >
          Bekijk project
        </Button>
      </RouterLink>
    </Box>
  );
}
