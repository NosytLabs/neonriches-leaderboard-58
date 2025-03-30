
// Add missing BoostEffect type
export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  icon: string;
  type?: string;
  cssClass?: string;
  minTier?: UserTier;
  allowStacking?: boolean;
}
