import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl",
      h2: "text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl",
      h3: "text-2xl font-semibold leading-tight tracking-tight md:text-3xl lg:text-4xl",
      h4: "text-xl font-semibold leading-tight tracking-tight md:text-2xl",
      h5: "text-lg font-semibold leading-tight tracking-tight md:text-xl",
      h6: "text-base font-semibold leading-tight tracking-tight md:text-lg",
      body: "text-sm leading-relaxed",
      bodyLarge: "text-lg leading-relaxed",
      bodySmall: "text-sm leading-relaxed",
      caption: "text-xs leading-relaxed",
      overline: "text-xs uppercase tracking-wide leading-normal",
      subtitle1: "text-base font-medium leading-relaxed",
      subtitle2: "text-sm font-medium leading-relaxed",
      title:
        "text-7xl font-black leading-tight tracking-tight relative inline-block bg-[url('../assets/images/common/img-cracked.jpg')] bg-repeat bg-cover bg-clip-text text-transparent mix-blend-multiply lgMax:text-5xl mdMax:text-4xl smMax:text-3xl grunge-text",
    },
    color: {
      default: "text-secondary",
      primary: "text-primary",
      white: "text-white",
      tertiary: "text-tertiary",
    },
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    fontFamily: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
      anton: "font-[var(--font-anton)]",
      manrope: "font-[var(--font-manrope)]",
    },
  },
  defaultVariants: {
    variant: "body",
    color: "default",
    fontFamily: "manrope",
  },
});

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  /**
   * The HTML element to render
   * @default Determined by variant
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div" | "label";
  /**
   * Typography variant
   */
  variant?: VariantProps<typeof typographyVariants>["variant"];
  /**
   * Text color using global color variables
   */
  color?: VariantProps<typeof typographyVariants>["color"];
  /**
   * Font weight
   */
  fontWeight?: VariantProps<typeof typographyVariants>["fontWeight"];
  /**
   * Font size
   */
  fontSize?: VariantProps<typeof typographyVariants>["fontSize"];
  /**
   * Font family
   */
  fontFamily?: VariantProps<typeof typographyVariants>["fontFamily"];
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Content to render
   */
  children: React.ReactNode;
}

/**
 * Typography component for consistent text styling across the application
 * Uses global color variables defined in globals.css
 *
 * @example
 * <Typography variant="h1" color="primary">Hello World</Typography>
 * <Typography variant="body" color="gray" fontWeight="medium">Description text</Typography>
 * <Typography as="span" fontSize="lg" color="error">Error message</Typography>
 */
const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      as,
      variant = "body",
      color,
      fontWeight,
      fontSize,
      fontFamily,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element based on variant or 'as' prop
    const getElement = () => {
      if (as) return as;

      switch (variant) {
        case "h1":
          return "h1";
        case "h2":
          return "h2";
        case "h3":
          return "h3";
        case "h4":
          return "h4";
        case "h5":
          return "h5";
        case "h6":
          return "h6";
        case "caption":
        case "overline":
          return "span";
        default:
          return "p";
      }
    };

    const Component = getElement();

    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          typographyVariants({
            variant,
            color,
            fontWeight,
            fontSize,
            fontFamily,
          }),
          className
        ),
        ...props,
      },
      children
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
