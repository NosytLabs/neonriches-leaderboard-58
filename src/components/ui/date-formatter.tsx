
import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';

interface DateFormatterProps {
  date: string | Date;
  formatString?: string;
  relative?: boolean;
  className?: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({
  date,
  formatString = 'PPP',
  relative = false,
  className
}) => {
  if (!date) {
    return <span className={className}>Invalid date</span>;
  }

  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    
    if (isNaN(dateObj.getTime())) {
      return <span className={className}>Invalid date</span>;
    }
    
    if (relative) {
      return <span className={className}>{formatDistanceToNow(dateObj, { addSuffix: true })}</span>;
    }
    
    return <span className={className}>{format(dateObj, formatString)}</span>;
  } catch (error) {
    console.error('Error formatting date:', error);
    return <span className={className}>Invalid date</span>;
  }
};

export default DateFormatter;
