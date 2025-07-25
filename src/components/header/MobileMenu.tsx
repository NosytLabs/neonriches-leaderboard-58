
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LayoutList, Coins, Calendar, Scroll, ShieldQuestion, Shield, Crown, Feather, Gift, MessageSquare } from 'lucide-react';
import AuthButton from '@/components/auth/AuthButton';
import useAuth from '@/hooks/useAuth';
import MedievalIcon from '@/components/ui/medieval-icon';
import { Separator } from '@/components/ui/separator';
import { useResponsive } from '@/hooks/use-responsive';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  const { isMobile } = useResponsive();
  
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };
  
  const itemVariants = {
    closed: {
      opacity: 0,
      y: -5,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };
  
  const MenuItem = ({ to, icon, children }) => (
    <motion.div variants={itemVariants}>
      <Link 
        to={to}
        className="flex items-center py-4 px-4 hover:bg-white/5 rounded-lg glass-morphism border-transparent hover:border-white/10 transition-colors"
        onClick={onClose}
      >
        <span className="text-white/70 mr-3">{icon}</span>
        <span className="text-base">{children}</span>
      </Link>
    </motion.div>
  );
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="overflow-hidden border-t border-white/10 bg-background fixed top-16 left-0 right-0 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="container px-4 mx-auto py-4 space-y-2">
            <MenuItem to="/dashboard" icon={<LayoutList className="h-5 w-5 text-royal-purple" />}>
              Royal Court
            </MenuItem>
            <MenuItem to="/leaderboard" icon={<Coins className="h-5 w-5 text-royal-gold" />}>
              Treasury
            </MenuItem>
            <MenuItem to="/events" icon={<Calendar className="h-5 w-5 text-royal-crimson" />}>
              Tournaments
            </MenuItem>
            <MenuItem to="/features" icon={<Gift className="h-5 w-5 text-royal-navy" />}>
              Royal Decrees
            </MenuItem>
            <MenuItem to="/royal-council" icon={<MessageSquare className="h-5 w-5 text-royal-navy" />}>
              Royal Council
            </MenuItem>
            <MenuItem to="/about" icon={<Scroll className="h-5 w-5 text-royal-purple" />}>
              Chronicles
            </MenuItem>
            
            <Separator className="my-4" />
            
            <MenuItem to="/faq" icon={<ShieldQuestion className="h-5 w-5 text-royal-gold" />}>
              Royal Archives
            </MenuItem>
            
            {user && (
              <>
                <MenuItem to={`/profile/${user.username}`} icon={<MedievalIcon name="crown" size="sm" color="gold" />}>
                  My Realm
                </MenuItem>
                <MenuItem to="/teams" icon={<Shield className="h-5 w-5 text-royal-crimson" />}>
                  Noble Houses
                </MenuItem>
                <MenuItem to="/certificate" icon={<Feather className="h-5 w-5 text-royal-navy" />}>
                  Certificate of Nobility
                </MenuItem>
              </>
            )}
            
            {!user && (
              <motion.div variants={itemVariants} className="py-4 px-4">
                <AuthButton />
              </motion.div>
            )}
          </div>
          
          <div className="p-4 flex justify-center">
            <Button 
              variant="outline" 
              className="w-full text-white/70"
              onClick={onClose}
            >
              Close Menu
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
