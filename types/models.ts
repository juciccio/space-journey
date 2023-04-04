import { Vector3 } from "@react-three/fiber";

export interface Model {
  model: string;
  position?: Vector3;
  scale?: number;
}