import { Box, SimpleGrid } from "@chakra-ui/react";
import { HeroPreview } from "../sections/HeroPreview";
import { ProjectsPreview } from "../sections/ProjectsPreview";
import { AboutPreview } from "../sections/AboutPreview";
import { SkillsPreview } from "../sections/SkillsPreview";
import { MijnOntwikkelreis } from "../sections/MijnOntwikkelreis";
import { DeveloperToolsSection } from "../sections/DeveloperToolsSection";

export function HomePage() {
  return (
    <>
      <Box bg="var(--colors-bg)" color="var(--colors-text)">
        <HeroPreview />

        <ProjectsPreview />

        <DeveloperToolsSection />
      </Box>

      <Box maxW="1800px" mx="auto" px={{ base: 4, md: 8 }} bg="var(--colors-bg)" color="var(--colors-text)">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} py={12}>
          <AboutPreview />
          <SkillsPreview />
          <MijnOntwikkelreis />
        </SimpleGrid>
      </Box>
    </>
  );
}
