import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-tactical text-sm font-mono font-medium normal-case transition-all duration-150 cursor-pointer min-h-[44px] min-w-[44px] px-5 py-2.5 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus-ring)] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90 border-0",
        secondary:
          "bg-transparent text-[var(--color-secondary)] border border-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10",
        outline:
          "bg-transparent text-foreground border border-border hover:border-[var(--color-primary)] hover:bg-card",
        ghost:
          "bg-transparent text-foreground hover:bg-card hover:text-[var(--color-primary)] border-0",
        accent:
          "bg-[var(--color-accent)] text-[#09090B] font-bold border border-[#09090B] hover:opacity-90",
        destructive:
          "bg-[var(--color-error)] text-white border-0 hover:opacity-90",
        success:
          "bg-[var(--color-success)] text-white border-0 hover:opacity-90",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm",
        sm: "h-9 px-3.5 text-xs min-h-[44px]",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11 p-0 min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
