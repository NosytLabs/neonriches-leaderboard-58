
import * as LucideIcons from 'lucide-react';

/**
 * Utility for converting various icon name formats to the correct format for Lucide icons
 */

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
    
    // Add camelCase variant
    const camelCase = iconName.charAt(0).toLowerCase() + iconName.slice(1);
    iconMap[camelCase] = iconName;
  });
  
  return iconMap;
};

// Create a map of icon name variants to PascalCase icon names
const iconNameMap = createIconNameMap();

/**
 * Convert any icon name format to PascalCase (which is what Lucide uses)
 */
export const toPascalCase = (iconName: string): string => {
  // If already in the map (any variant), return mapped name
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
  
  // Check for common aliases
  const alias = getIconAlias(iconName);
  if (alias && iconNameMap[alias]) {
    return iconNameMap[alias];
  }
  
  // If not found, return the original (might not be valid)
  console.warn(`Icon name "${iconName}" not found in Lucide icons`);
  return 'HelpCircle'; // Default fallback
};

/**
 * Check if an icon name exists in Lucide
 */
export const iconExists = (iconName: string): boolean => {
  const pascalCase = toPascalCase(iconName);
  return !!LucideIcons[pascalCase as keyof typeof LucideIcons];
};

/**
 * Get common icon aliases (like "money" -> "DollarSign")
 */
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
    document: 'FileText',
    crown: 'Crown',
    gem: 'Gem',
    shield: 'Shield',
    sword: 'Sword',
    scroll: 'Scroll',
    chart: 'BarChart',
    graph: 'LineChart',
    stats: 'PieChart',
    trophy: 'Trophy',
    medal: 'Medal',
    gift: 'Gift',
    rocket: 'Rocket',
    star: 'Star',
    heart: 'Heart',
    thumbsUp: 'ThumbsUp',
    thumbsDown: 'ThumbsDown',
    key: 'Key',
    lock: 'Lock',
    unlock: 'Unlock',
    gear: 'Settings',
    cog: 'Settings',
    tag: 'Tag',
    list: 'List',
    grid: 'Grid',
    menu: 'Menu',
    sidebar: 'PanelLeft',
    layout: 'Layout',
    template: 'Template',
    code: 'Code',
    terminal: 'Terminal',
    server: 'Server',
    cloud: 'Cloud',
    database: 'Database',
    wifi: 'Wifi',
    bluetooth: 'Bluetooth',
    signal: 'Signal',
    battery: 'Battery',
    power: 'Power',
    refresh: 'RefreshCw',
    rotate: 'RotateCw',
    undo: 'Undo',
    redo: 'Redo',
    reply: 'Reply',
    forward: 'Forward',
    send: 'Send',
    trash: 'Trash',
    archive: 'Archive',
    compress: 'Minimize',
    expand: 'Maximize',
    eye: 'Eye',
    eyeOff: 'EyeOff',
    visible: 'Eye',
    invisible: 'EyeOff',
    pin: 'MapPin',
    flag: 'Flag',
    bookmark: 'Bookmark',
    camera: 'Camera',
    printer: 'Printer',
    scissors: 'Scissors',
    copy: 'Copy',
    paste: 'Clipboard',
    clipboard: 'Clipboard',
    layers: 'Layers',
    stack: 'Layers',
    package: 'Package',
    box: 'Package',
    map: 'Map',
    globe: 'Globe',
    compass: 'Compass',
    navigation: 'Navigation',
    share: 'Share',
    trending: 'TrendingUp',
    decrease: 'TrendingDown',
    increase: 'TrendingUp',
    zoomIn: 'ZoomIn',
    zoomOut: 'ZoomOut',
    filter: 'Filter',
    sliders: 'Sliders',
    options: 'Sliders',
    coffee: 'Coffee',
    food: 'Utensils',
    cart: 'ShoppingCart',
    bag: 'ShoppingBag',
    credit: 'CreditCard',
    payment: 'CreditCard',
    bank: 'Landmark',
    calc: 'Calculator',
    calendar: 'Calendar',
    event: 'Calendar',
    ticket: 'Ticket',
    airplane: 'Plane',
    train: 'Train',
    car: 'Car',
    truck: 'Truck',
    bus: 'Bus',
    bike: 'Bike',
    walk: 'Walking',
    run: 'Running',
    ruler: 'Ruler',
    wrench: 'Wrench',
    tools: 'Tool',
    target: 'Target',
    crosshair: 'Crosshair',
    focus: 'Crosshair',
    person: 'User',
    people: 'Users',
    team: 'Users',
    group: 'Users',
    friends: 'Users',
    contact: 'UserPlus',
    book: 'Book',
    read: 'BookOpen',
    newspaper: 'Newspaper',
    palette: 'Palette',
    brush: 'Brush',
    pen: 'Pen',
    color: 'Palette',
    shape: 'Square',
    tv: 'Tv',
    screen: 'Monitor',
    computer: 'Monitor',
    mobile: 'Smartphone',
    tablet: 'Tablet',
    device: 'Smartphone',
    watch: 'Watch',
    time: 'Clock',
    alarm: 'Clock',
    timer: 'Timer',
    stopwatch: 'Stopwatch',
    mail: 'Mail',
    chat: 'MessageSquare',
    talk: 'MessageCircle',
    quote: 'Quote',
    mic: 'Mic',
    record: 'Mic',
    voicemail: 'Voicemail',
    call: 'Phone',
    telephone: 'Phone',
    dial: 'Phone',
    fax: 'Printer',
    battery: 'Battery',
    power: 'Power',
    lightning: 'Zap',
    bolt: 'Zap',
    electric: 'Zap',
    plug: 'Power',
    outlet: 'Power',
    bulb: 'Lightbulb',
    idea: 'Lightbulb',
    light: 'Sun',
    dark: 'Moon',
    sun: 'Sun',
    moon: 'Moon',
    stars: 'Stars',
    night: 'Moon',
    day: 'Sun',
    cloud: 'Cloud',
    cloudy: 'Cloud',
    rain: 'CloudRain',
    lightning: 'CloudLightning',
    snow: 'CloudSnow',
    weather: 'Cloud',
    drop: 'Droplets',
    water: 'Droplets',
    wind: 'Wind'
  };
  
  return aliases[iconName.toLowerCase()] || iconName;
};

// Export a comprehensive icon map for projects using custom icon naming
export const iconMap = iconNameMap;

export default iconNameMap;
