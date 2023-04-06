import { useBreakpointValue } from "@chakra-ui/react";
import { Sparkles } from "@react-three/drei";
import { Droid } from "../scene/droids";

export default function CustomError() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Sparkles
        size={4}
        scale={[10, 10, 10]}
        position-y={1}
        speed={0}
        count={100}
      />

      <group position={[0, 0, 0]} scale={1}>
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [1, 0, 0]:[4, 0, 0]} />
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [-0.5, 2, -1]: [-2.5, 1, -1]} />
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [1.2, -2.2, 0]: [5, 2, 0]} />
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [-1, -2.5, 0.5]: [-3, -0.5, 0.5]} />
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [-0.5, 1, 0]: [-2, 1, 0]} />
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [1.8, -0.5, 0]: [3, -0.5, 0]} />
        <Droid model="/models/buzz-droid.glb" position={isMobile ? [-0.7, 2.5, 1]: [-4, 0.5, 1]} />
      </group>
    </>
  );
}
