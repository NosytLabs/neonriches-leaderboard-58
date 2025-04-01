
import React from 'react';

interface TomatoIconProps {
  className?: string;
  size?: number;
}

const Tomato: React.FC<TomatoIconProps> = ({ className, size = 24 }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z"
        fill="currentColor"
      />
      <path
        d="M12 3C11.4477 3 11 2.55228 11 2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2C13 2.55228 12.5523 3 12 3Z"
        fill="currentColor"
      />
      <path
        d="M14 5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6C14.4477 6 14 5.55228 14 5Z"
        fill="currentColor"
      />
      <path
        d="M13.5 4.5L12 3L10.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Tomato;
