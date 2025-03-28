
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LayoutList, DollarSign, Calendar, Info, ShieldQuestion, Shield, Crown, Scroll, Gift, MessageSquare } from 'lucide-react';
import AuthButton from '@/components/AuthButton';
import { useAuth } from '@/contexts/auth';
import MedievalIcon from '@/components/ui/medieval-icon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();
  
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
        className="flex items-center py-3 px-4 hover:bg-white/5 rounded-lg glass-morphism border-transparent hover:border-white/10 transition-colors"
        onClick={onClose}
      >
        <span className="text-white/70 mr-3">{icon}</span>
        <span>{children}</span>
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
          className="md:hidden overflow-hidden border-t border-white/10 bg-background"
        >
          <div className="container px-4 mx-auto py-4 space-y-1">
            <MenuItem to="/dashboard" icon={<LayoutList className="h-5 w-5" />}>
              Dashboard
            </MenuItem>
            <MenuItem to="/leaderboard" icon={<DollarSign className="h-5 w-5" />}>
              Leaderboard
            </MenuItem>
            <MenuItem to="/events" icon={<Calendar className="h-5 w-5" />}>
              Events
            </MenuItem>
            <MenuItem to="/features" icon={<Gift className="h-5 w-5" />}>
              Features
            </MenuItem>
            <MenuItem to="/community" icon={<MessageSquare className="h-5 w-5" />}>
              Community
            </MenuItem>
            <MenuItem to="/about" icon={<Info className="h-5 w-5" />}>
              About
            </MenuItem>
            
            <motion.div variants={itemVariants}>
              <div className="h-px bg-white/10 my-3"></div>
            </motion.div>
            
            <MenuItem to="/faq" icon={<ShieldQuestion className="h-5 w-5" />}>
              FAQ
            </MenuItem>
            
            {user && (
              <>
                <MenuItem to={`/profile/${user.username}`} icon={<Crown className="h-5 w-5" />}>
                  My Profile
                </MenuItem>
                <MenuItem to="/teams" icon={<Shield className="h-5 w-5" />}>
                  Teams
                </MenuItem>
                <MenuItem to="/certificate" icon={<Scroll className="h-5 w-5" />}>
                  Certificate of Nobility
                </MenuItem>
              </>
            )}
            
            {!user && (
              <motion.div variants={itemVariants} className="py-3 px-4">
                <AuthButton fullWidth />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
