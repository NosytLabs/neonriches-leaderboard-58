
import React from 'react';

export interface HeroFooterProps {
  text?: string;
}

const HeroFooter: React.FC<HeroFooterProps> = ({ text }) => {
  return (
    <div className="text-xs text-white/50 pt-20 pb-4 italic">
      {text || "Disclaimer: All features are purely cosmetic. Spend for fun, not for power."}
    </div>
  );
};

export default HeroFooter;
