import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeatureSection from '@/components/home/FeatureSection';
import { Helmet } from 'react-helmet-async';
import usePageTracking from '@/hooks/usePageTracking';

const Home = () => {
  // Track page view
  usePageTracking();
  
  return (
    <Layout>
      <Helmet>
        <title>Spend Throne | Pay-to-Win Social Experiment</title>
        <meta name="description" content="A persistent, ranked leaderboard where position is determined solely by monetary contributions. The ultimate pay-to-win social experiment." />
      </Helmet>
      
      <HeroSection />
      
      {/* Add more sections as needed */}
    </Layout>
  );
};

export default Home;
