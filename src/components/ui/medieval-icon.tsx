
import React from 'react';
import { MedievalIconProps, iconSizeMap, iconColorMap } from '@/types/ui/icon-types';

const MedievalIcon: React.FC<MedievalIconProps> = ({
  name,
  size = 'md',
  color = 'default',
  animated = false,
}) => {
  const sizeValue = iconSizeMap[size] || size;
  const colorValue = iconColorMap[color] || color;

  // Default icon path if name doesn't match
  let iconPath = '/assets/icons/medieval/crown.svg';

  // Map icon name to file path
  if (name === 'crown') iconPath = '/assets/icons/medieval/crown.svg';
  if (name === 'sword') iconPath = '/assets/icons/medieval/sword.svg';
  if (name === 'shield') iconPath = '/assets/icons/medieval/shield.svg';
  if (name === 'dragon') iconPath = '/assets/icons/medieval/dragon.svg';
  if (name === 'castle') iconPath = '/assets/icons/medieval/castle.svg';
  if (name === 'scroll') iconPath = '/assets/icons/medieval/scroll.svg';
  if (name === 'key') iconPath = '/assets/icons/medieval/key.svg';
  if (name === 'coin') iconPath = '/assets/icons/medieval/coin.svg';
  if (name === 'coins') iconPath = '/assets/icons/medieval/coins.svg';
  if (name === 'chest') iconPath = '/assets/icons/medieval/chest.svg';
  if (name === 'throne') iconPath = '/assets/icons/medieval/throne.svg';
  if (name === 'treasure-chest') iconPath = '/assets/icons/medieval/treasure-chest.svg';

  return (
    <div 
      className={`medieval-icon ${animated ? 'medieval-icon-animated' : ''}`}
      style={{ 
        width: sizeValue,
        height: sizeValue,
        color: colorValue
      }}
    >
      <img 
        src={iconPath} 
        alt={`${name} icon`} 
        width={sizeValue}
        height={sizeValue}
      />
    </div>
  );
};

export default MedievalIcon;
