
import * as React from "react";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertDestructiveProps {
  title?: string;
  description: string;
  className?: string;
}

export function AlertDestructive({ 
  title = "Error", 
  description, 
  className 
}: AlertDestructiveProps) {
  return (
    <Alert variant="destructive" className={className}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  );
}

export default AlertDestructive;
