
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollOfShame } from '@/components/scrolls/ScrollOfShame';
import RoyalMockeryFestival from '@/components/mockery/RoyalMockeryFestival';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, Shield, Scroll, Target } from 'lucide-react';

const Mockery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Card className="glass-morphism border-royal-crimson/20">
        <CardHeader>
          <CardTitle className="text-2xl font-medieval">Royal Court of Mockery</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="mock">
            <TabsList className="w-full mb-6 glass-morphism">
              <TabsTrigger value="mock" className="flex items-center">
                <Target className="mr-2 h-4 w-4" />
                Mock Others
              </TabsTrigger>
              <TabsTrigger value="wall" className="flex items-center">
                <Scroll className="mr-2 h-4 w-4" />
                Wall of Shame
              </TabsTrigger>
              <TabsTrigger value="protection" className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                Protection
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mock">
              <RoyalMockeryFestival />
            </TabsContent>
            
            <TabsContent value="wall">
              <ScrollOfShame shameRecords={[]} />
            </TabsContent>
            
            <TabsContent value="protection">
              <div className="text-center py-8">
                <Crown className="h-12 w-12 mx-auto text-royal-gold mb-4" />
                <h3 className="text-xl font-medieval mb-2">Royal Protection</h3>
                <p className="text-white/70">
                  Purchase royal protection to shield yourself from mockery for a period of time.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mockery;
