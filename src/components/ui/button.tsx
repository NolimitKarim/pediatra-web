import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-elegant hover:shadow-soft transition-smooth",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-elegant",
        outline:
          "border border-border bg-background hover:bg-accent/10 hover:text-accent-foreground shadow-elegant hover:shadow-soft transition-smooth",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-elegant hover:shadow-soft transition-smooth",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground transition-smooth",
        link: "text-primary underline-offset-4 hover:underline transition-smooth",
        hero: "hero-gradient text-primary-foreground font-display font-semibold shadow-medium hover:shadow-strong transition-bounce hover:-translate-y-1 hover:scale-105",
        appointment: "bg-accent text-accent-foreground font-display font-semibold shadow-soft hover:shadow-medium hover:bg-accent-light transition-smooth hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
