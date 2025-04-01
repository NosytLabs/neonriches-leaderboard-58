
import React from 'react';
import { formatDate } from '@/utils/formatters';

interface DateFormatterProps {
  date: string | Date;
  format?: Intl.DateTimeFormatOptions;
  className?: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ 
  date, 
  format,
  className = ''
}) => {
  const dateString = typeof date === 'string' ? date : date.toISOString();
  
  return (
    <time 
      dateTime={dateString} 
      className={className}
    >
      {formatDate(dateString, format)}
    </time>
  );
};

export default DateFormatter;
