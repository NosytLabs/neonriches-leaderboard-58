
import React from 'react';
import { cn } from '@/lib/utils';

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {children}
    </div>
  );
};

export interface TimelineItemProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineItem = ({ children, className }: TimelineItemProps) => {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
};

export interface TimelineConnectorProps {
  className?: string;
}

export const TimelineConnector = ({ className }: TimelineConnectorProps) => {
  return (
    <div className={cn("absolute top-5 left-4 bottom-0 w-px bg-white/20", className)} />
  );
};

export interface TimelineHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineHeader = ({ children, className }: TimelineHeaderProps) => {
  return (
    <div className={cn("flex items-center mb-2", className)}>
      {children}
    </div>
  );
};

export interface TimelineIconProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineIcon = ({ children, className }: TimelineIconProps) => {
  return (
    <div className={cn("relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 mr-3", className)}>
      {children}
    </div>
  );
};

export interface TimelineBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const TimelineBody = ({ children, className }: TimelineBodyProps) => {
  return (
    <div className={cn("ml-11", className)}>
      {children}
    </div>
  );
};
