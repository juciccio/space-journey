import { Fog } from "@/types/general";

export default function SceneFog({ color = "#000" }: Fog) {
  return (
    <>
      <fog attach="fog" args={[color, 6, 10]} />
      <color attach="background" args={[color]} />
    </>
  );
}
