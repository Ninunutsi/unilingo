import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={`${styles.button} ${className || ""}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
