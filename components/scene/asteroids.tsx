import { Model } from "@/types/models";
import { Float, Gltf, useGLTF } from "@react-three/drei";

const Asteroid = ({ model, position = [0, 0, 0], scale = 0.1 }: Model) => {
  return (
    <group position={position}>
      <Float rotationIntensity={5} floatIntensity={0.5} speed={2}>
        <Gltf src={model} scale={scale} position={[0, 0, 0]} />
      </Float>
    </group>
  );
};

export default function SceneAsteroids() {
  return (
    <>
      <group position={[1, 1, -5]}>
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[-2, 1, 0]}
          scale={0.5}
        />
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[0, 0, 0]}
          scale={0.1}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[0, 1, 1]}
          scale={0.1}
        />
        <Asteroid
          model="/models/asteroid_03.glb"
          position={[1, 0, 1]}
          scale={0.1}
        />
      </group>

      <group position={[1, 1, -9]}>
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[-2, 1, 0]}
          scale={0.15}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[-1.8, 1, -2]}
          scale={0.3}
        />
      </group>

      <group position={[0, 0, -16]}>
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[1, 1, 0]}
          scale={0.05}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[0, 0, 1]}
          scale={0.05}
        />
        <Asteroid
          model="/models/asteroid_03.glb"
          position={[-1, -1, -1]}
          scale={0.05}
        />
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[1.5, 2.5, 1]}
          scale={0.25}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[1.5, 1, 1]}
          scale={0.1}
        />
        <Asteroid
          model="/models/asteroid_03.glb"
          position={[-2, -1, -1]}
          scale={0.15}
        />
      </group>

      <group position={[-2, 0, -25]}>
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[1, 1, 0]}
          scale={0.05}
        />
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[0, 0.5, 0]}
          scale={0.06}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[0, 0, 1]}
          scale={0.08}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[0, 1, 0]}
          scale={0.07}
        />
        <Asteroid
          model="/models/asteroid_03.glb"
          position={[-1, -1, -1]}
          scale={0.2}
        />
      </group>

      <group position={[-2, 0, -36]}>
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[1, 2, 0]}
          scale={0.1}
        />
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[0, 1, 0]}
          scale={0.15}
        />
        <Asteroid
          model="/models/asteroid_03.glb"
          position={[-1, -1, -1]}
          scale={0.12}
        />
      </group>

      <group position={[3, 0, -43]}>
        <Asteroid
          model="/models/asteroid_02.glb"
          position={[0, 1, 0]}
          scale={0.3}
        />
        <Asteroid
          model="/models/asteroid_01.glb"
          position={[0, -1, -1]}
          scale={0.5}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/asteroid_01.glb");
useGLTF.preload("/models/asteroid_02.glb");
useGLTF.preload("/models/asteroid_03.glb");
