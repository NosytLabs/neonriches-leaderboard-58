
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MockeryHowToGuide: React.FC = () => {
  return (
    <div className="text-center p-6 glass-morphism border-white/10 rounded-lg">
      <h3 className="text-xl font-bold mb-4">How the Royal Mockery Festival Works</h3>
      <p className="text-white/70 mb-6">
        The Royal Mockery Festival allows you to apply purely cosmetic effects to other users' profiles.
        These effects are entirely visual and have no impact on rankings or functionality.
      </p>
      <Link to="/features#mockery-section">
        <Button className="bg-royal-purple hover:bg-royal-purple/90">
          View Complete Mockery Guide
        </Button>
      </Link>
    </div>
  );
};

export default React.memo(MockeryHowToGuide);
