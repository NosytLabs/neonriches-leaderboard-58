
import React, { useState } from 'react';
import { useSound } from '@/hooks/sounds/use-sound';
import { Scroll } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNotificationSounds } from '@/hooks/sounds/use-notification-sounds';

const mockDecrees = [
  {
    id: '1',
    title: 'A Royal Decree on Spending',
    content: 'Hear ye, hear ye! The Royal Court has decreed that all citizens must display utmost enthusiasm when contributing to the royal coffers. Remember, each coin spent elevates your status in the realm!',
    date: '2023-10-15',
    isNew: true
  },
  {
    id: '2',
    title: 'New Titles for Loyal Subjects',
    content: 'The Crown announces new honorific titles for those who demonstrate exceptional spending patterns. Ascend from "Eager Coin-Tosser" to "Grand Exchequer of the Realm" through diligent economic participation!',
    date: '2023-10-10',
    isNew: false
  },
  {
    id: '3',
    title: 'The Knights of the Golden Card',
    content: 'Let it be known that those who reach the highest spending tiers shall be inducted into the prestigious order of the Knights of the Golden Card, with all associated privileges and bragging rights!',
    date: '2023-10-05',
    isNew: false
  }
];

export default function RoyalDecrees() {
  const [decrees, setDecrees] = useState(mockDecrees);
  const [expandedDecree, setExpandedDecree] = useState<string | null>(null);
  const { playSound } = useNotificationSounds();
  
  const toggleDecree = (id: string) => {
    playSound('click');
    if (expandedDecree === id) {
      setExpandedDecree(null);
    } else {
      setExpandedDecree(id);
      
      // Mark decree as read if it's new
      if (decrees.find(d => d.id === id && d.isNew)) {
        setDecrees(prevDecrees => 
          prevDecrees.map(d => 
            d.id === id ? { ...d, isNew: false } : d
          )
        );
      }
    }
  };

  return (
    <Card className="glass-morphism border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center">
          <Scroll className="mr-2 h-5 w-5 text-royal-gold" />
          <CardTitle>Royal Decrees</CardTitle>
        </div>
        <CardDescription>Official announcements from the Royal Court</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {decrees.map(decree => (
          <div 
            key={decree.id}
            className={`p-4 rounded-lg transition-all ${
              expandedDecree === decree.id
                ? 'bg-royal-gold/10'
                : 'bg-black/10 hover:bg-black/20'
            } ${decree.isNew ? 'border-l-4 border-royal-gold' : ''}`}
          >
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDecree(decree.id)}
            >
              <h3 className={`font-medium ${decree.isNew ? 'text-royal-gold' : 'text-white'}`}>
                {decree.title}
              </h3>
              <span className="text-sm text-white/60">{decree.date}</span>
            </div>
            
            {expandedDecree === decree.id && (
              <p className="mt-3 text-white/80">{decree.content}</p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
