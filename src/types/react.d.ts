
import 'react';

// Add missing declarations to ensure the React namespace has all required types
declare module 'react' {
  // Extend the React namespace
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }

  export type FC<P = {}> = FunctionComponent<P>;
  
  export interface FunctionComponent<P = {}> {
    (props: P, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }

  export type ReactNode = 
    | ReactElement
    | string
    | number
    | boolean
    | null
    | undefined
    | Iterable<ReactNode>;

  // Ensure the hooks are properly recognized
  export function useState<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>];
  export function useEffect(effect: EffectCallback, deps?: ReadonlyArray<any>): void;
  export function useRef<T>(initialValue: T): MutableRefObject<T>;
  export function useRef<T>(initialValue: T | null): RefObject<T>;
  export function useContext<T>(context: Context<T>): T;
  export function useCallback<T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>): T;
  export function useMemo<T>(factory: () => T, deps: ReadonlyArray<any> | undefined): T;
  export function useReducer<R extends Reducer<any, any>, I>(
    reducer: R,
    initializerArg: I & ExtractStateFromReducer<R>,
    initializer: (arg: I & ExtractStateFromReducer<R>) => ExtractStateFromReducer<R>
  ): [ExtractStateFromReducer<R>, Dispatch<ExtractActionFromReducer<R>>];
  export function useReducer<R extends Reducer<any, any>>(
    reducer: R,
    initialState: ExtractStateFromReducer<R>,
    initializer?: undefined
  ): [ExtractStateFromReducer<R>, Dispatch<ExtractActionFromReducer<R>>];
  export function useLayoutEffect(effect: EffectCallback, deps?: DependencyList): void;
  export function useImperativeHandle<T, R extends T>(ref: Ref<T>, init: () => R, deps?: DependencyList): void;
  export function useDebugValue<T>(value: T, format?: (value: T) => any): void;
}
