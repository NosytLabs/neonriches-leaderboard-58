
import React from 'react';

type StatusSeverity = 'error' | 'warning' | 'info' | 'success';

interface StatusBadgeProps {
  count: number;
  severity?: StatusSeverity;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({
  count,
  severity = 'warning',
  className = '',
}) => {
  const baseClasses = "text-xs py-0.5 px-2 rounded-full";
  
  const severityClasses = {
    error: "bg-red-500/20 text-red-400",
    warning: "bg-amber-500/20 text-amber-400",
    info: "bg-blue-500/20 text-blue-400",
    success: "bg-green-500/20 text-green-400"
  };
  
  return (
    <span className={`${baseClasses} ${severityClasses[severity]} ${className}`}>
      {count}
    </span>
  );
};

export default StatusBadge;
