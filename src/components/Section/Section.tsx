import { type ReactElement, type CSSProperties } from "react";
import styles from "./section.module.css";

interface SectionProps {
  children: ReactElement;
  className?: string;
  style?: CSSProperties;
}

const Section = ({ children, className, style }: SectionProps) => {
  return (
    <div className={`${styles.section} ${className ?? ""}`} style={style}>
      {children}
    </div>
  );
};

export default Section;
