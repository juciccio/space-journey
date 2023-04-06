import { Experience } from "@/types/stores";
import { create } from "zustand";

export const useExperience = create<Experience>()((set) => ({
  status: "intro",
  start: () => set(() => ({ status: "playing" })),
  end: () => set(() => ({ status: "end" })),
  restart: () => set(() => ({ status: "restarting" })),
}));
