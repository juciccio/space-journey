import { Copy } from "@/types/texts";
import { Float, Text } from "@react-three/drei";

const Copy = ({ text, position = [0, 0, 0] }: Copy) => {
  return (
    <group position={position}>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.3, 0.3]}
      >
        <Text
          font="/fonts/audiowide-all-400-normal.woff"
          fontSize={0.07}
          color="white"
          maxWidth={1.4}
        >
          {text}
        </Text>
      </Float>
    </group>
  );
};

export default function SceneCopies() {
  return (
    <>
      <Copy
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        tellus quis lacus tincidunt condimentum. Vivamus in dolor eu sapien
        lobortis efficitur. Curabitur aliquam ante mauris, et rhoncus erat
        posuere vel. Sed velit risus, vulputate vel orci semper, hendrerit
        vehicula diam"
        position={[1.7, 2, -10]}
      />
      <Copy
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        tellus quis lacus tincidunt condimentum. Vivamus in dolor eu sapien
        lobortis efficitur. Curabitur aliquam ante mauris, et rhoncus erat
        posuere vel. Sed velit risus, vulputate vel orci semper, hendrerit
        vehicula diam"
        position={[-1.2, 2, -20]}
      />
      <Copy
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        tellus quis lacus tincidunt condimentum. Vivamus in dolor eu sapien
        lobortis efficitur. Curabitur aliquam ante mauris, et rhoncus erat
        posuere vel. Sed velit risus, vulputate vel orci semper, hendrerit
        vehicula diam"
        position={[1.7, 2, -30]}
      />
      <Copy
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        tellus quis lacus tincidunt condimentum. Vivamus in dolor eu sapien
        lobortis efficitur. Curabitur aliquam ante mauris, et rhoncus erat
        posuere vel. Sed velit risus, vulputate vel orci semper, hendrerit
        vehicula diam"
        position={[-1.2, 2, -40]}
      />
    </>
  );
}
