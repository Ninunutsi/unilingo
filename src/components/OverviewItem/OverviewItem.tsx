import type { ReactNode } from "react";
import styles from "./overviewite.module.css";

const OverviewItem = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
};

export default OverviewItem;
