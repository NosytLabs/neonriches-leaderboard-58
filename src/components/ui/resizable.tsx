
import React, { createContext, forwardRef, useContext, type ComponentProps, type HTMLAttributes, type ElementRef } from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { cn } from '@/lib/utils';
import { GripVertical } from 'lucide-react';

const ResizablePanelGroup = forwardRef<
  ElementRef<typeof ResizablePrimitive.PanelGroup>,
  ComponentProps<typeof ResizablePrimitive.PanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    className={cn(
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = 'ResizablePanelGroup';

const ResizablePanel = forwardRef<
  ElementRef<typeof ResizablePrimitive.Panel>,
  ComponentProps<typeof ResizablePrimitive.Panel>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.Panel
    ref={ref}
    className={cn('group/panel relative h-full w-full', className)}
    {...props}
  />
));
ResizablePanel.displayName = 'ResizablePanel';

// Create a type that extends the base ResizablePrimitive.PanelResizeHandle props
type ResizableHandleProps = ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
};

const ResizableHandle = forwardRef<
  ElementRef<typeof ResizablePrimitive.PanelResizeHandle>,
  ResizableHandleProps
>(({ className, withHandle = false, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    ref={ref}
    className={cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
));
ResizableHandle.displayName = 'ResizableHandle';

// Ensure we're passing the correct props to the ResizableHandle component
const ResizableSeparator = forwardRef<
  ElementRef<typeof ResizablePrimitive.PanelResizeHandle>,
  Omit<ResizableHandleProps, 'withHandle'>
>(({ className, ...props }, ref) => (
  <ResizableHandle
    ref={ref}
    className={className}
    withHandle={true}
    {...props}
  />
));
ResizableSeparator.displayName = 'ResizableSeparator';

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  ResizableSeparator
};
