
export const formatDate = (
  date: string | Date,
  style: 'short' | 'medium' | 'long' = 'medium'
): string => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: style === 'short' ? '2-digit' : 'long',
    day: 'numeric'
  };
  
  if (style === 'long') {
    options.hour = '2-digit';
    options.minute = '2-digit';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(dateObj);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatDollarAmount = (amount: number): string => {
  return `$${amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

export const formatPercentage = (value: number, decimalPlaces = 1): string => {
  return `${value.toFixed(decimalPlaces)}%`;
};

export const formatAddress = (address: string, length = 6): string => {
  if (!address || address.length < 10) return address || '';
  return `${address.substring(0, length)}...${address.substring(address.length - 4)}`;
};

export const formatHistoricalValue = (amount: number, year: number): string => {
  // Rough inflation adjustment (simplified)
  const currentYear = new Date().getFullYear();
  const yearsAgo = currentYear - year;
  const inflationRate = 0.03; // 3% annual average inflation
  const multiplier = Math.pow(1 + inflationRate, yearsAgo);
  
  const adjustedAmount = amount * multiplier;
  
  return formatDollarAmount(Math.round(adjustedAmount));
};

export const formatTimeAgo = (date: string | Date): string => {
  const now = new Date();
  const past = new Date(date);
  const diffMs = now.getTime() - past.getTime();
  
  // Convert to seconds, minutes, hours, days
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);
  
  if (diffDays > 30) {
    return formatDate(date, 'short');
  } else if (diffDays > 0) {
    return `${diffDays}d ago`;
  } else if (diffHrs > 0) {
    return `${diffHrs}h ago`;
  } else if (diffMin > 0) {
    return `${diffMin}m ago`;
  } else {
    return 'just now';
  }
};
