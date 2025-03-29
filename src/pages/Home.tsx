
import React from 'react';
import Shell from '@/components/Shell';
import RoyalHero from '@/components/RoyalHero';

const Home: React.FC = () => {
  return (
    <Shell>
      <RoyalHero />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-white font-bold mb-4">Welcome to SpendThrone</h1>
        <p className="text-white/70">
          The ultimate pay-to-win social experience where your status is determined by how much you spend!
        </p>
      </div>
    </Shell>
  );
};

export default Home;
