
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign } from 'lucide-react';

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-team-red/20 via-team-green/10 to-team-blue/20 opacity-20"></div>
        <div className="absolute top-1/3 -left-1/4 w-96 h-96 rounded-full bg-team-red/20 filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-1/4 w-96 h-96 rounded-full bg-team-blue/20 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-72 h-72 rounded-full bg-team-green/20 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-float">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-full py-2 px-4 mb-6">
              <span className="text-sm text-white/70 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-team-green mr-2 animate-pulse"></span>
                Leaderboard is live — Make your mark
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="block text-gradient">The Only Rank</span>
            <span className="block text-gradient">That Truly Matters</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-10">
            In a world obsessed with digital clout, we've created the most honest leaderboard ever. 
            No skill required — your rank is determined solely by how much you're willing to spend.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <Button className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white px-8 py-6 text-lg rounded-full w-full sm:w-auto">
              <DollarSign size={20} className="mr-2" />
              Climb the Ranks
            </Button>
            <Button variant="outline" className="glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg rounded-full w-full sm:w-auto">
              View Leaderboard
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
            {[
              {
                color: 'team-red',
                title: 'No Resets',
                description: 'The leaderboard is eternal. Your contributions are permanent — just like your desire for status.'
              },
              {
                color: 'team-green',
                title: 'Pure Transparency',
                description: '$1 equals 1 rank point. No complex algorithms, no hidden mechanics — just the raw power of capital.'
              },
              {
                color: 'team-blue',
                title: 'Choose Your Team',
                description: 'Join Red, Green, or Blue and compete not just as an individual, but as part of something larger than yourself.'
              }
            ].map((feature, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px]">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-${feature.color}/10 text-${feature.color} border border-${feature.color}/30`}>
                  <span className={`w-3 h-3 rounded-full bg-${feature.color}`}></span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
