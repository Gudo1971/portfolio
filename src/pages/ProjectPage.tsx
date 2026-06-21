import { Box, Grid, Heading } from "@chakra-ui/react";
import { projects } from "../data/ProjectsData";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectPage() {
  return (
    <Box px={{ base: 4, md: 8 }} py={10} maxW="1200px" mx="auto">
      <Heading size="xl" mb={8}>
        Mijn Projecten
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </Grid>
    </Box>
  );
}
