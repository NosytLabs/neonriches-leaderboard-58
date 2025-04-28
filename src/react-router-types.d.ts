
declare module 'react-router-dom' {
  export interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
    onClick?: () => void;
  }

  export const Link: React.FC<LinkProps>;
  export const Routes: React.FC<{ children: React.ReactNode }>;
  export const Route: React.FC<{
    path: string;
    element: React.ReactNode;
  }>;
  export function BrowserRouter(props: { children: React.ReactNode }): JSX.Element;
  export function useNavigate(): (path: string) => void;
  export function useLocation(): { pathname: string; search: string; hash: string; state: any };
}
