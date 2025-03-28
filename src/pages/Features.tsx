import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RoyalButton from "@/components/ui/royal-button";
import MedievalIcon from "@/components/ui/medieval-icon";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Crown, Gem, Heart, Shield, Swords, Scroll } from "lucide-react";
import ParchmentTexture from '@/components/ui/parchment-texture';
import MedievalFrame from '@/components/ui/medieval-frame';
import RegalBadge from '@/components/ui/regal-badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarDateRangePicker } from "@/components/ui/calendar-date-range-picker"
import {
  CardHeader as ShadCardHeader,
  CardFooter as ShadCardFooter,
  CardTitle as ShadCardTitle,
  CardDescription as ShadCardDescription,
  CardContent as ShadCardContent,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  AspectRadio,
} from "@/components/ui/aspect-ratio"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ResizableSeparator,
} from "@/components/ui/resizable"
import {
  ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area"
import {
  Separator as ShadSeparator,
} from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Skeleton,
} from "@/components/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  useToast,
} from "@/components/ui/use-toast"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  useFormStatus,
} from 'react-dom'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
  MultiSelectPortal,
  MultiSelectGroup,
  MultiSelectLabel,
  MultiSelectSeparator,
} from "@/components/ui/multi-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import AutocompleteDemo from "@/components/ui/autocomplete"
import {
  ResizableHandle as ShadResizableHandle,
  ResizablePanel as ShadResizablePanel,
  ResizablePanelGroup as ShadResizablePanelGroup,
  ResizableSeparator as ShadResizableSeparator,
} from "@/components/ui/resizable"
import {
  Command as ShadCommand,
  CommandDialog as ShadCommandDialog,
  CommandEmpty as ShadCommandEmpty,
  CommandGroup as ShadCommandGroup,
  CommandInput as ShadCommandInput,
  CommandItem as ShadCommandItem,
  CommandList as ShadCommandList,
  CommandSeparator as ShadCommandSeparator,
  CommandShortcut as ShadCommandShortcut,
} from "@/components/ui/command"
import {
  DropdownMenu as ShadDropdownMenu,
  DropdownMenuCheckboxItem as ShadDropdownMenuCheckboxItem,
  DropdownMenuContent as ShadDropdownMenuContent,
  DropdownMenuItem as ShadDropdownMenuItem,
  DropdownMenuLabel as ShadDropdownMenuLabel,
  DropdownMenuRadioGroup as ShadDropdownMenuRadioGroup,
  DropdownMenuRadioItem as ShadDropdownMenuRadioItem,
  DropdownMenuSeparator as ShadDropdownMenuSeparator,
  DropdownMenuShortcut as ShadDropdownMenuShortcut,
  DropdownMenuSub as ShadDropdownMenuSub,
  DropdownMenuSubContent as ShadDropdownMenuSubContent,
  DropdownMenuSubTrigger as ShadDropdownMenuSubTrigger,
  DropdownMenuTrigger as ShadDropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Form as ShadForm,
  FormControl as ShadFormControl,
  FormDescription as ShadFormDescription,
  FormField as ShadFormField,
  FormItem as ShadFormItem,
  FormLabel as ShadFormLabel,
  FormMessage as ShadFormMessage,
} from "@/components/ui/form"
import {
  HoverCard as ShadHoverCard,
  HoverCardContent as ShadHoverCardContent,
  HoverCardTrigger as ShadHoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  NavigationMenu as ShadNavigationMenu,
  NavigationMenuContent as ShadNavigationMenuContent,
  NavigationMenuItem as ShadNavigationMenuItem,
  NavigationMenuLink as ShadNavigationMenuLink,
  NavigationMenuList as ShadNavigationMenuList,
  NavigationMenuTrigger as ShadNavigationMenuTrigger,
  NavigationMenuViewport as ShadNavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover as ShadPopover,
  PopoverContent as ShadPopoverContent,
  PopoverTrigger as ShadPopoverTrigger,
} from "@/components/ui/popover"
import {
  ScrollArea as ShadScrollArea,
  ScrollBar as ShadScrollBar,
} from "@/components/ui/scroll-area"
import {
  Select as ShadSelect,
  SelectContent as ShadSelectContent,
  SelectItem as ShadSelectItem,
  SelectTrigger as ShadSelectTrigger,
  SelectValue as ShadSelectValue,
} from "@/components/ui/select"
import {
  Sheet as ShadSheet,
  SheetClose as ShadSheetClose,
  SheetContent as ShadSheetContent,
  SheetDescription as ShadSheetDescription,
  SheetFooter as ShadSheetFooter,
  SheetHeader as ShadSheetHeader,
  SheetTitle as ShadSheetTitle,
  SheetTrigger as ShadSheetTrigger,
} from "@/components/ui/sheet"
import {
  Slider as ShadSlider,
} from "@/components/ui/slider"
import {
  Tabs as ShadTabs,
  TabsContent as ShadTabsContent,
  TabsList as ShadTabsList,
  TabsTrigger as ShadTabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip as ShadTooltip,
  TooltipContent as ShadTooltipContent,
  TooltipProvider as ShadTooltipProvider,
  TooltipTrigger as ShadTooltipTrigger,
} from "@/components/ui/tooltip"
import {
  AlertDialog as ShadAlertDialog,
  AlertDialogAction as ShadAlertDialogAction,
  AlertDialogCancel as ShadAlertDialogCancel,
  AlertDialogContent as ShadAlertDialogContent,
  AlertDialogDescription as ShadAlertDialogDescription,
  AlertDialogFooter as ShadAlertDialogFooter,
  AlertDialogHeader as ShadAlertDialogHeader,
  AlertDialogTitle as ShadAlertDialogTitle,
  AlertDialogTrigger as ShadAlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  AspectRadio as ShadAspectRadio,
} from "@/components/ui/aspect-ratio"
import {
  Carousel as ShadCarousel,
  CarouselContent as ShadCarouselContent,
  CarouselItem as ShadCarouselItem,
  CarouselNext as ShadCarouselNext,
  CarouselPrevious as ShadCarouselPrevious,
} from "@/components/ui/carousel"

