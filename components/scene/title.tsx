import { useBreakpointValue } from "@chakra-ui/react";
import { Center, Float, Text3D, useMatcapTexture } from "@react-three/drei";
import * as THREE from "three";

export default function SceneTitle() {
  const [matcapTexture] = useMatcapTexture("161B1F_C7E0EC_90A5B3_7B8C9B", 256);

  matcapTexture.encoding = THREE.sRGBEncoding;
  matcapTexture.needsUpdate = true;

  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Float
      rotationIntensity={0.4}
      floatIntensity={0.4}
      floatingRange={[-0.3, 0.3]}
    >
      <Center position={[0, 1.2, 0]}>
        <Text3D
          font="/fonts/Audiowide_Regular.json"
          scale={isMobile ? 0.18 : 0.5}
          lineHeight={0.75}
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
      </Center>
    </Float>
  );
}
