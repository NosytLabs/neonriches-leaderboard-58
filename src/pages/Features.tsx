
import React from 'react';
import Layout from '@/components/layout/Layout';
import RoyalFeatures from '@/components/RoyalFeatures';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 royal-gradient">Royal Features & Privileges</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore the exclusive features that await those who contribute to the royal treasury.
              The more you spend, the more royal privileges you unlock.
            </p>
          </div>
          
          <RoyalFeatures />
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Ascend the Ranks?</h2>
            <Link to="/signup">
              <Button className="bg-royal-gold hover:bg-royal-gold/90 text-black px-8 py-6 text-lg">
                Start Your Royal Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
