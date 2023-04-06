import { useBreakpointValue } from "@chakra-ui/react";
import { EffectComposer, TiltShift } from "@react-three/postprocessing";

export default function Effects() {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (isMobile) {
    return null;
  } else {
    return (
      <EffectComposer>
        <TiltShift
          offset={0}
          rotation={0}
          focusArea={1}
          feather={1}
          bias={0.1}
          opacity={0.2}
        />
      </EffectComposer>
    );
  }
}
