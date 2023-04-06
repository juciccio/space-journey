import { useExperience } from "@/stores/useExperience";
import {
  Box,
  Button,
  Center,
  Heading,
  ListItem,
  Link,
  Stack,
  VStack,
  List,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function End() {
  const router = useRouter();
  const status = useExperience((state) => state.status);

  const onRestart = () => {
    router.reload();
  };

  return (
    <Center
      bgColor="rgba(0, 0, 0, 0.5)"
      backdropFilter="blur(0.3rem)"
      pos="fixed"
      left={0}
      top={0}
      h="full"
      w="full"
      zIndex="sticky"
      transform="translateZ(0)"
      transition="0.3s opacity"
      opacity={status === "end" ? 1 : 0}
      pointerEvents={status === "end" ? "visible" : "none"}
    >
      {/* @ts-ignore */}
      <VStack         
        backdropFilter="blur(0.3rem)"
        spacing={10}
        overflow="hidden"
        px={{ base: 7, lg: 20 }}
        py={{ base: 10, lg: 12 }}
        rounded="xl"
        transform="translateZ(0)"
        w="full"
        maxW={{ base: "90vw", lg: "50vw" }}
      >
        <Heading fontSize={{ base: "lg", lg: "xl" }} textAlign="center">
          Part of the journey is the end
        </Heading>
        <Stack
          alignItems={{ base: "flex-start", lg: "center" }}
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          spacing={{ base: 10, lg: 2 }}
          w="full"
        >
          <VStack alignItems="flex-start" spacing={3}>
            <Heading fontWeight="medium" fontSize={{ base: "md", lg: "lg" }}>
              Models
            </Heading>
            <List
              fontSize={{ base: "xs", lg: "sm" }}
              fontWeight="light"
              spacing={{ base: 2, lg: 1 }}
            >
              <ListItem>
                <Link
                  color="blue.200"
                  href="https://skfb.ly/6VAZM"
                  target="_blank"
                >
                  &quot;Buzz Droïd Star Wars&quot;
                </Link>{" "}
                by <Box as="strong">Loïc</Box>
              </ListItem>
              <ListItem>
                <Link
                  color="blue.200"
                  href="https://skfb.ly/otAEX"
                  target="_blank"
                >
                  &quot;Spaceship&quot;
                </Link>{" "}
                by <Box as="strong">Tanya Andreeva</Box>
              </ListItem>
              <ListItem>
                <Link
                  color="blue.200"
                  href="https://skfb.ly/ouQDM"
                  target="_blank"
                >
                  &quot;Death Star - Star Wars&quot;
                </Link>{" "}
                by <Box as="strong">SebastianSosnowski</Box>
              </ListItem>
              <ListItem>
                <Link
                  color="blue.200"
                  href="https://skfb.ly/6UErL"
                  target="_blank"
                >
                  &quot;Purple Planet&quot;
                </Link>{" "}
                by <Box as="strong">Yo.Ri</Box>
              </ListItem>
              <ListItem>
                <Link
                  color="blue.200"
                  href="https://skfb.ly/6oZB9"
                  target="_blank"
                >
                  &quot;X-Wing&quot;
                </Link>{" "}
                by <Box as="strong">StarWars-Universe</Box>
              </ListItem>
            </List>
          </VStack>

          <VStack spacing={6}>
            <VStack alignItems="flex-start" spacing={3}>
              <Heading fontWeight="medium" fontSize={{ base: "md", lg: "lg" }}>
                My links
              </Heading>
              <List
                color="blue.200"
                fontSize={{ base: "xs", lg: "sm" }}
                fontWeight="light"
                spacing={{ base: 2, lg: 1 }}
              >
                <ListItem>
                  <Link
                    href="https://www.instagram.com/juciccio/"
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.twitter.com/juciccio/"
                    target="_blank"
                  >
                    Twitter
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/juciccio/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://www.chispalab.com/" target="_blank">
                    Chispa Lab
                  </Link>
                </ListItem>
              </List>
            </VStack>
          </VStack>
        </Stack>

        <Button
          fontWeight="light"
          w={{ base: "full", lg: "auto" }}
          onClick={onRestart}
        >
          Restart
        </Button>
      </VStack>
    </Center>
  );
}
