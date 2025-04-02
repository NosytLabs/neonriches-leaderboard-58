
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Shell } from '@/components/ui/Shell';
import { Separator } from '@/components/ui/separator';
import MockeryCard from '@/components/mockery/MockeryCard';
import { MockeryAction } from '@/types/mockery-types';

const MockeryPage = () => {
  const { action: routeAction } = useParams();
  const navigate = useNavigate();
  
  const mockeryActions: MockeryAction[] = [
    'tomato',
    'egg',
    'putridEgg',
    'crown',
    'thumbsDown',
    'mock',
    'stocks',
    'jester',
    'courtJester',
    'silence',
    'taunt',
    'smokeBomb',
    'protection',
    'flame',
    'heart',
    'skull',
    'laugh'
  ];

  return (
    <Shell>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Royal Mockery System</h1>
        <p className="text-muted-foreground mb-8">
          Choose a mockery action to unleash upon the kingdom's subjects.
        </p>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockeryActions.map(action => (
            <MockeryCard 
              key={action} 
              action={action} 
              onClick={() => navigate(`/mockery/${action}`)}
            />
          ))}
        </div>
      </div>
    </Shell>
  );
};

export default MockeryPage;
