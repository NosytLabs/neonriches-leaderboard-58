
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Edit, BarChart3, Sparkles, TrendingUp } from 'lucide-react';
import '../../styles/animations/enhanced-animations.css';

export type ProfileTab = 'view' | 'edit' | 'stats' | 'boost' | 'marketing';

interface ProfileTabNavigationProps {
  viewOnly?: boolean;
  tab: ProfileTab;
  setTab: (tab: ProfileTab) => void;
}

const ProfileTabNavigation: React.FC<ProfileTabNavigationProps> = ({
  viewOnly = false,
  tab,
  setTab
}) => {
  return (
    <div className="mb-6 animate-royal-entrance">
      <Tabs value={tab} className="w-full" onValueChange={(value) => setTab(value as ProfileTab)}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 glass-morphism">
          <TabsTrigger value="view" className="data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
            <Eye className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">View</span>
          </TabsTrigger>
          
          {!viewOnly && (
            <>
              <TabsTrigger value="edit" className="data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
                <Edit className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Edit</span>
              </TabsTrigger>
              
              <TabsTrigger value="stats" className="data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
                <BarChart3 className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Stats</span>
              </TabsTrigger>
              
              <TabsTrigger value="boost" className="data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Boost</span>
              </TabsTrigger>
              
              <TabsTrigger value="marketing" className="data-[state=active]:bg-royal-gold/20 data-[state=active]:text-royal-gold">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Marketing</span>
              </TabsTrigger>
            </>
          )}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default ProfileTabNavigation;
