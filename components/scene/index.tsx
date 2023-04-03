import { Sparkles, Stars } from "@react-three/drei";
import SceneAsteroids from "./asteroids";
import SceneCopies from "./copies";
import SceneFog from "./fog";
import SceneTitle from "./title";

export default function Scene() {
  return (
    <>
      {/* Main title */}
      <SceneTitle />

      <SceneCopies />

      <SceneFog />

      <SceneAsteroids />

      <Sparkles
        size={4}
        scale={[10, 10, 90]}
        position-y={1}
        speed={0}
        count={300}
      />
    </>
  );
}
