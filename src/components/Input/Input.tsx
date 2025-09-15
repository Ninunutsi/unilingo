import React from "react";

type InputProps = {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  autoComplete?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  className = "",
  autoComplete = "off",
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      required={required}
      autoComplete={autoComplete}
      className={`${className}`}
    />
  );
};

export default Input;
