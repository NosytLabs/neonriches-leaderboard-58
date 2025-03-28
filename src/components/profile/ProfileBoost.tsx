
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const ProfileBoost: React.FC = () => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="mr-2 h-5 w-5 text-royal-gold" />
          Boost Your Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/70">
          Profile boost features coming soon. You'll be able to increase your profile visibility and add special effects.
        </p>
      </CardContent>
    </Card>
  );
};

export default ProfileBoost;
