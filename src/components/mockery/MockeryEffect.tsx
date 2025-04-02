import React from 'react';
import { MockeryAction } from '@/types/mockery-types';

interface MockeryEffectProps {
  action: MockeryAction;
  username: string;
}

const MockeryEffect: React.FC<MockeryEffectProps> = ({ action, username }) => {
  switch (action) {
    case 'tomato':
      return <div className="text-red-500">Throwing tomatoes at {username}!</div>;
    case 'egg':
      return <div className="text-yellow-500">Pelting {username} with eggs!</div>;
    case 'putridEgg':
      return <div className="text-green-500">Covering {username} in putrid eggs!</div>;
    case 'crown':
      return <div className="text-yellow-600">Flipping {username}'s crown!</div>;
    case 'thumbsDown':
      return <div className="text-gray-500">Giving {username} a thumbs down!</div>;
    case 'mock':
      return <div>Mocking {username}!</div>;
    case 'stocks':
      return <div>Putting {username} in the stocks!</div>;
    case 'jester':
      return <div>Making {username} wear a jester hat!</div>;
    case 'courtJester':
      return <div>Demoting {username} to court jester!</div>;
    case 'silence':
      return <div>Silencing {username}!</div>;
    case 'taunt':
      return <div>Taunting {username}!</div>;
    case 'smokeBomb':
      return <div>Throwing a smoke bomb at {username}!</div>;
    case 'protection':
      return <div>Protecting {username} from mockery!</div>;
    case 'shame':
      return <div>Shaming {username}!</div>;
    case 'challenge':
      return <div>Challenging {username}!</div>;
    case 'joust':
      return <div>Jousting with {username}!</div>;
    case 'duel':
      return <div>Duelling with {username}!</div>;
    default:
      return <div>Performing a generic mockery on {username}!</div>;
  }
};

export default MockeryEffect;
