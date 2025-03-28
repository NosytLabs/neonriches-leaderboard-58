
import React from 'react';
import { stringToBoolean } from '@/utils/booleanUtils';

type FixedPropsFunction = <T extends Record<string, any>>(props: T) => T;

export const fixBooleanPropsOnComponent: FixedPropsFunction = <T extends Record<string, any>>(props: T) => {
  const newProps = { ...props } as T;
  
  // Look for properties that are strings 'true' or 'false' and convert them to actual booleans
  Object.keys(newProps).forEach(key => {
    const value = newProps[key as keyof T];
    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      (newProps as any)[key] = stringToBoolean(value);
    }
  });
  
  return newProps;
};

type WithFixedBooleanPropsType = <P extends Record<string, any>>(Component: React.ComponentType<P>) => React.FC<P>;

export const withFixedBooleanProps: WithFixedBooleanPropsType = (Component) => {
  return (props) => {
    const fixedProps = fixBooleanPropsOnComponent(props);
    return React.createElement(Component, fixedProps as any);
  };
};

export default withFixedBooleanProps;
