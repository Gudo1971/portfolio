import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { projects } from "../data/ProjectsData";
import { Link as RouterLink } from "react-router-dom";

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const frontendLink = project?.frontendGithub ?? project?.github;
  const backendLink = project?.backendGithub;

  if (!project) {
    return (
      <Box p={10}>
        <Heading>Project niet gevonden</Heading>
      </Box>
    );
  }

  return (
    <Box
      px={{ base: 4, md: 8 }}
      py={10}
      maxW="900px"
      mx="auto"
      bg="bg"
      color="text"
    >
      {/* ⭐ Breadcrumb */}
      <RouterLink to="/projects">
        <Text
          mb={6}
          color="blue.400"
          fontWeight="bold"
          _hover={{ color: "blue.500" }}
        >
          ← Terug naar projecten
        </Text>
      </RouterLink>

      {/* ⭐ Titel */}
      <Heading size="2xl" mb={4}>
        {project.title}
      </Heading>

      {/* ⭐ Hero Image */}
      <Image
        src={project.image}
        alt={project.title}
        borderRadius="12px"
        mb={8}
        shadow="md"
      />

      {/* ⭐ Status */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Status
        </Heading>
        <Text color="subtle">{project.status}</Text>
      </Box>

      {/* ⭐ Stack */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Stack
        </Heading>
        <Text color="subtle">{project.stack}</Text>
      </Box>

      {/* ⭐ Beschrijving */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Beschrijving
        </Heading>
        <Text fontSize="lg" color="subtle">
          {project.longDescription}
        </Text>
      </Box>

      {/* ⭐ Waarom dit project? */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Waarom dit project?
        </Heading>
        <Text color="subtle" mb={3}>
          {project.why}
        </Text>

        {/* ⭐ Why bullets */}
        {project.whyBullets && (
          <Stack as="ul" pl={4} gap={1}>
            {project.whyBullets.map((item) => (
              <Text as="li" key={item} color="subtle">
                • {item}
              </Text>
            ))}
          </Stack>
        )}
      </Box>

      {/* ⭐ Wat heb ik geleerd? */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Wat heb ik geleerd?
        </Heading>
        <Text color="subtle">{project.learned}</Text>
      </Box>

      {/* ⭐ Projectstatus */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Projectstatus
        </Heading>
        <Text color="subtle">{project.projectStatus}</Text>
      </Box>

      {/* ⭐ Screenshots */}
      {project.screenshots?.length > 0 && (
        <Box mb={8}>
          <Heading size="md" mb={3}>
            Screenshots
          </Heading>

          <SimpleGrid columns={[1, 2]} gap={4}>
            {project.screenshots.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                borderRadius="md"
                shadow="sm"
              />
            ))}
          </SimpleGrid>
        </Box>
      )}

      {/* ⭐ Demo Login (alleen tonen als aanwezig) */}
      {project.demoLogin && (
        <Box mb={8}>
          <Heading size="md" mb={2}>
            Demo Login
          </Heading>

          <Text color="subtle" mb={2}>
            Gebruik deze demo‑gegevens om de host‑omgeving te bekijken:
          </Text>

          <Box
            bg="card"
            p={4}
            borderRadius="md"
            border="1px solid"
            borderColor="border"
            fontSize="sm"
            color="text"
          >
            <Text>
              <strong>Email:</strong> {project.demoLogin.email}
            </Text>
            <Text>
              <strong>Wachtwoord:</strong> {project.demoLogin.password}
            </Text>
          </Box>

          <Text color="subtle" mt={3}>
            {project.demoLogin.note}
          </Text>
        </Box>
      )}

      {/* ⭐ Live Preview */}
      <Box mb={8}>
        <Heading size="md" mb={2}>
          Live Preview
        </Heading>
        <Text color="subtle" mb={3}>
          {project.livePreviewInfo}
        </Text>
        <Text color="blue.400" fontWeight="bold">
          👉 Bekijk de live preview via de knop hieronder.
        </Text>
      </Box>

      {/* ⭐ Knoppen */}
      <Stack direction="row" gap={4} mt={6}>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          <Button bg="blue.500" color="white" _hover={{ bg: "blue.600" }}>
            Live Demo
          </Button>
        </a>

        {frontendLink && (
          <a href={frontendLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              border="1px solid"
              borderColor="blue.500"
              color="blue.500"
              _hover={{ bg: "blue.500", color: "white" }}
            >
              Frontend Code
            </Button>
          </a>
        )}

        {backendLink && (
          <a href={backendLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              border="1px solid"
              borderColor="green.500"
              color="green.500"
              _hover={{ bg: "green.500", color: "white" }}
            >
              Backend Code
            </Button>
          </a>
        )}
      </Stack>
    </Box>
  );
}
