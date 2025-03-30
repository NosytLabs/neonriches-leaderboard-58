
import * as LucideIcons from 'lucide-react';

// Create a mapping of kebab-case to PascalCase icon names
const createIconNameMap = (): Record<string, string> => {
  const iconMap: Record<string, string> = {};
  
  Object.keys(LucideIcons).forEach(iconName => {
    // Skip non-icon exports
    if (iconName === 'createLucideIcon' || iconName === 'icons') {
      return;
    }
    
    // Convert PascalCase to kebab-case for lookup
    const kebabCase = iconName
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase();
    
    iconMap[kebabCase] = iconName;
    
    // Also add the PascalCase key for direct lookups
    iconMap[iconName] = iconName;
  });
  
  return iconMap;
};

// Create a map of kebab-case to PascalCase icon names
const iconNameMap = createIconNameMap();

// Convert any icon name format to PascalCase (which is what Lucide uses)
export const toPascalCase = (iconName: string): string => {
  // If already in the map (either as kebab-case or PascalCase), return mapped name
  if (iconNameMap[iconName]) {
    return iconNameMap[iconName];
  }
  
  // Try to convert from kebab-case or camelCase to PascalCase
  if (iconName.includes('-')) {
    // Convert from kebab-case
    const pascalCase = iconName
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('');
    
    if (iconNameMap[pascalCase]) {
      return iconNameMap[pascalCase];
    }
  } else {
    // Convert from camelCase or other format
    const pascalCase = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    
    if (iconNameMap[pascalCase]) {
      return iconNameMap[pascalCase];
    }
  }
  
  // If not found, return the original (might not be valid)
  console.warn(`Icon name "${iconName}" not found in Lucide icons`);
  return iconName;
};

// Check if an icon name exists in Lucide
export const iconExists = (iconName: string): boolean => {
  const pascalCase = toPascalCase(iconName);
  return !!LucideIcons[pascalCase as keyof typeof LucideIcons];
};

// Get common icon aliases (like "money" -> "DollarSign")
export const getIconAlias = (iconName: string): string => {
  const aliases: Record<string, string> = {
    money: 'DollarSign',
    coin: 'Coins',
    profile: 'User',
    account: 'User',
    notification: 'Bell',
    alert: 'AlertTriangle',
    warning: 'AlertTriangle',
    info: 'Info',
    success: 'CheckCircle',
    error: 'XCircle',
    close: 'X',
    delete: 'Trash',
    edit: 'Edit',
    settings: 'Settings',
    config: 'Settings',
    home: 'Home',
    search: 'Search',
    filter: 'Filter',
    sort: 'ArrowUpDown',
    add: 'Plus',
    create: 'Plus',
    remove: 'Minus',
    like: 'Heart',
    favorite: 'Star',
    bookmark: 'Bookmark',
    save: 'Save',
    download: 'Download',
    upload: 'Upload',
    share: 'Share',
    link: 'Link',
    email: 'Mail',
    phone: 'Phone',
    call: 'Phone',
    location: 'MapPin',
    address: 'MapPin',
    calendar: 'Calendar',
    date: 'Calendar',
    time: 'Clock',
    clock: 'Clock',
    play: 'Play',
    pause: 'Pause',
    stop: 'Square',
    next: 'SkipForward',
    previous: 'SkipBack',
    forward: 'FastForward',
    backward: 'Rewind',
    volume: 'Volume',
    mute: 'VolumeX',
    image: 'Image',
    photo: 'Image',
    video: 'Video',
    audio: 'Music',
    music: 'Music',
    file: 'File',
    folder: 'Folder',
    document: 'FileText'
  };
  
  return aliases[iconName.toLowerCase()] || iconName;
};
