
import React from 'react';
import {
  Shield,
  Flame,
  MessageSquare,
  CircleDot,
  Sparkles
} from 'lucide-react';

// A map of icon names to the actual Lucide React components
export const iconMap = {
  shield: Shield,
  flame: Flame,
  messageSquare: MessageSquare,
  circleDot: CircleDot,
  sparkles: Sparkles
};

// A function to render an icon by name with optional props
export const renderIcon = (name: string, props = {}) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};

export default iconMap;
