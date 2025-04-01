
import React from 'react';
import { Shell } from '@/components/ui/shell/Shell'; // Fix import path
import PageHeader from '@/components/common/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import featuresData from '@/data/featuresData'; // Fix import

// Convert featuresData to an array if it's an object
const featuresArray = Object.entries(featuresData).map(([key, value]) => ({
  id: key,
  ...value
}));

const FeaturesShowcase: React.FC = () => {
  return (
    <Shell>
      <PageHeader 
        title="Royal Features Showcase" 
        description="Explore all the exclusive features available to nobility"
        size="default"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresArray.map((feature) => (
            <Card key={feature.id} className="overflow-hidden border-white/10">
              <CardHeader className="bg-black/20">
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {feature.content}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-12" />
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6">Feature Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Royal Display</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Badge className="mr-2">Premium</Badge>
                      Custom Titles
                    </li>
                    <li className="flex items-center">
                      <Badge className="mr-2">Premium</Badge>
                      Profile Decorations
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spending Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Badge className="mr-2">Royal</Badge>
                      Multipliers
                    </li>
                    <li className="flex items-center">
                      <Badge className="mr-2">Elite</Badge>
                      Strategic Boosts
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Badge className="mr-2">Royal</Badge>
                      Team Leadership
                    </li>
                    <li className="flex items-center">
                      <Badge className="mr-2">Premium</Badge>
                      Public Mockery
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <Separator className="my-12" />
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Pricing Tiers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="border-gray-700">
                <CardHeader className="bg-gray-900">
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For casual spenders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold my-4">$0</div>
                  <ul className="space-y-2 text-sm">
                    <li>Basic profile</li>
                    <li>Leaderboard visibility</li>
                    <li>Team membership</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-blue-700">
                <CardHeader className="bg-blue-900">
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For dedicated spenders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold my-4">$50</div>
                  <ul className="space-y-2 text-sm">
                    <li>Enhanced profile</li>
                    <li>Custom titles</li>
                    <li>Public mockery access</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-700">
                <CardHeader className="bg-purple-900">
                  <CardTitle>Elite</CardTitle>
                  <CardDescription>For serious spenders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold my-4">$100</div>
                  <ul className="space-y-2 text-sm">
                    <li>Premium profile</li>
                    <li>Team leadership</li>
                    <li>Enhanced mockery</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-700">
                <CardHeader className="bg-yellow-900">
                  <CardTitle>Royal</CardTitle>
                  <CardDescription>For the true nobility</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold my-4">$200</div>
                  <ul className="space-y-2 text-sm">
                    <li>Royal profile</li>
                    <li>Royal council access</li>
                    <li>Certificates of nobility</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
};

export default FeaturesShowcase;
