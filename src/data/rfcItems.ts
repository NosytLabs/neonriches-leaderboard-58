
import React from 'react';
import { MessageSquare, Crown, Gem, AlertTriangle } from 'lucide-react';

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
        Allow users to purchase premium mockery packages that include animated GIFs, sound effects, and custom insult templates. This would enhance the humiliation experience while driving additional revenue – essentially monetizing digital schadenfreude. It's like selling both the knife AND the bandages in a single convenient package!
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
        Implement quarterly seasonal competitions between teams with special limited-time rewards, unique profile decorations, and exclusive mockery rights. The winning team gets a 2x multiplier on profile visibility – turning bragging rights into an actual measurable metric. It's the digital equivalent of a country club membership, but without the golf or outdated dress codes!
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
        Allow top spenders to mint their profile as limited edition NFTs that can be traded or displayed in other web3 platforms. Each NFT could include rank certification and spending history as provable bragging rights – effectively turning conspicuous consumption into a tradable asset. It's like those aristocratic portraits from centuries past, but instead of depicting your land holdings, they showcase how much money you've wasted on digital status!
      </p>
    ),
    icon: <MessageSquare className="h-4 w-4 text-royal-gold" />,
    status: 'open',
    votes: 29,
    createdAt: '2023-12-05',
    author: 'BaronBankroll'
  },
  {
    id: 'rfc-004',
    title: 'Treasury Transparency Report',
    description: (
      <p>
        Create a monthly "Treasury Report" that humorously details how user contributions are being spent: "40% to developer coffee habits, 30% to server costs, 20% to exotic mechanical keyboards, and 10% to our collective therapy sessions for creating this platform." Include satirical pie charts and expenditure categories like "Gilded Mouse Pads" and "Premium Ergonomic Throne Chairs." 
      </p>
    ),
    icon: <Gem className="h-4 w-4 text-royal-gold" />,
    status: 'open',
    votes: 65,
    createdAt: '2023-12-12',
    author: 'CountessCapital'
  },
  {
    id: 'rfc-005',
    title: 'Nepotism Feature',
    description: (
      <p>
        Implement a "Royal Family" system where top spenders can designate friends as family members who receive a small percentage of their rank without paying – a digital dynasty of sorts. This perfectly mirrors real-world nepotism, where those connected to wealth receive benefits without merit! Includes special titles like "Heir Apparent" and "Royal Cousin Twice Removed."
      </p>
    ),
    icon: <Crown className="h-4 w-4 text-royal-gold" />,
    status: 'under-review',
    votes: 54,
    createdAt: '2023-12-18',
    author: 'DukeDigital'
  },
  {
    id: 'rfc-006',
    title: 'Social Experiment Analysis Reports',
    description: (
      <p>
        Generate quarterly "research papers" analyzing user spending patterns and status-seeking behaviors on the platform. Include pseudo-academic language, satirical sociological insights, and completely made-up psychological terms like "Digital Status Anxiety Disorder" and "Leaderboard Position Dysmorphia." A perfect way to remind users they're participating in a grand commentary on status!
      </p>
    ),
    icon: <AlertTriangle className="h-4 w-4 text-royal-gold" />,
    status: 'approved',
    votes: 72,
    createdAt: '2024-01-05',
    author: 'ProfessorPrestige'
  }
];
