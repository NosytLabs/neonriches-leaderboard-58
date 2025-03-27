
import React from 'react';

export interface HeroFooterProps {
  text?: string;
}

const HeroFooter: React.FC<HeroFooterProps> = ({ text }) => {
  return (
    <div className="text-xs text-white/50 pt-20 pb-4 italic">
      {text || "Disclaimer: No actual value is provided. You're paying for pixels and pride."}
    </div>
  );
};

export default HeroFooter;
