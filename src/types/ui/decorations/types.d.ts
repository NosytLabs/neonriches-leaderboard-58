
import { ReactNode } from 'react';

export type MedievalIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type MedievalSize = MedievalIconSize;

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze'
  | 'royal'
  | 'crimson'
  | 'navy'
  | 'emerald'
  | 'purple'
  | 'amber'
  | 'azure'; // Add azure for compatibility

export type MedievalDecorationColor = MedievalIconColor;

export interface MedievalDecorationProps {
  className?: string;
  size?: MedievalIconSize;
  color?: MedievalDecorationColor;
  children?: ReactNode;
  container?: any; // For compatibility
  icon?: any; // For compatibility
  border?: any; // For compatibility
}
