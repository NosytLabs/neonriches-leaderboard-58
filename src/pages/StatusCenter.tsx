
import React, { useState } from 'react';
import SimpleLayout from '@/components/layout/SimpleLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Crown, History, Target } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
        >
          <Button variant="outline">Help</Button>
        </PageHeader>
        
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
              <CardContent className="pt-6">
                <div className="text-center py-6">
                  <h3 className="text-xl font-medium mb-2">Status History</h3>
                  <p className="text-muted-foreground">
                    Track your historical standing in the kingdom.
                  </p>
                  
                  <div className="mt-6 space-y-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex items-center p-4 rounded-md bg-background/50 border">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mr-4">
                          {i % 2 === 0 ? (
                            <Crown className="h-6 w-6 text-royal-gold" />
                          ) : (
                            <Target className="h-6 w-6 text-royal-crimson" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">
                            {i % 2 === 0 ? 'Achieved Royal Status' : 'Mocked by LordUser'}
                          </p>
                          <p className="text-sm text-muted-foreground">
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
