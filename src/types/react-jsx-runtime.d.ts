
// This file provides TypeScript declarations for JSX runtime
declare namespace React {
  // Re-export standard React interfaces
  export import JSX = global.JSX;
  // Define hooks that are missing
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: ReadonlyArray<any>): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
  export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any> | undefined): T;
}

// Define JSX runtime module
declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

// Extend Link props for react-router-dom
declare module 'react-router-dom' {
  interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    target?: string;
    rel?: string;
    onClick?: () => void;
  }
}
