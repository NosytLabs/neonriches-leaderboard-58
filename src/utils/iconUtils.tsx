
import React from 'react';
import { Icon, IconName } from '@/components/ui/icon';
import { Shield, Flame, MessageSquare, CircleDot, Sparkles } from 'lucide-react';

// Map legacy icon names to our new IconName type
export const iconMap: Record<string, IconName> = {
  shield: 'shield',
  flame: 'flame',
  messageSquare: 'message-square',
  circleDot: 'circle',
  sparkles: 'sparkles',
  home: 'home',
  search: 'search',
  settings: 'settings',
  user: 'user',
  crown: 'crown',
  trophy: 'trophy',
  dollar: 'dollar-sign',
  coins: 'coin',
  bell: 'bell',
  calendar: 'calendar',
  edit: 'edit',
  trash: 'trash',
  key: 'key',
  lock: 'lock',
  mail: 'mail',
  phone: 'phone',
  heart: 'heart',
  bookmark: 'bookmark',
  image: 'image',
  video: 'video',
  music: 'music',
  book: 'book',
  upload: 'upload',
  download: 'download',
  menu: 'menu',
  check: 'check',
  warning: 'alert-triangle',
  info: 'info',
  help: 'help-circle',
  camera: 'camera',
  gift: 'gift',
  link: 'link',
  share: 'share',
  play: 'play',
  pause: 'pause',
  volume: 'volume-2',
  mute: 'volume-x',
};

// For backward compatibility
export const renderIcon = (name: string, props = {}) => {
  // First try the new icon system
  if (iconMap[name]) {
    return <Icon name={iconMap[name]} {...props} />;
  }
  
  // Fallback to Lucide icons for compatibility
  const LucideIconComponent = {
    shield: Shield,
    flame: Flame,
    messageSquare: MessageSquare,
    circleDot: CircleDot,
    sparkles: Sparkles
  }[name];
  
  if (LucideIconComponent) {
    return <LucideIconComponent {...props} />;
  }
  
  return null;
};

// Convert from Lucide icon components to our icon system
export const convertLucideToIcon = (lucideIcon: React.ReactNode): IconName | null => {
  if (!lucideIcon) return null;
  
  // Extract the component name
  const componentName = (lucideIcon as any)?.type?.name;
  
  if (!componentName) return null;
  
  // Map Lucide component names to our IconNames
  const mapping: Record<string, IconName> = {
    Shield: 'shield',
    Flame: 'flame', 
    MessageSquare: 'message-square',
    CircleDot: 'circle',
    Sparkles: 'sparkles',
    Home: 'home',
    Search: 'search',
    Settings: 'settings',
    User: 'user',
    Crown: 'crown',
    Trophy: 'trophy',
    DollarSign: 'dollar-sign',
    Coins: 'coin',
    Bell: 'bell',
    Calendar: 'calendar',
    Edit: 'edit',
    Trash: 'trash',
    Key: 'key',
    Lock: 'lock',
    Mail: 'mail',
    Phone: 'phone',
    Heart: 'heart',
    Bookmark: 'bookmark',
    Image: 'image',
    Video: 'video',
    Music: 'music',
    Book: 'book',
    Upload: 'upload',
    Download: 'download',
    Menu: 'menu',
    Check: 'check',
    AlertTriangle: 'alert-triangle',
    Info: 'info',
    HelpCircle: 'help-circle',
    Camera: 'camera',
    Gift: 'gift',
    Link: 'link',
    Share: 'share',
    Play: 'play',
    Pause: 'pause',
    Volume: 'volume-2',
    VolumeX: 'volume-x',
  };
  
  return mapping[componentName] || null;
};

export default iconMap;
