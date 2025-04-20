
import { ReactNode } from 'react';

declare module '@radix-ui/react-accordion' {
  interface AccordionSingleProps {
    children?: ReactNode;
  }
  
  interface AccordionMultipleProps {
    children?: ReactNode;
  }
  
  interface AccordionItemProps {
    children?: ReactNode;
  }
  
  interface AccordionTriggerProps {
    children?: ReactNode;
  }
  
  interface AccordionContentProps {
    children?: ReactNode;
  }
}

declare module '@radix-ui/react-avatar' {
  interface AvatarProps {
    children?: ReactNode;
  }
  
  interface AvatarImageProps {
    src?: string;
    alt?: string;
  }
  
  interface AvatarFallbackProps {
    children?: ReactNode;
  }
}

declare module '@radix-ui/react-select' {
  interface SelectTriggerProps {
    children?: ReactNode;
  }
  
  interface SelectContentProps {
    children?: ReactNode;
  }
  
  interface SelectItemProps {
    children?: ReactNode;
    value: string;
  }
}

declare module '@radix-ui/react-label' {
  interface LabelProps {
    children?: ReactNode;
    htmlFor?: string;
  }
}

declare module '@radix-ui/react-dialog' {
  interface DialogTitleProps {
    children?: ReactNode;
  }
  
  interface DialogDescriptionProps {
    children?: ReactNode;
  }
}

declare module '@radix-ui/react-scroll-area' {
  interface ScrollAreaProps {
    children?: ReactNode;
  }
}

declare module 'framer-motion' {
  interface MotionStyle {
    left?: string | number;
    top?: string | number;
    backgroundPosition?: string;
  }
  
  interface TargetAndTransition {
    backgroundPosition?: string;
  }
}
