import React from 'react';
import { PageHeader } from '@/components/ui/page-header';
import Shell from '@/components/Shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RocketIcon, EyeIcon, BarChart, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function VisibilityFeatures() {
  const navigate = useNavigate();

  return (
    <Shell>
      <PageHeader 
        title="Visibility Features"
        description="Explore how your spending affects your visibility"
        size="small"
      />
      
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass-morphism border-royal-gold/20">
            <CardHeader>
              <EyeIcon className="h-10 w-10 text-royal-gold mb-2" />
              <CardTitle>Enhanced Profile Visibility</CardTitle>
              <CardDescription>Get featured across SpendThrone</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li>• Featured in "Notable Royalty" sections</li>
                <li>• Highlighted on global leaderboards</li>
                <li>• Priority placement in team listings</li>
                <li>• Animated profile elements</li>
              </ul>
              <Button 
                onClick={() => navigate('/subscription')}
                className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
              >
                Upgrade Visibility
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/20">
            <CardHeader>
              <BarChart className="h-10 w-10 text-royal-gold mb-2" />
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>Track your growing influence</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li>• Profile view statistics</li>
                <li>• Referral tracking</li>
                <li>• Rank progression analytics</li>
                <li>• Social engagement metrics</li>
              </ul>
              <Button 
                onClick={() => navigate('/subscription')}
                className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
              >
                Access Analytics
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass-morphism border-royal-gold/20">
            <CardHeader>
              <Users className="h-10 w-10 text-royal-gold mb-2" />
              <CardTitle>Networking Opportunities</CardTitle>
              <CardDescription>Connect with exclusive circles</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-white/80 mb-6">
                <li>• Direct messaging with royalty</li>
                <li>• Invitation to exclusive events</li>
                <li>• Private forums access</li>
                <li>• Collaboration opportunities</li>
              </ul>
              <Button 
                onClick={() => navigate('/subscription')}
                className="w-full bg-royal-gold text-black hover:bg-royal-gold/90"
              >
                Expand Network
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold royal-gradient mb-6">Why Visibility Matters</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            In the kingdom of SpendThrone, visibility is directly correlated with prestige.
            The more prominent your profile, the more influence you wield in the royal court.
          </p>
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg max-w-3xl mx-auto">
            <RocketIcon className="h-12 w-12 text-royal-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Launch Your Royal Presence</h3>
            <p className="text-white/70 mb-6">
              Take the first step towards true digital nobility by enhancing your profile
              with our premium visibility features.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/subscription')}
              className="bg-royal-gold text-black hover:bg-royal-gold/90"
            >
              View All Premium Features
            </Button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
