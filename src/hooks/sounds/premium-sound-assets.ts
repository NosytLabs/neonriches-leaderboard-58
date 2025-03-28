
import { SoundType } from './types';

// Premium sound packs available
export const premiumSoundPacks = [
  {
    id: 'royal',
    name: 'Royal Court',
    description: 'Elegant sounds fit for nobility',
    price: 5.99,
    previewSound: 'royalAnnouncement',
    sounds: ['royalAnnouncement', 'trumpet', 'medallion', 'seal'] as SoundType[],
    features: ['4 premium sounds', 'High quality audio', 'Exclusive to nobility']
  },
  {
    id: 'medieval',
    name: 'Medieval Tavern',
    description: 'Rustic sounds from a bygone era',
    price: 3.99,
    previewSound: 'coinDrop',
    sounds: ['coinDrop', 'swordClash', 'noblesLaugh'] as SoundType[],
    features: ['3 premium sounds', 'Ambient background options', 'Authentic medieval feel']
  }
];

// Premium sound assets with improved quality
export const premiumSoundAssets: Record<string, string> = {
  'royal.royalAnnouncement': '/sounds/premium/royal-announcement-hq.mp3',
  'royal.trumpet': '/sounds/premium/trumpet-hq.mp3',
  'royal.medallion': '/sounds/premium/medallion-hq.mp3',
  'royal.seal': '/sounds/premium/seal-hq.mp3',
  'medieval.coinDrop': '/sounds/premium/coin-drop-hq.mp3',
  'medieval.swordClash': '/sounds/premium/sword-clash-hq.mp3',
  'medieval.noblesLaugh': '/sounds/premium/nobles-laugh-hq.mp3'
};

// Volume presets for premium sounds
export const premiumVolumePresets: Record<SoundType, number> = {
  coinDrop: 0.6,
  reward: 0.5,
  notification: 0.4,
  click: 0.3,
  success: 0.5,
  error: 0.4,
  royalAnnouncement: 0.5,
  levelUp: 0.6,
  purchase: 0.5,
  shame: 0.5,
  swordClash: 0.5,
  pageTransition: 0.4,
  wish: 0.5,
  pageChange: 0.4,
  parchmentUnfurl: 0.6,
  seal: 0.6,
  medallion: 0.7,
  trumpet: 0.8,
  noblesLaugh: 0.7,
  inkScribble: 0.5,
  hover: 0.3,
  advertisement: 0.6
};
