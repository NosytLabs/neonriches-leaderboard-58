
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface IssuesDetectedMessageProps {
  issueCount: number;
}

const IssuesDetectedMessage: React.FC<IssuesDetectedMessageProps> = ({ issueCount }) => {
  return (
    <div className="bg-amber-500/10 p-6 rounded-md border border-amber-500/30 flex items-center">
      <div className="bg-amber-500/20 p-3 rounded-full mr-4">
        <AlertTriangle className="text-amber-500" size={24} />
      </div>
      <div>
        <h3 className="text-lg font-medium text-amber-500">
          {issueCount} issues detected
        </h3>
        <p className="text-white/70">
          The analysis found several issues that could be improved.
        </p>
      </div>
    </div>
  );
};

export default IssuesDetectedMessage;
