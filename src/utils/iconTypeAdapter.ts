
/**
 * Utility to adapt and normalize icon names between different components
 * This helps resolve issues with case sensitivity and naming conventions
 */

// Convert kebab-case, snake_case, or camelCase to PascalCase for Lucide icons
export const adaptIconName = (iconName: string): string => {
  if (!iconName) return '';
  
  // Replace kebab-case or snake_case with camelCase
  const camelCase = iconName.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
  
  // Convert first character to uppercase to create PascalCase
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};

// Map common icon names to their standardized versions
const iconNameMap: Record<string, string> = {
  'alert': 'AlertCircle',
  'bell': 'Bell',
  'check': 'Check',
  'close': 'X',
  'coin': 'Coins',
  'crown': 'Crown',
  'error': 'XCircle',
  'info': 'Info',
  'shield': 'Shield',
  'success': 'CheckCircle',
  'sword': 'Swords',
  'user': 'User',
  'warning': 'AlertTriangle',
  'achievement': 'Award',
  'gift': 'Gift',
  'star': 'Star',
  'sparkles': 'Sparkles',
  'rocket': 'Rocket',
  'trophy': 'Trophy',
  'thumbsUp': 'ThumbsUp',
  'thumbsDown': 'ThumbsDown',
  'heart': 'Heart',
  'message': 'MessageCircle',
  'notification': 'Bell',
  'settings': 'Settings',
  'profile': 'UserCircle',
  'team': 'Users',
  'leaderboard': 'BarChart',
  'moneybag': 'Wallet',
  'wallet': 'Wallet',
  'shop': 'ShoppingCart',
  'store': 'Store',
  'certificate': 'Award',
  'badge': 'Medal',
  'boost': 'Zap',
  'copy': 'Copy',
  'edit': 'Edit',
  'delete': 'Trash',
  'search': 'Search',
  'filter': 'Filter',
  'sort': 'ArrowUpDown',
  'refresh': 'RefreshCw',
  'logout': 'LogOut',
  'login': 'LogIn',
  'register': 'UserPlus',
  'link': 'Link',
  'unlink': 'Unlink',
  'export': 'Download',
  'import': 'Upload',
  'share': 'Share',
  'calendar': 'Calendar',
  'clock': 'Clock',
  'lock': 'Lock',
  'unlock': 'Unlock',
  'eye': 'Eye',
  'eyeOff': 'EyeOff',
  'image': 'Image',
  'camera': 'Camera',
  'video': 'Video',
  'audio': 'Volume2',
  'mute': 'VolumeX',
  'play': 'Play',
  'pause': 'Pause',
  'stop': 'Square',
  'next': 'SkipForward',
  'previous': 'SkipBack',
  'fast-forward': 'FastForward',
  'rewind': 'Rewind',
  'menu': 'Menu',
  'home': 'Home',
  'bookmark': 'Bookmark',
  'flag': 'Flag',
  'tag': 'Tag',
  'tags': 'Tags',
  'file': 'File',
  'folder': 'Folder',
  'upload': 'Upload',
  'download': 'Download',
  'cloud': 'Cloud',
  'server': 'Server',
  'database': 'Database',
  'globe': 'Globe',
  'map': 'Map',
  'compass': 'Compass',
  'navigation': 'Navigation',
  'location': 'MapPin',
  'pin': 'Pin',
  'mail': 'Mail',
  'phone': 'Phone',
  'send': 'Send',
  'reply': 'Reply',
  'forward': 'Forward',
  'trash': 'Trash',
  'archive': 'Archive',
  'box': 'Box',
  'package': 'Package',
  'truck': 'Truck',
  'cart': 'ShoppingCart',
  'shopping-cart': 'ShoppingCart',
  'credit-card': 'CreditCard',
  'dollar': 'DollarSign',
  'currency': 'DollarSign',
  'percent': 'Percent',
  'calculator': 'Calculator',
  'chart': 'BarChart',
  'graph': 'LineChart',
  'trending-up': 'TrendingUp',
  'trending-down': 'TrendingDown',
  'activity': 'Activity',
  'pulse': 'Activity',
  'alert-circle': 'AlertCircle',
  'alert-triangle': 'AlertTriangle',
  'info-circle': 'Info',
  'question': 'HelpCircle',
  'help': 'HelpCircle',
  'lifebuoy': 'LifeBuoy',
  'thumbs-up': 'ThumbsUp',
  'thumbs-down': 'ThumbsDown',
  'chevron-up': 'ChevronUp',
  'chevron-down': 'ChevronDown',
  'chevron-left': 'ChevronLeft',
  'chevron-right': 'ChevronRight',
  'arrow-up': 'ArrowUp',
  'arrow-down': 'ArrowDown',
  'arrow-left': 'ArrowLeft',
  'arrow-right': 'ArrowRight',
  'plus': 'Plus',
  'minus': 'Minus',
  'x': 'X',
  'check-circle': 'CheckCircle',
  'x-circle': 'XCircle',
  'alert-octagon': 'AlertOctagon',
  'shield-off': 'ShieldOff',
  'bell-off': 'BellOff',
  'log-in': 'LogIn',
  'log-out': 'LogOut',
  'toggle-left': 'ToggleLeft',
  'toggle-right': 'ToggleRight',
  'sliders': 'Sliders',
  'settings-2': 'Settings2',
  'user-plus': 'UserPlus',
  'user-minus': 'UserMinus',
  'user-x': 'UserX',
  'users': 'Users',
  'user-check': 'UserCheck',
  'file-text': 'FileText',
  'file-plus': 'FilePlus',
  'file-minus': 'FileMinus',
  'calendar-plus': 'CalendarPlus',
  'calendar-minus': 'CalendarMinus',
  'link-2': 'Link2',
  'external-link': 'ExternalLink',
  'eye-off': 'EyeOff',
  'refresh-cw': 'RefreshCw',
  'refresh-ccw': 'RefreshCcw',
  'corner-up-left': 'CornerUpLeft',
  'corner-up-right': 'CornerUpRight',
  'corner-down-left': 'CornerDownLeft',
  'corner-down-right': 'CornerDownRight',
  'chevrons-up': 'ChevronsUp',
  'chevrons-down': 'ChevronsDown',
  'chevrons-left': 'ChevronsLeft',
  'chevrons-right': 'ChevronsRight',
  'triangle': 'Triangle'
};

// Get the standardized icon name
export const getStandardizedIconName = (iconName: string): string => {
  if (!iconName) return '';
  
  // Check if we have a mapped standardized name
  const standardName = iconNameMap[iconName.toLowerCase()];
  
  if (standardName) {
    return standardName;
  }
  
  // If no direct mapping, try to adapt the name format
  return adaptIconName(iconName);
};

export default {
  adaptIconName,
  getStandardizedIconName
};
