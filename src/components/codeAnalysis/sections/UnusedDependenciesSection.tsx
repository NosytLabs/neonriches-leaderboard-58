
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Package } from 'lucide-react';
import EmptyState from '@/components/ui/empty-state';

interface UnusedDependenciesSectionProps {
  unusedDependencies: string[];
}

const UnusedDependenciesSection: React.FC<UnusedDependenciesSectionProps> = ({ unusedDependencies }) => {
  if (unusedDependencies.length === 0) {
    return (
      <Card className="glass-morphism border-white/10 mb-6">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Unused Dependencies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EmptyState 
            message="No unused dependencies detected" 
            icon={<Package className="h-6 w-6 opacity-50" />}
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
          Unused Dependencies ({unusedDependencies.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default UnusedDependenciesSection;
