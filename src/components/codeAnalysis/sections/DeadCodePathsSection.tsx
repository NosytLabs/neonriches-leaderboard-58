
import React from 'react';
import { CodeIssueInfo } from '@/utils/codeAnalysis/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { GitBranch, Code } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface DeadCodePathsSectionProps {
  deadCodePaths?: CodeIssueInfo[];
}

const DeadCodePathsSection: React.FC<DeadCodePathsSectionProps> = ({ deadCodePaths = [] }) => {
  if (deadCodePaths.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <GitBranch className="h-5 w-5 mr-2" />
            Dead Code Paths
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No dead code paths detected" 
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
          <GitBranch className="h-5 w-5 mr-2" />
          Dead Code Paths ({deadCodePaths.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>File</TableHead>
              <TableHead>Line</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deadCodePaths.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
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

export default DeadCodePathsSection;
