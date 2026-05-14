import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function GlowButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: GlowButtonProps) {
  const targetProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : undefined;

  return (
    <a
      href={href}
      className={`glow-button ${variant} ${className}`}
      {...targetProps}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}
