
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Crown, Trophy, BookOpen, Calendar, BarChart4 } from 'lucide-react';
import ThroneBackground from '@/components/ui/throne-background';
import { useAuth } from '@/contexts/AuthContext';

const Updates = () => {
  const { user } = useAuth();
  
  const updates = [
    {
      title: "Public Shaming Festival",
      date: "June 15, 2023",
      description: "Introducing medieval-style public shaming! Pelt your rivals with rotten tomatoes or place them in the stocks for all to mock.",
      icon: <Scroll className="h-6 w-6 text-royal-gold" />,
      category: "Feature"
    },
    {
      title: "Royal Court Standings",
      date: "June 10, 2023",
      description: "The leaderboard now shows more detailed information about your noble peers, including their team affiliations and spending history.",
      icon: <Crown className="h-6 w-6 text-royal-purple" />,
      category: "Enhancement"
    },
    {
      title: "Weekly Tournament",
      date: "June 5, 2023",
      description: "Compete in weekly spending tournaments! The noble who contributes the most to the royal treasury will receive exclusive privileges.",
      icon: <Trophy className="h-6 w-6 text-royal-crimson" />,
      category: "Event"
    },
    {
      title: "Noble Chronicles",
      date: "May 28, 2023",
      description: "Explore the history of our digital kingdom through the newly added Noble Chronicles section.",
      icon: <BookOpen className="h-6 w-6 text-royal-navy" />,
      category: "Content"
    },
    {
      title: "Spring Festival of Wealth",
      date: "May 20, 2023",
      description: "Join us for a season of extravagant spending! Special rewards for the most generous nobles.",
      icon: <Calendar className="h-6 w-6 text-royal-gold" />,
      category: "Event"
    },
    {
      title: "Spending Analytics",
      date: "May 15, 2023",
      description: "Nobles can now view detailed analytics of their contributions to the kingdom treasury.",
      icon: <BarChart4 className="h-6 w-6 text-royal-navy" />,
      category: "Feature"
    }
  ];

  return (
    <DashboardLayout user={user}>
      <div className="relative min-h-screen py-8">
        <ThroneBackground variant="royal" density="medium" />
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 flex items-center">
            <div className="relative mr-3">
              <Scroll size={32} className="text-royal-gold animate-pulse-slow" />
              <div className="absolute -inset-2 bg-royal-gold/10 rounded-full blur-lg"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold royal-gradient">Royal Decrees & Updates</h1>
              <p className="text-white/70">Stay informed of the latest royal proclamations and kingdom developments</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-morphism border-royal-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Crown className="mr-2 h-5 w-5 text-royal-gold" />
                  Latest Royal Proclamations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {updates.map((update, index) => (
                    <div 
                      key={index} 
                      className="relative pl-8 pr-4 py-4 glass-morphism border-white/10 rounded-lg animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-royal-gold/30 via-royal-crimson/30 to-royal-navy/30 rounded-l-lg"></div>
                      <div className="absolute left-4 top-4">
                        {update.icon}
                      </div>
                      <div className="ml-8">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium">{update.title}</h3>
                          <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70">{update.category}</span>
                        </div>
                        <p className="text-white/80 mb-2">{update.description}</p>
                        <p className="text-sm text-white/60">{update.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-royal-crimson/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-royal-crimson" />
                  Upcoming Royal Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 glass-morphism border-white/10 rounded-lg text-center">
                  <p className="text-white/70 italic">
                    "Stay tuned for new festivities where you can spend more of your wealth for meaningless digital prestige!"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Updates;
