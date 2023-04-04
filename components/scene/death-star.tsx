import { useGLTF } from "@react-three/drei";

export default function DeathStar() {
  const deathStar = useGLTF("/models/death_star_-_star_wars.glb");
  
  return (
    <primitive
      object={deathStar.scene}
      scale={0.12}
      position={[7, -4, -27]}
      rotation={[-0.3, -0.7, 0]}
    />
  );
}

useGLTF.preload("/models/death_star_-_star_wars.glb");
