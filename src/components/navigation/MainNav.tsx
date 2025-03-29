import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Trophy, 
  Users, 
  User, 
  DollarSign, 
  TrendingUp, 
  Sparkles,
  Code
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const { user } = useAuth();
  
  const mainNavItems = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="h-5 w-5" />
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "Teams",
      href: "/teams",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Profile",
      href: user ? `/profile/${user.username}` : "/profile",
      icon: <User className="h-5 w-5" />
    },
    {
      title: "Deposit",
      href: "/deposit",
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: "Stats",
      href: "/stats",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Enhance",
      href: "/profile-enhancements",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Code",
      href: "/code",
      icon: <Code className="h-5 w-5" />
    }
  ];

  return (
    <nav
      className={cn("flex space-x-2 lg:space-x-6", className)}
      {...props}
    >
      {mainNavItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white",
              isActive
                ? "text-white"
                : "text-muted-foreground"
            )
          }
        >
          {item.icon}
          <span className="hidden md:inline">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default MainNav;
