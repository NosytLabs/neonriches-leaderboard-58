
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Leaderboard from '@/components/Leaderboard';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center royal-gradient">Royal Leaderboard</h1>
          
          <Leaderboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
