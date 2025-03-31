import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNotificationSounds } from '@/hooks/sounds/use-notification-sounds';
import { Button } from '@/components/ui/button';

interface RoyalDecree {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'active' | 'inactive';
}

const mockDecrees: RoyalDecree[] = [
  {
    id: '1',
    title: 'New Royal Tax Implemented',
    description: 'All nobles are now required to contribute an additional 10% of their earnings to the royal treasury.',
    date: '2024-04-01',
    status: 'active',
  },
  {
    id: '2',
    title: 'Grand Tournament Announced',
    description: 'A grand tournament will be held next month with exclusive rewards for the top participants.',
    date: '2024-03-15',
    status: 'active',
  },
  {
    id: '3',
    title: 'Luxury Spending Encouraged',
    description: 'Nobles are encouraged to spend lavishly to stimulate the royal economy. Bonus points will be awarded for extravagant purchases.',
    date: '2024-02-28',
    status: 'inactive',
  },
];

const RoyalDecrees = () => {
  const [decrees, setDecrees] = useState<RoyalDecree[]>(mockDecrees);
  const { playSound } = useNotificationSounds();

  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Royal Decrees</CardTitle>
        <CardDescription>Stay informed about the latest royal proclamations</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[300px] w-full">
          <div className="p-4">
            {decrees.map((decree) => (
              <div key={decree.id} className="mb-4 p-3 bg-black/20 rounded-md border border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-semibold">{decree.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {decree.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-xs text-white/60">{decree.description}</p>
                <p className="text-xs text-white/40 mt-2">Date: {decree.date}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RoyalDecrees;
