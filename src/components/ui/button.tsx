
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        royal:
          "bg-gradient-to-r from-royal-crimson via-royal-gold to-royal-navy text-white hover:opacity-90 royal-button",
        royalGold:
          "bg-gradient-to-r from-royal-gold/80 via-royal-gold to-royal-gold/80 text-background hover:opacity-90 royal-button",
        royalCrimson:
          "bg-gradient-to-r from-royal-crimson/80 via-royal-crimson to-royal-crimson/80 text-white hover:opacity-90 royal-button",
        royalNavy:
          "bg-gradient-to-r from-royal-navy/80 via-royal-navy to-royal-navy/80 text-white hover:opacity-90 royal-button",
        royalPurple:
          "bg-gradient-to-r from-royal-purple/80 via-royal-purple to-royal-purple/80 text-white hover:opacity-90 royal-button",
        royalVelvet:
          "bg-gradient-to-r from-royal-velvet/80 via-royal-purple to-royal-velvet/80 text-white hover:opacity-90 royal-button",
        glass:
          "glass-morphism border-white/10 text-white hover:bg-white/10 hover:text-white royal-button",
        goldOutline:
          "border-2 border-royal-gold/70 bg-transparent text-royal-gold hover:bg-royal-gold/10 royal-button",
        crimsonOutline:
          "border-2 border-royal-crimson/70 bg-transparent text-royal-crimson hover:bg-royal-crimson/10 royal-button",
        navyOutline:
          "border-2 border-royal-navy/70 bg-transparent text-royal-navy hover:bg-royal-navy/10 royal-button",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        xl: "h-12 rounded-md px-10 text-lg",
        xxl: "h-14 rounded-md px-12 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