interface SomeComponentProps {
  shimmer: boolean;
  glow: boolean;
  animate: boolean;
}

const SomeComponent: React.FC<SomeComponentProps> = ({ shimmer, glow, animate }) => {
  return (
    <div>
      <RoyalButton variant="royalGold" shimmer={shimmer} glow={glow}>
        {animate ? 'Animated Button' : 'Static Button'}
      </RoyalButton>
    </div>
  );
};

const Features: React.FC = () => {
  const [shimmerProp, setShimmerProp] = React.useState('true');
  const [glowProp, setGlowProp] = React.useState('false');
  const [animateProp, setAnimateProp] = React.useState('true');

  // Fix the string vs boolean props
  const stringToBool = (value: string | boolean): boolean => {
    if (typeof value === 'boolean') return value;
    return value === 'true';
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold royal-gradient mb-8">P2W.FUN Features Showcase</h1>

      <Card>
        <CardHeader>
          <CardTitle>Royal Button with Effects</CardTitle>
          <CardDescription>
            Showcasing the Royal Button component with shimmer and glow effects.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Label htmlFor="shimmer">Shimmer:</Label>
              <Select value={shimmerProp} onValueChange={setShimmerProp}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="glow">Glow:</Label>
              <Select value={glowProp} onValueChange={setGlowProp}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>

              <Label htmlFor="animate">Animate:</Label>
              <Select value={animateProp} onValueChange={setAnimateProp}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">True</SelectItem>
                  <SelectItem value="false">False</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <SomeComponent
              shimmer={stringToBool(shimmerProp)}
              glow={stringToBool(glowProp)}
              animate={stringToBool(animateProp)}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Features;
