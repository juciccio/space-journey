import { ScrollControls } from "@react-three/drei";
import { Debug, Physics } from "@react-three/rapier";
import Lights from "../lights";
import Scene from "../scene";
import Fog from "../scene/fog";
import Ship from "../ship";

export default function Experience() {
  return (
    <>
      <Lights />

      <ScrollControls pages={12} damping={0.1}>
        <Physics>
          <Scene />
          <Ship />

          {/* <Debug /> */}
        </Physics>
      </ScrollControls>
    </>
  );
}
