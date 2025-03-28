
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { PackageX, FileX, Code, FileCode } from 'lucide-react';

interface UnusedCodeReportProps {
  unusedImports: Array<{ file: string; imports: string[] }>;
  unusedVariables: Array<{ file: string; variables: Array<{ name: string; line: number; column: number }> }>;
  unusedFunctions: Array<{ file: string; functions: Array<{ name: string; line: number; column: number }> }>;
  unusedComponents: Array<{ file: string; components: Array<{ name: string; line: number; column: number }> }>;
  unusedCSSSelectors: Array<{ file: string; selectors: string[] }>;
  unusedDependencies: Array<{ name: string; version: string; type: 'dependency' | 'devDependency' }>;
}

const UnusedCodeReport: React.FC<UnusedCodeReportProps> = ({
  unusedImports,
  unusedVariables,
  unusedFunctions,
  unusedComponents,
  unusedCSSSelectors,
  unusedDependencies
}) => {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="unused-imports">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 rounded-t-md">
            <div className="flex items-center">
              <Code className="h-4 w-4 mr-2" />
              <span>Unused Imports</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {unusedImports.reduce((total, file) => total + file.imports.length, 0)}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {unusedImports.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No unused imports found.</p>
            ) : (
              <div className="space-y-4">
                {unusedImports.map((file, index) => (
                  <Card key={index} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Unused imports:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {file.imports.map((importName, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              <code className="bg-muted/30 px-1 py-0.5 rounded">{importName}</code>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p><strong>Suggested fix:</strong> Remove these unused imports to improve code clarity and potentially reduce bundle size.</p>
                          <p><strong>Risk:</strong> Minimal. If the imports are truly unused, removing them should have no impact.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="unused-variables">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <Code className="h-4 w-4 mr-2" />
              <span>Unused Variables</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {unusedVariables.reduce((total, file) => total + file.variables.length, 0)}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {unusedVariables.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No unused variables found.</p>
            ) : (
              <div className="space-y-4">
                {unusedVariables.map((file, index) => (
                  <Card key={index} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Unused variables:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {file.variables.map((variable, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              <code className="bg-muted/30 px-1 py-0.5 rounded">{variable.name}</code>
                              <span className="text-xs ml-2">(line {variable.line}, column {variable.column})</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p><strong>Suggested fix:</strong> Remove these unused variables or prefix them with an underscore if intentionally unused.</p>
                          <p><strong>Risk:</strong> Low. However, check if they're used for side effects or will be used in future development.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="unused-functions">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <Code className="h-4 w-4 mr-2" />
              <span>Unused Functions</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {unusedFunctions.reduce((total, file) => total + file.functions.length, 0)}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {unusedFunctions.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No unused functions found.</p>
            ) : (
              <div className="space-y-4">
                {unusedFunctions.map((file, index) => (
                  <Card key={index} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Unused functions:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {file.functions.map((func, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              <code className="bg-muted/30 px-1 py-0.5 rounded">{func.name}()</code>
                              <span className="text-xs ml-2">(line {func.line}, column {func.column})</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p><strong>Suggested fix:</strong> Remove unused functions to reduce bundle size and improve code maintainability.</p>
                          <p><strong>Risk:</strong> Medium. Verify they're not used dynamically (e.g., via function references) or outside this codebase.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="unused-components">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <FileCode className="h-4 w-4 mr-2" />
              <span>Unused Components</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {unusedComponents.reduce((total, file) => total + file.components.length, 0)}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {unusedComponents.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No unused components found.</p>
            ) : (
              <div className="space-y-4">
                {unusedComponents.map((file, index) => (
                  <Card key={index} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Unused components:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {file.components.map((component, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              <code className="bg-muted/30 px-1 py-0.5 rounded">&lt;{component.name} /&gt;</code>
                              <span className="text-xs ml-2">(line {component.line}, column {component.column})</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p><strong>Suggested fix:</strong> Remove unused components or move them to a separate library if they may be used in the future.</p>
                          <p><strong>Risk:</strong> Medium. Verify they're not dynamically imported or rendered (e.g., based on props or state).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="unused-css">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <FileX className="h-4 w-4 mr-2" />
              <span>Unused CSS Selectors</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {unusedCSSSelectors.reduce((total, file) => total + file.selectors.length, 0)}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {unusedCSSSelectors.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No unused CSS selectors found.</p>
            ) : (
              <div className="space-y-4">
                {unusedCSSSelectors.map((file, index) => (
                  <Card key={index} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Unused CSS selectors:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {file.selectors.map((selector, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              <code className="bg-muted/30 px-1 py-0.5 rounded">.{selector}</code>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p><strong>Suggested fix:</strong> Remove unused CSS selectors to reduce CSS bundle size and improve maintenance.</p>
                          <p><strong>Risk:</strong> Medium. Verify they're not used dynamically (e.g., via className concatenation or conditional classes).</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="unused-dependencies">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <PackageX className="h-4 w-4 mr-2" />
              <span>Unused Dependencies</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {unusedDependencies.length}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {unusedDependencies.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No unused dependencies found.</p>
            ) : (
              <div className="space-y-4">
                <Card className="overflow-hidden border-muted/40">
                  <CardContent className="p-4">
                    <p className="text-sm mb-2">Unused dependencies:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {unusedDependencies.map((dep, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          <code className="bg-muted/30 px-1 py-0.5 rounded">{dep.name}@{dep.version}</code>
                          <span className="text-xs ml-2">({dep.type})</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-sm text-muted-foreground">
                      <p><strong>Suggested fix:</strong> Remove unused dependencies to reduce package size and potential security issues.</p>
                      <p><strong>Risk:</strong> Medium. Verify they're not used in build scripts, config files, or dynamically imported.</p>
                      <p className="mt-1"><strong>Removal steps:</strong></p>
                      <pre className="bg-muted/20 p-2 rounded text-xs mt-1 overflow-x-auto">
                        {`# For npm
npm uninstall ${unusedDependencies.map(d => d.name).join(' ')}

# For yarn
yarn remove ${unusedDependencies.map(d => d.name).join(' ')}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UnusedCodeReport;
