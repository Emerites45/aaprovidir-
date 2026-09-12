import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        // Variantes shadcn standard
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground border border-[color:var(--color-light-gray)] bg-white",

        // Variante Aaprovidir — dérivée de .hero-card-tag / .faq-tag
        glass: "bg-white/15 border border-white/35 backdrop-blur-sm text-white",
      },
    },
    defaultVariants: { variant: "glass" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
