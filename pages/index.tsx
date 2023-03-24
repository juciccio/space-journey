import Experience from "@/components/experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas
      className="main-canvas"
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6],
      }}
    >
      <Experience />
    </Canvas>
  );
}
