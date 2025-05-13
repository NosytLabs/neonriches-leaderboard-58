
import 'react';

// Add missing React type declarations
declare module 'react' {
  export type FC<P = {}> = React.FunctionComponent<P>;
  
  export interface FunctionComponent<P = {}> {
    (props: P, context?: any): React.ReactElement<any, any> | null;
    propTypes?: React.WeakValidationMap<P> | undefined;
    contextTypes?: React.ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }
  
  export type ReactNode = 
    | React.ReactElement
    | string
    | number
    | boolean
    | null
    | undefined
    | React.ReactNodeArray;
  
  // Export hooks
  export function useState<T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];
  export function useEffect(effect: React.EffectCallback, deps?: React.DependencyList): void;
  export function useRef<T>(initialValue: T): React.MutableRefObject<T>;
  export function useRef<T>(initialValue: T | null): React.RefObject<T>;
  export function useContext<T>(context: React.Context<T>): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: React.DependencyList): T;
  export function useMemo<T>(factory: () => T, deps: React.DependencyList | undefined): T;
  export function useReducer<R extends React.Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I & React.ExtractStateFromReducer<R>,
    initializer: (arg: I & React.ExtractStateFromReducer<R>) => React.ExtractStateFromReducer<R>
  ): [React.ExtractStateFromReducer<R>, React.Dispatch<React.ExtractActionFromReducer<R>>];
  export function useReducer<R extends React.Reducer<any, any>>(
    reducer: R,
    initialState: React.ExtractStateFromReducer<R>,
    initializer?: undefined
  ): [React.ExtractStateFromReducer<R>, React.Dispatch<React.ExtractActionFromReducer<R>>];
}
