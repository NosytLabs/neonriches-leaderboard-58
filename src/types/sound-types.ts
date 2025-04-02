
export type SoundType = 
  | 'success'
  | 'error'
  | 'notification'
  | 'purchase'
  | 'achievement'
  | 'deposit'
  | 'withdrawal'
  | 'rank_up'
  | 'level_up'
  | 'levelUp'
  | 'coin'
  | 'shame'
  | 'mockery'
  | 'boost'
  | 'throne'
  | 'royal'
  | 'click'
  | 'message'
  | 'reward'
  | 'chime'
  | 'fanfare'
  | 'coinDrop'
  | 'sparkle'
  | 'protection'
  | 'transfer'
  | 'unlock'
  | 'royal_preview'
  | 'royal_bell'
  | 'royal_fanfare'
  | 'royal_announcement'
  | 'royal_success'
  | 'epic_preview'
  | 'epic_victory'
  | 'epic_defeat'
  | 'epic_discovery'
  | 'epic_challenge'
  | 'minimal_preview'
  | 'minimal_notification'
  | 'minimal_success'
  | 'minimal_alert'
  | 'minimal_action'
  // Additional sound types to fix errors
  | 'alert'
  | 'badge'
  | 'toggle'
  | 'upgrade'
  | 'down'
  | 'up'
  | 'withdraw'
  | 'thumbsDown'
  | 'advertisement'
  | 'wish'
  | 'inkScribble'
  | 'hover'
  | 'parchmentUnfurl'
  | 'pageChange'
  | 'noblesLaugh'
  | 'swordClash'
  | 'medallion'
  | 'trumpet'
  | 'seal'
  | 'team'
  | 'royalAnnouncement';

export interface SoundOptions {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
  once?: boolean;
  format?: string;
  fadeIn?: boolean;
  fadeOut?: boolean;
  duration?: number;
}

export interface PremiumSoundPackDetails {
  id: string;
  name: string;
  description: string;
  previewSound: SoundType;
  price: number;
  tier: string;
  // Added for compatibility
  icon?: string;
  sounds?: SoundType[];
}
