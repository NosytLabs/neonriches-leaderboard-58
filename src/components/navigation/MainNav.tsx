
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/auth';
import { Icon } from '@/components/ui/icon';

interface MainNavProps extends React.HTMLAttributes<HTMLElement> {}

const MainNav = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const { user } = useAuth();
  
  const mainNavItems = [
    {
      title: "Home",
      href: "/",
      icon: "Home"
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: "trophy"
    },
    {
      title: "Teams",
      href: "/teams",
      icon: "Users"
    },
    {
      title: "Mockery",
      href: "/mockery",
      icon: "Target"
    },
    {
      title: "Profile",
      href: user ? `/profile/${user.username}` : "/profile",
      icon: "User"
    },
    {
      title: "Deposit",
      href: "/deposit",
      icon: "coin"
    },
    {
      title: "Stats",
      href: "/stats",
      icon: "BarChart"
    },
    {
      title: "Enhance",
      href: "/profile-enhancements",
      icon: "Sparkles"
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
              "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-white group",
              isActive
                ? "text-white"
                : "text-muted-foreground"
            )
          }
        >
          <Icon name={item.icon as any} size="sm" className="group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden md:inline">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default MainNav;
