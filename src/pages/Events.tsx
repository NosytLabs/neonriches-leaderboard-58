
import React from 'react';
import Shell from '@/components/ui/Shell';
import { ScrollArea } from '@/components/ui/scroll-area';

const Events = () => {
  return (
    <Shell>
      <div className="container mx-auto py-6">
        <h1 className="text-4xl font-bold mb-6">Events</h1>
        <ScrollArea className="h-[80vh]">
          <div className="space-y-6">
            {/* Content would go here */}
            <p>Events content would be displayed here.</p>
          </div>
        </ScrollArea>
      </div>
    </Shell>
  );
};

export default Events;
