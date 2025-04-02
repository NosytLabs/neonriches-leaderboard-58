
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  ChevronDown, 
  Shield, 
  Bell, 
  HelpCircle,
  Search,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface DashboardHeaderProps {
  user: {
    name: string;
    avatar: string;
  };
  onSettingsClick: () => void;
  className?: string;
}

export function DashboardHeader({
  user,
  onSettingsClick,
  className,
}: DashboardHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Teams', href: '/teams' },
    { name: 'Events', href: '/events' },
    { name: 'Community', href: '/community' },
  ];

  const adminLinks = [
    { name: 'Admin', icon: <Shield className="h-4 w-4" /> },
    { name: 'Notifications', icon: <Bell className="h-4 w-4" /> },
    { name: 'Help', icon: <HelpCircle className="h-4 w-4" /> },
  ];

  return (
    <header className={cn(
      "glass-morphism border-b border-white/10 px-4 py-3 flex items-center justify-between",
      className
    )}>
      {/* Mobile menu button */}
      <Button 
        variant="ghost" 
        className="md:hidden" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Left - User Profile */}
      <div className="flex items-center gap-2">
        <Avatar className="h-10 w-10 border border-white/10">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>
            {user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="hidden md:block">
          <p className="text-sm font-medium">{user.name}</p>
          <Button 
            variant="link" 
            className="h-auto p-0 text-xs text-muted-foreground"
            onClick={onSettingsClick}
          >
            Settings
          </Button>
        </div>
      </div>

      {/* Center - Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-2">
        {navLinks.map((link) => (
          <NavLink key={link.name} href={link.href} name={link.name} />
        ))}
      </nav>

      {/* Right - Admin Buttons */}
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hidden md:flex"
        >
          <Search className="h-4 w-4" />
        </Button>
        
        {adminLinks.map((link) => (
          <Button 
            key={link.name}
            variant="ghost" 
            size="icon" 
            className="hidden md:flex"
            title={link.name}
          >
            {link.icon}
          </Button>
        ))}
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="hidden sm:flex"
          onClick={onSettingsClick}
        >
          <Settings className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <MobileNav links={navLinks} adminLinks={adminLinks} onClose={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  name: string;
}

function NavLink({ href, name }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      className="relative px-3 py-2 text-sm font-medium rounded-md hover:bg-white/5 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
      {isHovered && (
        <motion.div
          layoutId="navIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </a>
  );
}

interface MobileNavProps {
  links: { name: string; href: string }[];
  adminLinks: { name: string; icon: React.ReactNode }[];
  onClose: () => void;
}

function MobileNav({ links, adminLinks, onClose }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-14 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10"
    >
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigation</p>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block px-2 py-1.5 text-sm hover:bg-white/5 rounded transition-colors"
              onClick={onClose}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Admin</p>
          {adminLinks.map((link) => (
            <a 
              key={link.name} 
              href="#"
              className="flex items-center gap-2 px-2 py-1.5 text-sm hover:bg-white/5 rounded transition-colors"
              onClick={onClose}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
