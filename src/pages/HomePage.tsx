
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Crown, Trophy, ArrowRight, Coins } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import Layout from '@/layouts/Layout';
import RoyalHero from '@/components/RoyalHero';
import HeroShowcase from '@/components/HeroShowcase';

// This component serves as the main landing page
const HomePage: React.FC = () => {
  return (
    <Layout transparent>
      <div className="min-h-screen">
        {/* Main Hero Section */}
        <RoyalHero />
        
        {/* Showcase Section */}
        <HeroShowcase />
      </div>
    </Layout>
  );
};

export default HomePage;
