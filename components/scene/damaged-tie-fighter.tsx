import { Float, useGLTF } from "@react-three/drei";

export default function DamagedTieFighter() {
  const tie = useGLTF("/models/damaged-tie-fighter.glb");

  return (
    <group position={[-2.5, 0, -30]}>
      <Float rotationIntensity={10} floatIntensity={0.5} speed={0.1}>
        <primitive object={tie.scene} scale={0.06} />
      </Float>
    </group>
  );
}

useGLTF.preload("/models/damaged-tie-fighter.glb");
