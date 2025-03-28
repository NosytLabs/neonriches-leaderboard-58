
/**
 * Converts a string value to a boolean
 * Used for props that should be boolean but are passed as strings
 */
export const stringToBoolean = (value: string | boolean | undefined): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  return !!value;
};

/**
 * Higher-order component to fix boolean props on components
 */
export const withStringBooleanProps = <P extends Record<string, any>>(
  Component: React.ComponentType<P>, 
  propNames: (keyof P)[]
): React.FC<P> => {
  return (props: P) => {
    const fixedProps = { ...props };
    
    propNames.forEach(propName => {
      if (propName in props) {
        const value = props[propName];
        if (typeof value === 'string') {
          (fixedProps as any)[propName] = stringToBoolean(value);
        }
      }
    });
    
    return React.createElement(Component, fixedProps);
  };
};

export default stringToBoolean;
