
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Fixed casing

const MockeryPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Mockery System</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Mock Other Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Select a mockery action to perform on another user.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline">Tomato</Badge>
            <Badge variant="outline">Egg</Badge>
            <Badge variant="outline">Shame</Badge>
            <Badge variant="outline">Mock</Badge>
          </div>
          <Button>Find Users to Mock</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MockeryPage;
