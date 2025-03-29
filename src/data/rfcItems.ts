
import React from 'react';
import { MessageSquare } from 'lucide-react';

export interface RFCItem {
  id: string;
  title: string;
  description: React.ReactNode;
  icon?: React.ReactNode;
  status: 'open' | 'under-review' | 'approved' | 'implemented' | 'rejected';
  votes: number;
  createdAt: string;
  author: string;
}

export const rfcItems: RFCItem[] = [
  {
    id: 'rfc-001',
    title: 'Advanced Mockery Features',
    description: (
      <p>
        Allow nobles to purchase premium mockery packages that include animated GIFs, sound effects, and even custom insult templates. This would enhance the humiliation experience while driving additional revenue.
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />,
    status: 'under-review',
    votes: 42,
    createdAt: '2023-10-15',
    author: 'DuchessDigits'
  },
  {
    id: 'rfc-002',
    title: 'Team Wars Seasonal Events',
    description: (
      <p>
        Implement quarterly seasonal competitions between teams with special limited-time rewards, unique profile decorations, and exclusive mockery rights. The winning team gets a 2x multiplier on profile visibility.
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />,
    status: 'approved',
    votes: 87,
    createdAt: '2023-11-02',
    author: 'LordCashington'
  },
  {
    id: 'rfc-003',
    title: 'Royal Portrait NFTs',
    description: (
      <p>
        Allow top spenders to mint their profile as limited edition NFTs that can be traded or displayed in other web3 platforms. Each NFT could include rank certification and spending history as provable bragging rights.
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />,
    status: 'open',
    votes: 29,
    createdAt: '2023-12-05',
    author: 'BaronBankroll'
  }
];
