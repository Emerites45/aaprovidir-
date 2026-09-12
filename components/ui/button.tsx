import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Variantes shadcn standard — conservées pour de futurs écrans neutres
        // (formulaires, back-office...) où l'identité Aaprovidir n'est pas requise.
        default: "bg-primary text-primary-foreground rounded-md shadow hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground rounded-md shadow-sm hover:bg-secondary/80",
        outline: "border border-input bg-background rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "bg-destructive text-destructive-foreground rounded-md shadow-sm hover:bg-destructive/90",

        // Variantes Aaprovidir — dérivées de la maquette d'origine
        primary:
          "bg-white text-[color:var(--color-blue-corporate)] rounded-[10px] hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]",
        accent:
          "bg-[color:var(--color-yellow-action)] text-[color:var(--color-blue-corporate)] rounded-[10px] hover:bg-[#d4af55]",
        pill:
          "bg-[#07796b] text-white border border-[#30a036] rounded-full hover:bg-[#2e7d32] hover:-translate-y-0.5",
        "outline-light":
          "bg-transparent text-white border-[1.5px] border-white rounded-full hover:bg-white hover:text-[color:var(--color-blue-corporate)]",
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "h-[52px] px-[30px] text-base rounded-[10px]",
        xl: "h-14 px-8 text-base",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Rend le style sur l'enfant direct (ex: <Link>) au lieu d'un <button>.
   * Remplace l'ancien composant séparé "ButtonLink" :
   *   <Button asChild variant="pill"><Link href="/nos-solutions">...</Link></Button>
   */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
