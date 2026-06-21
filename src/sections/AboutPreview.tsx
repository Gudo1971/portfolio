import { Box, Heading, Text, VStack } from "@chakra-ui/react";

export function AboutPreview() {
  return (
    <Box
      bg="card"
      border="1px solid"
      borderColor="border"
      borderRadius="12px"
      p={6}
    >
      <Heading mb={4} color="text">
        Over mij
      </Heading>

      <VStack align="start" gap={4}>
        <Text color="subtle">
          Ik ben Gudo, een full‑stack developer uit Groningen met een sterke
          focus op moderne webapplicaties. Ik werk dagelijks met React,
          TypeScript, Node.js en PostgreSQL en bouw oplossingen die schaalbaar,
          betrouwbaar en gebruiksvriendelijk zijn.
        </Text>

        <Text color="subtle">
          Mijn kracht ligt in het zelfstandig oppakken van projecten: van
          UI‑ontwerp tot backend‑architectuur. Ik denk mee, ik bouw door en ik
          lever af. Clean code, consistente componenten en een premium
          gebruikerservaring staan centraal in mijn werk.
        </Text>

        <Text color="subtle">
          Ik ben op zoek naar een rol waarin ik kan groeien binnen een modern
          engineering‑team, bijdragen aan echte productontwikkeling en mijn
          full‑stack vaardigheden verder kan verdiepen.
        </Text>
      </VStack>
    </Box>
  );
}
