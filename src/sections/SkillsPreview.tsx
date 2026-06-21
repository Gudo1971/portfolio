import {
  Box,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Badge,
} from "@chakra-ui/react";

export function SkillsPreview() {
  return (
    <Box
      bg="var(--colors-card)"
      border="1px solid"
      borderColor="var(--colors-border)"
      borderRadius="12px"
      p={6}
      color="var(--colors-text)"
    >
      <Heading mb={4} color="var(--colors-text)">
        Skills
      </Heading>

      <VStack align="start" gap={6}>
        {/* Frontend */}
        <Box>
          <Text fontWeight="bold" mb={2} color="var(--colors-text)">
            Frontend
          </Text>

          <Wrap gap={2}>
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Chakra UI",
              "HTML",
              "CSS",
            ].map((skill) => (
              <WrapItem key={skill}>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="6px"
                  bg="var(--colors-card)"
                  border="1px solid"
                  borderColor="var(--colors-accent)"
                  color="var(--colors-text)"
                >
                  {skill}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>

        {/* Backend */}
        <Box>
          <Text fontWeight="bold" mb={2} color="var(--colors-text)">
            Backend
          </Text>

          <Wrap gap={2}>
            {[
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "MongoDB",
              "REST API’s",
            ].map((skill) => (
              <WrapItem key={skill}>
                <Badge
                  px={3}
                  py={1}
                  borderRadius="6px"
                  bg="var(--colors-card)"
                  border="1px solid"
                  borderColor="var(--colors-accent)"
                  color="var(--colors-text)"
                >
                  {skill}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </VStack>
    </Box>
  );
}
