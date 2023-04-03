import { Float, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Ship() {
  // ship
  const shipRef = useRef(null);
  const xwing = useGLTF("/models/x-wing.glb");
  const animations = useAnimations(xwing.animations, xwing.scene);

  // Ship physics
  const body = useRef<any>(null);

  // Camera
  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  const move = (amount: number) => {
    body?.current?.setNextKinematicTranslation({ x: 0, y: 0, z: -amount });
  };

  // Open wings
  useEffect(() => {
    if (animations?.actions["Take 001"]) {
      animations.actions["Take 001"].clampWhenFinished = true;
      animations.actions["Take 001"].setLoop(THREE.LoopOnce, 1);
      animations?.actions["Take 001"]?.play();
    }

    setTimeout(() => {
      if (animations?.actions["Take 001"]) {
        animations.actions["Take 001"].paused = true;
      }
    }, 5000);
  }, [animations.actions]);

  // Scroll
  const data = useScroll();

  useFrame((state, delta) => {
    // Camera
    const bodyPosition = body.current.translation();
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 6.25;
    cameraPosition.y += 3.65;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.75;

    smoothedCameraPosition.lerp(cameraPosition, 3 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 3 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    // Scroll
    move(data.offset * 50);
  });

  return (
    <Suspense
      fallback={
        <mesh scale={[0.4, 0.4, 0.4]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh>
      }
    >
      <RigidBody ref={body} type="kinematicPosition" colliders={false}>
        <Float
          speed={3}
          rotationIntensity={0.4}
          floatIntensity={0.4}
          floatingRange={[-0.2, 0.2]}
        >
          <primitive
            ref={shipRef}
            object={xwing.scene}
            scale={0.016}
            position={[0.42, -0.5, 1]}
            rotation={[-0.3, Math.PI, 0]}
          />
        </Float>
      </RigidBody>
    </Suspense>
  );
}

useGLTF.preload("/models/x-wing.glb");
