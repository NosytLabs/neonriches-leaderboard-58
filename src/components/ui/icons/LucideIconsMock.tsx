
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
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

export const Clock = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('circle', { cx: 12, cy: 12, r: 10 }),
    React.createElement('polyline', { points: "12 6 12 12 16 14" })
  );
};

export const Crown = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" }),
    React.createElement('path', { d: "M3 16h18v4H3z" })
  );
};

export const Sparkles = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "m12 3-1.9 5.8a2 2 0 0 1-1.2 1.2L3 12l5.9 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.9a2 2 0 0 1 1.2-1.2L21 12l-5.9-1.9a2 2 0 0 1-1.2-1.2L12 3z" })
  );
};

export const AlertTriangle = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
    React.createElement('line', { x1: 12, y1: 9, x2: 12, y2: 13 }),
    React.createElement('line', { x1: 12, y1: 17, x2: 12.01, y2: 17 })
  );
};

export const Search = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('circle', { cx: 11, cy: 11, r: 8 }),
    React.createElement('line', { x1: 21, y1: 21, x2: 16.65, y2: 16.65 })
  );
};

export const Github = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
    React.createElement('path', { d: "M9 18c-4.51 2-5-2-7-2" })
  );
};

export const Twitter = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" })
  );
};

export const MenuIcon = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('line', { x1: 4, y1: 12, x2: 20, y2: 12 }),
    React.createElement('line', { x1: 4, y1: 6, x2: 20, y2: 6 }),
    React.createElement('line', { x1: 4, y1: 18, x2: 20, y2: 18 })
  );
};

export const X = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
    React.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
  );
};

export const Gem = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M6 3h12l4 6-10 13L2 9z" }),
    React.createElement('path', { d: "M11 3 8 9l4 13 4-13-3-6" }),
    React.createElement('path', { d: "M2 9h20" })
  );
};

export const Trophy = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }),
    React.createElement('path', { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }),
    React.createElement('path', { d: "M4 22h16" }),
    React.createElement('path', { d: "M10 22V8a5 5 0 0 1 10 0v14" }),
    React.createElement('path', { d: "M4 22V8a5 5 0 0 1 10 0" })
  );
};

export const ArrowRight = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('line', { x1: 5, y1: 12, x2: 19, y2: 12 }),
    React.createElement('polyline', { points: "12 5 19 12 12 19" })
  );
};

export const DollarSign = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('line', { x1: 12, y1: 1, x2: 12, y2: 23 }),
    React.createElement('path', { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
  );
};

export const Coins = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('circle', { cx: 8, cy: 8, r: 6 }),
    React.createElement('path', { d: "M18.09 10.37A6 6 0 1 1 10.34 18" }),
    React.createElement('path', { d: "M7 6h1v4" }),
    React.createElement('path', { d: "m16.71 13.88.7.71-2.82 2.82" })
  );
};

export const ThumbsUp = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M7 10v12" }),
    React.createElement('path', { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" })
  );
};

export const Flag = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }),
    React.createElement('line', { x1: 4, y1: 22, x2: 4, y2: 15 })
  );
};

export const ShieldCheck = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
    React.createElement('path', { d: "m9 12 2 2 4-4" })
  );
};

export const Users = (props: IconProps) => {
  return React.createElement(
    'svg',
    { ...defaultIconProps, ...props },
    React.createElement('path', { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    React.createElement('circle', { cx: 9, cy: 7, r: 4 }),
    React.createElement('path', { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement('path', { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  );
};

// Export all mocked icons
export const lucideIcons = {
  Clock,
  Crown,
  Sparkles,
  AlertTriangle,
  Search,
  Github,
  Twitter,
  MenuIcon,
  X,
  Gem,
  Trophy,
  ArrowRight,
  DollarSign,
  Coins,
  ThumbsUp,
  Flag,
  ShieldCheck,
  Users
};

export default lucideIcons;
