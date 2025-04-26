
// Type declarations for modules without types
declare module 'react' {
  import * as React from 'react';
  export = React;
}

declare module 'react-router-dom' {
  export interface RouteProps {
    path?: string;
    element?: React.ReactNode;
    children?: React.ReactNode;
  }
  
  export function BrowserRouter(props: { children: React.ReactNode }): JSX.Element;
  export function Routes(props: { children: React.ReactNode }): JSX.Element;
  export function Route(props: RouteProps): JSX.Element;
  export function Link(props: { to: string; children: React.ReactNode }): JSX.Element;
  export function useNavigate(): (path: string) => void;
  
  export interface RouteMatch {
    path: string;
    url: string;
    isExact: boolean;
    params: any;
  }
}

declare module 'framer-motion' {
  import * as React from 'react';
  
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileFocus?: any;
    whileDrag?: any;
    whileInView?: any;
    custom?: any;
    style?: React.CSSProperties;
    className?: string;
    [key: string]: any;
  }
  
  export interface MotionComponentProps extends MotionProps {
    children?: React.ReactNode;
  }
  
  export const motion: {
    div: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLDivElement>>;
    span: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<HTMLSpanElement>>;
    path: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<SVGPathElement>>;
    circle: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<SVGCircleElement>>;
    ellipse: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<SVGEllipseElement>>;
    rect: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<SVGRectElement>>;
    g: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<SVGGElement>>;
    svg: React.ForwardRefExoticComponent<MotionComponentProps & React.RefAttributes<SVGSVGElement>>;
    [key: string]: any;
  };
  
  export interface AnimatePresenceProps {
    children: React.ReactNode;
    exitBeforeEnter?: boolean;
    initial?: boolean;
    custom?: any;
  }
  
  export function AnimatePresence(props: AnimatePresenceProps): JSX.Element;
}

declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export type LucideIcon = React.FC<LucideProps>;
  
  // Export common icons used in the project
  export const Crown: LucideIcon;
  export const Heart: LucideIcon;
  export const Star: LucideIcon;
  export const Target: LucideIcon;
  export const Shield: LucideIcon;
  export const Flame: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Egg: LucideIcon;
  export const User: LucideIcon;
  export const UserPlus: LucideIcon;
  export const Mail: LucideIcon;
  export const Lock: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const icons: Record<string, LucideIcon>;
}
