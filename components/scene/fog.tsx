interface FogProps {
  color?: string;
}

export default function SceneFog({ color = "#000" }: FogProps) {
  return (
    <>
      <fog attach="fog" args={[color, 6, 10]} />
      <color attach="background" args={[color]} />
    </>
  );
}
