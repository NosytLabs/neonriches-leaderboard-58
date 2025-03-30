
import { LucideIcon } from 'lucide-react';
import { 
  Crown, Shield, Sword, Scroll, Heart, Trophy, 
  Coins, Key, Award, Medal, Gem, Wallet, Castle,
  User, Settings, Bell, Home, Calendar, Search,
  MessageCircle, Activity, RefreshCw, Eye, Coffee,
  Gift, FileText, Briefcase, Target, Edit, Lock,
  Star, Music, Camera, Video, Globe, Mail, Phone,
  DollarSign, Zap, Feather
} from 'lucide-react';

// Mapping of icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  // Medieval icons
  crown: Crown,
  shield: Shield,
  sword: Sword,
  scroll: Scroll,
  heart: Heart,
  trophy: Trophy,
  coins: Coins,
  key: Key,
  seal: Award,
  medal: Medal,
  gem: Gem,
  wallet: Wallet,
  castle: Castle,
  
  // Common UI icons
  user: User,
  settings: Settings,
  bell: Bell,
  home: Home,
  calendar: Calendar,
  search: Search,
  message: MessageCircle,
  activity: Activity,
  refresh: RefreshCw,
  eye: Eye,
  coffee: Coffee,
  gift: Gift,
  file: FileText,
  briefcase: Briefcase,
  target: Target,
  edit: Edit,
  lock: Lock,
  star: Star,
  music: Music,
  camera: Camera,
  video: Video,
  globe: Globe,
  mail: Mail,
  phone: Phone,
  dollar: DollarSign,
  zap: Zap,
  feather: Feather
};

/**
 * Get an icon component by name
 * @param name - The name of the icon
 * @returns The icon component or null if not found
 */
export const getIconByName = (name: string): LucideIcon | null => {
  return iconMap[name.toLowerCase()] || null;
};

/**
 * Check if an icon exists by name
 * @param name - The name of the icon to check
 * @returns True if the icon exists, false otherwise
 */
export const iconExists = (name: string): boolean => {
  return !!iconMap[name.toLowerCase()];
};

/**
 * Get all available icon names
 * @returns Array of all available icon names
 */
export const getAllIconNames = (): string[] => {
  return Object.keys(iconMap);
};

export default iconMap;
