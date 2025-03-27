
import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Plus } from 'lucide-react';

const UpgradePromotion = () => {
  return (
    <div className="mt-8 glass-morphism rounded-xl p-6 border border-white/10 bg-gradient-to-r from-team-red/10 via-team-green/10 to-team-blue/10">
      <h2 className="text-xl font-bold mb-2">Upgrade to Pro Tier</h2>
      <p className="text-white/70 mb-4">
        Unlock premium features and enhance your profile with Pro Tier for just $25.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Extended text (1000 characters)</p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Up to 5 images</p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Up to 5 links</p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Animated RGB borders</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Video embeds</p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Custom RGB gradients</p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Hover effects</p>
          </div>
          <div className="flex items-start">
            <div className="rounded-full bg-white/10 p-1 mr-2">
              <Plus size={14} className="text-team-green" />
            </div>
            <p className="text-sm">Click stats</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <Button className="w-full bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white">
          <CreditCard size={16} className="mr-2" />
          Upgrade Now - $25
        </Button>
      </div>
    </div>
  );
};

export default UpgradePromotion;
