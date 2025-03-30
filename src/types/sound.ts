
export type SoundType = 
  'click' | 
  'hover' | 
  'success' | 
  'error' | 
  'notification' | 
  'purchase' | 
  'rankUp' | 
  'coinDrop' | 
  'achievement' | 
  'trumpets' | 
  'fanfare' | 
  'shame' | 
  'parchment' | 
  'royalAnnouncement' | 
  'mockery' | 
  'crown' | 
  'info' |
  'seal' |
  'deposit' |
  'reward' |
  'win' |
  'levelUp' |
  'wish' |
  'message' |
  'pageChange' |
  'coins' |
  'swordClash' |
  'noblesLaugh';

export interface SoundEffect {
  id: string;
  name: string;
  path: string;
  volume: number;
  loop?: boolean;
  type: SoundType;
}
