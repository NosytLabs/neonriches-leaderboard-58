
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
      icon: <Icon name="home" size="sm" />
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      icon: <Icon name="trophy" size="sm" />
    },
    {
      title: "Teams",
      href: "/teams",
      icon: <Icon name="user" size="sm" />
    },
    {
      title: "Profile",
      href: user ? `/profile/${user.username}` : "/profile",
      icon: <Icon name="profile" size="sm" />
    },
    {
      title: "Deposit",
      href: "/deposit",
      icon: <Icon name="dollar" size="sm" />
    },
    {
      title: "Stats",
      href: "/stats",
      icon: <Icon name="bar-chart" size="sm" />
    },
    {
      title: "Enhance",
      href: "/profile-enhancements",
      icon: <Icon name="star" size="sm" />
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
