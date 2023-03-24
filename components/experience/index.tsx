import Lights from "../lights";
import Ship from "../ship";

export default function Experience() {
  return (
    <>
      <color args={["#000"]} attach="background" />

      <Ship />

      <Lights />
    </>
  );
}
