
// Sound options for playback
export interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  onEnd?: () => void;
  [key: string]: any; // Allow any additional properties to be passed
}
