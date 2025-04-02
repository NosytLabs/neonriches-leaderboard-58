
/**
 * Format a cryptocurrency address to show only the first and last few characters
 */
export const formatAddress = (address: string, firstChars: number = 6, lastChars: number = 4): string => {
  if (!address) return '';
  if (address.length <= firstChars + lastChars) return address;
  
  return `${address.slice(0, firstChars)}...${address.slice(-lastChars)}`;
};

/**
 * Format a physical address
 */
export const formatPhysicalAddress = (
  street: string,
  city: string,
  state: string,
  zipCode: string,
  country?: string
): string => {
  let formattedAddress = street;
  
  if (city && state) {
    formattedAddress += `, ${city}, ${state}`;
  } else if (city) {
    formattedAddress += `, ${city}`;
  } else if (state) {
    formattedAddress += `, ${state}`;
  }
  
  if (zipCode) {
    formattedAddress += ` ${zipCode}`;
  }
  
  if (country) {
    formattedAddress += `, ${country}`;
  }
  
  return formattedAddress;
};

/**
 * Format a URL to display nicely
 */
export const formatUrl = (url: string): string => {
  if (!url) return '';
  
  // Remove protocol
  let formatted = url.replace(/^(https?:\/\/)?(www\.)?/, '');
  
  // Remove trailing slash
  formatted = formatted.replace(/\/$/, '');
  
  return formatted;
};

/**
 * Format email address for display
 */
export const formatEmail = (email: string, obfuscate: boolean = false): string => {
  if (!email) return '';
  
  if (!obfuscate) return email;
  
  // Obfuscate the email address
  const parts = email.split('@');
  if (parts.length !== 2) return email;
  
  const name = parts[0];
  const domain = parts[1];
  
  const obfuscatedName = name.length <= 2 
    ? '*'.repeat(name.length) 
    : name.charAt(0) + '*'.repeat(name.length - 2) + name.charAt(name.length - 1);
  
  return `${obfuscatedName}@${domain}`;
};
