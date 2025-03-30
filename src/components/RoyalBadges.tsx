
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Crown, Trophy, Shield, Award, Star, Gem, Zap, Medal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BadgeProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  delay?: number;
}

const Badge: React.FC<BadgeProps> = ({ 
  icon, name, description, color, bgColor, borderColor, delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={cn(
        "glass-morphism overflow-hidden transition-all duration-300",
        borderColor
      )}>
        <div className={cn("h-1", bgColor)}></div>
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center", bgColor)}>
              {icon}
            </div>
          </div>
          <h3 className={cn("text-lg font-bold mb-2", color)}>{name}</h3>
          <p className="text-sm text-white/70">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Badge definitions
const badges = [
  {
    icon: <Crown className="h-8 w-8 text-royal-gold animate-pulse-slow" />,
    name: "Royal Patron",
    description: "Awarded to nobles who have contributed over $10,000 to the royal treasury.",
    color: "text-royal-gold",
    bgColor: "bg-royal-gold/20",
    borderColor: "border-royal-gold/30"
  },
  {
    icon: <Trophy className="h-8 w-8 text-team-red animate-pulse-slow" />,
    name: "Crimson Champion",
    description: "Awarded to the top contributor in House Crimson each month.",
    color: "text-team-red",
    bgColor: "bg-team-red/20",
    borderColor: "border-team-red/30"
  },
  {
    icon: <Shield className="h-8 w-8 text-team-green animate-pulse-slow" />,
    name: "Emerald Guardian",
    description: "Awarded to the top contributor in House Emerald each month.",
    color: "text-team-green",
    bgColor: "bg-team-green/20",
    borderColor: "border-team-green/30"
  },
  {
    icon: <Medal className="h-8 w-8 text-team-blue animate-pulse-slow" />,
    name: "Sapphire Sovereign",
    description: "Awarded to the top contributor in House Sapphire each month.",
    color: "text-team-blue",
    bgColor: "bg-team-blue/20",
    borderColor: "border-team-blue/30"
  },
  {
    icon: <Star className="h-8 w-8 text-purple-400 animate-pulse-slow" />,
    name: "Founding Noble",
    description: "Awarded to the earliest members who helped establish the royal court.",
    color: "text-purple-400",
    bgColor: "bg-purple-400/20",
    borderColor: "border-purple-400/30"
  },
  {
    icon: <Award className="h-8 w-8 text-amber-400 animate-pulse-slow" />,
    name: "Golden Streak",
    description: "Awarded for maintaining a spending streak of 30 days or more.",
    color: "text-amber-400",
    bgColor: "bg-amber-400/20",
    borderColor: "border-amber-400/30"
  },
  {
    icon: <Gem className="h-8 w-8 text-emerald-400 animate-pulse-slow" />,
    name: "Emerald Benefactor",
    description: "Awarded for significant contributions to community events and activities.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/20",
    borderColor: "border-emerald-400/30"
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-400 animate-pulse-slow" />,
    name: "Royal Trendsetter",
    description: "Awarded to nobles who set new records in single spending transactions.",
    color: "text-blue-400",
    bgColor: "bg-blue-400/20",
    borderColor: "border-blue-400/30"
  }
];

const RoyalBadges: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background/90 to-background/80">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold royal-gradient mb-4">Royal Badges of Honor</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Showcase your status with exclusive badges earned through spending milestones and noble achievements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          {badges.map((badge, index) => (
            <Badge
              key={badge.name}
              {...badge}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <motion.div 
          className="glass-morphism border border-royal-gold/20 p-6 rounded-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold royal-gradient mb-4">Collect Them All</h3>
            <p className="text-white/80 mb-6">
              These badges aren't just pretty decorations—they're a testament to your commitment to frivolous spending and status-seeking behavior in our satirical kingdom. Display them proudly on your profile!
            </p>
            <Link to="/badges">
              <Button className="bg-gradient-to-r from-royal-gold to-amber-600 text-black hover:opacity-90 group">
                <Crown className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Explore All Royal Badges
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoyalBadges;
