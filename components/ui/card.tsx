import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("relative overflow-hidden rounded-xl transition-shadow", {
  variants: {
    tone: {
      light: "bg-white text-[color:var(--color-dark-gray)]",
      muted: "bg-[color:var(--card-light)] text-[color:var(--color-dark-gray)]",
      dark: "bg-[color:var(--card-dark)] text-white",
      glass: "bg-white/15 border border-white/30 backdrop-blur-lg text-white",
    },
    elevated: {
      true: "shadow-[0_4px_14px_rgba(13,44,84,0.06)] hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(13,44,84,0.12)]",
      false: "",
    },
  },
  defaultVariants: { tone: "light", elevated: false },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** Image de fond (next/image, fill + cover) — reproduit .hero-card / .accordion-item */
  image?: string;
  imageAlt?: string;
  /** true = image critique pour le LCP (ex: 1ère card du hero) */
  imagePriority?: boolean;
  /** Reflet animé — reproduit .hero-card::after (voir .shine-effect dans globals.css) */
  shine?: boolean;
  /** Dégradé de lisibilité sur image — reproduit .hero-card::before */
  overlay?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, tone, elevated, image, imageAlt = "", imagePriority, shine, overlay, children, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ tone: image ? undefined : tone, elevated, className }),
        shine && "shine-effect",
        image && "text-white"
      )}
      {...props}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={imagePriority}
        />
      ) : null}
      {overlay ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(100deg,#07796b_10%,rgba(255,255,255,0)_45%)]"
        />
      ) : null}
      <div className="relative z-[2] flex h-full flex-col justify-between">{children}</div>
    </div>
  )
);
Card.displayName = "Card";

// Sous-composants shadcn standard, gardés tels quels — utiles pour de futurs
// écrans plus "applicatifs" (fiches produit, formulaires, back-office...).
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm opacity-80", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
