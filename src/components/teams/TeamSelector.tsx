
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TeamColor } from '@/types/teams';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Flame, Zap, Droplets } from 'lucide-react';

interface TeamSelectorProps {
  team: TeamColor;
  onTeamChange: (team: 'red' | 'green' | 'blue') => void;
  className?: string;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ team, onTeamChange, className }) => {
  const handleTeamSelect = (selectedTeam: string) => {
    onTeamChange(selectedTeam as 'red' | 'green' | 'blue');
  };

  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Shield className="mr-2 h-5 w-5" />
          Select Your Royal House
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs 
          defaultValue={team || 'red'} 
          onValueChange={handleTeamSelect}
          className="mt-2"
        >
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="red" className="data-[state=active]:bg-red-500/20">
              <Flame className="mr-2 h-4 w-4 text-red-400" />
              <span className="hidden sm:inline">Red Dragon</span>
              <span className="sm:hidden">Red</span>
            </TabsTrigger>
            <TabsTrigger value="green" className="data-[state=active]:bg-green-500/20">
              <Zap className="mr-2 h-4 w-4 text-green-400" />
              <span className="hidden sm:inline">Green Serpent</span>
              <span className="sm:hidden">Green</span>
            </TabsTrigger>
            <TabsTrigger value="blue" className="data-[state=active]:bg-blue-500/20">
              <Droplets className="mr-2 h-4 w-4 text-blue-400" />
              <span className="hidden sm:inline">Blue Phoenix</span>
              <span className="sm:hidden">Blue</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="red">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <h3 className="font-bold mb-2">The Red Dragon House</h3>
                <p className="text-sm text-white/70">
                  The Red Dragon team embraces fire and passion. Members of this team are known for their bold strategies and aggressive spending to climb the ranks.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="green">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <h3 className="font-bold mb-2">The Green Serpent House</h3>
                <p className="text-sm text-white/70">
                  The Green Serpent team channels growth and prosperity. They focus on consistent, strategic investments to ensure steady progression.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="blue">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <h3 className="font-bold mb-2">The Blue Phoenix House</h3>
                <p className="text-sm text-white/70">
                  The Blue Phoenix team values wisdom and patience. They are calculated in their approach, often waiting for the perfect moment to strike.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TeamSelector;
