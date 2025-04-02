
import React from 'react';
import { Crown as LucideCrown } from 'lucide-react';

interface CrownProps {
  className?: string;
  size?: number;
}

const Crown: React.FC<CrownProps> = ({ className = "", size = 24 }) => {
  return <LucideCrown className={className} size={size} />;
};

export default Crown;
