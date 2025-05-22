
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@/types/user-consolidated';
import { Badge } from '@/components/ui/badge';
import { Link, ChevronDown, Sparkles, Megaphone, Eye, Users, TrendingUp } from 'lucide-react';
import { formatDollarAmount } from '@/utils/formatters';
import { getMarketingPotentialText } from '@/lib/marketingHelpers';

export interface ProfileMarketingFeaturesProps {
  user: UserProfile;
  onBoostProfile: () => void;
}

const ProfileMarketingFeatures: React.FC<ProfileMarketingFeaturesProps> = ({ 
  user, 
  onBoostProfile 
}) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('visibility');
  
  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const marketingMetrics = {
    impressions: user.profileViews || 0,
    clickRate: user.profileClicks && user.profileViews ? 
      Math.round((user.profileClicks / user.profileViews) * 100) : 0,
    followers: user.followers?.length || 0,
    engagement: "4.5%"
  };
  
  return (
    <div className="space-y-6">
      <Card className="glass-morphism border-white/10 overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-xl font-bold flex items-center">
                <Megaphone className="h-5 w-5 text-royal-gold mr-2" />
                Royal Profile Marketing
              </h2>
              <p className="text-white/70">{getMarketingPotentialText(user)}</p>
            </div>
            
            <Button 
              className="mt-3 md:mt-0 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              onClick={onBoostProfile}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Boost Your Profile
            </Button>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-1">
                <Eye className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">Profile Views</span>
              </div>
              <div className="text-2xl font-bold">{marketingMetrics.impressions.toLocaleString()}</div>
            </div>
            
            <div className="p-4 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-1">
                <TrendingUp className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">Click Rate</span>
              </div>
              <div className="text-2xl font-bold">{marketingMetrics.clickRate}%</div>
            </div>
            
            <div className="p-4 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-1">
                <Users className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">Followers</span>
              </div>
              <div className="text-2xl font-bold">{marketingMetrics.followers}</div>
            </div>
            
            <div className="p-4 glass-morphism border-white/10 rounded-lg">
              <div className="flex items-center mb-1">
                <Sparkles className="h-4 w-4 text-royal-gold mr-2" />
                <span className="text-sm text-white/70">Engagement</span>
              </div>
              <div className="text-2xl font-bold">{marketingMetrics.engagement}</div>
            </div>
          </div>
          
          {/* Marketing Strategy Sections */}
          <div className="space-y-4">
            <div className="glass-morphism border-white/10">
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                onClick={() => toggleSection('visibility')}
              >
                <div className="flex items-center">
                  <div className="bg-indigo-500/20 p-2 rounded-full mr-3">
                    <Eye className="h-5 w-5 text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Visibility Strategy</h3>
                    <p className="text-sm text-white/60">Optimize when and how your profile is seen</p>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'visibility' ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSection === 'visibility' && (
                <div className="p-4 border-t border-white/10">
                  <div className="space-y-4">
                    <p className="text-sm">
                      Your current rank of #{user.rank || 'N/A'} gives you a visibility boost of{' '}
                      <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">{user.rank && user.rank <= 100 ? '5x' : '2x'}</Badge>
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Peak Visibility Hours</h4>
                        <div className="h-20 flex items-end gap-1">
                          {[1,2,3,5,4,6,8,12,10,8,7,6].map((val, i) => (
                            <div 
                              key={i}
                              className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t"
                              style={{ height: `${val * 10}%` }}
                            ></div>
                          ))}
                        </div>
                        <div className="flex justify-between text-xs text-white/60 mt-1">
                          <span>12 AM</span>
                          <span>12 PM</span>
                          <span>11 PM</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Recommended Actions</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="bg-indigo-500/20 p-1 rounded-full mr-2 mt-0.5">
                              <TrendingUp className="h-3 w-3 text-indigo-400" />
                            </div>
                            <span>Increase activity between 8 PM - 10 PM for maximum visibility</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-500/20 p-1 rounded-full mr-2 mt-0.5">
                              <Users className="h-3 w-3 text-indigo-400" />
                            </div>
                            <span>Participate in weekend royal events to boost profile views</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm" onClick={onBoostProfile}>
                        <Sparkles className="h-3 w-3 mr-2" />
                        Apply Visibility Boost
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="glass-morphism border-white/10">
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                onClick={() => toggleSection('links')}
              >
                <div className="flex items-center">
                  <div className="bg-blue-500/20 p-2 rounded-full mr-3">
                    <Link className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Profile Links</h3>
                    <p className="text-sm text-white/60">Add external links to expand your presence</p>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'links' ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSection === 'links' && (
                <div className="p-4 border-t border-white/10">
                  <p className="text-sm mb-4">
                    Your {user.tier || 'basic'} tier allows for {user.tier === 'royal' ? '10' : user.tier === 'premium' ? '5' : '3'} profile links.
                    Currently using {(user.links?.length || 0)}/{user.tier === 'royal' ? '10' : user.tier === 'premium' ? '5' : '3'}.
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {(user.links || []).map((link, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-black/20 rounded-md">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-2">
                            <Link className="h-4 w-4 text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium">{link.title || `Link ${index + 1}`}</div>
                            <a href={link.url} className="text-xs text-blue-400">{link.url}</a>
                          </div>
                        </div>
                        <Badge className="bg-blue-500/10 text-blue-300 border-blue-500/30">{link.clicks || 0} clicks</Badge>
                      </div>
                    ))}
                    
                    {(!user.links || user.links.length === 0) && (
                      <div className="text-center py-4 text-white/60">
                        <Link className="h-10 w-10 mx-auto mb-2 opacity-30" />
                        <p>No links added yet</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button size="sm">
                      <Link className="h-3 w-3 mr-2" />
                      Add Link
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="glass-morphism border-white/10">
              <button
                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                onClick={() => toggleSection('premium')}
              >
                <div className="flex items-center">
                  <div className="bg-amber-500/20 p-2 rounded-full mr-3">
                    <Sparkles className="h-5 w-5 text-amber-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium">Premium Features</h3>
                    <p className="text-sm text-white/60">Unlock advanced marketing capabilities</p>
                  </div>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'premium' ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedSection === 'premium' && (
                <div className="p-4 border-t border-white/10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="glass-morphism border-white/10 p-3 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium flex items-center">
                          <TrendingUp className="h-4 w-4 text-amber-400 mr-1" />
                          Enhanced Analytics
                        </h4>
                        <Badge className={user.tier === 'premium' || user.tier === 'royal' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                          {user.tier === 'premium' || user.tier === 'royal' ? 'Available' : 'Premium Only'}
                        </Badge>
                      </div>
                      <p className="text-sm text-white/70">Detailed insights into who views your profile and how they engage.</p>
                    </div>
                    
                    <div className="glass-morphism border-white/10 p-3 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium flex items-center">
                          <Eye className="h-4 w-4 text-amber-400 mr-1" />
                          Featured Placement
                        </h4>
                        <Badge className={user.tier === 'royal' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}>
                          {user.tier === 'royal' ? 'Available' : 'Royal Only'}
                        </Badge>
                      </div>
                      <p className="text-sm text-white/70">Your profile featured on the homepage and top of leaderboards.</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button variant="default">Upgrade Your Tier</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileMarketingFeatures;
