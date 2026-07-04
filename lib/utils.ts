import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes without conflicts.
 *
 * Example:
 * cn("px-4", isActive && "bg-black")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}