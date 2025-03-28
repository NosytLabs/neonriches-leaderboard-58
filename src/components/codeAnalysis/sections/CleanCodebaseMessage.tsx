
import React from 'react';
import { Info } from 'lucide-react';

const CleanCodebaseMessage: React.FC = () => {
  return (
    <div className="bg-green-500/10 p-6 rounded-md border border-green-500/30 flex items-center">
      <div className="bg-green-500/20 p-3 rounded-full mr-4">
        <Info className="text-green-500" size={24} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-green-500">Clean Codebase</h3>
        <p className="text-white/70">No issues detected in the analyzed files.</p>
      </div>
    </div>
  );
};

export default CleanCodebaseMessage;
