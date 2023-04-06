import { useExperience } from "@/stores/useExperience";
import {
  Box,
  Button,
  Center,
  Heading,
  ListItem,
  Link,
  Stack,
  UnorderedList,
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
      <VStack
        backdropFilter="blur(0.3rem)"
        spacing={10}
        overflow="hidden"
        px={20}
        py={12}
        rounded="xl"
        transform="translateZ(0)"
        w="full"
        maxW="50vw"
      >
        <Heading as="h1" fontSize="xl">
          Part of the journey is the end
        </Heading>
        <Stack direction={{ base: "column", lg: "row" }} justifyContent="space-between" w="full">
          <VStack alignItems="flex-start" spacing={2}>
            <Heading fontWeight="medium" fontSize="lg">
              Models
            </Heading>
            <List fontSize="sm" fontWeight="light">
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
            <VStack alignItems="flex-start" spacing={2}>
              <Heading fontWeight="medium" fontSize="lg">
                My Links
              </Heading>
              <List fontSize="sm" fontWeight="light" color="blue.200">
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
        <Button fontWeight="light" onClick={onRestart}>
          Restart
        </Button>
      </VStack>
    </Center>
  );
}
