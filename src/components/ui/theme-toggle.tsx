
import React from "react";
import { Moon, Sun, Crown } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-transparent royal-button group">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-royal-gold hover:text-royal-gold/80" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-royal-gold hover:text-royal-gold/80" />
          <span className="sr-only">Toggle theme</span>
          <div className="absolute -inset-2 rounded-full bg-royal-gold/10 opacity-0 transition-opacity group-hover:opacity-100 group-hover:animate-pulse"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-morphism border-royal-gold/30 animate-scale-in">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer hover:bg-white/10 focus:bg-white/15">
          <Sun className="mr-2 h-4 w-4 text-royal-gold" />
          <span className="font-medieval-text">Daylight Realm</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer hover:bg-white/10 focus:bg-white/15">
          <Moon className="mr-2 h-4 w-4 text-royal-gold" />
          <span className="font-medieval-text">Night Kingdom</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer hover:bg-white/10 focus:bg-white/15">
          <Crown className="mr-2 h-4 w-4 text-royal-gold" />
          <span className="font-medieval-text">Royal Default</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
