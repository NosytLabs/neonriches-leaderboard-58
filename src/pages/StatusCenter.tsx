
import React, { useState } from 'react';
import SimpleLayout from '@/components/layout/SimpleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, History, Target } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LightweightMockeryPanel from '@/components/mockery/components/LightweightMockeryPanel';

const StatusCenter = () => {
  const [activeTab, setActiveTab] = useState('mockery');
  
  return (
    <SimpleLayout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader
          title="Royal Status Center"
          description="Manage your standing and interact with other nobles"
          icon={<Crown className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-6">
            <TabsTrigger value="mockery" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Royal Mockery
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Status History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mockery">
            <LightweightMockeryPanel />
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Status History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-muted-foreground mb-4">
                    Track your historical standing in the kingdom.
                  </p>
                  
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center p-3 rounded-md bg-background/50 border">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                          {i % 2 === 0 ? (
                            <Crown className="h-5 w-5 text-royal-gold" />
                          ) : (
                            <Target className="h-5 w-5 text-royal-crimson" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {i % 2 === 0 ? 'Achieved Royal Status' : 'Mocked by LordUser'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SimpleLayout>
  );
};

export default StatusCenter;
