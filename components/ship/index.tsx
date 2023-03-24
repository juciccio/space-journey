import { Float, useAnimations, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Ship() {
  // ship
  const shipRef = useRef(null);
  const xwing = useGLTF("/models/x-wing.glb");
  const animations = useAnimations(xwing.animations, xwing.scene);

  // floating speed
  const idleFloatSpeed = 3;
  const movingFloatSpeed = 10;
  const [floatingSpeed, setFloatingSpeed] = useState<number>(idleFloatSpeed);  

  // wings handlers
  const openWings = () => {
    animations?.actions["Take 001"]?.setEffectiveTimeScale(1);
    animations?.actions["Take 001"]?.startAt(-3);
    animations?.actions["Take 001"]?.play();
    setTimeout(() => {
      if (animations?.actions["Take 001"]) {
        animations.actions["Take 001"].paused = true;
      }
    }, 2500);
  };

  const closeWings = () => {
    if (animations?.actions["Take 001"]) {
      animations?.actions["Take 001"]?.startAt(1);
      animations?.actions["Take 001"]?.setEffectiveTimeScale(-1);
      animations.actions["Take 001"].paused = false;
      animations?.actions["Take 001"]?.play();
    }
  };

  useEffect(() => {
    if (animations?.actions["Take 001"]) {
      animations.actions["Take 001"].clampWhenFinished = true;
      animations.actions["Take 001"].setLoop(THREE.LoopOnce, 1);
    }
  }, [animations]);

  return (
    <Suspense
      fallback={
        <mesh scale={[0.4, 0.4, 0.4]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh>
      }
    >
      <Float
        speed={floatingSpeed}
        rotationIntensity={0.4}
        floatIntensity={0.4}
        floatingRange={[-0.3, 0.3]}
      >
        <primitive
          ref={shipRef}
          object={xwing.scene}
          scale={0.016}
          position={[0.42, -0.5, 1]}
          rotation={[-0.5, 3.49, -0.16]}
        />
      </Float>
    </Suspense>
  );
}

useGLTF.preload("/models/x-wing.glb");
