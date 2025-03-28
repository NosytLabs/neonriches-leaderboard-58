
import { HTMLAttributes } from "react";
import { CosmeticRarity } from "./cosmetics";

export interface ThroneBackgroundProps {
  variant?: 'royal' | 'crimson' | 'navy' | 'purple';
  particles?: boolean;
  animate?: boolean;
  opacity?: number;
  className?: string;
}

export interface RoyalDividerProps {
  variant?: 'line' | 'crown' | 'sword' | 'shield' | 'scroll' | 'double' | 'quill' | 'treasure' | 'ornate';
  color?: 'gold' | 'silver' | 'crimson' | 'navy';
  className?: string;
}

export interface RegalBadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'royal' | 'gold' | 'silver' | 'crimson' | 'navy';
  label?: string;
  rarity?: CosmeticRarity;
}
