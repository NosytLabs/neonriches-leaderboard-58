
export interface ClassValue {
  [key: string]: any;
}

export type ClassNames = ClassValue[] | ClassValue;

export type cn = (...inputs: ClassNames[]) => string;
