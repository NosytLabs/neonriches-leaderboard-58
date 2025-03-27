
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
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
        <Button variant="ghost" size="icon" className="relative hover:bg-transparent">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-royal-gold hover:text-royal-gold/80" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-royal-gold hover:text-royal-gold/80" />
          <span className="sr-only">Toggle theme</span>
          <div className="absolute -inset-2 rounded-full bg-royal-gold/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-morphism border-royal-gold/20">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer hover:bg-white/10">
          <Sun className="mr-2 h-4 w-4 text-royal-gold" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer hover:bg-white/10">
          <Moon className="mr-2 h-4 w-4 text-royal-gold" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer hover:bg-white/10">
          <span className="mr-2 h-4 w-4 flex items-center justify-center">
            <span className="text-royal-gold text-xs">⚙️</span>
          </span>
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
