
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getBoostById } from '@/data/boostEffects';
import { formatTimeElapsed } from '@/utils/formatters';
import { ProfileBoost } from '@/types/boost';
import { Sparkles, X } from 'lucide-react';

interface ProfileBoostDisplayProps {
  boosts: ProfileBoost[];
  onRemoveBoost?: (boostId: string) => void;
}

const ProfileBoostDisplay: React.FC<ProfileBoostDisplayProps> = ({ 
  boosts, 
  onRemoveBoost 
}) => {
  if (!boosts || boosts.length === 0) {
    return (
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Active Boosts</h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-white/60">No active boosts on your profile.</p>
        </CardContent>
      </Card>
    );
  }
  
  const handleRemoveBoost = (boostId: string) => {
    if (onRemoveBoost) {
      onRemoveBoost(boostId);
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-royal-gold" />
          Active Boosts
        </h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {boosts.map(boost => {
            const boostDetails = getBoostById(boost.effectId as string);
            if (!boostDetails) return null;
            
            const endDate = new Date(boost.endDate);
            const isExpired = endDate < new Date();
            
            return (
              <div 
                key={boost.id} 
                className={`flex items-center justify-between p-3 rounded-md border ${
                  isExpired ? 'border-red-500/20 bg-red-900/10' : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center ${boostDetails.cssClass || ''}`}>
                    <Sparkles className="h-5 w-5 text-royal-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium">{boostDetails.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-white/60">
                      <span>
                        {isExpired 
                          ? 'Expired' 
                          : `Expires ${formatTimeElapsed(endDate.toISOString())}`}
                      </span>
                      <Badge variant="outline" className="bg-white/5 text-[10px]">
                        Level {boost.level}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {onRemoveBoost && !isExpired && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleRemoveBoost(boost.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBoostDisplay;
