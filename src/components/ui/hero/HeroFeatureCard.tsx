
import React, { ReactNode } from 'react';

interface HeroFeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  index: number;
}

const HeroFeatureCard = ({ title, description, icon, color, index }: HeroFeatureCardProps) => {
  return (
    <div 
      className="royal-card rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-royal-gold/30 group"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-${color}/20 border border-${color}/30 group-hover:ring-2 group-hover:ring-${color}/20 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-royal mb-3">{title}</h3>
      <p className="text-white/80 font-serif">{description}</p>
    </div>
  );
};

export default HeroFeatureCard;
