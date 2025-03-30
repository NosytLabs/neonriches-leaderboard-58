
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scroll, Crown, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import RoyalDivider from '@/components/ui/royal-divider';

interface Decree {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'announcement' | 'update' | 'event' | 'warning';
  isRead: boolean;
}

const decrees: Decree[] = [
  {
    id: 'decree-001',
    title: 'Welcome to SpendThrone',
    description: 'The royal court welcomes you to this most noble pursuit of digital status.',
    date: '2023-06-15',
    category: 'announcement',
    isRead: true
  },
  {
    id: 'decree-002',
    title: 'Weekend Bonus Event',
    description: 'Double rank points for all contributions made during the upcoming royal weekend.',
    date: '2023-06-25',
    category: 'event',
    isRead: false
  },
  {
    id: 'decree-003',
    title: 'System Maintenance',
    description: 'The royal treasury will be closed for maintenance on Tuesday from 2-4 AM GMT.',
    date: '2023-06-28',
    category: 'warning',
    isRead: false
  }
];

const RoyalDecrees: React.FC = () => {
  const [expandedDecree, setExpandedDecree] = useState<string | null>(null);
  const [readDecrees, setReadDecrees] = useState<Set<string>>(new Set(decrees.filter(d => d.isRead).map(d => d.id)));
  const { playSound } = useNotificationSounds();
  
  const toggleDecree = (id: string) => {
    playSound('parchment');
    
    if (expandedDecree === id) {
      setExpandedDecree(null);
    } else {
      setExpandedDecree(id);
      if (!readDecrees.has(id)) {
        setReadDecrees(prev => new Set([...prev, id]));
      }
    }
  };
  
  const getDecreeIcon = (category: Decree['category']) => {
    switch (category) {
      case 'announcement':
        return <Crown className="h-5 w-5 text-royal-gold" />;
      case 'event':
        return <Scroll className="h-5 w-5 text-royal-purple" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-royal-crimson" />;
      default:
        return <Scroll className="h-5 w-5 text-royal-gold" />;
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };
  
  const unreadCount = decrees.filter(d => !readDecrees.has(d.id)).length;
  
  return (
    <Card className="glass-morphism border-royal-gold/20 shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scroll className="h-5 w-5 text-royal-gold" />
            <CardTitle>Royal Decrees</CardTitle>
          </div>
          {unreadCount > 0 && (
            <span className="text-xs px-2 py-1 rounded-full bg-royal-gold/20 text-royal-gold">
              {unreadCount} new
            </span>
          )}
        </div>
        <CardDescription>Official announcements from the throne</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <RoyalDivider className="mb-4" color="gold" variant="line" />
        
        <ul className="space-y-2">
          {decrees.map((decree) => (
            <li key={decree.id} className="animate-fade-in">
              <div
                className={`
                  cursor-pointer rounded-md p-3 text-left w-full
                  ${readDecrees.has(decree.id) ? 'glass-morphism border-white/5' : 'glass-morphism border-royal-gold/30 bg-royal-gold/5'}
                  ${expandedDecree === decree.id ? 'border-royal-gold/50' : ''}
                  hover:border-royal-gold/30 transition-all duration-200
                `}
                onClick={() => toggleDecree(decree.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getDecreeIcon(decree.category)}
                    <span className={`font-medium ${!readDecrees.has(decree.id) ? 'text-royal-gold' : ''}`}>
                      {decree.title}
                    </span>
                  </div>
                  <span className="text-xs text-white/50">{formatDate(decree.date)}</span>
                </div>
                
                {expandedDecree === decree.id && (
                  <div className="mt-3 pl-7 text-sm text-white/70 animate-fade-down-sm">
                    <p>{decree.description}</p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="ghost" size="sm" className="text-royal-gold hover:text-royal-gold/80 hover:bg-white/5">
                        Learn More <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RoyalDecrees;
