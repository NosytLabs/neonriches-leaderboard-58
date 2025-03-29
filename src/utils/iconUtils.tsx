
import React from 'react';
import { Icon, IconName } from '@/components/ui/icon';
import { Shield, Flame, MessageSquare, CircleDot, Sparkles } from 'lucide-react';

// Map legacy icon names to our new IconName type
export const iconMap: Record<string, IconName> = {
  shield: 'shield',
  flame: 'fire',
  messageSquare: 'message',
  circleDot: 'info',
  sparkles: 'star',
  home: 'home',
  search: 'search',
  settings: 'settings',
  user: 'user',
  crown: 'crown',
  trophy: 'trophy',
  dollar: 'dollar',
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
  warning: 'warning',
  info: 'info',
  help: 'help',
  camera: 'camera',
  gift: 'gift',
  link: 'link',
  share: 'share',
  play: 'play',
  pause: 'pause',
  volume: 'volume',
  mute: 'mute',
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
  }[name as keyof typeof iconMap];
  
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
    Flame: 'fire', 
    MessageSquare: 'message',
    CircleDot: 'info',
    Sparkles: 'star',
    Home: 'home',
    Search: 'search',
    Settings: 'settings',
    User: 'user',
    Crown: 'crown',
    Trophy: 'trophy',
    DollarSign: 'dollar',
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
    AlertTriangle: 'warning',
    Info: 'info',
    HelpCircle: 'help',
    Camera: 'camera',
    Gift: 'gift',
    Link: 'link',
    Share: 'share',
    Play: 'play',
    Pause: 'pause',
    Volume: 'volume',
    VolumeX: 'mute',
  };
  
  return mapping[componentName] || null;
};

export default iconMap;
