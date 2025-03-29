
import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingTextProps {
  title: string;
  description?: string;
  className?: string;
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  titleClassName?: string;
  descriptionClassName?: string;
}

export function HeadingText({
  title,
  description,
  className,
  gradient = false,
  align = 'left',
  as = 'h1',
  titleClassName,
  descriptionClassName,
}: HeadingTextProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const gradientClass = gradient ? 'royal-gradient' : '';
  
  const Heading = as;

  return (
    <div className={cn(alignmentClasses[align], className)}>
      <Heading 
        className={cn(
          "font-bold",
          as === 'h1' && "text-3xl md:text-4xl",
          as === 'h2' && "text-2xl md:text-3xl",
          as === 'h3' && "text-xl md:text-2xl",
          as === 'h4' && "text-lg md:text-xl",
          gradientClass,
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description && (
        <p className={cn("text-white/70 mt-2", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
