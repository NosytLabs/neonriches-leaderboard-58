import React from 'react';
import { Scroll } from 'lucide-react';
import { useToastContext } from '@/contexts/ToastContext';

const RoyalDecrees = () => {
  const { addToast } = useToastContext();
  
  const decrees = [
    "A Royal Decree has been issued: All citizens must spend at least $10 today to maintain their digital status.",
    "By order of the Crown: Increase your spending by 20% or face digital exile!",
    "The Royal Treasury demands tribute! Spend generously to climb the ranks of nobility.",
    "New cosmetic items available in the Royal Boutique! Spend now to customize your profile.",
    "The Public Shaming Festival is now active! Humiliate your rivals with rotten tomatoes and eggs."
  ];

  return (
    <div className="glass-morphism p-4 rounded-lg border border-white/10">
      <h3 className="font-medium royal-gradient flex items-center mb-3">
        <Scroll className="mr-2 h-4 w-4" /> Royal Decrees
      </h3>
      <ul className="space-y-2">
        {decrees.map((decree, index) => (
          <li key={index} className="text-sm text-white/70 italic">
            {decree}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoyalDecrees;
