
import React from 'react';
import { Target, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MockeryHeader: React.FC = () => {
  return (
    <>
      <CardHeader>
        <div className="flex items-center">
          <Target className="mr-3 h-6 w-6 text-royal-crimson" />
          <CardTitle>Royal Mockery Festival</CardTitle>
        </div>
        <CardDescription>
          A satirical take on medieval public shaming - apply purely cosmetic effects to other users' profiles
        </CardDescription>
      </CardHeader>
      
      <div className="mb-4 p-3 bg-royal-crimson/10 border border-royal-crimson/20 rounded-md mx-4">
        <p className="text-sm flex items-start">
          <Bell className="h-4 w-4 text-royal-crimson mr-2 mt-0.5 flex-shrink-0" />
          <span>
            <strong>Important:</strong> Mockery effects are purely visual and have no impact on rankings or functionality. They're designed as a satirical take on digital status.
            <Link to="/features#mockery-section" className="ml-1 text-royal-gold hover:underline">Learn more</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default MockeryHeader;
