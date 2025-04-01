
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Sparkles } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description = "This feature is under development and will be available soon.",
  icon = <Sparkles className="h-8 w-8 text-royal-gold" />
}) => {
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <Card className="max-w-md w-full mx-auto glass-morphism border-white/10 overflow-hidden">
        <div className="h-1 bg-gradient-to-r from-royal-gold to-royal-purple"></div>
        <CardContent className="p-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 p-3">
            {icon}
          </div>
          
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-white/70 mb-6">{description}</p>
          
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/5 text-sm">
            <Clock className="h-4 w-4 mr-2 text-royal-gold animate-pulse" />
            <span>Coming Soon</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoon;
