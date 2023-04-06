import { Model } from "@/types/models";
import { useBreakpointValue } from "@chakra-ui/react";
import { Float, Gltf, useGLTF } from "@react-three/drei";

export const Droid = ({ model, position = [0, 0, 0], scale = 0.01 }: Model) => {
  return (
    <group position={position}>
      <Float rotationIntensity={5} floatIntensity={0.5} speed={2}>
        <Gltf src={model} scale={scale} position={[0, 0, 0]} />
      </Float>
    </group>
  );
};

export default function Droids() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <group
        position={isMobile ? [0.8, 1.5, -36] : [1.5, 1.5, -36]}
        scale={isMobile ? 0.5 : 1}
      >
        <Droid model="/models/buzz-droid.glb" position={[0, 0, 0]} />
        <Droid model="/models/buzz-droid.glb" position={[0, 0.5, 0.5]} />
        <Droid model="/models/buzz-droid.glb" position={[0.5, 0.5, 0]} />
        <Droid model="/models/buzz-droid.glb" position={[0.6, 0.5, 0.5]} />
        <Droid model="/models/buzz-droid.glb" position={[-0.5, 0.7, 0]} />
        <Droid model="/models/buzz-droid.glb" position={[0.5, -0.5, 0]} />
        <Droid model="/models/buzz-droid.glb" position={[1, 0.5, 1]} />
      </group>
    </>
  );
}

useGLTF.preload("/models/buzz-droid.glb");
