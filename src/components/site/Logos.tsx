import logoCis from "@/assets/profile/logo-cis.png";
import logoNehan from "@/assets/profile/logo-nehan.png";
import { cn } from "@/lib/utils";

export function DualLogo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "sm" ? "h-9" : size === "lg" ? "h-20" : "h-11";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <img src={logoCis} alt="Crescent Industrial Services logo" className={cn(h, "w-auto")} />
      <span className="h-8 w-px bg-border" aria-hidden />
      <img src={logoNehan} alt="Nehan Enterprises logo" className={cn(h, "w-auto")} />
    </span>
  );
}

export { logoCis, logoNehan };
