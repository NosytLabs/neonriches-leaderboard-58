
import React from 'react';
import { VariableInfo } from '@/utils/codeAnalysis/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Variable, Code } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface UnusedVariablesSectionProps {
  unusedVariables: VariableInfo[];
}

const UnusedVariablesSection: React.FC<UnusedVariablesSectionProps> = ({ unusedVariables }) => {
  if (unusedVariables.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Variable className="h-5 w-5 mr-2" />
            Unused Variables
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No unused variables detected" 
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
          <Variable className="h-5 w-5 mr-2" />
          Unused Variables ({unusedVariables.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default UnusedVariablesSection;
