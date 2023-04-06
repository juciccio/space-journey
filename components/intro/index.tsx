import { useExperience } from "@/stores/useExperience";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";

export default function Intro() {
  const status = useExperience((state) => state.status);
  const start = useExperience((state) => state.start);

  const onStart = () => {
    start();
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
      opacity={status === "intro" ? 1 : 0}
      pointerEvents={status === "intro" ? "visible" : "none"}
    >
      <VStack spacing={10}>
        <Heading as="h1" fontSize="xl">
          Ready when you are
        </Heading>
        <Button fontWeight="light" onClick={onStart}>
          Let&apos;s go!
        </Button>
      </VStack>
    </Center>
  );
}
