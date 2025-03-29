
import { FC } from 'react';

export interface SpendThroneLogoProps {
  variant?: 'default' | 'compact';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

declare const SpendThroneLogo: FC<SpendThroneLogoProps>;

export default SpendThroneLogo;
