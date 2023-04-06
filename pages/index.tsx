import End from "@/components/end";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Loader from "@/components/loader";
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      {/* Whole 3D experience */}
      <Canvas
        className="main-canvas"
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 20,
          position: [2.5, 4, 6],
        }}
      >
        <Suspense fallback={null}>
          <Experience />
          <Preload all />
        </Suspense>
      </Canvas>

      {/* Intro Screen */}
      <Intro />

      {/* End Screen */}
      <End />

      {/* Loader */}
      <Loader />
    </>
  );
}
