// Types for code analysis utilities

// Project structure types
export interface FileInfo {
  path: string;
  name: string;
  extension: string;
  size: number;
  lines: number;
  imports: ImportInfo[];
  exports: ExportInfo[];
  functions: FunctionInfo[];
  classes: ClassInfo[];
  interfaces: InterfaceInfo[];
  types: TypeInfo[];
  dependencies: DependencyInfo[];
}

export interface ImportInfo {
  source: string;
  specifiers: string[];
  isDefault: boolean;
  isNamespace: boolean;
  isRelative: boolean;
  isExternal: boolean;
}

export interface ExportInfo {
  name: string;
  isDefault: boolean;
  isType: boolean;
  source?: string;
}

export interface FunctionInfo {
  name: string;
  params: ParameterInfo[];
  returnType: string;
  isAsync: boolean;
  isGenerator: boolean;
  isExported: boolean;
  complexity: number;
  lines: number;
}

export interface ParameterInfo {
  name: string;
  type: string;
  isOptional: boolean;
  isRest: boolean;
  defaultValue?: string;
}

export interface ClassInfo {
  name: string;
  methods: MethodInfo[];
  properties: PropertyInfo[];
  extends?: string;
  implements?: string[];
  isExported: boolean;
  isAbstract: boolean;
  lines: number;
}

export interface MethodInfo {
  name: string;
  params: ParameterInfo[];
  returnType: string;
  isAsync: boolean;
  isStatic: boolean;
  isPrivate: boolean;
  isProtected: boolean;
  isAbstract: boolean;
  complexity: number;
  lines: number;
}

export interface PropertyInfo {
  name: string;
  type: string;
  isStatic: boolean;
  isPrivate: boolean;
  isProtected: boolean;
  isReadonly: boolean;
  isOptional: boolean;
}

export interface InterfaceInfo {
  name: string;
  properties: PropertyInfo[];
  methods: MethodSignatureInfo[];
  extends?: string[];
  isExported: boolean;
  lines: number;
}

export interface MethodSignatureInfo {
  name: string;
  params: ParameterInfo[];
  returnType: string;
  isOptional: boolean;
}

export interface TypeInfo {
  name: string;
  type: string;
  isExported: boolean;
  lines: number;
}

export interface DependencyInfo {
  name: string;
  version: string;
  isDevDependency: boolean;
  isExternal: boolean;
}

// Performance analysis types
export interface PerformanceIssue {
  id: string;
  type: 'render' | 'memory' | 'network' | 'computation' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location?: string;
  suggestions: string[];
  impact: string;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  category: 'render' | 'memory' | 'network' | 'computation' | 'other';
}

export interface WebVitalMetric {
  name: 'FCP' | 'LCP' | 'CLS' | 'FID' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface PerformanceMetrics {
  [key: string]: PerformanceMetric;
}

export interface ProjectMetrics {
  totalFiles: number;
  totalLines: number;
  totalFunctions: number;
  totalClasses: number;
  totalInterfaces: number;
  totalTypes: number;
  averageComplexity: number;
  dependenciesCount: number;
  devDependenciesCount: number;
  bundleSize: number;
  performanceIssues: PerformanceIssue[];
  performanceMetrics: PerformanceMetrics;
}

// Export from other files to avoid conflicts
export type { ProjectMetrics } from './projectMetrics';
export type { PerformanceIssue } from './performanceTypes';
export type { PerformanceMetric } from './performanceTypes';
