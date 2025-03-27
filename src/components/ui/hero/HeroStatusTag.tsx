
import React from 'react';

interface HeroStatusTagProps {
  children?: React.ReactNode;
}

const HeroStatusTag: React.FC<HeroStatusTagProps> = ({ children }) => {
  return (
    <div className="inline-block bg-foreground/10 backdrop-blur-md border border-foreground/10 px-3 py-1 rounded-full text-xs text-white/80 tracking-wider font-medieval">
      {children}
    </div>
  );
};

export default HeroStatusTag;
