import { Copy } from "@/types/texts";
import { useBreakpointValue } from "@chakra-ui/react";
import { Float, Text } from "@react-three/drei";

const Copy = ({ text, position = [0, 0, 0] }: Copy) => {
  return (
    <group position={position}>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.3, 0.3]}
      >
        <Text
          font="/fonts/audiowide-all-400-normal.woff"
          fontSize={0.1}
          color="white"
          maxWidth={1.4}
        >
          {text}
        </Text>
      </Float>
    </group>
  );
};

export default function SceneCopies() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Copy text="Just scroll" position={[0, -0.5, 0]} />
      <Copy
        text="This is a little experiment to test how to interact with the scroll in WebGL. Also, my first project with ThreeJs."
        position={isMobile ? [0, 2, -10] : [1.7, 2, -10]}
      />
      <Copy
        text="The asteroids were made by me with Blender. All the other models are not mine. You can see the references to the authors at the end."
        position={isMobile ? [0, 2, -20] : [-1.2, 2, -20]}
      />
      <Copy
        text="If you are looking to start learning ThreeJs or WebGL I recommend you to check out the ThreeJS Journey course."
        position={isMobile ? [0, 2, -30] : [1.7, 2, -30]}
      />
      <Copy
        text="This is the stack I used to make this project: NextJS, React Three Fiber, Drei, ChakraUI, GSAP, Zustand."
        position={isMobile ? [0, 2, -40] : [-1.2, 2, -40]}
      />
    </>
  );
}
