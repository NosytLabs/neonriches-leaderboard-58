
import React from 'react';
import { Egg } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import PageHeader from '@/components/layout/PageHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RoyalMockeryFestival from '@/components/mockery/RoyalMockeryFestival';
import ScrollOfShame from '@/components/scrolls/ScrollOfShame';
import MockeryLeaderboard from '@/components/mockery/MockeryLeaderboard';
import MockeryRules from '@/components/mockery/MockeryRules';
import usePageTitle from '@/hooks/use-page-title';
import MedievalIcon from '@/components/ui/medieval-icon';

const Mockery = () => {
  usePageTitle('Royal Mockery Festival');
  
  return (
    <PageContainer>
      <PageHeader 
        title="Royal Mockery Festival" 
        description="Express your discontent with other nobles through sophisticated mockery"
        icon={<MedievalIcon name="crown" color="red" size="md" />}
      />
      
      <Tabs defaultValue="mockery" className="space-y-8">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
          <TabsTrigger value="mockery" className="text-sm">Mockery Court</TabsTrigger>
          <TabsTrigger value="shame" className="text-sm">Scroll of Shame</TabsTrigger>
          <TabsTrigger value="leaderboard" className="text-sm">Leaderboard</TabsTrigger>
          <TabsTrigger value="rules" className="text-sm">Rules</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mockery" className="space-y-6">
          <RoyalMockeryFestival />
        </TabsContent>
        
        <TabsContent value="shame" className="space-y-6">
          <ScrollOfShame />
        </TabsContent>
        
        <TabsContent value="leaderboard" className="space-y-6">
          <MockeryLeaderboard />
        </TabsContent>
        
        <TabsContent value="rules" className="space-y-6">
          <MockeryRules />
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default Mockery;
