
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { FileIcon, Code, Package, Trash2, FileText, Folder } from 'lucide-react';
import { AnalysisResult } from '@/utils/codeAnalysis/types';
import EmptyState from '@/components/ui/empty-state';

interface UnusedCodeReportProps {
  analysisResult?: AnalysisResult;
}

const UnusedCodeReport: React.FC<UnusedCodeReportProps> = ({ analysisResult = {
  unusedImports: [],
  unusedVariables: [],
  unusedFiles: [],
  unusedSelectors: [],
  unusedDependencies: [],
  unusedFunctions: [],
  deadCode: [],
  duplicateCode: [],
  complexCode: []
} }) => {
  const {
    unusedImports = [],
    unusedVariables = [],
    unusedFiles = [],
    unusedSelectors = [],
    unusedDependencies = [],
    unusedFunctions = []
  } = analysisResult;

  return (
    <div className="space-y-6">
      {/* Unused Imports */}
      <div>
        <h3 className="text-lg font-medium mb-2">Unused Imports</h3>
        {unusedImports.length === 0 ? (
          <EmptyState 
            message="No unused imports found" 
            icon={<Code className="h-6 w-6 opacity-50" />}
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Import</TableHead>
                <TableHead>From Path</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Line</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unusedImports.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono">{item.name}</TableCell>
                  <TableCell className="font-mono text-xs">{item.path || ''}</TableCell>
                  <TableCell className="text-xs">{item.file}</TableCell>
                  <TableCell>{item.line}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Unused Variables */}
      <div>
        <h3 className="text-lg font-medium mb-2">Unused Variables</h3>
        {unusedVariables.length === 0 ? (
          <EmptyState 
            message="No unused variables found" 
            icon={<Code className="h-6 w-6 opacity-50" />}
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Variable</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Line</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unusedVariables.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono">{item.name}</TableCell>
                  <TableCell>
                    {item.type && (
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                        {item.type}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-xs">{item.file}</TableCell>
                  <TableCell>{item.line}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Unused Functions */}
      <div>
        <h3 className="text-lg font-medium mb-2">Unused Functions</h3>
        {unusedFunctions.length === 0 ? (
          <EmptyState 
            message="No unused functions found" 
            icon={<Code className="h-6 w-6 opacity-50" />}
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Function</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Line</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unusedFunctions.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono">{item.name}</TableCell>
                  <TableCell className="text-xs">{item.file}</TableCell>
                  <TableCell>{item.line}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Unused CSS Selectors */}
      <div>
        <h3 className="text-lg font-medium mb-2">Unused CSS Selectors</h3>
        {unusedSelectors.length === 0 ? (
          <EmptyState 
            message="No unused CSS selectors found" 
            icon={<FileText className="h-6 w-6 opacity-50" />}
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Selector</TableHead>
                <TableHead>File</TableHead>
                <TableHead>Line</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unusedSelectors.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono">{item.selector || item.name}</TableCell>
                  <TableCell className="text-xs">{item.file}</TableCell>
                  <TableCell>{item.line}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Unused Files */}
      <div>
        <h3 className="text-lg font-medium mb-2">Unused Files</h3>
        {unusedFiles.length === 0 ? (
          <EmptyState 
            message="No unused files found" 
            icon={<Folder className="h-6 w-6 opacity-50" />}
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Path</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unusedFiles.map((filePath, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono text-xs">{filePath}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
                      Safe to delete
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Unused Dependencies */}
      <div>
        <h3 className="text-lg font-medium mb-2">Unused Dependencies</h3>
        {unusedDependencies.length === 0 ? (
          <EmptyState 
            message="No unused dependencies found" 
            icon={<Package className="h-6 w-6 opacity-50" />}
          />
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Package Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unusedDependencies.map((dep, index) => (
                <TableRow key={index}>
                  <TableCell className="font-mono">{dep}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
                      Consider removing
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default UnusedCodeReport;
