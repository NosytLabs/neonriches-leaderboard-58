
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PaymentModal from '@/components/PaymentModal';

const LeaderboardActions: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="mt-4 flex justify-between items-center">
      <Button 
        variant="outline" 
        size="sm" 
        className="glass-morphism border-white/10 text-white hover:bg-white/10"
        onClick={() => navigate('/leaderboard')}
      >
        <Users size={14} className="mr-1.5" />
        View Full Court
      </Button>
      
      <PaymentModal 
        title="Accelerate Your Ascension"
        description="Make a direct contribution to your status to rise through the royal ranks faster."
        amount={100}
        trigger={
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-team-red via-team-green to-team-blue hover:opacity-90 text-white"
          >
            <DollarSign size={14} className="mr-1.5" />
            Boost Rank
          </Button>
        }
      />
    </div>
  );
};

export default LeaderboardActions;
