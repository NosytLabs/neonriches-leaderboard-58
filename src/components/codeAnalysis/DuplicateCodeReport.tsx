
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface DuplicateCodeReportProps {
  duplicateCode: Array<{ files: string[]; lineCount: number; similarity: number }>;
}

const DuplicateCodeReport: React.FC<DuplicateCodeReportProps> = ({ duplicateCode }) => {
  // Sort duplicates by line count (descending)
  const sortedDuplicates = [...duplicateCode].sort((a, b) => b.lineCount - a.lineCount);
  
  return (
    <div className="space-y-4">
      {duplicateCode.length === 0 ? (
        <div className="bg-muted/20 p-4 rounded-md text-center">
          <p className="text-sm text-muted-foreground">No duplicate code patterns detected.</p>
        </div>
      ) : (
        <>
          <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-md flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-600">Duplicate Code Detected</p>
              <p className="text-sm text-muted-foreground mt-1">
                Found {duplicateCode.length} instances of code duplication across your codebase. 
                Consider refactoring these into shared functions or components.
              </p>
            </div>
          </div>
          
          {sortedDuplicates.map((duplicate, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex justify-between items-center">
                  <div className="flex items-center">
                    <Copy className="h-4 w-4 mr-2" />
                    <span>Duplicate Code Block</span>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                      {duplicate.lineCount} lines
                    </Badge>
                    <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                      {Math.round(duplicate.similarity * 100)}% similarity
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Files containing duplication:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {duplicate.files.map((file, fileIndex) => (
                        <li key={fileIndex} className="text-sm text-muted-foreground">
                          {file}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm">
                    <p className="font-medium mb-1">Impact:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Increased maintenance burden - changes need to be made in multiple places</li>
                      <li>Higher risk of bugs when one instance is updated but not others</li>
                      <li>Slightly larger bundle size due to repeated code</li>
                    </ul>
                  </div>
                  
                  <div className="text-sm">
                    <p className="font-medium mb-1">Suggested fix:</p>
                    <p className="text-muted-foreground">
                      Extract the duplicate code into a shared function, utility, or component and import it in both locations.
                    </p>
                    
                    <div className="mt-2 font-medium">Example refactoring:</div>
                    <div className="grid grid-cols-1 gap-3 mt-1 lg:grid-cols-2">
                      <div className="bg-muted/20 p-2 rounded text-xs">
                        <p className="font-medium text-muted-foreground mb-1">Before:</p>
                        <pre className="whitespace-pre-wrap">
{`// In file1.js
function processData(data) {
  // 30+ lines of duplicate logic
  const result = /* complex calculations */;
  return result;
}

// In file2.js
function handleData(data) {
  // Same 30+ lines of duplicate logic
  const result = /* complex calculations */;
  return result;
}`}
                        </pre>
                      </div>
                      
                      <div className="bg-muted/20 p-2 rounded text-xs">
                        <p className="font-medium text-muted-foreground mb-1">After:</p>
                        <pre className="whitespace-pre-wrap">
{`// In shared-utils.js
export function processData(data) {
  // Centralized logic
  const result = /* complex calculations */;
  return result;
}

// In file1.js
import { processData } from './shared-utils';

// In file2.js
import { processData } from './shared-utils';`}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="font-medium mb-1">Verification steps:</p>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>Extract the common code into a shared function/component</li>
                      <li>Import and use it in both locations</li>
                      <li>Run tests to ensure behavior is preserved</li>
                      <li>Verify the application works correctly in all affected areas</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default DuplicateCodeReport;
