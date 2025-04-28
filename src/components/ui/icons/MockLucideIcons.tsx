
// This file provides mock implementations for lucide-react icons that are missing

import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
}

const defaultIconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

export const Clock: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('polyline', { points: "12 6 12 12 16 14" })
  );
};

export const Sparkles: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "m12 3-1.9 5.8a2 2 0 0 1-1.2 1.2L3 12l5.9 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.9a2 2 0 0 1 1.2-1.2L21 12l-5.9-1.9a2 2 0 0 1-1.2-1.2L12 3z" })
  );
};

export const AlertTriangle: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
    React.createElement('line', { x1: 12, y1: 9, x2: 12, y2: 13 }),
    React.createElement('line', { x1: 12, y1: 17, x2: 12.01, y2: 17 })
  );
};

export const Search: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('circle', { cx: 11, cy: 11, r: 8 }),
    React.createElement('line', { x1: 21, y1: 21, x2: 16.65, y2: 16.65 })
  );
};

export const Github: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
    React.createElement('path', { d: "M9 18c-4.51 2-5-2-7-2" })
  );
};

export const Twitter: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
  );
};

export const MenuIcon: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('line', { x1: 4, y1: 12, x2: 20, y2: 12 }),
    React.createElement('line', { x1: 4, y1: 6, x2: 20, y2: 6 }),
    React.createElement('line', { x1: 4, y1: 18, x2: 20, y2: 18 })
  );
};

export const X: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
    React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
  );
};

export const Gem: React.FC<IconProps> = (props) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M6 3h12l4 6-10 13L2 9z" }),
    React.createElement('path', { d: "M11 3 8 9l4 13 4-13-3-6" }),
    React.createElement('path', { d: "M2 9h20" })
  );
};

// Export all mock icons in a bundle for easy importing
export const lucideIcons = {
  Clock,
  Sparkles,
  AlertTriangle,
  Search,
  Github,
  Twitter,
  MenuIcon, 
  X,
  Gem
};

export default lucideIcons;
