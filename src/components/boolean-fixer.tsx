
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
      // Using type assertion to resolve the TypeScript error
      result[propName] = convertPropToBool(props[propName]) as typeof props[typeof propName];
    }
  });
  
  return result;
};

// Export a utility function to fix boolean attributes in HTML strings
export const fixBooleanAttributes = (html: string): string => {
  const booleanAttributes = [
    'checked', 'selected', 'disabled', 'readonly', 'multiple',
    'ismap', 'defer', 'noresize', 'nowrap', 'noshade', 'compact'
  ];
  
  let fixedHtml = html;
  booleanAttributes.forEach(attr => {
    // Replace attr="true" with just attr, and remove attr="false"
    const truePattern = new RegExp(`${attr}="true"`, 'g');
    const falsePattern = new RegExp(`${attr}="false"`, 'g');
    fixedHtml = fixedHtml.replace(truePattern, attr).replace(falsePattern, '');
  });
  
  return fixedHtml;
};

export default convertPropToBool;
