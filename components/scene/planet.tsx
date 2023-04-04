import { useAnimations, useGLTF } from "@react-three/drei";
import { PrimitiveProps } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Planet() {
  const planet = useGLTF("/models/purple_planet.glb");
  const animations = useAnimations(planet.animations, planet.scene);
  const planetRef = useRef<PrimitiveProps>();

  useEffect(() => {
    if (animations?.actions["Take 01"]) {
      animations?.actions["Take 01"]?.setDuration(200);
      animations?.actions["Take 01"]?.play();
    }
  }, [animations.actions]);

  return (
    <group position={[0, 0, -56]}>
      <primitive
        object={planet.scene}
        scale={6}
        position={[0, 0, 0]}
        ref={planetRef}
      />
    </group>
  );
}

useGLTF.preload("/models/purple_planet.glb");
