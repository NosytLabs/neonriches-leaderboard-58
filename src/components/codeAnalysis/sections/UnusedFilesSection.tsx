
import React from 'react';
import { FileInfo } from '@/utils/codeAnalysis/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Folder, FileText } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface UnusedFilesSectionProps {
  unusedFiles: FileInfo[];
}

const UnusedFilesSection: React.FC<UnusedFilesSectionProps> = ({ unusedFiles }) => {
  if (unusedFiles.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Folder className="h-5 w-5 mr-2" />
            Unused Files
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No unused files detected" 
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
          <Folder className="h-5 w-5 mr-2" />
          Unused Files ({unusedFiles.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File Path</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Impact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {unusedFiles.map((file, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono text-xs">{file.path}</TableCell>
                <TableCell>{file.size ? `${file.size} KB` : 'Unknown'}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
                    Safe to remove
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UnusedFilesSection;
