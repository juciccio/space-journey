// useExperience
export interface Experience {
  status: "loading" | "intro" | "playing" | "end" | "restarting";
  ready: () => void;
  start: () => void;
  end: () => void;
  restart: () => void;
}
