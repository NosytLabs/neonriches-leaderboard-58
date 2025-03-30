import React from 'react';
import HeroShowcase from '@/components/home/HeroShowcase';
import { UserProfile } from '@/types/user';

// Sample data for showcase
const topUser: UserProfile = {
  id: "user-1",
  username: "wealthyNoble",
  displayName: "Lord Goldpurse",
  profileImage: "/assets/users/profile1.jpg",
  totalSpent: 50000,
  rank: 1,
  joinedAt: "2023-01-15T10:30:00Z",
  team: "blue"
};

const totalUsers = 1285;
const totalSpent = 750000;
const averageSpending = 583.65;

const Home = () => {
  return (
    <div className="container mx-auto py-10 space-y-10">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome to <span className="text-royal-gold">SpendThrone</span>
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-8 text-white/70">
          A persistent, ranked leaderboard where your status is determined solely by your monetary contributions.
        </p>
        
        <HeroShowcase 
          topUser={topUser}
          totalUsers={totalUsers}
          totalSpent={totalSpent}
          averageSpending={averageSpending}
        />
      </section>
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
