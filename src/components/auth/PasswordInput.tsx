
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder?: string;
  hasError?: boolean;
  isValid?: boolean;
}

const PasswordInput = ({
  id,
  value,
  onChange,
  onFocus,
  placeholder = "••••••••",
  hasError = false,
  isValid = false,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <Input 
        id={id} 
        type={showPassword ? "text" : "password"} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        className={`glass-morphism border-white/10 pl-10 pr-10 transition-all ${
          hasError ? 'border-destructive' : isValid ? 'border-green-500' : ''
        }`}
      />
      <button 
        type="button" 
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-3 text-white/40 hover:text-white transition-colors"
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
};

export default PasswordInput;
