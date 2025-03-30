
import React from 'react';
import Shell from '@/components/Shell';
import PageSEO from '@/components/common/PageSEO';
import CommunityVoting from '@/components/community/CommunityVoting';
import { Users, MessageCircle } from 'lucide-react';
import RoyalDivider from '@/components/ui/royal-divider';
import usePageTracking from '@/hooks/usePageTracking';

const Community = () => {
  usePageTracking();
  
  return (
    <Shell>
      <PageSEO 
        title="Royal Community | SpendThrone"
        description="Join the SpendThrone community, vote on feature ideas, and help shape the future of our satirical social experiment." 
      />
      
      <main className="container mx-auto px-4 py-12 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold royal-gradient mb-4">Royal Community</h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join our community of spendthrift nobles to vote on new features, suggest ideas, and help shape the future of our satirical social experiment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-royal-gold/20 flex items-center justify-center mx-auto mb-4">
                <span className="h-6 w-6 text-royal-gold">🗳️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Vote on Features</h3>
              <p className="text-white/70">
                Help decide which features should be prioritized by voting on community suggestions.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-royal-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="h-6 w-6 text-royal-purple">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Suggest Ideas</h3>
              <p className="text-white/70">
                Have a brilliant idea for SpendThrone? Submit your suggestions for the community to vote on.
              </p>
            </div>
            
            <div className="glass-morphism border-white/10 p-6 rounded-lg text-center">
              <div className="w-12 h-12 rounded-full bg-royal-navy/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-royal-navy" />
              </div>
              <h3 className="text-xl font-bold mb-2">Join Discussion</h3>
              <p className="text-white/70">
                Engage with other community members to discuss and refine ideas for the platform.
              </p>
            </div>
          </div>
          
          <RoyalDivider variant="crown" label="COMMUNITY VOTING" color="gold" className="mb-8" />
          
          <CommunityVoting />
          
          <div className="glass-morphism border-white/10 p-6 rounded-lg mt-16 text-center max-w-3xl mx-auto">
            <Users className="h-6 w-6 text-royal-gold mx-auto mb-3" />
            <h3 className="text-xl font-bold royal-gradient mb-2">Join Our Discord Community</h3>
            <p className="text-white/70 mb-4">
              For more in-depth discussions, feature suggestions, and to connect with other nobles, join our Discord community.
            </p>
            <a 
              href="https://discord.gg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center royal-button px-6 py-3"
            >
              Join Discord
            </a>
          </div>
        </div>
      </main>
    </Shell>
  );
};

export default Community;
