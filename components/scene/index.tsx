import { Sparkles } from "@react-three/drei";
import SceneAsteroids from "./asteroids";
import SceneCopies from "./copies";
import DamagedTieFighter from "./damaged-tie-fighter";
import DeathStar from "./death-star";
import Droids from "./droids";
import SceneFog from "./fog";
import Planet from "./planet";
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

      <DeathStar />

      <DamagedTieFighter />

      <Droids />

      <Planet />
    </>
  );
}
