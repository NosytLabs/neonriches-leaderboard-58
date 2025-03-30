import React from 'react';

// This component is used to fix properties where boolean values are expected but strings are provided
export const convertPropToBool = (value: any): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  return !!value;
};

// Export a HOC to fix boolean props
export const withBooleanProps = <P extends object>(
  Component: React.ComponentType<P>,
  booleanPropNames: Array<keyof P>
): React.FC<P> => {
  return (props: P) => {
    const fixedProps = { ...props };
    
    booleanPropNames.forEach(propName => {
      if (propName in props) {
        (fixedProps as any)[propName] = convertPropToBool((props as any)[propName]);
      }
    });
    
    return <Component {...fixedProps} />;
  };
};

// Helper for components that need to use the converter directly
export const fixBooleanProps = <T extends Record<string, any>>(
  props: T, 
  propNames: (keyof T)[]
): T => {
  const result = { ...props };
  
  propNames.forEach(propName => {
    if (propName in props) {
      result[propName] = (props[propName] === 'true' || props[propName] === true) as T[keyof T];
    }
  });
  
  return result;
};

export default convertPropToBool;
