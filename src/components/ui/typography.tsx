
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'large' | 'blockquote';
  className?: string;
  as?: React.ElementType;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'p',
  className,
  as,
  ...props
}) => {
  const Component = as || 
    (variant === 'h1' ? 'h1' : 
     variant === 'h2' ? 'h2' : 
     variant === 'h3' ? 'h3' : 
     variant === 'h4' ? 'h4' : 
     variant === 'h5' ? 'h5' : 
     variant === 'h6' ? 'h6' : 
     variant === 'small' ? 'small' : 
     variant === 'large' ? 'p' :
     variant === 'blockquote' ? 'blockquote' : 'p');

  const variantClasses = {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
    h6: 'scroll-m-20 text-base font-semibold tracking-tight',
    p: 'leading-7',
    small: 'text-sm font-medium leading-none',
    large: 'text-lg font-semibold',
    blockquote: 'mt-6 border-l-2 pl-6 italic',
  };

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
export { Typography };
