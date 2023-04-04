import Experience from "@/components/experience";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function Home() {
  return (
    <Canvas
      className="main-canvas"
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 20,
        position: [2.5, 4, 6]
      }}
    >
      <Experience />
      <Perf />
    </Canvas>
  );
}
