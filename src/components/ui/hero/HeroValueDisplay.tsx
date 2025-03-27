
import React from 'react';

export interface HeroValueDisplayProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const HeroValueDisplay: React.FC<HeroValueDisplayProps> = ({ label, value, icon }) => {
  return (
    <div className="text-center">
      <div className="text-white/60 text-sm flex items-center justify-center mb-1">
        {icon}
        <span className="ml-1.5">{label}</span>
      </div>
      <div className="text-2xl font-bold royal-text-shimmer">{value}</div>
    </div>
  );
};

export default HeroValueDisplay;
