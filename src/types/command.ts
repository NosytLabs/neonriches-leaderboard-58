
export interface CommandProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CommandInputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface CommandListProps {
  className?: string;
  children?: React.ReactNode;
}

export interface CommandItemProps {
  className?: string;
  value?: string;
  onSelect?: (value: string) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface CommandGroupProps {
  className?: string;
  heading?: string;
  children?: React.ReactNode;
}

export interface CommandSeparatorProps {
  className?: string;
}

export interface CommandEmptyProps {
  className?: string;
  children?: React.ReactNode;
}
