
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validatePassword = (password: string): {
  isValid: boolean;
  message?: string;
} => {
  if (!password) {
    return { isValid: false, message: "Password is required" };
  }
  
  if (password.length < 6) {
    return { isValid: false, message: "Password must be at least 6 characters" };
  }
  
  return { isValid: true };
};

export const validateEmail = (email: string): {
  isValid: boolean;
  message?: string;
} => {
  if (!email) {
    return { isValid: false, message: "Email is required" };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: "Please enter a valid email address" };
  }
  
  return { isValid: true };
};
