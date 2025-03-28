
import React from 'react';

interface AnalysisTableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

const AnalysisTable: React.FC<AnalysisTableProps> = ({ 
  headers, 
  children,
  className = ''
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="analysis-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default AnalysisTable;
