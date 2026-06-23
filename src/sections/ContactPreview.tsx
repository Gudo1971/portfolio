import { Box, Heading, Text } from "@chakra-ui/react";

export function ContactPreview() {
  return (
    <Box py={24} px={6} maxW="1800px" mx="auto">
      <Heading mb={4}> Contact </Heading>
      <Text> Hier komt mijn contact informatie </Text>
    </Box>
  );
}
