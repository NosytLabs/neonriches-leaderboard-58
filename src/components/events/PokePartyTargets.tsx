
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/PaymentModal';
import { DollarSign, Clock, Zap } from 'lucide-react';
import { topUsers, getTeamColor } from './data';
import { useToast } from '@/hooks/use-toast';

const PokePartyTargets = () => {
  const { toast } = useToast();
  const [pokeCooldown, setPokeCooldown] = useState<Record<number, boolean>>({});

  const handlePoke = (targetId: number, targetName: string) => {
    if (pokeCooldown[targetId]) {
      toast({
        title: "Cooldown Active",
        description: `You've recently poked ${targetName}. Try again later.`,
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would call an API endpoint
    toast({
      title: "Poke Successful!",
      description: `You've knocked ${targetName} down one rank for 24 hours.`,
    });
    
    // Set cooldown
    setPokeCooldown({
      ...pokeCooldown,
      [targetId]: true
    });
    
    // Clear cooldown after 24 hours (or shorter for demo purposes)
    setTimeout(() => {
      setPokeCooldown(prevState => ({
        ...prevState,
        [targetId]: false
      }));
    }, 60000); // 1 minute cooldown for demo purposes
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gradient mb-2">Poke Party Targets</h2>
          <p className="text-white/70">
            Pay $0.50 to knock someone down one rank for 24 hours. Choose your target wisely!
          </p>
        </div>
        
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70">
            <Clock size={14} className="inline-block mr-1.5" />
            24h effect duration
          </div>
          <div className="glass-morphism border-white/10 rounded-full px-3 py-1.5 text-sm text-white/70">
            <DollarSign size={14} className="inline-block mr-1.5" />
            $0.50 per poke
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topUsers.map((targetUser) => (
          <Card key={targetUser.id} className="glass-morphism border-white/10 hover:border-white/20 transition-all">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-${getTeamColor(targetUser.team)} mr-3`}>
                    <img src={targetUser.profileImage} alt={targetUser.username} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{targetUser.username}</h3>
                      <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/70">
                        Rank #{targetUser.rank}
                      </span>
                    </div>
                    <div className={`inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-${getTeamColor(targetUser.team)}/10 text-${getTeamColor(targetUser.team)} border border-${getTeamColor(targetUser.team)}/30`}>
                      Team {targetUser.team.charAt(0).toUpperCase() + targetUser.team.slice(1)}
                    </div>
                  </div>
                </div>
                
                <PaymentModal
                  amount={0.5}
                  title="Poke a User"
                  description={`Pay $0.50 to drop ${targetUser.username} down one rank for 24 hours.`}
                  onSuccess={() => handlePoke(targetUser.id, targetUser.username)}
                  trigger={
                    <Button 
                      className="bg-white/10 hover:bg-white/20 text-white"
                      disabled={pokeCooldown[targetUser.id]}
                    >
                      <Zap size={16} className="mr-2" />
                      {pokeCooldown[targetUser.id] ? 'Cooldown' : 'Poke - $0.50'}
                    </Button>
                  }
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PokePartyTargets;
