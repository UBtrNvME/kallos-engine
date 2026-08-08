import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sharp border px-2.5 py-0.5 text-xs font-mono font-semibold transition-colors normal-case focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-accent)] text-[#09090B] border-[#09090B] font-bold",
        primary:
          "bg-[var(--color-primary)] text-[var(--color-primary-text)] border-transparent",
        secondary:
          "bg-transparent text-[var(--color-secondary)] border-[var(--color-secondary)]",
        outline:
          "bg-transparent text-foreground border-border",
        success:
          "bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/30",
        warning:
          "bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/30",
        destructive:
          "bg-[var(--color-error)]/10 text-[var(--color-error)] border-[var(--color-error)]/30",
        info:
          "bg-[var(--color-info)]/10 text-[var(--color-info)] border-[var(--color-info)]/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
