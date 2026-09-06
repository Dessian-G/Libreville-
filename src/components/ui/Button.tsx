import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost" | "onAccent";

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type ButtonElementProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

export type ButtonProps = LinkProps | ButtonElementProps;

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-contrast)] hover:bg-[var(--color-accent-hover)]",
  outline:
    "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  ghost: "text-[var(--color-text)] hover:text-[var(--color-accent)]",
  onAccent: "bg-white text-[var(--color-accent)] hover:bg-white/90",
};

const BASE_CLASSES =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-200";

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (props.href) {
    const { href, ...rest } = props as LinkProps;
    if (href.startsWith("#") || href.startsWith("http")) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonElementProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
