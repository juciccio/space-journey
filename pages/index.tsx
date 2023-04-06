import End from "@/components/end";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Loader from "@/components/loader";
import { useExperience } from "@/stores/useExperience";
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NextSeo } from "next-seo";
import { Suspense } from "react";

export default function Home() {
  const status = useExperience((state) => state.status);

  return (
    <>
      <NextSeo
        title="Space Journey"
        description="A little experiment with ThreeJS into the galaxy"
        canonical="https://space-journey.vercel.app/"
        openGraph={{
          url: "https://space-journey.vercel.app/",
          title: "Space Journey",
          description: "A little experiment with ThreeJS into the galaxy",
        }}
      />

      {/* Whole 3D experience */}
      <Canvas
        className={`main-canvas ${status === "loading" ? "hide" : ""}`}
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
