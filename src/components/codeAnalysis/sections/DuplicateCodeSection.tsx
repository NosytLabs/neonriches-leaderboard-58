
import React from 'react';
import { DuplicateCodeInfo } from '@/utils/codeAnalysis/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Copy, Code } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface DuplicateCodeSectionProps {
  duplicateCode: DuplicateCodeInfo[];
}

const DuplicateCodeSection: React.FC<DuplicateCodeSectionProps> = ({ duplicateCode }) => {
  if (duplicateCode.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Copy className="h-5 w-5 mr-2" />
            Duplicate Code
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No duplicate code detected" 
            icon={<Code className="h-6 w-6 opacity-50" />}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10 mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Copy className="h-5 w-5 mr-2" />
          Duplicate Code ({duplicateCode.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {duplicateCode.map((item, index) => (
            <div key={index} className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">
                  Duplicate Pattern #{item.id}
                </h3>
                <span className="text-amber-400 text-sm">
                  {Math.round(item.similarity * 100)}% similar
                </span>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium mb-1">Found in:</h4>
                <ul className="list-disc list-inside text-sm text-white/70">
                  {item.files.map((file, idx) => (
                    <li key={idx} className="font-mono text-xs">{file.path}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-3">
                <h4 className="text-sm font-medium mb-1">Size:</h4>
                <p className="text-sm text-white/70">
                  {item.lines || item.linesCount || 'Unknown'} lines of code
                </p>
              </div>
              
              {item.recommendation && (
                <div>
                  <h4 className="text-sm font-medium mb-1">Recommendation:</h4>
                  <p className="text-sm text-white/70">{item.recommendation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DuplicateCodeSection;
