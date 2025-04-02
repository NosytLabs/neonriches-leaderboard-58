
import React from 'react';
import { MockeryAction } from '@/types/mockery-types';
import { ensureMockeryAction } from '@/utils/mockeryNormalizer';

export interface MockeryEffectProps {
  action: MockeryAction;
  username: string;
  isActive?: boolean; // Add this prop to match what's being passed
  onComplete?: () => void; // Add this prop to match what's being passed
}

const MockeryEffect: React.FC<MockeryEffectProps> = ({ action, username, isActive, onComplete }) => {
  // Ensure the action is a valid MockeryAction
  const safeAction = ensureMockeryAction(action);
  
  switch (safeAction) {
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
    case 'royal_decree':
      return <div>Issuing a royal decree about {username}!</div>;
    case 'flame':
      return <div className="text-orange-500">Flaming {username}!</div>;
    case 'heart':
      return <div className="text-pink-500">Sending hearts to {username}!</div>;
    case 'skull':
      return <div className="text-gray-500">Sending a skull to {username}!</div>;
    case 'thumbs_down':
      return <div className="text-gray-500">Giving {username} a thumbs down!</div>;
    case 'laugh':
      return <div className="text-yellow-300">Laughing at {username}!</div>;
    case 'rotten_egg':
      return <div className="text-green-600">Pelting {username} with rotten eggs!</div>;
    default:
      return <div>Performing a generic mockery on {username}!</div>;
  }
};

export default MockeryEffect;
