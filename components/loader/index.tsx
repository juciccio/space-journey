import { Center, Progress, Text, VStack } from "@chakra-ui/react";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function Loader() {
  const { active, progress } = useProgress();

  const [amount, setAmount] = useState<number>(0);
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    setAmount(progress);
  }, [progress]);

  useEffect(() => {
    setIsDone(active);
  }, [active]);

  return (
    <Center
      bgColor="black"
      pos="fixed"
      left={0}
      top={0}
      h="full"
      w="full"
      zIndex="modal"
      transition="0.3s opacity"
      opacity={isDone ? 1 : 0}
      pointerEvents={isDone ? "visible" : "none"}
    >
      <VStack
        alignItems="flex-start"
        border="4px solid white"
        p={4}
        spacing={2}
        h="50vh"
        w="50vw"
        justifyContent="flex-end"
      >
        <Text>{Math.floor(amount)}%</Text>
        <Progress
          hasStripe
          value={Math.floor(amount)}
          colorScheme="gray"
          height="1rem"
          w="full"
        />
      </VStack>
    </Center>
  );
}
