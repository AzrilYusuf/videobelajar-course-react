import React from "react";
import { InputProps } from "../../interfaces/component.interface";

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  inputMode,
  className,
  style,
  placeholder,
  checked,
  value,
  handleChange,
  isRequired
}) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      inputMode={inputMode}
      className={className}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      checked={checked}
      required={isRequired}
    />
  );
};

export default Input;
