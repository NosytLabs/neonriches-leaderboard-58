
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface MockeryTargetSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const MockeryTargetSearch: React.FC<MockeryTargetSearchProps> = ({
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
      <Input
        placeholder="Search nobles by name..."
        className="pl-9"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default MockeryTargetSearch;
