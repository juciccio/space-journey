import Lights from "../lights";
import Scene from "../scene";
import Ship from "../ship";

export default function Experience() {
  return (
    <>
      <color args={["#000"]} attach="background" />
      <Lights />

      <Scene />

      <Ship />      
    </>
  );
}
