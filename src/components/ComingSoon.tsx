
import React from 'react';
import { Sparkles } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description = "This feature is under development and will be available soon."
}) => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="max-w-md w-full mx-auto p-8 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-yellow-500/20 p-3">
          <Sparkles className="h-8 w-8 text-yellow-500" />
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 text-sm">
          Coming Soon
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
