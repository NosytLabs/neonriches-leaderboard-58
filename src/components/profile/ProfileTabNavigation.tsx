
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type ProfileTab = 'view' | 'settings' | 'analytics' | 'marketing' | 'boost';

interface ProfileTabNavigationProps {
  viewOnly: boolean;
  tab: ProfileTab;
  setTab: (tab: ProfileTab) => void;
}

const ProfileTabNavigation: React.FC<ProfileTabNavigationProps> = ({ 
  viewOnly, 
  tab, 
  setTab 
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <Button
        variant="outline"
        className="glass-morphism border-white/10"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft size={16} className="mr-1" />
        Back
      </Button>
      
      {!viewOnly && (
        <div className="space-x-3">
          <Button 
            variant={tab === 'view' ? "default" : "outline"}
            className={tab === 'view' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
            onClick={() => setTab('view')}
          >
            Profile
          </Button>
          
          <Button 
            variant={tab === 'settings' ? "default" : "outline"}
            className={tab === 'settings' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
            onClick={() => setTab('settings')}
          >
            <Edit size={16} className="mr-1" />
            Edit
          </Button>
          
          <Button 
            variant={tab === 'analytics' ? "default" : "outline"}
            className={tab === 'analytics' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
            onClick={() => setTab('analytics')}
          >
            Analytics
          </Button>
          
          <Button 
            variant={tab === 'boost' ? "default" : "outline"}
            className={tab === 'boost' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
            onClick={() => setTab('boost')}
          >
            Boost
          </Button>
          
          <Button 
            variant={tab === 'marketing' ? "default" : "outline"}
            className={tab === 'marketing' ? 'bg-royal-gold text-black' : 'glass-morphism border-white/10'}
            onClick={() => setTab('marketing')}
          >
            Marketing
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileTabNavigation;
