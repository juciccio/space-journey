import { ScrollControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Effects from "../effects";
import Lights from "../lights";
import Scene from "../scene";
import Ship from "../ship";

export default function Experience() {
  return (
    <>
      <Lights />

      <ScrollControls pages={12} damping={0.1}>
        <Physics>
          <Scene />
          <Ship />
        </Physics>
      </ScrollControls>

      <Effects />
    </>
  );
}
