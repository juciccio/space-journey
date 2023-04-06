import { useBreakpointValue } from "@chakra-ui/react";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (isMobile) {
    return null;
  } else {
    return (
      <EffectComposer>
        <Noise opacity={0.5} blendFunction={BlendFunction.MULTIPLY} />
      </EffectComposer>
    );
  }
}
