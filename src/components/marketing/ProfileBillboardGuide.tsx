
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

const ProfileBillboardGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="glass-morphism p-4 rounded-lg border border-white/10">
        <h3 className="text-lg font-bold mb-2 flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-royal-gold" />
          How to Maximize Your Profile Visibility
        </h3>
        <p className="text-white/70">
          Your profile on SpendThrone serves as your digital billboard in the kingdom. 
          Follow these tips to maximize your visibility and climb the ranks faster.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              Do's
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Use a high-quality profile image that stands out</p>
            </div>
            <div className="flex">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Write a captivating royal proclamation (bio)</p>
            </div>
            <div className="flex">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Add social media links to increase followership</p>
            </div>
            <div className="flex">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Purchase profile boosts during peak hours</p>
            </div>
            <div className="flex">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Join a Royal House to get team visibility bonuses</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-morphism border-white/10">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
              Don'ts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Leave your profile incomplete or with default settings</p>
            </div>
            <div className="flex">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Set your profile visibility to private</p>
            </div>
            <div className="flex">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Ignore team events that boost visibility</p>
            </div>
            <div className="flex">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Use low-quality or blurry profile images</p>
            </div>
            <div className="flex">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70">Miss opportunities to get featured in the leaderboard</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-morphism border-royal-gold/20">
        <CardHeader>
          <CardTitle className="text-lg text-royal-gold">Premium Visibility Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/70 mb-4">
            Upgrade to a higher tier to unlock these premium visibility features:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-royal-gold flex-shrink-0" />
              <span className="text-sm">Featured placement at the top of leaderboards</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-royal-gold flex-shrink-0" />
              <span className="text-sm">Custom profile themes and animations</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-royal-gold flex-shrink-0" />
              <span className="text-sm">Special badges to highlight your status</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-royal-gold flex-shrink-0" />
              <span className="text-sm">Increased chances of being featured in tournaments</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileBillboardGuide;
