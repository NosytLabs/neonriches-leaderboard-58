export interface SoundAssets {
  [key: string]: {
    url: string;
    volume: number;
    description: string;
  };
}

export interface SoundInfo {
  id: string;
  url: string;
  description: string;
}
