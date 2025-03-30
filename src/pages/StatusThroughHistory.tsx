
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { aboutContent } from '@/data/aboutContent';

const StatusThroughHistory: React.FC = () => {
  const historicalExamples = [
    {
      era: "Ancient Rome",
      title: "The Cult of Status in the Roman Empire",
      description: "Roman nobles would spend vast fortunes on public buildings, games, and feasts to improve their social standing. The more extravagant the spending, the higher their prestige."
    },
    {
      era: "Renaissance",
      title: "Patronage and Social Climbing",
      description: "Wealthy merchants funded artists and architects to elevate their social position, competing with aristocracy through financial displays rather than bloodlines."
    },
    {
      era: "Victorian Era",
      title: "The Victorian Status Economy",
      description: "The emerging middle class used conspicuous consumption to signal their social position, with elaborate homes, clothing, and social events serving as status markers."
    },
    {
      era: "Gilded Age",
      title: "American Robber Barons",
      description: "Industrial magnates like the Vanderbilts and Rockefellers built increasingly opulent mansions and threw lavish parties to establish themselves among the social elite."
    },
    {
      era: "Modern Day",
      title: "Digital Status and Social Media",
      description: "Today's status economy has moved online, with influence measured in followers, likes, and virtual goods - a digital manifestation of the same human status-seeking behavior."
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 royal-gradient">Status Through History</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              SpendThrone satirizes a fundamental human behavior that has existed throughout history:
              the pursuit of status through wealth and conspicuous consumption.
            </p>
          </div>
          
          <div className="space-y-8">
            {historicalExamples.map((example, index) => (
              <Card key={index} className="glass-morphism border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{example.title}</CardTitle>
                      <CardDescription>{example.era}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 glass-morphism border-white/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">SpendThrone: A Modern Reflection</h2>
            <p className="text-white/80 mb-4">
              SpendThrone takes this age-old human behavior and presents it in its most transparent form:
              a persistent leaderboard where rank is directly tied to spending.
            </p>
            <p className="text-white/80 mb-4">
              By making explicit what many digital platforms do implicitly, we create both entertainment
              and a mirror reflecting our complex relationship with status, wealth, and social position.
            </p>
            <p className="text-white/80">
              In a world where the pursuit of status often masquerades behind other motives,
              SpendThrone offers radical transparency: we are exactly what we claim to be.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StatusThroughHistory;
