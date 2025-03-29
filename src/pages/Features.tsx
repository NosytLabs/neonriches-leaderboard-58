import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Lock, Shield, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
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
  CardHeader as ShadCardHeader,
  CardFooter as ShadCardFooter,
  CardTitle as ShadCardTitle,
  CardDescription as ShadCardDescription,
  CardContent as ShadCardContent,
} from "@/components/ui/card"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

interface FeatureItem {
  name: string;
  description: string;
  isAvailable: boolean;
}

const FeaturesSection: React.FC<{ features: FeatureItem[] }> = ({ features }) => (
  <ul className="space-y-3">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start">
        {feature.isAvailable ? (
          <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" />
        ) : (
          <Lock className="h-5 w-5 mr-2 text-gray-400 flex-shrink-0" />
        )}
        <div>
          <h4 className="font-semibold">{feature.name}</h4>
          <p className="text-sm text-gray-500">{feature.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

const FeaturesPage: React.FC = () => {
  const freeFeatures: FeatureItem[] = [
    { name: "Basic Profile", description: "Create a profile to showcase your digital identity.", isAvailable: true },
    { name: "View Leaderboard", description: "See the top spenders in the community.", isAvailable: true },
    { name: "Join a Team", description: "Align with a team and compete for recognition.", isAvailable: true },
  ];

  const premiumFeatures: FeatureItem[] = [
    { name: "Enhanced Profile", description: "Add more details and customization to your profile.", isAvailable: false },
    { name: "Profile Boosts", description: "Increase your profile visibility.", isAvailable: false },
    { name: "Exclusive Cosmetics", description: "Access special cosmetic items.", isAvailable: false },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Features</h1>

      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Free Features</h3>
            <FeaturesSection features={freeFeatures} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Premium Features</h3>
            <FeaturesSection features={premiumFeatures} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default FeaturesPage;
