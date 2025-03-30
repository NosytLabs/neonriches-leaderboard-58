
import React from 'react';
import * as Icons from 'lucide-react';
import * as CustomIcons from '@/assets/icons';

type IconName = keyof typeof Icons | keyof typeof CustomIcons;
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface IconProps {
  name: IconName;
  size?: IconSize;
  className?: string;
}

const sizeMap: Record<IconSize, number> = {
  'xs': 16,
  'sm': 20,
  'md': 24,
  'lg': 32,
  'xl': 40,
  '2xl': 48
};

export const Icon: React.FC<IconProps> = ({ name, size = 'md', className }) => {
  // Check if it's a custom icon
  if (name in CustomIcons) {
    const CustomIcon = CustomIcons[name as keyof typeof CustomIcons];
    return <CustomIcon className={className} />;
  }
  
  // Check if it's a Lucide icon
  if (name in Icons) {
    const LucideIcon = Icons[name as keyof typeof Icons];
    return <LucideIcon size={sizeMap[size]} className={className} />;
  }
  
  // Fallback for unknown icons
  console.warn(`Icon "${name}" not found`);
  return <Icons.HelpCircle size={sizeMap[size]} className={className} />;
};
