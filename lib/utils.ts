import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitaire standard shadcn/ui : fusionne des classNames conditionnels
 * ET résout les conflits de classes Tailwind (ex: "px-2" + "px-4" -> "px-4").
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
