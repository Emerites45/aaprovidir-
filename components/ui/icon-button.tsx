import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all",
  {
    variants: {
      variant: {
        // Dérivé de .hero-card-arrow
        light: "h-[42px] w-[42px] bg-white text-[color:var(--color-blue-corporate)]",
        // Dérivé de .nav-arrow
        bordered:
          "h-12 w-12 bg-white border-[1.5px] border-[color:var(--color-light-gray)] text-[color:var(--color-blue-corporate)] hover:bg-[color:var(--color-blue-corporate)] hover:text-white hover:border-[color:var(--color-blue-corporate)] disabled:opacity-35 disabled:pointer-events-none",
      },
    },
    defaultVariants: { variant: "light" },
  }
);

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label">,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
  /** Obligatoire : un bouton icône seul doit toujours être annoncé (a11y) */
  "aria-label": string;
}

/**
 * Pas de composant shadcn équivalent — celui-ci reste "maison", mais vit
 * dans le même dossier `components/ui`, avec la même convention (cva + cn).
 */
const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, icon, ...props }, ref) => (
    <button ref={ref} className={cn(iconButtonVariants({ variant, className }))} {...props}>
      {icon}
    </button>
  )
);
IconButton.displayName = "IconButton";

export { IconButton, iconButtonVariants };
