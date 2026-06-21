import { Box, SimpleGrid } from "@chakra-ui/react";
import { HeroPreview } from "../sections/HeroPreview";
import { ProjectsPreview } from "../sections/ProjectsPreview";
import { AboutPreview } from "../sections/AboutPreview";
import { SkillsPreview } from "../sections/SkillsPreview";
import { MijnOntwikkelreis } from "../sections/MijnOntwikkelreis";

export function HomePage() {
  return (
    <>
      <Box
        maxW="1920px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        bg="var(--colors-bg)"
        color="var(--colors-text)"
      >
        <HeroPreview />

        <ProjectsPreview />

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={8}
          py={12}
          maxW="1800px"
          mx="auto"
        >
          <AboutPreview />
          <SkillsPreview />
          <MijnOntwikkelreis />
        </SimpleGrid>
      </Box>
    </>
  );
}
