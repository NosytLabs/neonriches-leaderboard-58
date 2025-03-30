
import React from 'react';
import { IconProps, IconSize } from '@/types/ui/icon-types';
import * as LucideIcons from 'lucide-react';
import { adaptIconName } from '@/utils/iconNameAdapter';

const IconSystem = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const sizeMap: Record<string, number> = {
    'xs': 16,
    'sm': 20,
    'md': 24,
    'lg': 32,
    'xl': 40,
    '2xl': 48,
    '3xl': 64,
    '4xl': 80
  };
  
  const {
    name,
    size = 'md',
    color = 'currentColor',
    className = '',
    style = 'default',
    ...rest
  } = props;
  
  // Convert size from string to number if it's one of our predefined sizes
  const pixelSize = typeof size === 'string' && size in sizeMap 
    ? sizeMap[size] 
    : (typeof size === 'number' ? size : 24);
  
  // Adapt the icon name to a format that Lucide can use
  const adaptedName = adaptIconName(name || '');
  
  // Get the Lucide icon component if it exists
  const LucideIcon = adaptedName && adaptedName in LucideIcons 
    ? LucideIcons[adaptedName as keyof typeof LucideIcons] 
    : null;
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <LucideIcon
      ref={ref}
      size={pixelSize}
      color={color}
      className={className}
      {...rest}
    />
  );
});

IconSystem.displayName = 'IconSystem';

export default IconSystem;
