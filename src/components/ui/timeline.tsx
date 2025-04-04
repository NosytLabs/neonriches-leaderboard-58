
import React from 'react';
import { cn } from '@/utils/classNameUtils';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-9 top-0 bottom-0 w-px bg-gradient-to-b from-royal-gold/30 via-white/20 to-royal-gold/30" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-6">
            {/* Year marker */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black border border-white/20 z-10">
                <span className="text-sm font-medium text-royal-gold">{item.year.split(' ')[0]}</span>
              </div>
              <span className="text-xs text-muted-foreground mt-1 whitespace-nowrap">
                {item.year.split(' ')[1] || ''}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex flex-col glass-morphism border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
