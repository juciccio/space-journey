import {
  EffectComposer,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Noise opacity={0.3} blendFunction={BlendFunction.MULTIPLY} />
    </EffectComposer>
  );
}
