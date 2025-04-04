
import { ReactNode } from 'react';

// Fix for Shadcn component props
declare module '@radix-ui/react-label' {
  interface LabelProps {
    children?: ReactNode;
    className?: string;
  }
}

declare module '@radix-ui/react-tabs' {
  interface TabsProps {
    children?: ReactNode;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
  }

  interface TabsListProps {
    children?: ReactNode;
    className?: string;
  }

  interface TabsTriggerProps {
    children?: ReactNode;
    value: string;
    disabled?: boolean;
    className?: string;
  }

  interface TabsContentProps {
    children?: ReactNode;
    value: string;
    forceMount?: boolean;
    className?: string;
  }
}

declare module '@radix-ui/react-separator' {
  interface SeparatorProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
  }
}

declare module '@radix-ui/react-toast' {
  interface ToastProps {
    children?: ReactNode;
    className?: string;
  }

  interface ToastActionProps {
    children?: ReactNode;
    altText: string;
    className?: string;
  }

  interface ToastCloseProps {
    children?: ReactNode;
    className?: string;
  }

  interface ToastTitleProps {
    children?: ReactNode;
    className?: string;
  }

  interface ToastDescriptionProps {
    children?: ReactNode;
    className?: string;
  }

  interface ToastViewportProps {
    className?: string;
    hotkey?: string[];
    label?: string;
  }
}

declare module '@radix-ui/react-alert-dialog' {
  interface AlertDialogOverlayProps {
    className?: string;
  }

  interface AlertDialogTitleProps {
    className?: string;
  }

  interface AlertDialogDescriptionProps {
    className?: string;
  }

  interface AlertDialogActionProps {
    className?: string;
  }

  interface AlertDialogCancelProps {
    className?: string;
  }
}

declare module '@radix-ui/react-menubar' {
  interface MenubarProps {
    className?: string;
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
  }

  interface MenubarTriggerProps {
    className?: string;
  }

  interface MenubarSubTriggerProps {
    children?: ReactNode;
    className?: string;
    inset?: boolean;
  }

  interface MenubarSubContentProps {
    className?: string;
  }

  interface MenubarItemProps {
    className?: string;
    inset?: boolean;
  }

  interface MenubarCheckboxItemProps {
    children?: ReactNode;
    className?: string;
    checked?: boolean;
  }

  interface MenubarRadioItemProps {
    children?: ReactNode;
    className?: string;
  }

  interface MenubarLabelProps {
    className?: string;
    inset?: boolean;
  }

  interface MenubarSeparatorProps {
    className?: string;
  }
}

declare module '@radix-ui/react-slider' {
  interface SliderProps {
    id?: string;
    className?: string;
    value?: number[];
    defaultValue?: number[];
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
  }

  interface SliderTrackProps {
    className?: string;
    children?: ReactNode;
  }

  interface SliderRangeProps {
    className?: string;
  }

  interface SliderThumbProps {
    className?: string;
  }
}

// Add support for Framer Motion style properties
declare module 'framer-motion' {
  interface MotionStyle {
    left?: string | number;
    top?: string | number;
    width?: string | number;
    height?: string | number;
    background?: string;
    backgroundPosition?: string;
  }
  
  interface TargetAndTransition {
    left?: string | number;
    top?: string | number;
    backgroundPosition?: string;
  }
}
