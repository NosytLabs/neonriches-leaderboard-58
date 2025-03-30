
import React from 'react';
import { VariableInfo } from '@/utils/codeAnalysis/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Palette, FileText } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface UnusedCssSelectorsSectionProps {
  unusedCssSelectors?: VariableInfo[];
}

const UnusedCssSelectorsSection: React.FC<UnusedCssSelectorsSectionProps> = ({ unusedCssSelectors = [] }) => {
  if (unusedCssSelectors.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Palette className="h-5 w-5 mr-2" />
            Unused CSS Selectors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No unused CSS selectors detected" 
            icon={<FileText className="h-6 w-6 opacity-50" />}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="glass-morphism border-white/10 mb-6">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Palette className="h-5 w-5 mr-2" />
          Unused CSS Selectors ({unusedCssSelectors.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Selector</TableHead>
              <TableHead>File</TableHead>
              <TableHead>Line</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {unusedCssSelectors.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono">{item.name}</TableCell>
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

export default UnusedCssSelectorsSection;
