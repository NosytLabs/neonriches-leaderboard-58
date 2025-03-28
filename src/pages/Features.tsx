
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Skeleton } from '@/components/ui/skeleton';
import { CalendarDateRangePicker } from '@/components/ui/calendar-date-range-picker';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { ResizablePanelGroup, ResizablePanel, ResizableHandle, ResizableSeparator } from '@/components/ui/resizable';
import { MultiSelect } from '@/components/ui/multi-select';
import { Autocomplete } from '@/components/ui/autocomplete';

// Mock function for useFormStatus equivalent
const useFormStatus = () => {
  return { pending: false };
};

const Features = () => {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">UI Components</h1>
        <p className="text-muted-foreground">
          A showcase of all the UI components available in the system
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Basic UI */}
          <Card>
            <CardHeader>
              <CardTitle>Basic UI</CardTitle>
              <CardDescription>Buttons, inputs, and badges</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Buttons</h3>
                <div className="flex flex-wrap gap-2">
                  <Button>Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Inputs</h3>
                <Input placeholder="Email" type="email" />
                <Textarea placeholder="Message" />
              </div>
            </CardContent>
          </Card>
          
          {/* Layout Components */}
          <Card>
            <CardHeader>
              <CardTitle>Layout</CardTitle>
              <CardDescription>Cards, separators, and aspect ratios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Separator</h3>
                <Separator />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Aspect Ratio</h3>
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <div className="flex h-full items-center justify-center">
                    16 / 9
                  </div>
                </AspectRatio>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Resizable</h3>
                <div className="h-40">
                  <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                      <div className="flex h-full items-center justify-center bg-muted text-sm">
                        One
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>
                      <div className="flex h-full items-center justify-center bg-muted/30 text-sm">
                        Two
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Data Entry */}
          <Card>
            <CardHeader>
              <CardTitle>Data Entry</CardTitle>
              <CardDescription>Forms, selects, and checkboxes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Select</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Multi-Select</h3>
                <MultiSelect 
                  options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                  ]}
                  selected={["option1"]}
                  onChange={() => {}}
                  placeholder="Select options"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Autocomplete</h3>
                <Autocomplete 
                  options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                  ]}
                  onValueChange={() => {}}
                  placeholder="Search options"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Checkbox</h3>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms</Label>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Switch</h3>
                  <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Slider</h3>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
          
          {/* Date & Time */}
          <Card>
            <CardHeader>
              <CardTitle>Date & Time</CardTitle>
              <CardDescription>Calendars and date pickers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Calendar</h3>
                <Calendar mode="single" className="rounded-md border" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Date Range Picker</h3>
                <CalendarDateRangePicker />
              </div>
            </CardContent>
          </Card>
          
          {/* Overlay Components */}
          <Card>
            <CardHeader>
              <CardTitle>Overlay Components</CardTitle>
              <CardDescription>Dialogs, dropdowns, and popovers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Dialog</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Title</DialogTitle>
                      <DialogDescription>
                        Dialog description goes here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">Dialog content</div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Dropdown Menu</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Hover Card</h3>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="link">@username</Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@username</h4>
                        <p className="text-sm">User profile description</p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>
          
          {/* Data Display */}
          <Card>
            <CardHeader>
              <CardTitle>Data Display</CardTitle>
              <CardDescription>Tables, avatars, and progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Avatar</h3>
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Progress</h3>
                <Progress value={60} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Table</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>Active</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>Inactive</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Features;
