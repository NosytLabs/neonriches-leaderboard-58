
import { HTMLAttributes } from "react";
import { CosmeticRarity } from "./cosmetics";

export interface ThroneBackgroundProps {
  variant?: 'royal' | 'crimson' | 'navy' | 'purple' | 'default';
  particles?: boolean;
  animate?: boolean;
  opacity?: number;
  className?: string;
  density?: string; // Add the missing density property
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
  tier?: string; // Add tier property to fix StyleGuide errors
}

export interface RoyalButtonProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  shimmer?: boolean;
  href?: string;
  target?: string; // Add target property
  rel?: string; // Add rel property
  onClick?: () => void;
}

export interface TeamSelectionProps {
  onTeamSelect?: (team: 'red' | 'green' | 'blue') => void;
  onTeamSelected?: (team: 'red' | 'green' | 'blue') => void; // Add alias property
}
