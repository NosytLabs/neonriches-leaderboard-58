
import React, { ReactNode } from 'react';
import HeroFeatureCard from './HeroFeatureCard';

interface Feature {
  color: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface HeroFeatureSectionProps {
  features: Feature[];
  className?: string;
}

const HeroFeatureSection = ({ features, className = '' }: HeroFeatureSectionProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto ${className}`}>
      {features.map((feature, index) => (
        <HeroFeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          color={feature.color}
          index={index}
        />
      ))}
    </div>
  );
};

export default HeroFeatureSection;
