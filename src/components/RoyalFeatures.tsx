
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Trophy, Crown, Gem, Scroll, DollarSign, Coins, Sparkles, Users, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  color: string;
  bgColor: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, title, description, to, color, bgColor, delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link to={to} className="block h-full">
        <div className={cn(
          "glass-morphism p-6 rounded-lg transition-all duration-300 hover:border-royal-gold/30 group h-full",
          `hover:border-${color}/30`
        )}>
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
            bgColor
          )}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/70">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

const RoyalFeatures = () => {
  const features = [
    {
      icon: <Trophy className="h-8 w-8 text-royal-gold group-hover:animate-pulse-slow" />,
      title: "Royal Ranking",
      description: "Your position in the court is determined by your financial contributions. $1 spent = 1 unit of rank in our satirical hierarchy.",
      to: "/leaderboard",
      color: "royal-gold",
      bgColor: "bg-royal-gold/10"
    },
    {
      icon: <Crown className="h-8 w-8 text-royal-crimson group-hover:animate-pulse-slow" />,
      title: "Noble Profiles",
      description: "Create and customize your royal profile page. Higher spending unlocks premium customization options to showcase your wealth.",
      to: "/profile",
      color: "royal-crimson",
      bgColor: "bg-royal-crimson/10"
    },
    {
      icon: <Shield className="h-8 w-8 text-royal-navy group-hover:animate-pulse-slow" />,
      title: "Noble Houses",
      description: "Join one of three competing noble houses: Red (fire), Green (forest), or Blue (water). Competition between houses drives spending.",
      to: "/teams",
      color: "royal-navy",
      bgColor: "bg-royal-navy/10"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500 group-hover:animate-pulse-slow" />,
      title: "Royal Mockery",
      description: "Apply satirical visual effects to other profiles with our Royal Mockery Festival - a playful take on medieval public mockery.",
      to: "/mockery",
      color: "royal-purple",
      bgColor: "bg-royal-purple/10"
    },
    {
      icon: <Gem className="h-8 w-8 text-royal-gold group-hover:animate-pulse-slow" />,
      title: "Treasury Rewards",
      description: "A portion of weekly spending goes to the treasury, with distributions to top spenders and consistent contributors.",
      to: "/treasury",
      color: "royal-gold",
      bgColor: "bg-royal-gold/10"
    },
    {
      icon: <Scroll className="h-8 w-8 text-royal-navy group-hover:animate-pulse-slow" />,
      title: "Royal Council",
      description: "Join our royal council to vote on feature proposals and help shape the future direction of our satirical kingdom.",
      to: "/council",
      color: "royal-navy",
      bgColor: "bg-royal-navy/10"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-emerald-500 group-hover:animate-pulse-slow" />,
      title: "Marketing Tools",
      description: "Higher-ranking nobles gain access to profile billboards, promotional tools, and visibility features to showcase their status.",
      to: "/marketing",
      color: "emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: <Users className="h-8 w-8 text-royal-blue group-hover:animate-pulse-slow" />,
      title: "Team Competitions",
      description: "Participate in team-based spending competitions to earn special rewards, badges, and recognition for your noble house.",
      to: "/teams",
      color: "royal-blue",
      bgColor: "bg-royal-blue/10"
    },
    {
      icon: <Flame className="h-8 w-8 text-orange-500 group-hover:animate-pulse-slow" />,
      title: "Spending Streaks",
      description: "Maintain a consistent spending streak to earn bonus multipliers, special effects, and exclusive rewards for loyal nobles.",
      to: "/streaks",
      color: "orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <div className="py-12">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold royal-gradient mb-3 font-royal">Royal Privileges</h2>
        <p className="text-white/70 max-w-xl mx-auto">
          Discover the exclusive features that await those who contribute to the royal treasury.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={feature.title}
            {...feature}
            delay={index * 0.1}
          />
        ))}
      </div>
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="glass-morphism border border-royal-gold/20 p-6 rounded-lg max-w-3xl mx-auto">
          <Coins className="h-8 w-8 text-royal-gold mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2 royal-gradient">The Currency of Status</h3>
          <p className="text-white/80">
            In the realm of SpendThrone, money isn't just a means of transaction—it's the direct measurement of your worth and status.
            Our satirical take on wealth and prestige creates a transparent hierarchy where spending equals power.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RoyalFeatures;
