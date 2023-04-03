import { Float, Text } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

interface CopyProps {
  text: string;
  position?: Vector3;
}

const Copy = ({ text, position = [0, 0, 0] }: CopyProps) => {
  return (
    <Float
      speed={1}
      rotationIntensity={0.1}
      floatIntensity={0.1}
      floatingRange={[-0.03, 0.03]}
    >
      <Text
        font="/fonts/audiowide-all-400-normal.woff"
        fontSize={0.07}
        color="white"
        maxWidth={1.4}
        position={position}
      >
        {text}
      </Text>
    </Float>
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
