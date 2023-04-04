import { Model } from "@/types/models";
import { Float, Gltf, useGLTF } from "@react-three/drei";

const Droid = ({ model, position = [0, 0, 0], scale = 0.01 }: Model) => {
  return (
    <group position={position}>
      <Float rotationIntensity={5} floatIntensity={0.5} speed={2}>
        <Gltf src={model} scale={scale} position={[0, 0, 0]} />
      </Float>
    </group>
  );
};

export default function Droids() {
  return (
    <>
      <group position={[1.5, 1.5, -36]}>
        <Droid
          model="/models/buzz-droid.glb"
          position={[0, 0, 0]}
        />
        <Droid
          model="/models/buzz-droid.glb"
          position={[0, 0.5, 0.5]}
        />
        <Droid
          model="/models/buzz-droid.glb"
          position={[0.5, 0.5, 0]}
        />
        <Droid
          model="/models/buzz-droid.glb"
          position={[0.6, 0.5, 0.5]}
        />
        <Droid
          model="/models/buzz-droid.glb"
          position={[-0.5, 0.7, 0]}
        />
        <Droid
          model="/models/buzz-droid.glb"
          position={[0.5, -0.5, 0]}
        />
        <Droid
          model="/models/buzz-droid.glb"
          position={[1, 0.5, 1]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/buzz-droid.glb");
