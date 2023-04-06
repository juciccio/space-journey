// useExperience
export interface Experience {
  status: 'intro' | 'playing' | 'end';
  start: () => void;
  end: () => void;
}