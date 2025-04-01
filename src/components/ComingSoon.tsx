
import React from 'react';
import { Crown } from 'lucide-react';
import AppLayout from '@/layouts/AppLayout';

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title, 
  description = "This royal feature is currently under construction by our most skilled artisans." 
}) => {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 royal-gradient">{title}</h1>
        
        <div className="glass-morphism border-royal-gold/20 p-8 max-w-2xl mx-auto rounded-lg">
          <Crown className="h-16 w-16 text-royal-gold mx-auto mb-6 animate-crown-glow" />
          
          <p className="text-lg mb-4">{description}</p>
          <p className="text-white/70">Check back soon to experience this new addition to the kingdom.</p>
          
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-royal-gold/20 text-royal-gold text-sm">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ComingSoon;
