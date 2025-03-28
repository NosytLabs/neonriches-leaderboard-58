
export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export interface DialogTriggerProps {
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface DialogContentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DialogHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DialogFooterProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DialogTitleProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DialogDescriptionProps {
  className?: string;
  children?: React.ReactNode;
}
