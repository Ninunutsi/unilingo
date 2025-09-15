import React from "react";
import styles from "./skeleton.module.css";

export type SkeletonVariant = "text" | "rect" | "circle";

export interface SkeletonLoaderProps {
  width?: number | string;
  height?: number | string;
  variant?: SkeletonVariant;
  borderRadius?: string;
  animationDuration?: number;
  style?: React.CSSProperties;
  className?: string;
  ariaLabel?: string;
}

const toCssSize = (v?: number | string) => {
  if (v === undefined) return undefined;
  return typeof v === "number" ? `${v}px` : v;
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width,
  height,
  variant = "rect",
  borderRadius,
  animationDuration = 1.6,
  style,
  className,
  ariaLabel = "loading",
}) => {
  const cssWidth = toCssSize(width);
  const cssHeight = toCssSize(height);

  const computedStyle: React.CSSProperties = {
    width: cssWidth,
    height: cssHeight,
    borderRadius:
      variant === "circle"
        ? "50%"
        : borderRadius ?? (variant === "text" ? "4px" : "8px"),
    ...style,
    ["--sk-duration" as any]: `${animationDuration}s`,
  };

  const classes =
    [styles.skeleton, styles[variant]].filter(Boolean).join(" ") +
    (className ? ` ${className}` : "");

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={classes}
      style={computedStyle}
    />
  );
};

export default SkeletonLoader;
