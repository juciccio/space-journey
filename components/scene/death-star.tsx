import { useBreakpointValue } from "@chakra-ui/react";
import { useGLTF } from "@react-three/drei";

export default function DeathStar() {
  const deathStar = useGLTF("/models/death_star_-_star_wars.glb");
  const isMobile = useBreakpointValue({ base: true, lg: false });
  
  return (
    <primitive
      object={deathStar.scene}
      scale={isMobile ? 0.10 : 0.12}
      position={isMobile ? [4, -4.5, -29] : [7, -4, -27]}
      rotation={isMobile ? [-0.5, -0.9, 0] : [-0.3, -0.7, 0]}
    />
  );
}

useGLTF.preload("/models/death_star_-_star_wars.glb");
