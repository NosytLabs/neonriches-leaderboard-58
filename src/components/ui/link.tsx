
import React from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  external?: boolean;
  underline?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  to,
  external = false,
  underline = false,
  className,
  children,
  ...props
}) => {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={to}
      className={cn(
        'text-primary hover:text-primary/90 transition-colors',
        underline && 'underline hover:no-underline',
        className
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
