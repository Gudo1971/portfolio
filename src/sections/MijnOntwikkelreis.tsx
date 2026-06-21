import { Box, Heading, Text, VStack, HStack, Circle } from "@chakra-ui/react";

export function MijnOntwikkelreis() {
  return (
    <Box
      bg="card"
      border="1px solid"
      borderColor="border"
      borderRadius="12px"
      p={6}
    >
      <Heading mb={4} color="text">
        Mijn Ontwikkelreis
      </Heading>

      <Box position="relative" pl={12}>
        {/* Verticale lijn */}
        <Box
          position="absolute"
          left="54px"
          top="0"
          bottom="0"
          width="2px"
          bg="blue.400"
          opacity={0.4}
          zIndex={0}
        />

        <VStack align="start" gap={10} maxW="700px">
          {/* 2026 */}
          <HStack align="start" gap={6} position="relative" zIndex={1}>
            <Circle size="14px" bg="blue.400" mt={1} zIndex={2} />
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="text">
                2026 — Professionaliseren
              </Text>
              <Text color="subtle">
                Building full‑stack projecten en verdiepen in system design.
              </Text>
            </Box>
          </HStack>

          {/* 2025 */}
          <HStack align="start" gap={6} position="relative" zIndex={1}>
            <Circle size="14px" bg="blue.400" mt={1} zIndex={2} />
            <Box>
              <Text fontWeight="bold" fontSize="lg" color="text">
                2025 — Extra projecten & groei
              </Text>
              <Text color="subtle">
                Budget App, StayBnB‑clone, PostgreSQL, MongoDB, Prisma, Next.js,
                React, TypeScript, Chakra UI, Express, REST API’s.
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
