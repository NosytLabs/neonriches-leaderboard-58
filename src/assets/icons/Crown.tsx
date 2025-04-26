
import React from 'react';
import { BaseIcon } from '@/components/ui/base-icon';
import { IconProps } from '@/types/icons';

export const Crown: React.FC<IconProps> = (props) => {
  return (
    <BaseIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
      <path d="M3 16h18v4H3z" />
    </BaseIcon>
  );
};

export default Crown;
