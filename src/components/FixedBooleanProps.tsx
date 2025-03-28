
import React from 'react';
import { stringToBoolean } from '@/utils/booleanUtils';

type FixedPropsFunction = <T extends Record<string, any>>(props: T) => T;

export const fixBooleanPropsOnComponent: FixedPropsFunction = (props) => {
  const newProps = { ...props };
  
  // Look for properties that are strings 'true' or 'false' and convert them to actual booleans
  Object.keys(newProps).forEach(key => {
    const value = newProps[key];
    if (typeof value === 'string' && (value === 'true' || value === 'false')) {
      newProps[key] = stringToBoolean(value);
    }
  });
  
  return newProps;
};

type WithFixedBooleanPropsType = <P extends Record<string, any>>(Component: React.ComponentType<P>) => React.FC<P>;

export const withFixedBooleanProps: WithFixedBooleanPropsType = (Component) => {
  return (props) => {
    const fixedProps = fixBooleanPropsOnComponent(props);
    return <Component {...fixedProps} />;
  };
};

export default withFixedBooleanProps;
