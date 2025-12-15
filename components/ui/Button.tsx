"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost" | "outline" | "white" | "outline-light";
type ButtonSize = "default" | "large" | "full";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

// Swiss Design - Clean, minimal button styles
// Using !important (!) to ensure text colors cannot be overridden by global styles
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary !text-white border-primary hover:bg-primary-dark active:scale-[0.98]",
  ghost:
    "bg-transparent !text-primary border-primary hover:bg-primary hover:!text-white active:scale-[0.98]",
  outline:
    "bg-transparent !text-primary border-primary hover:bg-primary/5 active:scale-[0.98]",
  white:
    "bg-white !text-primary border-white hover:bg-background-off active:scale-[0.98]",
  "outline-light":
    "bg-transparent !text-white border-white hover:bg-white hover:!text-primary active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "py-2.5 px-5 text-small",
  large: "py-3 px-6 text-small",
  full: "py-2.5 px-5 text-small w-full",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { variant = "primary", size = "default", className, children, ...rest } = props;

    // Swiss Design: Clean, minimal with rounded corners
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-sans font-medium uppercase tracking-[0.05em]",
      "border cursor-pointer rounded-lg",
      "transition-colors duration-150",
      "whitespace-nowrap",
      "[&_svg]:w-4 [&_svg]:h-4 [&_svg]:transition-transform [&_svg]:duration-150 [&_svg]:flex-shrink-0",
      "hover:[&_svg]:translate-x-0.5",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (props.as === "a") {
      const { as, ...linkProps } = rest as Omit<ButtonAsLink, keyof ButtonBaseProps>;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseStyles}
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        suppressHydrationWarning={true}
        {...buttonProps}
      >
        <span suppressHydrationWarning={true}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

