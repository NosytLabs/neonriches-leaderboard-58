
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Zap, Code, Puzzle } from 'lucide-react';

interface ComplexityReportProps {
  complexFunctions: Array<{ 
    file: string; 
    functions: Array<{ 
      name: string; 
      complexity: number; 
      line: number; 
      column: number 
    }> 
  }>;
  performanceIssues: Array<{ 
    file: string; 
    issues: Array<{ 
      type: string; 
      line: number; 
      column: number; 
      description: string 
    }> 
  }>;
  overlySpecificSelectors: Array<{ 
    file: string; 
    selectors: Array<{ 
      selector: string; 
      specificity: number 
    }> 
  }>;
}

const ComplexityReport: React.FC<ComplexityReportProps> = ({
  complexFunctions,
  performanceIssues,
  overlySpecificSelectors
}) => {
  
  // Get complexity severity class
  const getComplexityClass = (complexity: number): string => {
    if (complexity >= 20) return "text-red-500";
    if (complexity >= 15) return "text-orange-500";
    if (complexity >= 10) return "text-amber-500";
    return "text-yellow-500";
  };
  
  // Get complexity level text
  const getComplexityLevel = (complexity: number): string => {
    if (complexity >= 20) return "Very High";
    if (complexity >= 15) return "High";
    if (complexity >= 10) return "Medium";
    return "Low";
  };
  
  // Calculate total complex functions
  const totalComplexFunctions = complexFunctions.reduce(
    (total, file) => total + file.functions.length, 
    0
  );
  
  // Calculate total performance issues
  const totalPerformanceIssues = performanceIssues.reduce(
    (total, file) => total + file.issues.length, 
    0
  );
  
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="complex-functions">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2 rounded-t-md">
            <div className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              <span>Complex Functions</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {totalComplexFunctions}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {complexFunctions.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No overly complex functions found.</p>
            ) : (
              <div className="space-y-4">
                <div className="bg-muted/20 p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <strong>Cyclomatic complexity</strong> measures the number of independent paths through a function's source code.
                    High complexity (10+) often indicates code that is difficult to test and maintain.
                  </p>
                </div>
                
                {complexFunctions.map((file, fileIndex) => (
                  <Card key={fileIndex} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Complex functions:</p>
                        <ul className="space-y-3">
                          {file.functions.map((func, funcIndex) => (
                            <li key={funcIndex} className="text-sm">
                              <div className="flex justify-between">
                                <div>
                                  <code className="bg-muted/30 px-1 py-0.5 rounded">{func.name}()</code>
                                  <span className="text-xs ml-2">(line {func.line}, column {func.column})</span>
                                </div>
                                <Badge 
                                  className={`${getComplexityClass(func.complexity)} bg-muted/30 border-0`}
                                >
                                  Complexity: {func.complexity} ({getComplexityLevel(func.complexity)})
                                </Badge>
                              </div>
                              
                              <div className="mt-2 pl-4 border-l-2 border-muted text-muted-foreground">
                                <p><strong>Impact:</strong> Difficult to test, understand, and maintain.</p>
                                <p><strong>Suggested fix:</strong> Break down into smaller, more focused functions with clear responsibilities.</p>
                                <p><strong>Steps:</strong></p>
                                <ol className="list-decimal list-inside text-xs mt-1 space-y-1">
                                  <li>Identify logical groupings within the function</li>
                                  <li>Extract these groups into separate helper functions</li>
                                  <li>Ensure each new function has a single responsibility</li>
                                  <li>Replace the complex logic with calls to these helper functions</li>
                                  <li>Add proper tests for each extracted function</li>
                                </ol>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="performance-issues">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              <span>Performance Issues</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {totalPerformanceIssues}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {performanceIssues.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No performance issues found.</p>
            ) : (
              <div className="space-y-4">
                {performanceIssues.map((file, fileIndex) => (
                  <Card key={fileIndex} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Performance issues:</p>
                        <ul className="space-y-3">
                          {file.issues.map((issue, issueIndex) => (
                            <li key={issueIndex} className="text-sm">
                              <div className="flex items-start">
                                <Badge 
                                  className="bg-red-500/20 text-red-500 border-red-500/30"
                                  variant="outline"
                                >
                                  {issue.type.replace(/-/g, ' ')}
                                </Badge>
                                <span className="text-xs ml-2 text-muted-foreground">
                                  Line {issue.line}, Column {issue.column}
                                </span>
                              </div>
                              
                              <p className="mt-1 text-muted-foreground">{issue.description}</p>
                              
                              <div className="mt-2 pl-4 border-l-2 border-muted text-muted-foreground">
                                {issue.type === 'inline-function' && (
                                  <>
                                    <p><strong>Impact:</strong> Creates new function instances on each render, causing unnecessary re-renders of child components.</p>
                                    <p><strong>Suggested fix:</strong> Use useCallback or move the function outside the component.</p>
                                    <div className="grid grid-cols-1 gap-2 mt-1 lg:grid-cols-2">
                                      <div className="bg-muted/20 p-2 rounded text-xs">
                                        <p className="font-medium text-muted-foreground mb-1">Before:</p>
                                        <pre className="whitespace-pre-wrap">
{`<Button onClick={() => handleClick(id)}>
  Click Me
</Button>`}
                                        </pre>
                                      </div>
                                      <div className="bg-muted/20 p-2 rounded text-xs">
                                        <p className="font-medium text-muted-foreground mb-1">After:</p>
                                        <pre className="whitespace-pre-wrap">
{`const handleButtonClick = useCallback(() => {
  handleClick(id);
}, [id]);

<Button onClick={handleButtonClick}>
  Click Me
</Button>`}
                                        </pre>
                                      </div>
                                    </div>
                                  </>
                                )}
                                
                                {issue.type === 'expensive-operation' && (
                                  <>
                                    <p><strong>Impact:</strong> Expensive calculations are performed on every render, potentially causing performance issues.</p>
                                    <p><strong>Suggested fix:</strong> Use useMemo or move the calculation outside the render function.</p>
                                    <div className="grid grid-cols-1 gap-2 mt-1 lg:grid-cols-2">
                                      <div className="bg-muted/20 p-2 rounded text-xs">
                                        <p className="font-medium text-muted-foreground mb-1">Before:</p>
                                        <pre className="whitespace-pre-wrap">
{`return (
  <div>
    {items.filter(item => item.active)
          .map(item => (
            <Item key={item.id} {...item} />
          ))}
  </div>
);`}
                                        </pre>
                                      </div>
                                      <div className="bg-muted/20 p-2 rounded text-xs">
                                        <p className="font-medium text-muted-foreground mb-1">After:</p>
                                        <pre className="whitespace-pre-wrap">
{`const filteredItems = useMemo(() => 
  items.filter(item => item.active),
  [items]
);

return (
  <div>
    {filteredItems.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </div>
);`}
                                        </pre>
                                      </div>
                                    </div>
                                  </>
                                )}
                                
                                {issue.type === 'missing-memo' && (
                                  <>
                                    <p><strong>Impact:</strong> Component re-renders even when props haven't changed, potentially causing performance issues.</p>
                                    <p><strong>Suggested fix:</strong> Wrap the component with React.memo to prevent unnecessary re-renders.</p>
                                  </>
                                )}
                                
                                {issue.type === 'missing-key' && (
                                  <>
                                    <p><strong>Impact:</strong> Components in a list without keys can cause performance issues and unexpected behavior during DOM updates.</p>
                                    <p><strong>Suggested fix:</strong> Add a unique "key" prop to each item in the list.</p>
                                  </>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="css-specificity">
          <AccordionTrigger className="hover:bg-muted/50 px-4 py-2">
            <div className="flex items-center">
              <Puzzle className="h-4 w-4 mr-2" />
              <span>CSS Specificity Issues</span>
              <Badge className="ml-2 bg-amber-500/20 text-amber-500 hover:bg-amber-500/30" variant="outline">
                {overlySpecificSelectors.reduce((total, file) => total + file.selectors.length, 0)}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2">
            {overlySpecificSelectors.length === 0 ? (
              <p className="text-sm text-muted-foreground py-2">No CSS specificity issues found.</p>
            ) : (
              <div className="space-y-4">
                <div className="bg-muted/20 p-3 rounded-md">
                  <p className="text-sm text-muted-foreground">
                    <strong>CSS specificity</strong> determines which styles are applied to an element. 
                    Highly specific selectors can make CSS harder to maintain and override.
                  </p>
                </div>
                
                {overlySpecificSelectors.map((file, fileIndex) => (
                  <Card key={fileIndex} className="overflow-hidden border-muted/40">
                    <CardHeader className="py-2 px-4 bg-muted/20">
                      <CardTitle className="text-sm font-medium">{file.file}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="p-4">
                        <p className="text-sm mb-2">Overly specific selectors:</p>
                        <ul className="space-y-2">
                          {file.selectors.map((selector, selectorIndex) => (
                            <li key={selectorIndex} className="text-sm">
                              <div className="flex justify-between">
                                <code className="bg-muted/30 px-1 py-0.5 rounded overflow-x-auto max-w-[70%]">
                                  {selector.selector}
                                </code>
                                <Badge 
                                  className="bg-amber-500/20 text-amber-500 border-amber-500/30"
                                  variant="outline"
                                >
                                  Specificity: {selector.specificity}
                                </Badge>
                              </div>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p><strong>Impact:</strong> Makes styles difficult to override, leads to !important usage, and increases CSS complexity.</p>
                          <p><strong>Suggested fix:</strong> Simplify selectors and use class-based styling with a consistent naming convention.</p>
                          <div className="grid grid-cols-1 gap-2 mt-2 lg:grid-cols-2">
                            <div className="bg-muted/20 p-2 rounded text-xs">
                              <p className="font-medium text-muted-foreground mb-1">Before:</p>
                              <pre className="whitespace-pre-wrap">
{`.header .navigation .menu-container .menu-item.active a.link {
  color: blue;
}`}
                              </pre>
                            </div>
                            <div className="bg-muted/20 p-2 rounded text-xs">
                              <p className="font-medium text-muted-foreground mb-1">After:</p>
                              <pre className="whitespace-pre-wrap">
{`.menu-link-active {
  color: blue;
}`}
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ComplexityReport;
