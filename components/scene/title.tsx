import { Float, Text3D, useMatcapTexture } from "@react-three/drei";
import * as THREE from "three";

export default function SceneTitle() {
  const [matcapTexture] = useMatcapTexture("161B1F_C7E0EC_90A5B3_7B8C9B", 256);

  matcapTexture.encoding = THREE.sRGBEncoding;
  matcapTexture.needsUpdate = true;

  return (
    <Float
      rotationIntensity={0.4}
      floatIntensity={0.4}
      floatingRange={[-0.3, 0.3]}
    >
      <Text3D
        font="/fonts/Audiowide_Regular.json"
        scale={0.5}
        lineHeight={0.75}
        position={[-2.7, 1, 0]}
        size={1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Space Journey
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>
    </Float>
  );
}
