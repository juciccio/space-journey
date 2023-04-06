// useExperience
export interface Experience {
  status: 'intro' | 'playing' | 'end' | 'restarting';
  start: () => void;
  end: () => void;
  restart: () => void;
}