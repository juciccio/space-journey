import { useExperience } from "@/stores/useExperience";
import { Float, useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Ship() {
  const endExperience = useExperience((state) => state.end);

  // ship
  const shipRef = useRef<any>(null);
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

  const end = (data: any) => {
    if (data.offset >= 1) {
      data.el.style.overflow = "hidden";

      setTimeout(() => {
        gsap.to(shipRef?.current?.rotation, { x: 0.5, duration: 1 });
        gsap.to(shipRef?.current?.position, { y: 2.5, z: -0.5, duration: 1 });
        gsap.to(shipRef?.current?.scale, { x: 0, y: 0, z: 0, duration: 1 });
      }, 250);

      setTimeout(() => {
        endExperience();
      }, 750);
    }
  };

  // Open wings
  useEffect(() => {
    if (animations?.actions["Take 001"]) {
      animations.actions["Take 001"].startAt(-2);
      animations.actions["Take 001"].clampWhenFinished = true;
      animations.actions["Take 001"].setLoop(THREE.LoopOnce, 1);
      animations?.actions["Take 001"]?.play();
    }

    setTimeout(() => {
      if (animations?.actions["Take 001"]) {
        animations.actions["Take 001"].paused = true;
      }
    }, 4000);
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

    if (data.offset < 1) {
      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    }

    // Scroll
    move(data.offset * 50);

    // End
    end(data);
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
            position={[0, -0.5, 1]}
            rotation={[-0.3, Math.PI, 0]}
          />
        </Float>
      </RigidBody>
    </Suspense>
  );
}

useGLTF.preload("/models/x-wing.glb");
