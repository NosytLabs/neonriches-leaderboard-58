
import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

type LinkProps = RouterLinkProps & {
  className?: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ className, children, ...props }) => {
  return (
    <RouterLink className={className} {...props}>
      {children}
    </RouterLink>
  );
};

export default Link;
