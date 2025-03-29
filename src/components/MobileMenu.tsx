
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Crown, 
  Home, 
  Trophy, 
  Shield, 
  Scroll, 
  Info, 
  HelpCircle, 
  LogOut, 
  LogIn, 
  User, 
  Settings,
  MessageSquare,
  Gem,
  Store,
  Coins
} from 'lucide-react';
import { useAuth } from '@/contexts/auth';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const { user, isAuthenticated, signOut } = useAuth();
  
  const handleLogout = () => {
    signOut();
    onClose();
  };
  
  return (
    <div className="p-4 glass-morphism border-royal-gold/20 rounded-lg max-h-[80vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Crown className="h-6 w-6 text-royal-gold mr-2" />
          <h2 className="text-lg font-bold font-royal">Royal Navigation</h2>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <span className="sr-only">Close</span>
          <span aria-hidden="true">&times;</span>
        </Button>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-xs uppercase text-white/40 font-semibold mb-2">
            The Noble's Map
          </h3>
          
          <Link 
            to="/" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Home className="w-5 h-5 text-royal-gold mr-3" />
            <span>Royal Court (Home)</span>
          </Link>
          
          <Link 
            to="/leaderboard" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Trophy className="w-5 h-5 text-royal-gold mr-3" />
            <span>Noble Rankings</span>
          </Link>
          
          <Link 
            to="/teams" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Shield className="w-5 h-5 text-royal-gold mr-3" />
            <span>Royal Houses</span>
          </Link>
          
          <Link 
            to="/mockery" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Target className="w-5 h-5 text-royal-crimson mr-3" />
            <span>Court Mockery</span>
          </Link>
          
          <Link 
            to="/royal-prestige" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Gem className="w-5 h-5 text-royal-gold mr-3" />
            <span>Royal Prestige</span>
          </Link>
          
          <Link 
            to="/store" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Store className="w-5 h-5 text-royal-gold mr-3" />
            <span>Royal Boutique</span>
          </Link>
        </div>
        
        {isAuthenticated && (
          <div className="space-y-2">
            <h3 className="text-xs uppercase text-white/40 font-semibold mb-2">
              Thy Noble Affairs
            </h3>
            
            <Link 
              to="/dashboard" 
              className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
              onClick={onClose}
            >
              <Crown className="w-5 h-5 text-royal-gold mr-3" />
              <span>Thy Royal Dashboard</span>
            </Link>
            
            <Link 
              to={`/profile/${user?.username}`} 
              className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
              onClick={onClose}
            >
              <User className="w-5 h-5 text-royal-gold mr-3" />
              <span>Thy Noble Portrait</span>
            </Link>
            
            <Link 
              to="/settings" 
              className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
              onClick={onClose}
            >
              <Settings className="w-5 h-5 text-royal-gold mr-3" />
              <span>Royal Preferences</span>
            </Link>
            
            <Link 
              to="/chat" 
              className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
              onClick={onClose}
            >
              <MessageSquare className="w-5 h-5 text-royal-gold mr-3" />
              <span>Court Messenger</span>
            </Link>
            
            <Link 
              to="/pay/fiat" 
              className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
              onClick={onClose}
            >
              <Coins className="w-5 h-5 text-royal-gold mr-3" />
              <span>Royal Treasury</span>
            </Link>
          </div>
        )}
        
        <div className="space-y-2">
          <h3 className="text-xs uppercase text-white/40 font-semibold mb-2">
            Royal Intelligence
          </h3>
          
          <Link 
            to="/about" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Info className="w-5 h-5 text-royal-gold mr-3" />
            <span>About The Kingdom</span>
          </Link>
          
          <Link 
            to="/faq" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <HelpCircle className="w-5 h-5 text-royal-gold mr-3" />
            <span>Royal FAQs</span>
          </Link>
          
          <Link 
            to="/terms" 
            className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
            onClick={onClose}
          >
            <Scroll className="w-5 h-5 text-royal-gold mr-3" />
            <span>Royal Decree (Terms)</span>
          </Link>
        </div>
        
        <div className="pt-4 border-t border-white/10">
          {isAuthenticated ? (
            <Button 
              variant="ghost" 
              className="w-full justify-start text-white/70 hover:text-white hover:bg-white/5"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Abandon Thy Royal Title</span>
            </Button>
          ) : (
            <div className="space-y-2">
              <Link 
                to="/login" 
                className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
                onClick={onClose}
              >
                <LogIn className="w-5 h-5 text-royal-gold mr-3" />
                <span>Enter The Court</span>
              </Link>
              
              <Link 
                to="/signup" 
                className="flex items-center p-2 rounded-md hover:bg-white/5 transition-colors"
                onClick={onClose}
              >
                <User className="w-5 h-5 text-royal-gold mr-3" />
                <span>Establish Noble Heritage</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-center text-xs text-white/30">
        <p>SpendThrone: Where money is nobility</p>
      </div>
    </div>
  );
};

export default MobileMenu;
