import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

export function HeroPreview() {
  return (
    <Box
      pt={{ base: 6, md: 10 }}
      pb={{ base: 2, md: 3 }}
      px={{ base: 4, md: 8 }}
      maxW="1800px"
      mx="auto"
      w="100%"
      bg="var(--colors-bg)"
      color="var(--colors-text)"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 300px" }}
        alignItems="center"
        rowGap={{ base: 8, md: 12 }}
        columnGap={{ base: 0, md: 80, lg: 96 }}
      >
        {/* LEFT SIDE — TEXT */}
        <GridItem>
          <Box maxW="550px">
            <Heading size="2xl" mb={1} color="var(--colors-text)">
              Hi, ik ben{" "}
              <Box as="span" color="var(--colors-accent)">
                Gudo
              </Box>
              .
            </Heading>

            <Text fontSize="xl" color="var(--colors-subtle)" mb={3}>
              Full‑Stack Developer die moderne webapplicaties bouwt met React,
              TypeScript, Node en een scherp oog voor premium UI.
            </Text>

            <Text fontSize="md" color="var(--colors-subtle)" mb={4}>
              Ik combineer frontend‑design met backend‑architectuur. Van
              component tot database, van API tot deployment. Ik bouw complete,
              schaalbare applicaties.
            </Text>

            <Stack direction="row" gap={3} mb={3}>
              <RouterLink to="/projects">
                <Button
                  w="full"
                  bg="var(--colors-accent)"
                  color="white"
                  _hover={{ bg: "var(--colors-accent-hover)" }}
                >
                  View Projects
                </Button>
              </RouterLink>

              <RouterLink to="/contact">
                <Button
                  w="full"
                  variant="outline"
                  borderColor="var(--colors-accent)"
                  color="var(--colors-accent)"
                  _hover={{
                    bg: "var(--colors-card)",
                  }}
                >
                  Contact Me
                </Button>
              </RouterLink>
            </Stack>

            <Stack
              direction="row"
              align="center"
              gap={3}
              mt={1}
              color="var(--colors-subtle)"
            >
              <Icon as={FaMapMarkerAlt} />
              <Text>Groningen, Nederland</Text>
              <Text>•</Text>
              <Text>Open voor Full‑Stack Rollen</Text>
            </Stack>
          </Box>
        </GridItem>

        {/* RIGHT SIDE — IMAGE */}
        <GridItem justifySelf="start">
          <Box
            w="280px"
            h="280px"
            borderRadius="full"
            overflow="hidden"
            bg="var(--colors-card)"
          >
            <img
              src="https://res.cloudinary.com/dkpp5c90a/image/upload/v1767116876/uj753emjxnqdxedg4drx.png"
              alt="Developer portrait"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
