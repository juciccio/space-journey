import { useBreakpointValue } from "@chakra-ui/react";
import { Float, useGLTF } from "@react-three/drei";

export default function DamagedTieFighter() {
  const tie = useGLTF("/models/damaged-tie-fighter.glb");
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <group position={isMobile ? [-1.5, 0, -30] : [-2.5, 0, -30]}>
      <Float rotationIntensity={10} floatIntensity={0.5} speed={0.1}>
        <primitive object={tie.scene} scale={isMobile ? 0.04 : 0.06} />
      </Float>
    </group>
  );
}

useGLTF.preload("/models/damaged-tie-fighter.glb");
