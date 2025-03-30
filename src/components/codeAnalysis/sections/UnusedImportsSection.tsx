
import React from 'react';
import { ImportInfo } from '@/utils/codeAnalysis/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Package, Code } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface UnusedImportsSectionProps {
  unusedImports: ImportInfo[];
}

const UnusedImportsSection: React.FC<UnusedImportsSectionProps> = ({ unusedImports }) => {
  if (unusedImports.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Unused Imports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No unused imports detected" 
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
          <Package className="h-5 w-5 mr-2" />
          Unused Imports ({unusedImports.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Import</TableHead>
              <TableHead>From</TableHead>
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
      </CardContent>
    </Card>
  );
};

export default UnusedImportsSection;
